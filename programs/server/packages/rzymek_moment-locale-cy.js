(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-cy/packages/rzymek_moment-locale-cy //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-cy/server.js                                                                        //
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
// packages/rzymek:moment-locale-cy/locale.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : Welsh (cy)                                                                                               // 2
// author : Robert Allen                                                                                             // 3
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
    return moment.defineLocale('cy', {                                                                               // 14
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'), // 15
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),                                // 16
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),         // 17
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),                                                    // 18
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),                                                              // 19
        // time formats are the same as en-gb                                                                        // 20
        longDateFormat: {                                                                                            // 21
            LT: 'HH:mm',                                                                                             // 22
            LTS : 'LT:ss',                                                                                           // 23
            L: 'DD/MM/YYYY',                                                                                         // 24
            LL: 'D MMMM YYYY',                                                                                       // 25
            LLL: 'D MMMM YYYY LT',                                                                                   // 26
            LLLL: 'dddd, D MMMM YYYY LT'                                                                             // 27
        },                                                                                                           // 28
        calendar: {                                                                                                  // 29
            sameDay: '[Heddiw am] LT',                                                                               // 30
            nextDay: '[Yfory am] LT',                                                                                // 31
            nextWeek: 'dddd [am] LT',                                                                                // 32
            lastDay: '[Ddoe am] LT',                                                                                 // 33
            lastWeek: 'dddd [diwethaf am] LT',                                                                       // 34
            sameElse: 'L'                                                                                            // 35
        },                                                                                                           // 36
        relativeTime: {                                                                                              // 37
            future: 'mewn %s',                                                                                       // 38
            past: '%s yn ôl',                                                                                        // 39
            s: 'ychydig eiliadau',                                                                                   // 40
            m: 'munud',                                                                                              // 41
            mm: '%d munud',                                                                                          // 42
            h: 'awr',                                                                                                // 43
            hh: '%d awr',                                                                                            // 44
            d: 'diwrnod',                                                                                            // 45
            dd: '%d diwrnod',                                                                                        // 46
            M: 'mis',                                                                                                // 47
            MM: '%d mis',                                                                                            // 48
            y: 'blwyddyn',                                                                                           // 49
            yy: '%d flynedd'                                                                                         // 50
        },                                                                                                           // 51
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,                                                            // 52
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh                            // 53
        ordinal: function (number) {                                                                                 // 54
            var b = number,                                                                                          // 55
                output = '',                                                                                         // 56
                lookup = [                                                                                           // 57
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed             // 58
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed                  // 59
                ];                                                                                                   // 60
                                                                                                                     // 61
            if (b > 20) {                                                                                            // 62
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {                                     // 63
                    output = 'fed'; // not 30ain, 70ain or 90ain                                                     // 64
                } else {                                                                                             // 65
                    output = 'ain';                                                                                  // 66
                }                                                                                                    // 67
            } else if (b > 0) {                                                                                      // 68
                output = lookup[b];                                                                                  // 69
            }                                                                                                        // 70
                                                                                                                     // 71
            return number + output;                                                                                  // 72
        },                                                                                                           // 73
        week : {                                                                                                     // 74
            dow : 1, // Monday is the first day of the week.                                                         // 75
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                // 76
        }                                                                                                            // 77
    });                                                                                                              // 78
}));                                                                                                                 // 79
                                                                                                                     // 80
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 109
}).call(this);                                                       // 110
                                                                     // 111
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-cy'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-cy.js.map
