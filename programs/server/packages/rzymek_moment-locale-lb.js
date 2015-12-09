(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek_moment-locale-lb/packages/rzymek_moment-locale-lb.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-lb/server.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
global.moment = moment;                                                                                            // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 12
}).call(this);                                                                                                        // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      // 16
                                                                                                                      // 17
                                                                                                                      // 18
                                                                                                                      // 19
(function () {                                                                                                        // 20
                                                                                                                      // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-lb/locale.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// moment.js locale configuration                                                                                  // 1
// locale : Luxembourgish (lb)                                                                                     // 2
// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz            // 3
                                                                                                                   // 4
// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the                   // 5
// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'                   // 6
// and 'eifelerRegelAppliesToNumber' methods are meant for                                                         // 7
                                                                                                                   // 8
(function (factory) {                                                                                              // 9
    if (typeof define === 'function' && define.amd) {                                                              // 10
        define(['moment'], factory); // AMD                                                                        // 11
    } else if (typeof exports === 'object') {                                                                      // 12
        module.exports = factory(require('../moment')); // Node                                                    // 13
    } else {                                                                                                       // 14
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                   // 15
    }                                                                                                              // 16
}(function (moment) {                                                                                              // 17
    function processRelativeTime(number, withoutSuffix, key, isFuture) {                                           // 18
        var format = {                                                                                             // 19
            'm': ['eng Minutt', 'enger Minutt'],                                                                   // 20
            'h': ['eng Stonn', 'enger Stonn'],                                                                     // 21
            'd': ['een Dag', 'engem Dag'],                                                                         // 22
            'M': ['ee Mount', 'engem Mount'],                                                                      // 23
            'y': ['ee Joer', 'engem Joer']                                                                         // 24
        };                                                                                                         // 25
        return withoutSuffix ? format[key][0] : format[key][1];                                                    // 26
    }                                                                                                              // 27
                                                                                                                   // 28
    function processFutureTime(string) {                                                                           // 29
        var number = string.substr(0, string.indexOf(' '));                                                        // 30
        if (eifelerRegelAppliesToNumber(number)) {                                                                 // 31
            return 'a ' + string;                                                                                  // 32
        }                                                                                                          // 33
        return 'an ' + string;                                                                                     // 34
    }                                                                                                              // 35
                                                                                                                   // 36
    function processPastTime(string) {                                                                             // 37
        var number = string.substr(0, string.indexOf(' '));                                                        // 38
        if (eifelerRegelAppliesToNumber(number)) {                                                                 // 39
            return 'viru ' + string;                                                                               // 40
        }                                                                                                          // 41
        return 'virun ' + string;                                                                                  // 42
    }                                                                                                              // 43
                                                                                                                   // 44
    /**                                                                                                            // 45
     * Returns true if the word before the given number loses the '-n' ending.                                     // 46
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'                                                                            // 47
     *                                                                                                             // 48
     * @param number {integer}                                                                                     // 49
     * @returns {boolean}                                                                                          // 50
     */                                                                                                            // 51
    function eifelerRegelAppliesToNumber(number) {                                                                 // 52
        number = parseInt(number, 10);                                                                             // 53
        if (isNaN(number)) {                                                                                       // 54
            return false;                                                                                          // 55
        }                                                                                                          // 56
        if (number < 0) {                                                                                          // 57
            // Negative Number --> always true                                                                     // 58
            return true;                                                                                           // 59
        } else if (number < 10) {                                                                                  // 60
            // Only 1 digit                                                                                        // 61
            if (4 <= number && number <= 7) {                                                                      // 62
                return true;                                                                                       // 63
            }                                                                                                      // 64
            return false;                                                                                          // 65
        } else if (number < 100) {                                                                                 // 66
            // 2 digits                                                                                            // 67
            var lastDigit = number % 10, firstDigit = number / 10;                                                 // 68
            if (lastDigit === 0) {                                                                                 // 69
                return eifelerRegelAppliesToNumber(firstDigit);                                                    // 70
            }                                                                                                      // 71
            return eifelerRegelAppliesToNumber(lastDigit);                                                         // 72
        } else if (number < 10000) {                                                                               // 73
            // 3 or 4 digits --> recursively check first digit                                                     // 74
            while (number >= 10) {                                                                                 // 75
                number = number / 10;                                                                              // 76
            }                                                                                                      // 77
            return eifelerRegelAppliesToNumber(number);                                                            // 78
        } else {                                                                                                   // 79
            // Anything larger than 4 digits: recursively check first n-3 digits                                   // 80
            number = number / 1000;                                                                                // 81
            return eifelerRegelAppliesToNumber(number);                                                            // 82
        }                                                                                                          // 83
    }                                                                                                              // 84
                                                                                                                   // 85
    return moment.defineLocale('lb', {                                                                             // 86
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'), // 87
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),                    // 88
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),                   // 89
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),                                                   // 90
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),                                                            // 91
        longDateFormat: {                                                                                          // 92
            LT: 'H:mm [Auer]',                                                                                     // 93
            LTS: 'H:mm:ss [Auer]',                                                                                 // 94
            L: 'DD.MM.YYYY',                                                                                       // 95
            LL: 'D. MMMM YYYY',                                                                                    // 96
            LLL: 'D. MMMM YYYY LT',                                                                                // 97
            LLLL: 'dddd, D. MMMM YYYY LT'                                                                          // 98
        },                                                                                                         // 99
        calendar: {                                                                                                // 100
            sameDay: '[Haut um] LT',                                                                               // 101
            sameElse: 'L',                                                                                         // 102
            nextDay: '[Muer um] LT',                                                                               // 103
            nextWeek: 'dddd [um] LT',                                                                              // 104
            lastDay: '[Gëschter um] LT',                                                                           // 105
            lastWeek: function () {                                                                                // 106
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {                                                                              // 108
                    case 2:                                                                                        // 109
                    case 4:                                                                                        // 110
                        return '[Leschten] dddd [um] LT';                                                          // 111
                    default:                                                                                       // 112
                        return '[Leschte] dddd [um] LT';                                                           // 113
                }                                                                                                  // 114
            }                                                                                                      // 115
        },                                                                                                         // 116
        relativeTime : {                                                                                           // 117
            future : processFutureTime,                                                                            // 118
            past : processPastTime,                                                                                // 119
            s : 'e puer Sekonnen',                                                                                 // 120
            m : processRelativeTime,                                                                               // 121
            mm : '%d Minutten',                                                                                    // 122
            h : processRelativeTime,                                                                               // 123
            hh : '%d Stonnen',                                                                                     // 124
            d : processRelativeTime,                                                                               // 125
            dd : '%d Deeg',                                                                                        // 126
            M : processRelativeTime,                                                                               // 127
            MM : '%d Méint',                                                                                       // 128
            y : processRelativeTime,                                                                               // 129
            yy : '%d Joer'                                                                                         // 130
        },                                                                                                         // 131
        ordinalParse: /\d{1,2}\./,                                                                                 // 132
        ordinal: '%d.',                                                                                            // 133
        week: {                                                                                                    // 134
            dow: 1, // Monday is the first day of the week.                                                        // 135
            doy: 4  // The week that contains Jan 4th is the first week of the year.                               // 136
        }                                                                                                          // 137
    });                                                                                                            // 138
}));                                                                                                               // 139
                                                                                                                   // 140
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 169
}).call(this);                                                                                                        // 170
                                                                                                                      // 171
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-lb'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-lb.js.map
