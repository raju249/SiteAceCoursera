(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-en-gb/packages/rzymek_moment-locale //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-en-gb/server.js                                                                     //
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
// packages/rzymek:moment-locale-en-gb/locale.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : great britain english (en-gb)                                                                            // 2
// author : Chris Gedrim : https://github.com/chrisgedrim                                                            // 3
                                                                                                                     // 4
(function (factory) {                                                                                                // 5
    if (typeof define === 'function' && define.amd) {                                                                // 6
        define(['moment'], factory); // AMD                                                                          // 7
    } else if (typeof exports === 'object') {                                                                        // 8
        module.exports = factory(require('../moment')); // Node                                                      // 9
    } else {                                                                                                         // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                     // 11
    }                                                                                                                // 12
}(function (moment) {                                                                                                // 13
    return moment.defineLocale('en-gb', {                                                                            // 14
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // 15
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),                                  // 16
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),                            // 17
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),                                                    // 18
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),                                                             // 19
        longDateFormat : {                                                                                           // 20
            LT : 'HH:mm',                                                                                            // 21
            LTS : 'HH:mm:ss',                                                                                        // 22
            L : 'DD/MM/YYYY',                                                                                        // 23
            LL : 'D MMMM YYYY',                                                                                      // 24
            LLL : 'D MMMM YYYY LT',                                                                                  // 25
            LLLL : 'dddd, D MMMM YYYY LT'                                                                            // 26
        },                                                                                                           // 27
        calendar : {                                                                                                 // 28
            sameDay : '[Today at] LT',                                                                               // 29
            nextDay : '[Tomorrow at] LT',                                                                            // 30
            nextWeek : 'dddd [at] LT',                                                                               // 31
            lastDay : '[Yesterday at] LT',                                                                           // 32
            lastWeek : '[Last] dddd [at] LT',                                                                        // 33
            sameElse : 'L'                                                                                           // 34
        },                                                                                                           // 35
        relativeTime : {                                                                                             // 36
            future : 'in %s',                                                                                        // 37
            past : '%s ago',                                                                                         // 38
            s : 'a few seconds',                                                                                     // 39
            m : 'a minute',                                                                                          // 40
            mm : '%d minutes',                                                                                       // 41
            h : 'an hour',                                                                                           // 42
            hh : '%d hours',                                                                                         // 43
            d : 'a day',                                                                                             // 44
            dd : '%d days',                                                                                          // 45
            M : 'a month',                                                                                           // 46
            MM : '%d months',                                                                                        // 47
            y : 'a year',                                                                                            // 48
            yy : '%d years'                                                                                          // 49
        },                                                                                                           // 50
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,                                                                        // 51
        ordinal : function (number) {                                                                                // 52
            var b = number % 10,                                                                                     // 53
                output = (~~(number % 100 / 10) === 1) ? 'th' :                                                      // 54
                (b === 1) ? 'st' :                                                                                   // 55
                (b === 2) ? 'nd' :                                                                                   // 56
                (b === 3) ? 'rd' : 'th';                                                                             // 57
            return number + output;                                                                                  // 58
        },                                                                                                           // 59
        week : {                                                                                                     // 60
            dow : 1, // Monday is the first day of the week.                                                         // 61
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                // 62
        }                                                                                                            // 63
    });                                                                                                              // 64
}));                                                                                                                 // 65
                                                                                                                     // 66
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 95
}).call(this);                                                       // 96
                                                                     // 97
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-en-gb'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-en-gb.js.map
