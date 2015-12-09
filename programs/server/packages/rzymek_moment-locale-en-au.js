(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-en-au/packages/rzymek_moment-locale //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-en-au/server.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
global.moment = moment;                                                                                              // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 12
}).call(this);                                                       // 13
                                                                     // 14
                                                                     // 15
                                                                     // 16
                                                                     // 17
                                                                     // 18
                                                                     // 19
(function () {                                                       // 20
                                                                     // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-en-au/locale.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : australian english (en-au)                                                                               // 2
                                                                                                                     // 3
(function (factory) {                                                                                                // 4
    if (typeof define === 'function' && define.amd) {                                                                // 5
        define(['moment'], factory); // AMD                                                                          // 6
    } else if (typeof exports === 'object') {                                                                        // 7
        module.exports = factory(require('../moment')); // Node                                                      // 8
    } else {                                                                                                         // 9
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                     // 10
    }                                                                                                                // 11
}(function (moment) {                                                                                                // 12
    return moment.defineLocale('en-au', {                                                                            // 13
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // 14
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),                                  // 15
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),                            // 16
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),                                                    // 17
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),                                                             // 18
        longDateFormat : {                                                                                           // 19
            LT : 'h:mm A',                                                                                           // 20
            LTS : 'h:mm:ss A',                                                                                       // 21
            L : 'DD/MM/YYYY',                                                                                        // 22
            LL : 'D MMMM YYYY',                                                                                      // 23
            LLL : 'D MMMM YYYY LT',                                                                                  // 24
            LLLL : 'dddd, D MMMM YYYY LT'                                                                            // 25
        },                                                                                                           // 26
        calendar : {                                                                                                 // 27
            sameDay : '[Today at] LT',                                                                               // 28
            nextDay : '[Tomorrow at] LT',                                                                            // 29
            nextWeek : 'dddd [at] LT',                                                                               // 30
            lastDay : '[Yesterday at] LT',                                                                           // 31
            lastWeek : '[Last] dddd [at] LT',                                                                        // 32
            sameElse : 'L'                                                                                           // 33
        },                                                                                                           // 34
        relativeTime : {                                                                                             // 35
            future : 'in %s',                                                                                        // 36
            past : '%s ago',                                                                                         // 37
            s : 'a few seconds',                                                                                     // 38
            m : 'a minute',                                                                                          // 39
            mm : '%d minutes',                                                                                       // 40
            h : 'an hour',                                                                                           // 41
            hh : '%d hours',                                                                                         // 42
            d : 'a day',                                                                                             // 43
            dd : '%d days',                                                                                          // 44
            M : 'a month',                                                                                           // 45
            MM : '%d months',                                                                                        // 46
            y : 'a year',                                                                                            // 47
            yy : '%d years'                                                                                          // 48
        },                                                                                                           // 49
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,                                                                        // 50
        ordinal : function (number) {                                                                                // 51
            var b = number % 10,                                                                                     // 52
                output = (~~(number % 100 / 10) === 1) ? 'th' :                                                      // 53
                (b === 1) ? 'st' :                                                                                   // 54
                (b === 2) ? 'nd' :                                                                                   // 55
                (b === 3) ? 'rd' : 'th';                                                                             // 56
            return number + output;                                                                                  // 57
        },                                                                                                           // 58
        week : {                                                                                                     // 59
            dow : 1, // Monday is the first day of the week.                                                         // 60
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                // 61
        }                                                                                                            // 62
    });                                                                                                              // 63
}));                                                                                                                 // 64
                                                                                                                     // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 94
}).call(this);                                                       // 95
                                                                     // 96
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-en-au'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-en-au.js.map
