(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-mk/packages/rzymek_moment-locale-mk.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-mk/server.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
global.moment = moment;                                                                                             // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-mk/locale.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : macedonian (mk)                                                                                         // 2
// author : Borislav Mickov : https://github.com/B0k0                                                               // 3
                                                                                                                    // 4
(function (factory) {                                                                                               // 5
    if (typeof define === 'function' && define.amd) {                                                               // 6
        define(['moment'], factory); // AMD                                                                         // 7
    } else if (typeof exports === 'object') {                                                                       // 8
        module.exports = factory(require('../moment')); // Node                                                     // 9
    } else {                                                                                                        // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                    // 11
    }                                                                                                               // 12
}(function (moment) {                                                                                               // 13
    return moment.defineLocale('mk', {                                                                              // 14
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'), // 15
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),                                 // 16
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),                              // 17
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),                                                   // 18
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),                                                            // 19
        longDateFormat : {                                                                                          // 20
            LT : 'H:mm',                                                                                            // 21
            LTS : 'LT:ss',                                                                                          // 22
            L : 'D.MM.YYYY',                                                                                        // 23
            LL : 'D MMMM YYYY',                                                                                     // 24
            LLL : 'D MMMM YYYY LT',                                                                                 // 25
            LLLL : 'dddd, D MMMM YYYY LT'                                                                           // 26
        },                                                                                                          // 27
        calendar : {                                                                                                // 28
            sameDay : '[Денес во] LT',                                                                              // 29
            nextDay : '[Утре во] LT',                                                                               // 30
            nextWeek : 'dddd [во] LT',                                                                              // 31
            lastDay : '[Вчера во] LT',                                                                              // 32
            lastWeek : function () {                                                                                // 33
                switch (this.day()) {                                                                               // 34
                case 0:                                                                                             // 35
                case 3:                                                                                             // 36
                case 6:                                                                                             // 37
                    return '[Во изминатата] dddd [во] LT';                                                          // 38
                case 1:                                                                                             // 39
                case 2:                                                                                             // 40
                case 4:                                                                                             // 41
                case 5:                                                                                             // 42
                    return '[Во изминатиот] dddd [во] LT';                                                          // 43
                }                                                                                                   // 44
            },                                                                                                      // 45
            sameElse : 'L'                                                                                          // 46
        },                                                                                                          // 47
        relativeTime : {                                                                                            // 48
            future : 'после %s',                                                                                    // 49
            past : 'пред %s',                                                                                       // 50
            s : 'неколку секунди',                                                                                  // 51
            m : 'минута',                                                                                           // 52
            mm : '%d минути',                                                                                       // 53
            h : 'час',                                                                                              // 54
            hh : '%d часа',                                                                                         // 55
            d : 'ден',                                                                                              // 56
            dd : '%d дена',                                                                                         // 57
            M : 'месец',                                                                                            // 58
            MM : '%d месеци',                                                                                       // 59
            y : 'година',                                                                                           // 60
            yy : '%d години'                                                                                        // 61
        },                                                                                                          // 62
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,                                                                // 63
        ordinal : function (number) {                                                                               // 64
            var lastDigit = number % 10,                                                                            // 65
                last2Digits = number % 100;                                                                         // 66
            if (number === 0) {                                                                                     // 67
                return number + '-ев';                                                                              // 68
            } else if (last2Digits === 0) {                                                                         // 69
                return number + '-ен';                                                                              // 70
            } else if (last2Digits > 10 && last2Digits < 20) {                                                      // 71
                return number + '-ти';                                                                              // 72
            } else if (lastDigit === 1) {                                                                           // 73
                return number + '-ви';                                                                              // 74
            } else if (lastDigit === 2) {                                                                           // 75
                return number + '-ри';                                                                              // 76
            } else if (lastDigit === 7 || lastDigit === 8) {                                                        // 77
                return number + '-ми';                                                                              // 78
            } else {                                                                                                // 79
                return number + '-ти';                                                                              // 80
            }                                                                                                       // 81
        },                                                                                                          // 82
        week : {                                                                                                    // 83
            dow : 1, // Monday is the first day of the week.                                                        // 84
            doy : 7  // The week that contains Jan 1st is the first week of the year.                               // 85
        }                                                                                                           // 86
    });                                                                                                             // 87
}));                                                                                                                // 88
                                                                                                                    // 89
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 118
}).call(this);                                                                                                         // 119
                                                                                                                       // 120
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-mk'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-mk.js.map
