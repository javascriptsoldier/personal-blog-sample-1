(function ( $ ) {
  $.fn.multiStepForm = function(args) {
      if(args === null || typeof args !== 'object' || $.isArray(args))
        throw  " : Called with Invalid argument";
      var form = this;
      var tabs = form.find('.tab');
      var steps = form.find('.step');
      form.previousIndex = 0;
      form.currentIndex = 0;
      form.currentTab;
      steps.each(function(i, e){
        $(e).on('click', function(ev){
        if(form.validateElementsOfCurrentTab())
          form.navigateTo(i);
        });
      });
      form.navigateTo = function (i) {/*index*/

        /*Mark the current section with the class 'current'*/
        tabs.removeClass('current').eq(i).addClass('current');
        // steps.removeClass('next');
        // Show only the navigation buttons that make sense for the current section:
        form.find('.previous').toggle(i > 0);
        
        
        atTheEnd = i >= tabs.length - 1;
          form.find('.next').toggle(!atTheEnd);
          // if(tabs.length > i){
            //   steps.eq([i+1]).addClass('next');
            // }
            // console.log('atTheEnd='+atTheEnd);
            form.find('.submit').toggle(atTheEnd);
            // i = i > form.currentIndex ? i : i
            let newi = i == 0 ? i +1 : form.previousIndex < i ? i-1 : i+1;
            form.currentIndex = i;
            form.previousIndex  = newi;

            if(steps.eq(i).hasClass('previous')){
              console.log('has class');
              steps.removeClass('previous');
              form.previousIndex  =i;
              newi = i
            }else{
            steps.eq(i).addClass('previous');
            steps.eq(i).css("display","inline");
            }

            steps.css("display","inline");

        fixStepIndicator(newi);
        return form;
      }
      function curIndex() {
        /*Return the current index by looking at which section has the class 'current'*/
        console.log(tabs.index(tabs.filter('.current')))
        return tabs.index(tabs.filter('.current'));
      }
      function fixStepIndicator(n) {
       steps.each(function(i, e){
          i == n ? $(e).addClass('active') : $(e).removeClass('active');
          i == n ? tabs.eq(i).addClass('current') : tabs.eq(i).removeClass('current');
        });
      }
      /* Previous button is easy, just go back */
      form.find('.previous').click(function(event) {
        console.log($(event), event);
        // form.navigateTo(curIndex() - 1);
      });

      /* Next button goes forward iff current block validates */
      form.find('.next').click(function() {
        if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
          if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
            form.validate(args.validations);
            if(form.valid() == true){
              form.navigateTo(curIndex() + 1);
              return true;
            }
            return false;
          }
        }
        form.navigateTo(curIndex() + 1);
      });
      form.find('.submit').on('click', function(e){
        if(typeof args.beforeSubmit !== 'undefined' && typeof args.beforeSubmit !== 'function')
          args.beforeSubmit(form, this);
        /*check if args.submit is set false if not then form.submit is not gonna run, if not set then will run by default*/
        if(typeof args.submit === 'undefined' || (typeof args.submit === 'boolean' && args.submit)){
          form.submit();
        }
        return form;
      });
      /*By default navigate to the tab 0, if it is being set using defaultStep property*/
      typeof args.defaultStep === 'number' ? form.navigateTo(args.defaultStep) : null;

      form.noValidate = function(a) {
        console.log(a)
      }
      form.setActiveIndex = function(index) {
        fixStepIndicator(index);
        return form;
      }
      form.validateElementsOfCurrentTab = function(){
        // console.log($(tabs[form.currentIndex]).find('input'));
        let valid = true;
        let currentTabElements = getCurrentTabElements();
        console.log(currentTabElements)
          for(let i = 0; i < currentTabElements.length; i++){
            valid = isValid(currentTabElements[i]);
            if(!valid) break;
          }
          console.log("valid", valid);
        return valid;
      }

      function isValid(e){
        console.log('val.......',$(e).val(), $(e).data("formula"))
        return $(e) && ($(e).val() || $(e).data("formula") ) ? true: false;
      }

      form.getCurrentTab = function(){
        // console.log($(tabs[form.currentIndex]));
        form.currentTab = $(tabs[form.currentIndex]);
        return form;
      }

      function getCurrentTabElements(){
        form.currentTab = $(tabs[form.currentIndex]);
        // let inputs = [...$(tabs[form.currentIndex]).find('input')]
        return $(tabs[form.currentIndex]).find('input')
      }
      // form.getTab = function(i){
      //   console.log("tabs getTab",tabs[fi])
      //   return $(tabs[i]);
      // }
      return form;
  };
}( jQuery ));
