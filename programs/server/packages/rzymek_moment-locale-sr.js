(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-sr/packages/rzymek_moment-locale-sr.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-sr/server.js                                                                       //
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
// packages/rzymek:moment-locale-sr/locale.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : Serbian-latin (sr)                                                                                      // 2
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
            m: ['jedan minut', 'jedne minute'],                                                                     // 16
            mm: ['minut', 'minute', 'minuta'],                                                                      // 17
            h: ['jedan sat', 'jednog sata'],                                                                        // 18
            hh: ['sat', 'sata', 'sati'],                                                                            // 19
            dd: ['dan', 'dana', 'dana'],                                                                            // 20
            MM: ['mesec', 'meseca', 'meseci'],                                                                      // 21
            yy: ['godina', 'godine', 'godina']                                                                      // 22
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
    return moment.defineLocale('sr', {                                                                              // 37
        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'], // 39
        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],                      // 40
        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],                                    // 41
        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],                                                    // 42
        longDateFormat: {                                                                                           // 43
            LT: 'H:mm',                                                                                             // 44
            LTS : 'LT:ss',                                                                                          // 45
            L: 'DD. MM. YYYY',                                                                                      // 46
            LL: 'D. MMMM YYYY',                                                                                     // 47
            LLL: 'D. MMMM YYYY LT',                                                                                 // 48
            LLLL: 'dddd, D. MMMM YYYY LT'                                                                           // 49
        },                                                                                                          // 50
        calendar: {                                                                                                 // 51
            sameDay: '[danas u] LT',                                                                                // 52
            nextDay: '[sutra u] LT',                                                                                // 53
                                                                                                                    // 54
            nextWeek: function () {                                                                                 // 55
                switch (this.day()) {                                                                               // 56
                case 0:                                                                                             // 57
                    return '[u] [nedelju] [u] LT';                                                                  // 58
                case 3:                                                                                             // 59
                    return '[u] [sredu] [u] LT';                                                                    // 60
                case 6:                                                                                             // 61
                    return '[u] [subotu] [u] LT';                                                                   // 62
                case 1:                                                                                             // 63
                case 2:                                                                                             // 64
                case 4:                                                                                             // 65
                case 5:                                                                                             // 66
                    return '[u] dddd [u] LT';                                                                       // 67
                }                                                                                                   // 68
            },                                                                                                      // 69
            lastDay  : '[juče u] LT',                                                                               // 70
            lastWeek : function () {                                                                                // 71
                var lastWeekDays = [                                                                                // 72
                    '[prošle] [nedelje] [u] LT',                                                                    // 73
                    '[prošlog] [ponedeljka] [u] LT',                                                                // 74
                    '[prošlog] [utorka] [u] LT',                                                                    // 75
                    '[prošle] [srede] [u] LT',                                                                      // 76
                    '[prošlog] [četvrtka] [u] LT',                                                                  // 77
                    '[prošlog] [petka] [u] LT',                                                                     // 78
                    '[prošle] [subote] [u] LT'                                                                      // 79
                ];                                                                                                  // 80
                return lastWeekDays[this.day()];                                                                    // 81
            },                                                                                                      // 82
            sameElse : 'L'                                                                                          // 83
        },                                                                                                          // 84
        relativeTime : {                                                                                            // 85
            future : 'za %s',                                                                                       // 86
            past   : 'pre %s',                                                                                      // 87
            s      : 'nekoliko sekundi',                                                                            // 88
            m      : translator.translate,                                                                          // 89
            mm     : translator.translate,                                                                          // 90
            h      : translator.translate,                                                                          // 91
            hh     : translator.translate,                                                                          // 92
            d      : 'dan',                                                                                         // 93
            dd     : translator.translate,                                                                          // 94
            M      : 'mesec',                                                                                       // 95
            MM     : translator.translate,                                                                          // 96
            y      : 'godinu',                                                                                      // 97
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
Package['rzymek:moment-locale-sr'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sr.js.map
