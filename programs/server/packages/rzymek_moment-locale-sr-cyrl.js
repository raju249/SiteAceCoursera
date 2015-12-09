(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-sr-cyrl/packages/rzymek_moment-locale-sr-cyrl.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-sr-cyrl/server.js                                                                  //
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
// packages/rzymek:moment-locale-sr-cyrl/locale.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : Serbian-cyrillic (sr-cyrl)                                                                              // 2
// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j                                // 3
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
    var translator = {                                                                                              // 14
        words: { //Different grammatical cases                                                                      // 15
            m: ['један минут', 'једне минуте'],                                                                     // 16
            mm: ['минут', 'минуте', 'минута'],                                                                      // 17
            h: ['један сат', 'једног сата'],                                                                        // 18
            hh: ['сат', 'сата', 'сати'],                                                                            // 19
            dd: ['дан', 'дана', 'дана'],                                                                            // 20
            MM: ['месец', 'месеца', 'месеци'],                                                                      // 21
            yy: ['година', 'године', 'година']                                                                      // 22
        },                                                                                                          // 23
        correctGrammaticalCase: function (number, wordKey) {                                                        // 24
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);              // 25
        },                                                                                                          // 26
        translate: function (number, withoutSuffix, key) {                                                          // 27
            var wordKey = translator.words[key];                                                                    // 28
            if (key.length === 1) {                                                                                 // 29
                return withoutSuffix ? wordKey[0] : wordKey[1];                                                     // 30
            } else {                                                                                                // 31
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);                           // 32
            }                                                                                                       // 33
        }                                                                                                           // 34
    };                                                                                                              // 35
                                                                                                                    // 36
    return moment.defineLocale('sr-cyrl', {                                                                         // 37
        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'], // 39
        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],                        // 40
        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],                                    // 41
        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],                                                    // 42
        longDateFormat: {                                                                                           // 43
            LT: 'H:mm',                                                                                             // 44
            LTS : 'LT:ss',                                                                                          // 45
            L: 'DD. MM. YYYY',                                                                                      // 46
            LL: 'D. MMMM YYYY',                                                                                     // 47
            LLL: 'D. MMMM YYYY LT',                                                                                 // 48
            LLLL: 'dddd, D. MMMM YYYY LT'                                                                           // 49
        },                                                                                                          // 50
        calendar: {                                                                                                 // 51
            sameDay: '[данас у] LT',                                                                                // 52
            nextDay: '[сутра у] LT',                                                                                // 53
                                                                                                                    // 54
            nextWeek: function () {                                                                                 // 55
                switch (this.day()) {                                                                               // 56
                case 0:                                                                                             // 57
                    return '[у] [недељу] [у] LT';                                                                   // 58
                case 3:                                                                                             // 59
                    return '[у] [среду] [у] LT';                                                                    // 60
                case 6:                                                                                             // 61
                    return '[у] [суботу] [у] LT';                                                                   // 62
                case 1:                                                                                             // 63
                case 2:                                                                                             // 64
                case 4:                                                                                             // 65
                case 5:                                                                                             // 66
                    return '[у] dddd [у] LT';                                                                       // 67
                }                                                                                                   // 68
            },                                                                                                      // 69
            lastDay  : '[јуче у] LT',                                                                               // 70
            lastWeek : function () {                                                                                // 71
                var lastWeekDays = [                                                                                // 72
                    '[прошле] [недеље] [у] LT',                                                                     // 73
                    '[прошлог] [понедељка] [у] LT',                                                                 // 74
                    '[прошлог] [уторка] [у] LT',                                                                    // 75
                    '[прошле] [среде] [у] LT',                                                                      // 76
                    '[прошлог] [четвртка] [у] LT',                                                                  // 77
                    '[прошлог] [петка] [у] LT',                                                                     // 78
                    '[прошле] [суботе] [у] LT'                                                                      // 79
                ];                                                                                                  // 80
                return lastWeekDays[this.day()];                                                                    // 81
            },                                                                                                      // 82
            sameElse : 'L'                                                                                          // 83
        },                                                                                                          // 84
        relativeTime : {                                                                                            // 85
            future : 'за %s',                                                                                       // 86
            past   : 'пре %s',                                                                                      // 87
            s      : 'неколико секунди',                                                                            // 88
            m      : translator.translate,                                                                          // 89
            mm     : translator.translate,                                                                          // 90
            h      : translator.translate,                                                                          // 91
            hh     : translator.translate,                                                                          // 92
            d      : 'дан',                                                                                         // 93
            dd     : translator.translate,                                                                          // 94
            M      : 'месец',                                                                                       // 95
            MM     : translator.translate,                                                                          // 96
            y      : 'годину',                                                                                      // 97
            yy     : translator.translate                                                                           // 98
        },                                                                                                          // 99
        ordinalParse: /\d{1,2}\./,                                                                                  // 100
        ordinal : '%d.',                                                                                            // 101
        week : {                                                                                                    // 102
            dow : 1, // Monday is the first day of the week.                                                        // 103
            doy : 7  // The week that contains Jan 1st is the first week of the year.                               // 104
        }                                                                                                           // 105
    });                                                                                                             // 106
}));                                                                                                                // 107
                                                                                                                    // 108
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 137
}).call(this);                                                                                                         // 138
                                                                                                                       // 139
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-sr-cyrl'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sr-cyrl.js.map
