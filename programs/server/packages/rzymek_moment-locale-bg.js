(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-bg/packages/rzymek_moment-locale-bg.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/rzymek:moment-locale-bg/server.js                                                                    //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
global.moment = moment;                                                                                          // 1  // 9
                                                                                                                 // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                       // 12
}).call(this);                                                                                                         // 13
                                                                                                                       // 14
                                                                                                                       // 15
                                                                                                                       // 16
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       // 19
(function () {                                                                                                         // 20
                                                                                                                       // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                               //    // 23
// packages/rzymek:moment-locale-bg/locale.js                                                                    //    // 24
//                                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                 //    // 27
// moment.js locale configuration                                                                                // 1  // 28
// locale : bulgarian (bg)                                                                                       // 2  // 29
// author : Krasen Borisov : https://github.com/kraz                                                             // 3  // 30
                                                                                                                 // 4  // 31
(function (factory) {                                                                                            // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                            // 6  // 33
        define(['moment'], factory); // AMD                                                                      // 7  // 34
    } else if (typeof exports === 'object') {                                                                    // 8  // 35
        module.exports = factory(require('../moment')); // Node                                                  // 9  // 36
    } else {                                                                                                     // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                 // 11
    }                                                                                                            // 12
}(function (moment) {                                                                                            // 13
    return moment.defineLocale('bg', {                                                                           // 14
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'), // 15
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),                              // 16
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),                          // 17
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),                                                // 18
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),                                                         // 19
        longDateFormat : {                                                                                       // 20
            LT : 'H:mm',                                                                                         // 21
            LTS : 'LT:ss',                                                                                       // 22
            L : 'D.MM.YYYY',                                                                                     // 23
            LL : 'D MMMM YYYY',                                                                                  // 24
            LLL : 'D MMMM YYYY LT',                                                                              // 25
            LLLL : 'dddd, D MMMM YYYY LT'                                                                        // 26
        },                                                                                                       // 27
        calendar : {                                                                                             // 28
            sameDay : '[Днес в] LT',                                                                             // 29
            nextDay : '[Утре в] LT',                                                                             // 30
            nextWeek : 'dddd [в] LT',                                                                            // 31
            lastDay : '[Вчера в] LT',                                                                            // 32
            lastWeek : function () {                                                                             // 33
                switch (this.day()) {                                                                            // 34
                case 0:                                                                                          // 35
                case 3:                                                                                          // 36
                case 6:                                                                                          // 37
                    return '[В изминалата] dddd [в] LT';                                                         // 38
                case 1:                                                                                          // 39
                case 2:                                                                                          // 40
                case 4:                                                                                          // 41
                case 5:                                                                                          // 42
                    return '[В изминалия] dddd [в] LT';                                                          // 43
                }                                                                                                // 44
            },                                                                                                   // 45
            sameElse : 'L'                                                                                       // 46
        },                                                                                                       // 47
        relativeTime : {                                                                                         // 48
            future : 'след %s',                                                                                  // 49
            past : 'преди %s',                                                                                   // 50
            s : 'няколко секунди',                                                                               // 51
            m : 'минута',                                                                                        // 52
            mm : '%d минути',                                                                                    // 53
            h : 'час',                                                                                           // 54
            hh : '%d часа',                                                                                      // 55
            d : 'ден',                                                                                           // 56
            dd : '%d дни',                                                                                       // 57
            M : 'месец',                                                                                         // 58
            MM : '%d месеца',                                                                                    // 59
            y : 'година',                                                                                        // 60
            yy : '%d години'                                                                                     // 61
        },                                                                                                       // 62
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,                                                             // 63
        ordinal : function (number) {                                                                            // 64
            var lastDigit = number % 10,                                                                         // 65
                last2Digits = number % 100;                                                                      // 66
            if (number === 0) {                                                                                  // 67
                return number + '-ев';                                                                           // 68
            } else if (last2Digits === 0) {                                                                      // 69
                return number + '-ен';                                                                           // 70
            } else if (last2Digits > 10 && last2Digits < 20) {                                                   // 71
                return number + '-ти';                                                                           // 72
            } else if (lastDigit === 1) {                                                                        // 73
                return number + '-ви';                                                                           // 74
            } else if (lastDigit === 2) {                                                                        // 75
                return number + '-ри';                                                                           // 76
            } else if (lastDigit === 7 || lastDigit === 8) {                                                     // 77
                return number + '-ми';                                                                           // 78
            } else {                                                                                             // 79
                return number + '-ти';                                                                           // 80
            }                                                                                                    // 81
        },                                                                                                       // 82
        week : {                                                                                                 // 83
            dow : 1, // Monday is the first day of the week.                                                     // 84
            doy : 7  // The week that contains Jan 1st is the first week of the year.                            // 85
        }                                                                                                        // 86
    });                                                                                                          // 87
}));                                                                                                             // 88
                                                                                                                 // 89
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 117
                                                                                                                       // 118
}).call(this);                                                                                                         // 119
                                                                                                                       // 120
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-bg'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-bg.js.map
