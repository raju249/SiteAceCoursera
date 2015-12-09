(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/rzymek_moment-locale-he/packages/rzymek_moment-locale-he.js                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                     //    // 4
// packages/rzymek:moment-locale-he/server.js                                                          //    // 5
//                                                                                                     //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                       //    // 8
global.moment = moment;                                                                                // 1  // 9
                                                                                                       // 2  // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                             // 12
}).call(this);                                                                                               // 13
                                                                                                             // 14
                                                                                                             // 15
                                                                                                             // 16
                                                                                                             // 17
                                                                                                             // 18
                                                                                                             // 19
(function () {                                                                                               // 20
                                                                                                             // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                     //    // 23
// packages/rzymek:moment-locale-he/locale.js                                                          //    // 24
//                                                                                                     //    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                       //    // 27
// moment.js locale configuration                                                                      // 1  // 28
// locale : Hebrew (he)                                                                                // 2  // 29
// author : Tomer Cohen : https://github.com/tomer                                                     // 3  // 30
// author : Moshe Simantov : https://github.com/DevelopmentIL                                          // 4  // 31
// author : Tal Ater : https://github.com/TalAter                                                      // 5  // 32
                                                                                                       // 6  // 33
(function (factory) {                                                                                  // 7  // 34
    if (typeof define === 'function' && define.amd) {                                                  // 8  // 35
        define(['moment'], factory); // AMD                                                            // 9  // 36
    } else if (typeof exports === 'object') {                                                          // 10
        module.exports = factory(require('../moment')); // Node                                        // 11
    } else {                                                                                           // 12
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global       // 13
    }                                                                                                  // 14
}(function (moment) {                                                                                  // 15
    return moment.defineLocale('he', {                                                                 // 16
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'), // 17
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),          // 18
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),                                  // 19
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),                                             // 20
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),                                                      // 21
        longDateFormat : {                                                                             // 22
            LT : 'HH:mm',                                                                              // 23
            LTS : 'LT:ss',                                                                             // 24
            L : 'DD/MM/YYYY',                                                                          // 25
            LL : 'D [ב]MMMM YYYY',                                                                     // 26
            LLL : 'D [ב]MMMM YYYY LT',                                                                 // 27
            LLLL : 'dddd, D [ב]MMMM YYYY LT',                                                          // 28
            l : 'D/M/YYYY',                                                                            // 29
            ll : 'D MMM YYYY',                                                                         // 30
            lll : 'D MMM YYYY LT',                                                                     // 31
            llll : 'ddd, D MMM YYYY LT'                                                                // 32
        },                                                                                             // 33
        calendar : {                                                                                   // 34
            sameDay : '[היום ב־]LT',                                                                   // 35
            nextDay : '[מחר ב־]LT',                                                                    // 36
            nextWeek : 'dddd [בשעה] LT',                                                               // 37
            lastDay : '[אתמול ב־]LT',                                                                  // 38
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',                                                 // 39
            sameElse : 'L'                                                                             // 40
        },                                                                                             // 41
        relativeTime : {                                                                               // 42
            future : 'בעוד %s',                                                                        // 43
            past : 'לפני %s',                                                                          // 44
            s : 'מספר שניות',                                                                          // 45
            m : 'דקה',                                                                                 // 46
            mm : '%d דקות',                                                                            // 47
            h : 'שעה',                                                                                 // 48
            hh : function (number) {                                                                   // 49
                if (number === 2) {                                                                    // 50
                    return 'שעתיים';                                                                   // 51
                }                                                                                      // 52
                return number + ' שעות';                                                               // 53
            },                                                                                         // 54
            d : 'יום',                                                                                 // 55
            dd : function (number) {                                                                   // 56
                if (number === 2) {                                                                    // 57
                    return 'יומיים';                                                                   // 58
                }                                                                                      // 59
                return number + ' ימים';                                                               // 60
            },                                                                                         // 61
            M : 'חודש',                                                                                // 62
            MM : function (number) {                                                                   // 63
                if (number === 2) {                                                                    // 64
                    return 'חודשיים';                                                                  // 65
                }                                                                                      // 66
                return number + ' חודשים';                                                             // 67
            },                                                                                         // 68
            y : 'שנה',                                                                                 // 69
            yy : function (number) {                                                                   // 70
                if (number === 2) {                                                                    // 71
                    return 'שנתיים';                                                                   // 72
                } else if (number % 10 === 0 && number !== 10) {                                       // 73
                    return number + ' שנה';                                                            // 74
                }                                                                                      // 75
                return number + ' שנים';                                                               // 76
            }                                                                                          // 77
        }                                                                                              // 78
    });                                                                                                // 79
}));                                                                                                   // 80
                                                                                                       // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 109
                                                                                                             // 110
}).call(this);                                                                                               // 111
                                                                                                             // 112
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-he'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-he.js.map
