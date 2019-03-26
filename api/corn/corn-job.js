'use strict';
module.exports = function (express, app, socket) {
    var app = app;
    var router = app;
    var Config = require('../Config/config.js');
    var Socket;
    var moment = require('moment');
    var io = socket;
    var sk_test_ = Config.StripeKey;
    var fs = require('fs');
    var emailTemplate = require("../Models/emailtemplates.js");
    var eventEmailSchedule = require("../Models/eventEmailSchedule.js");
    var attendees = require("../Models/attendees.js");
    var ticketAdmin = require("../Models/ticketAdmin.js");
    var Handlebars = require('handlebars');
    var pdf = require('html-pdf');
    // var stripe = require('stripe')(sk_test_);
    // stripe.setApiVersion('2018-02-06');
    // Controllers 
    var eventController = require('../Controllers/eventController.js')
    var ticketController = require('../Controllers/ticketController.js')
    var usersController = require('../Controllers/usersController.js')
    var authController = require('../Controllers/authController.js')

    var EventController = new eventController();
    var TicketController = new ticketController();
    var usersController = new usersController();
    var authController = new authController();
    // var moment = require('moment-timezone');
    var number = 0;
    // Models
    var buyer = require("../Models/buyer.js")
    var event = require("../Models/event");
    var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');
    // var transporter = nodemailer.createTransport(
    //     smtpTransport('smtp://' + Config.SMTP.auth.user + ':' + Config.SMTP.auth.pass + '@' + Config.SMTP.host)
    // );
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Config.SMTP.auth.user,
            pass: Config.SMTP.auth.pass
        }
    });
    var moment = require('moment');
    var cron = require('node-cron');

    console.log("Config evnironment ===>", Config.host)
    var schedulePayout = cron.schedule('*/50 * * * * *', function () {
        // db.reservations.find({ dateTime: { '$gte': new Date("Tue, 31 Mar 2015 02:30:00 GMT"), '$lte': new Date("Tue, 31 Mar 2015 03:30:00 GMT") }, minParty: { '$lte': 2 }, maxParty: { '$gte': 2 }, _user: { '$exists': false } })
        // console.log('schedule payout running every minut from last', number++, "minutes");
        // console.log("Possible todays payout date shuld be event start date of ", moment(today).add(42, 'day'))
        var today = moment();
        var tomorrow = moment(today).add(1, 'day');
        console.log("todatys payours will be run based on ticket admin payouts scheduleData==>", tomorrow)
        event.find({
            ticketAdminPayoutScheduledDate: {
                '$gte': today,
                '$lte': tomorrow
            },
            isAdvancePayoutDone: false
        }).exec((err, EventsData) => {
            if (err) {
                console.log('err', err)
            } else if (EventsData) {
                for (let i = 0; i < EventsData.length; i++) {
                    console.log("result", EventsData[i].cityTitle)
                    var eventValue = EventsData[i];
                    if (EventsData[i].isAdvancePayoutDone) {
                        console.log("Advance Pay already done on", eventValue.cityTitle)
                    } else {
                        if (EventsData[i].ticketAdminRevenue > 0) {
                            console.log("ticketAdminRevenue", eventValue.ticketAdminRevenue)
                            ticketAdmin.findById(eventValue.eventAdmin_id).exec((err, ticketAdminData) => {
                                console.log("ticket addmin err", err)
                                if (err) {
                                    console.log(eventValue.eventAdmin_id, "=====> ticket admin not found")
                                } else {
                                    if (ticketAdminData.isScheudlePayout) {
                                        var stripe = require("stripe")(ticketAdminData.secretKey);
                                        var payoutAmount = (eventValue.ticketAdminRevenue);
                                        var AdvancePay = (((payoutAmount / 100) * 30).toFixed(2)) * 100
                                        // console.log("payoutAmount============================>==>", payoutAmount);
                                        // console.log("AdvancePay============================>==>", AdvancePay);
                                        stripe.payouts.create({
                                            amount: AdvancePay,
                                            currency: eventValue.currency
                                        }, function (err, payout) {
                                            console.log("shuddle payout err==>", err)
                                            console.log("shuddle payout err==>", payout)
                                            if (payout != null) {
                                                event.update({
                                                    _id: eventValue.id
                                                }, {
                                                    isAdvancePayoutDone: true,
                                                    AdvancePayoutValueCents: AdvancePay
                                                }).exec(function (err, PayoutResult) {
                                                    // var log = require("../Models/log.js")
                                                    // log.save(PayoutResult)
                                                    console.log("************shudle Payout done for", eventValue.id)
                                                })
                                            } else {
                                                console.log("shuddle payout err==>", err)
                                            }
                                            // asynchronously called
                                        });
                                    } else {
                                        console.log("advance payout disable to ", ticketAdmin.firstName)
                                    }

                                }
                            })

                        } else {
                            console.log("This event don't have saficatin balance to pay")
                        }
                    }

                }
            } else {
                console.log('EventsData not found')
            }

        })
    });
    // task.stop();
    var mail = cron.schedule('*/60 * * * * * ', () => {
        var templateName = "invitation"
        emailTemplate.find({
            template_name: templateName
        }).exec(function (err, template) {
            if (err) {
                console.log("err")
            } else if (template) {
                // console.log("template", template[0].emailBody)
                var nodemailer = require('nodemailer');
                var smtpTransport = require('nodemailer-smtp-transport');
                // var transporter = nodemailer.createTransport(
                //     smtpTransport('smtp://' + 'techteamsdn@gmail.com' + ':' + 'tech@sdn' + '@' + 'smtp.gmail.com')
                // );
                var mailOptions = {
                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                    to: 'anilkumar@yopmail.com', // list of receivers
                    subject: 'You are Tickets are Conformed', // Subject line
                    text: 'You are Tickets are Conformed', // plaintext body
                    html: template[0].emailBody
                }
                transporter.sendMail(mailOptions);
            } else {
                console.log("other")
            }
        })
    })
    // mail.start();
    var mailReminderTen = cron.schedule('0 5 0 */1 * *', () => {
        console.log('Mail Reminder running every minut from last', number++, "minutes");
        var today = moment();
        var tomorrow = moment(today).add(1, 'day');
        event.find({
            mailReminderTen: {
                '$gte': today,
                '$lte': tomorrow
            },
            isEventCompleted: false
        }).populate({
            path: 'equipmentPdf',
            select: 'key'
        }).populate({
            path: 'notesPdf',
            select: 'key'
        }).populate({
            path: 'altEquipmentPdf',
            select: 'key'
        }).populate({
            path: 'altNotesPdf',
            select: 'key'
        }).exec((err, EventsData) => {
            for (var i = 0; i < EventsData.length;) {
                console.log(`Event looping ${i} of total ${EventsData.length}`)
                let EventInfo = EventsData[i]
                attendees.find({
                    event_id: EventInfo._id
                }).exec((err, attendeeInfo) => {
                    if (err) {} else if (attendeeInfo) {
                        let equipmentPdf = './pdf/' + EventInfo.equipmentPdf.key.split('.')[0];
                        // let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                        let notesPdf = './pdf/' + EventInfo.notesPdf.key.split('.')[0];
                        // let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];;


                        if (EventInfo.altEquipmentPdf && EventInfo.altNotesPdf) {
                            let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                            let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(altEquipmentPdf, (err, altEquipmentPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(notesPdf, (err, notesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                fs.readFile(altNotesPdf, (err, altNotesPdf) => {
                                                    if (err) {
                                                        console.log('err', err)
                                                    } else {

                                                        emailTemplate.findOne({
                                                            template_name: "schudle_email_attendee"
                                                        }).exec((err, attendeesTemplate) => {

                                                            for (var j = 0; j < attendeeInfo.length; j++) {
                                                                console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)
                                                                let recipient = attendeeInfo[j].emailId;
                                                                // let template_compile = Handlebars.compile(template[0].emailBody);
                                                                let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                                // let data = {
                                                                //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                                //     City: EventInfo.city,
                                                                //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                                //     VenueName: EventInfo.venue_name,
                                                                //     Address1: EventInfo.address1,
                                                                //     State: EventInfo.state,
                                                                //     Country: EventInfo.country_code,
                                                                // }
                                                                // let email_body = template_compile(data);
                                                                let attendees_email_body = attendees_compile({
                                                                    eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                                    attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                                    eventLocation: EventInfo.venue_name,
                                                                    eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                                    attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                                });
                                                                let mailOptions = {
                                                                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                                    to: recipient,
                                                                    // to: 'harshulsdn@gmail.com',
                                                                    subject: 'Progressing Ballet Technique, ' + EventInfo.cityTitle + ' Reminder',
                                                                    text: 'Progressing Ballet Technique text',
                                                                    html: attendees_email_body,
                                                                    attachments: [{
                                                                            //     filename: 'workshop_ticket.pdf',
                                                                            //     content: emailElementFile
                                                                            // },
                                                                            // {
                                                                            filename: 'equipment.pdf',
                                                                            content: equipmentPdf
                                                                        },
                                                                        {
                                                                            filename: 'alt-language-equipment.pdf',
                                                                            content: altEquipmentPdf
                                                                        },
                                                                        {
                                                                            filename: 'notes.pdf',
                                                                            content: notesPdf
                                                                        },
                                                                        {
                                                                            filename: 'alt-language-notes.pdf',
                                                                            content: altNotesPdf
                                                                        }
                                                                    ]
                                                                }
                                                                transporter.sendMail(mailOptions, function (err, info) {
                                                                    if (err) {
                                                                        console.log('mail error', err)

                                                                    } else if (info) {
                                                                        console.log('event', i, j, 'Done')
                                                                        // fs.unlink(pdfFileName, function (err) {
                                                                        //     if (err) {
                                                                        //         console.log('err', err)

                                                                        //     } else {}
                                                                        // })
                                                                    } else {
                                                                        console.log('could not open the file')
                                                                    }
                                                                })
                                                                // console.log(`Event looping ${i}`)
                                                                // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                                // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {

                                                                //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                                //             if (err) {
                                                                //                 console.log('err', err)

                                                                //             } else if (emailElementFile) {


                                                                //             } else {
                                                                //                 console.log('could not open the file')
                                                                //             }
                                                                //         })
                                                                //     }
                                                                // });
                                                            }
                                                        });

                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        } else if (EventInfo.altEquipmentPdf && !EventInfo.altNotesPdf) {
                            let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(altEquipmentPdf, (err, altEquipmentPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(notesPdf, (err, notesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                emailTemplate.findOne({
                                                    template_name: "schudle_email_attendee"
                                                }).exec((err, attendeesTemplate) => {
                                                    for (var j = 0; j < attendeeInfo.length; j++) {
                                                        console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                        let recipient = attendeeInfo[j].emailId;
                                                        // let template_compile = Handlebars.compile(template[0].emailBody);
                                                        let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                        // let data = {
                                                        //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                        //     City: EventInfo.city,
                                                        //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                        //     VenueName: EventInfo.venue_name,
                                                        //     Address1: EventInfo.address1,
                                                        //     State: EventInfo.state,
                                                        //     Country: EventInfo.country_code,
                                                        // }
                                                        // let email_body = template_compile(data);
                                                        let attendees_email_body = attendees_compile({
                                                            eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                            attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                            eventLocation: EventInfo.venue_name,
                                                            eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                            attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                        });
                                                        let mailOptions = {
                                                            from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                            to: recipient,
                                                            // to: 'harshulsdn@gmail.com',
                                                            subject: 'Progressing Ballet Technique, ' + EventInfo.cityTitle + ' Reminder',
                                                            text: 'Progressing Ballet Technique text',
                                                            html: attendees_email_body,
                                                            attachments: [{
                                                                    //     filename: 'workshop_ticket.pdf',
                                                                    //     content: emailElementFile
                                                                    // },
                                                                    // {
                                                                    filename: 'equipment.pdf',
                                                                    content: equipmentPdf
                                                                },
                                                                {
                                                                    filename: 'alt-language-equipment.pdf',
                                                                    content: altEquipmentPdf
                                                                },
                                                                {
                                                                    filename: 'notes.pdf',
                                                                    content: notesPdf
                                                                }
                                                            ]
                                                        }
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                            if (err) {
                                                                console.log('mail error', err)

                                                            } else if (info) {
                                                                console.log('event', i, j, 'Done')
                                                                // fs.unlink(pdfFileName, function (err) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {}
                                                                // })
                                                            } else {
                                                                console.log('could not open the file')
                                                            }
                                                        })
                                                        // console.log(`Event looping ${i}`)
                                                        // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                        // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {

                                                        //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                        //             if (err) {
                                                        //                 console.log('err', err)

                                                        //             } else if (emailElementFile) {


                                                        //             } else {
                                                        //                 console.log('could not open the file')
                                                        //             }
                                                        //         })
                                                        //     }
                                                        // });
                                                    }
                                                });


                                            }
                                        });
                                    }
                                });
                            });
                        } else if (!EventInfo.altEquipmentPdf && EventInfo.altNotesPdf) {
                            let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(notesPdf, (err, notesPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(altNotesPdf, (err, altNotesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                emailTemplate.findOne({
                                                    template_name: "schudle_email_attendee"
                                                }).exec((err, attendeesTemplate) => {
                                                    for (var j = 0; j < attendeeInfo.length; j++) {
                                                        console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                        let recipient = attendeeInfo[j].emailId;
                                                        // let template_compile = Handlebars.compile(template[0].emailBody);
                                                        let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                        // let data = {
                                                        //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                        //     City: EventInfo.city,
                                                        //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                        //     VenueName: EventInfo.venue_name,
                                                        //     Address1: EventInfo.address1,
                                                        //     State: EventInfo.state,
                                                        //     Country: EventInfo.country_code,
                                                        // }
                                                        // let email_body = template_compile(data);
                                                        let attendees_email_body = attendees_compile({
                                                            eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                            attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                            eventLocation: EventInfo.venue_name,
                                                            eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                            attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                        });
                                                        let mailOptions = {
                                                            from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                            to: recipient,
                                                            // to: 'harshulsdn@gmail.com',
                                                            subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                            text: 'Progressing Ballet Technique text',
                                                            html: attendees_email_body,
                                                            attachments: [{
                                                                    //     filename: 'workshop_ticket.pdf',
                                                                    //     content: emailElementFile
                                                                    // },
                                                                    // {
                                                                    filename: 'equipment.pdf',
                                                                    content: equipmentPdf
                                                                },
                                                                {
                                                                    filename: 'notes.pdf',
                                                                    content: notesPdf
                                                                }, {
                                                                    filename: 'alt-notes.pdf',
                                                                    content: altNotesPdf
                                                                }
                                                            ]
                                                        }
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                            if (err) {
                                                                console.log('mail error', err)

                                                            } else if (info) {
                                                                console.log('event', i, j, 'Done')
                                                                // fs.unlink(pdfFileName, function (err) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {}
                                                                // })
                                                            } else {
                                                                console.log('could not open the file')
                                                            }
                                                        })
                                                        // console.log(`Event looping ${i}`)
                                                        // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                        // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {

                                                        //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                        //             if (err) {
                                                        //                 console.log('err', err)

                                                        //             } else if (emailElementFile) {


                                                        //             } else {
                                                        //                 console.log('could not open the file')
                                                        //             }
                                                        //         })
                                                        //     }
                                                        // });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        } else if (!EventInfo.altEquipmentPdf && !EventInfo.altNotesPdf) {
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(notesPdf, (err, notesPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        emailTemplate.findOne({
                                            template_name: "schudle_email_attendee"
                                        }).exec((err, attendeesTemplate) => {
                                            for (var j = 0; j < attendeeInfo.length; j++) {
                                                console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                let recipient = attendeeInfo[j].emailId;
                                                // let template_compile = Handlebars.compile(template[0].emailBody);
                                                let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                // let data = {
                                                //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                //     City: EventInfo.city,
                                                //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                //     VenueName: EventInfo.venue_name,
                                                //     Address1: EventInfo.address1,
                                                //     State: EventInfo.state,
                                                //     Country: EventInfo.country_code,
                                                // }
                                                // let email_body = template_compile(data);
                                                let attendees_email_body = attendees_compile({
                                                    eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                    attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                    eventLocation: EventInfo.venue_name,
                                                    eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                    attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                });
                                                let mailOptions = {
                                                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                    to: recipient,
                                                    // to: 'harshulsdn@gmail.com',
                                                    subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                    text: 'Progressing Ballet Technique text',
                                                    html: attendees_email_body,
                                                    attachments: [{
                                                            //     filename: 'workshop_ticket.pdf',
                                                            //     content: emailElementFile
                                                            // },
                                                            // {
                                                            filename: 'equipment.pdf',
                                                            content: equipmentPdf
                                                        },
                                                        {
                                                            filename: 'notes.pdf',
                                                            content: notesPdf
                                                        }
                                                    ]
                                                }
                                                transporter.sendMail(mailOptions, function (err, info) {
                                                    if (err) {
                                                        console.log('mail error', err)

                                                    } else if (info) {
                                                        console.log('event', i, j, 'Done')
                                                        // fs.unlink(pdfFileName, function (err) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {}
                                                        // })
                                                    } else {
                                                        console.log('could not open the file')
                                                    }
                                                })
                                                // console.log(`Event looping ${i}`)
                                                // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                //     if (err) {
                                                //         console.log('err', err)

                                                //     } else {

                                                //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                //             if (err) {
                                                //                 console.log('err', err)

                                                //             } else if (emailElementFile) {


                                                //             } else {
                                                //                 console.log('could not open the file')
                                                //             }
                                                //         })
                                                //     }
                                                // });
                                            }
                                        });


                                    }
                                });

                            });
                        }
                    } else {
                        console.log('Could not process further')
                    }
                });
                i++
            }
        })
    })

    var mailReminderFive = cron.schedule('0 5 1 */1 * *', () => {
        console.log('Mail Reminder running every minut from last', number++, "minutes");
        var today = moment();
        var tomorrow = moment(today).add(1, 'day');
        event.find({
            mailReminderFive: {
                '$gte': today,
                '$lte': tomorrow
            },
            isEventCompleted: false
        }).populate({
            path: 'equipmentPdf',
            select: 'key'
        }).populate({
            path: 'notesPdf',
            select: 'key'
        }).populate({
            path: 'altEquipmentPdf',
            select: 'key'
        }).populate({
            path: 'altNotesPdf',
            select: 'key'
        }).exec((err, EventsData) => {
            for (var i = 0; i < EventsData.length;) {
                console.log(`Event looping ${i} of total ${EventsData.length}`)
                let EventInfo = EventsData[i]
                attendees.find({
                    event_id: EventInfo._id
                }).exec((err, attendeeInfo) => {
                    if (err) {

                    } else if (attendeeInfo) {
                        let equipmentPdf = './pdf/' + EventInfo.equipmentPdf.key.split('.')[0];
                        // let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                        let notesPdf = './pdf/' + EventInfo.notesPdf.key.split('.')[0];
                        // let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];
                        if (EventInfo.altEquipmentPdf && EventInfo.altNotesPdf) {
                            let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                            let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(altEquipmentPdf, (err, altEquipmentPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(notesPdf, (err, notesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                fs.readFile(altNotesPdf, (err, altNotesPdf) => {
                                                    if (err) {
                                                        console.log('err', err)
                                                    } else {

                                                        emailTemplate.findOne({
                                                            template_name: "schudle_email_attendee"
                                                        }).exec((err, attendeesTemplate) => {

                                                            for (var j = 0; j < attendeeInfo.length; j++) {
                                                                console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)
                                                                let recipient = attendeeInfo[j].emailId;
                                                                // let template_compile = Handlebars.compile(template[0].emailBody);
                                                                let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                                // let data = {
                                                                //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                                //     City: EventInfo.city,
                                                                //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                                //     VenueName: EventInfo.venue_name,
                                                                //     Address1: EventInfo.address1,
                                                                //     State: EventInfo.state,
                                                                //     Country: EventInfo.country_code,
                                                                // }
                                                                // let email_body = template_compile(data);
                                                                let attendees_email_body = attendees_compile({
                                                                    eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                                    attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                                    eventLocation: EventInfo.venue_name,
                                                                    eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                                    attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                                });
                                                                let mailOptions = {
                                                                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                                    to: recipient,
                                                                    // to: 'harshulsdn@gmail.com',
                                                                    subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                                    text: 'Progressing Ballet Technique text',
                                                                    html: attendees_email_body,
                                                                    attachments: [{
                                                                            //     filename: 'workshop_ticket.pdf',
                                                                            //     content: emailElementFile
                                                                            // },
                                                                            // {
                                                                            filename: 'equipment.pdf',
                                                                            content: equipmentPdf
                                                                        },
                                                                        {
                                                                            filename: 'alt-language-equipment.pdf',
                                                                            content: altEquipmentPdf
                                                                        },
                                                                        {
                                                                            filename: 'notes.pdf',
                                                                            content: notesPdf
                                                                        },
                                                                        {
                                                                            filename: 'alt-language-notes.pdf',
                                                                            content: altNotesPdf
                                                                        }
                                                                    ]
                                                                }
                                                                transporter.sendMail(mailOptions, function (err, info) {
                                                                    if (err) {
                                                                        console.log('mail error', err)

                                                                    } else if (info) {
                                                                        console.log('event', i, j, 'Done')
                                                                        // fs.unlink(pdfFileName, function (err) {
                                                                        //     if (err) {
                                                                        //         console.log('err', err)

                                                                        //     } else {}
                                                                        // })
                                                                    } else {
                                                                        console.log('could not open the file')
                                                                    }
                                                                })
                                                                // console.log(`Event looping ${i}`)
                                                                // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                                // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {

                                                                //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                                //             if (err) {
                                                                //                 console.log('err', err)

                                                                //             } else if (emailElementFile) {


                                                                //             } else {
                                                                //                 console.log('could not open the file')
                                                                //             }
                                                                //         })
                                                                //     }
                                                                // });
                                                            }
                                                        });

                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        } else if (EventInfo.altEquipmentPdf && !EventInfo.altNotesPdf) {
                            let altEquipmentPdf = './pdf/' + EventInfo.altEquipmentPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(altEquipmentPdf, (err, altEquipmentPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(notesPdf, (err, notesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                emailTemplate.findOne({
                                                    template_name: "schudle_email_attendee"
                                                }).exec((err, attendeesTemplate) => {
                                                    for (var j = 0; j < attendeeInfo.length; j++) {
                                                        console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                        let recipient = attendeeInfo[j].emailId;
                                                        // let template_compile = Handlebars.compile(template[0].emailBody);
                                                        let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                        // let data = {
                                                        //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                        //     City: EventInfo.city,
                                                        //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                        //     VenueName: EventInfo.venue_name,
                                                        //     Address1: EventInfo.address1,
                                                        //     State: EventInfo.state,
                                                        //     Country: EventInfo.country_code,
                                                        // }
                                                        // let email_body = template_compile(data);
                                                        let attendees_email_body = attendees_compile({
                                                            eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                            attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                            eventLocation: EventInfo.venue_name,
                                                            eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                            attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                        });
                                                        let mailOptions = {
                                                            from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                            to: recipient,
                                                            // to: 'harshulsdn@gmail.com',
                                                            subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                            text: 'Progressing Ballet Technique text',
                                                            html: attendees_email_body,
                                                            attachments: [{
                                                                    //     filename: 'workshop_ticket.pdf',
                                                                    //     content: emailElementFile
                                                                    // },
                                                                    // {
                                                                    filename: 'equipment.pdf',
                                                                    content: equipmentPdf
                                                                },
                                                                {
                                                                    filename: 'alt-language-equipment.pdf',
                                                                    content: altEquipmentPdf
                                                                },
                                                                {
                                                                    filename: 'notes.pdf',
                                                                    content: notesPdf
                                                                }
                                                            ]
                                                        }
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                            if (err) {
                                                                console.log('mail error', err)

                                                            } else if (info) {
                                                                console.log('event', i, j, 'Done')
                                                                // fs.unlink(pdfFileName, function (err) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {}
                                                                // })
                                                            } else {
                                                                console.log('could not open the file')
                                                            }
                                                        })
                                                        // console.log(`Event looping ${i}`)
                                                        // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                        // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {

                                                        //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                        //             if (err) {
                                                        //                 console.log('err', err)

                                                        //             } else if (emailElementFile) {


                                                        //             } else {
                                                        //                 console.log('could not open the file')
                                                        //             }
                                                        //         })
                                                        //     }
                                                        // });
                                                    }
                                                });


                                            }
                                        });
                                    }
                                });
                            });
                        } else if (!EventInfo.altEquipmentPdf && EventInfo.altNotesPdf) {
                            let altNotesPdf = './pdf/' + EventInfo.altNotesPdf.key.split('.')[0];
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(notesPdf, (err, notesPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        fs.readFile(altNotesPdf, (err, altNotesPdf) => {
                                            if (err) {
                                                console.log('err', err)
                                            } else {
                                                emailTemplate.findOne({
                                                    template_name: "schudle_email_attendee"
                                                }).exec((err, attendeesTemplate) => {
                                                    for (var j = 0; j < attendeeInfo.length; j++) {
                                                        console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                        let recipient = attendeeInfo[j].emailId;
                                                        // let template_compile = Handlebars.compile(template[0].emailBody);
                                                        let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                        // let data = {
                                                        //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                        //     City: EventInfo.city,
                                                        //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                        //     VenueName: EventInfo.venue_name,
                                                        //     Address1: EventInfo.address1,
                                                        //     State: EventInfo.state,
                                                        //     Country: EventInfo.country_code,
                                                        // }
                                                        // let email_body = template_compile(data);
                                                        let attendees_email_body = attendees_compile({
                                                            eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                            attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                            eventLocation: EventInfo.venue_name,
                                                            eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                            attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                        });
                                                        let mailOptions = {
                                                            from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                            to: recipient,
                                                            // to: 'harshulsdn@gmail.com',
                                                            subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                            text: 'Progressing Ballet Technique text',
                                                            html: attendees_email_body,
                                                            attachments: [{
                                                                    //     filename: 'workshop_ticket.pdf',
                                                                    //     content: emailElementFile
                                                                    // },
                                                                    // {
                                                                    filename: 'equipment.pdf',
                                                                    content: equipmentPdf
                                                                },
                                                                {
                                                                    filename: 'notes.pdf',
                                                                    content: notesPdf
                                                                }, {
                                                                    filename: 'alt-notes.pdf',
                                                                    content: altNotesPdf
                                                                }
                                                            ]
                                                        }
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                            if (err) {
                                                                console.log('mail error', err)

                                                            } else if (info) {
                                                                console.log('event', i, j, 'Done')
                                                                // fs.unlink(pdfFileName, function (err) {
                                                                //     if (err) {
                                                                //         console.log('err', err)

                                                                //     } else {}
                                                                // })
                                                            } else {
                                                                console.log('could not open the file')
                                                            }
                                                        })
                                                        // console.log(`Event looping ${i}`)
                                                        // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                        // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {

                                                        //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                        //             if (err) {
                                                        //                 console.log('err', err)

                                                        //             } else if (emailElementFile) {


                                                        //             } else {
                                                        //                 console.log('could not open the file')
                                                        //             }
                                                        //         })
                                                        //     }
                                                        // });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        } else if (!EventInfo.altEquipmentPdf && !EventInfo.altNotesPdf) {
                            fs.readFile(equipmentPdf, (err, equipmentPdf) => {
                                if (err) {
                                    console.log('err', err)
                                }
                                fs.readFile(notesPdf, (err, notesPdf) => {
                                    if (err) {
                                        console.log('err', err)
                                    } else {
                                        emailTemplate.findOne({
                                            template_name: "schudle_email_attendee"
                                        }).exec((err, attendeesTemplate) => {
                                            for (var j = 0; j < attendeeInfo.length; j++) {
                                                console.log(`event ${i}, atttendee ${j}, attendee name ${attendeeInfo[j].firstName}`)

                                                let recipient = attendeeInfo[j].emailId;
                                                // let template_compile = Handlebars.compile(template[0].emailBody);
                                                let attendees_compile = Handlebars.compile(attendeesTemplate.emailBody);
                                                // let data = {
                                                //     RegistrantName: attendeeInfo[i].firstName + " " + attendeeInfo[i].lastName,
                                                //     City: EventInfo.city,
                                                //     Date: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                //     VenueName: EventInfo.venue_name,
                                                //     Address1: EventInfo.address1,
                                                //     State: EventInfo.state,
                                                //     Country: EventInfo.country_code,
                                                // }
                                                // let email_body = template_compile(data);
                                                let attendees_email_body = attendees_compile({
                                                    eventName: EventInfo.city + ", " + EventInfo.state + ", Progressing Ballet Technique Teachers Workshop",
                                                    attendeeName: attendeeInfo[j].firstName + " " + attendeeInfo[j].lastName,
                                                    eventLocation: EventInfo.venue_name,
                                                    eventTimes: moment(EventInfo.startDate).format('dddd DD MMM'),
                                                    attendeeCertificate: attendeeInfo[j].nameOnCertificate
                                                });
                                                let mailOptions = {
                                                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                                    to: recipient,
                                                    // to: 'harshulsdn@gmail.com',
                                                    subject: 'Progressing Ballet Technique' + EventInfo.city + ", " + EventInfo.state + ' Workshop Reminder',
                                                    text: 'Progressing Ballet Technique text',
                                                    html: attendees_email_body,
                                                    attachments: [{
                                                            //     filename: 'workshop_ticket.pdf',
                                                            //     content: emailElementFile
                                                            // },
                                                            // {
                                                            filename: 'equipment.pdf',
                                                            content: equipmentPdf
                                                        },
                                                        {
                                                            filename: 'notes.pdf',
                                                            content: notesPdf
                                                        }
                                                    ]
                                                }
                                                transporter.sendMail(mailOptions, function (err, info) {
                                                    if (err) {
                                                        console.log('mail error', err)

                                                    } else if (info) {
                                                        console.log('event', i, j, 'Done')
                                                        // fs.unlink(pdfFileName, function (err) {
                                                        //     if (err) {
                                                        //         console.log('err', err)

                                                        //     } else {}
                                                        // })
                                                    } else {
                                                        console.log('could not open the file')
                                                    }
                                                })
                                                // console.log(`Event looping ${i}`)
                                                // let pdfFileName = "./pdf/" + Date.now() + "_" + i + ".pdf";

                                                // pdf.create(email_body, options).toFile(pdfFileName, function (err, res) {
                                                //     if (err) {
                                                //         console.log('err', err)

                                                //     } else {

                                                //         fs.readFile(pdfFileName, function (err, emailElementFile) {
                                                //             if (err) {
                                                //                 console.log('err', err)

                                                //             } else if (emailElementFile) {


                                                //             } else {
                                                //                 console.log('could not open the file')
                                                //             }
                                                //         })
                                                //     }
                                                // });
                                            }
                                        });


                                    }
                                });

                            });
                        }
                    } else {
                        console.log('Could not process further')
                    }
                });
                i++
            }
        })
    })

    var scheduleEmailByInstructor = cron.schedule('*/59 * * * * *', () => {
        // console.log('hitting successfully', new Date());
        var currentTime = moment({});
        var currentTimeStamp = moment(currentTime).get('year').toString() + moment(currentTime).get('month').toString() + moment(currentTime).get('date').toString() + moment(currentTime).get('hour').toString() + moment(currentTime).get('minute');

        console.log("currentTimeStamp===>", currentTimeStamp)
        eventEmailSchedule.find({
            eventTimeStamp: currentTimeStamp,
            mailSent: false,
            isDeleted: false
        }).exec((err, scheduleEmail) => {
            if (err) {
                console.log('scheduleEmail find err', err)
            } else if (scheduleEmail.length == 0) {
                console.log('Events Length is 0')
            } else if (scheduleEmail.length > 0) {
                for (let i = 0; i < scheduleEmail.length; i++) {
                    attendees.find({
                        event_id: scheduleEmail[i].event_id
                    }).exec((err, attendees) => {
                        if (err) {
                            console.log('attendees find err', err)
                        } else if (attendees.length > 0) {
                            for (let j = 0; j < attendees.length; j++) {
                                let emailRecipients = attendees[j].emailId
                                console.log('scheduleEmail data', scheduleEmail[i])
                                let mailOptions = {
                                    from: '"Progressing Ballet Technique" <' + Config.SMTP.auth.user + '>', // sender address
                                    to: emailRecipients, // list of receivers
                                    cc: Config.SMTP.ccuser,
                                    replyTo: scheduleEmail[i].name + ' <' + scheduleEmail[i].reply_to_mail + '>',
                                    subject: scheduleEmail[i].subject, // Subject line
                                    text: 'You are Tickets are Conformed', // plaintext body
                                    html: scheduleEmail[i].description
                                }
                                transporter.sendMail(mailOptions, function (err, info) {
                                    if (err) {
                                        console.log(' scheduleEmailByInstructor err ======================>', err)
                                    } else {
                                        console.log(' scheduleEmailByInstructor info ======================>', info)
                                        eventEmailSchedule.findOneAndUpdate({
                                            _id: scheduleEmail[i]._id
                                        }, {
                                            mailSent: true
                                        }).exec((err, updated) => {});
                                    }
                                });
                            }

                        } else if (attendees.length === 0) {
                            console.log('No attendees on schudleed event list')
                        }
                    });
                }
            } else {
                console.log('no events found with such start date')
            }
        });
    });
    // bayermailtest.start();
    // schedulePayout.start();
    // mailReminderTen.start();
    // mailReminderFive.start();
    // scheduleEmailByInstructor.start();
    // mail.start();


    // bayermailtest.stop();
    schedulePayout.stop();
    mailReminderTen.stop();
    mailReminderFive.stop();
    scheduleEmailByInstructor.stop();
    // mail.stop();



    io.on('connection', function (socket) {
        Socket = socket;
    });
};