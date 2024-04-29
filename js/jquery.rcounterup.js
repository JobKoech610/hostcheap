var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * Jquery.rcounter.js 
 * Version: 1.0.0
 * Author: Sharifur
 * Inspired By Benjamin Intal
 * */

(function($) {
    'use strict';
    $.fn.rCounter = function(options) {
        var settings = $.extend({
            duration: 20,
            easing: 'swing',
        }, options);
        return this.each(function() {
            var $this = $(this);

            var startCounter = function() {
                    var numbers = [];
                    var length = $this.length;
                    var number = $this.text();
                    var isComma = /[,\-]/.test(number);
                    var isFloat = /[,\-]/.test(number);
                    var number = number.replace(/,/g, '');
                    var divisions = settings.duration;
                    var decimalPlaces = isFloat ? (number.split('.')[1] || []).length : 0;

                    // make number string to array for displaying counterup
                    for (var rcn = divisions; rcn >= 1; rcn--) {

                        var newNum = parseInt(number / divisions * rcn);
                        if (isFloat) {
                            newNum = parseFloat(number / divisions * rcn).toFixed(decimalPlaces);
                        }
						if (isComma) {
                            while (/(\d+)(\d{3})/.test(newNum.toString())) {
                                newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                            }
                        }

                        numbers.unshift(newNum);
                    }
                    var counterUpDisplay = function() {
                        $this.text(numbers.shift());
                        setTimeout(counterUpDisplay, settings.duration);
                    };
                    setTimeout(counterUpDisplay, settings.duration);
                } // end function

            //bind with waypoints
            $this.waypoint(startCounter, { offset: '100%', triggerOnce: true });
        });


    }

}(jQuery));

}
/*
     FILE ARCHIVED ON 11:28:16 Sep 04, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:07:28 Apr 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.671
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.08
  cdx.remote: 0.056
  esindex: 0.013
  LoadShardBlock: 45.057 (3)
  PetaboxLoader3.datanode: 521.701 (6)
  load_resource: 654.432 (2)
  PetaboxLoader3.resolve: 143.962 (2)
  loaddict: 445.772
*/