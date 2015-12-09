(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-sl/packages/rzymek_moment-locale-sl //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-sl/server.js                                                                        //
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
// packages/rzymek:moment-locale-sl/locale.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : slovenian (sl)                                                                                           // 2
// author : Robert Sedovšek : https://github.com/sedovsek                                                            // 3
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
    function translate(number, withoutSuffix, key) {                                                                 // 14
        var result = number + ' ';                                                                                   // 15
        switch (key) {                                                                                               // 16
        case 'm':                                                                                                    // 17
            return withoutSuffix ? 'ena minuta' : 'eno minuto';                                                      // 18
        case 'mm':                                                                                                   // 19
            if (number === 1) {                                                                                      // 20
                result += 'minuta';                                                                                  // 21
            } else if (number === 2) {                                                                               // 22
                result += 'minuti';                                                                                  // 23
            } else if (number === 3 || number === 4) {                                                               // 24
                result += 'minute';                                                                                  // 25
            } else {                                                                                                 // 26
                result += 'minut';                                                                                   // 27
            }                                                                                                        // 28
            return result;                                                                                           // 29
        case 'h':                                                                                                    // 30
            return withoutSuffix ? 'ena ura' : 'eno uro';                                                            // 31
        case 'hh':                                                                                                   // 32
            if (number === 1) {                                                                                      // 33
                result += 'ura';                                                                                     // 34
            } else if (number === 2) {                                                                               // 35
                result += 'uri';                                                                                     // 36
            } else if (number === 3 || number === 4) {                                                               // 37
                result += 'ure';                                                                                     // 38
            } else {                                                                                                 // 39
                result += 'ur';                                                                                      // 40
            }                                                                                                        // 41
            return result;                                                                                           // 42
        case 'dd':                                                                                                   // 43
            if (number === 1) {                                                                                      // 44
                result += 'dan';                                                                                     // 45
            } else {                                                                                                 // 46
                result += 'dni';                                                                                     // 47
            }                                                                                                        // 48
            return result;                                                                                           // 49
        case 'MM':                                                                                                   // 50
            if (number === 1) {                                                                                      // 51
                result += 'mesec';                                                                                   // 52
            } else if (number === 2) {                                                                               // 53
                result += 'meseca';                                                                                  // 54
            } else if (number === 3 || number === 4) {                                                               // 55
                result += 'mesece';                                                                                  // 56
            } else {                                                                                                 // 57
                result += 'mesecev';                                                                                 // 58
            }                                                                                                        // 59
            return result;                                                                                           // 60
        case 'yy':                                                                                                   // 61
            if (number === 1) {                                                                                      // 62
                result += 'leto';                                                                                    // 63
            } else if (number === 2) {                                                                               // 64
                result += 'leti';                                                                                    // 65
            } else if (number === 3 || number === 4) {                                                               // 66
                result += 'leta';                                                                                    // 67
            } else {                                                                                                 // 68
                result += 'let';                                                                                     // 69
            }                                                                                                        // 70
            return result;                                                                                           // 71
        }                                                                                                            // 72
    }                                                                                                                // 73
                                                                                                                     // 74
    return moment.defineLocale('sl', {                                                                               // 75
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'), // 76
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),                      // 77
        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),                                 // 78
        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),                                             // 79
        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),                                                             // 80
        longDateFormat : {                                                                                           // 81
            LT : 'H:mm',                                                                                             // 82
            LTS : 'LT:ss',                                                                                           // 83
            L : 'DD. MM. YYYY',                                                                                      // 84
            LL : 'D. MMMM YYYY',                                                                                     // 85
            LLL : 'D. MMMM YYYY LT',                                                                                 // 86
            LLLL : 'dddd, D. MMMM YYYY LT'                                                                           // 87
        },                                                                                                           // 88
        calendar : {                                                                                                 // 89
            sameDay  : '[danes ob] LT',                                                                              // 90
            nextDay  : '[jutri ob] LT',                                                                              // 91
                                                                                                                     // 92
            nextWeek : function () {                                                                                 // 93
                switch (this.day()) {                                                                                // 94
                case 0:                                                                                              // 95
                    return '[v] [nedeljo] [ob] LT';                                                                  // 96
                case 3:                                                                                              // 97
                    return '[v] [sredo] [ob] LT';                                                                    // 98
                case 6:                                                                                              // 99
                    return '[v] [soboto] [ob] LT';                                                                   // 100
                case 1:                                                                                              // 101
                case 2:                                                                                              // 102
                case 4:                                                                                              // 103
                case 5:                                                                                              // 104
                    return '[v] dddd [ob] LT';                                                                       // 105
                }                                                                                                    // 106
            },                                                                                                       // 107
            lastDay  : '[včeraj ob] LT',                                                                             // 108
            lastWeek : function () {                                                                                 // 109
                switch (this.day()) {                                                                                // 110
                case 0:                                                                                              // 111
                case 3:                                                                                              // 112
                case 6:                                                                                              // 113
                    return '[prejšnja] dddd [ob] LT';                                                                // 114
                case 1:                                                                                              // 115
                case 2:                                                                                              // 116
                case 4:                                                                                              // 117
                case 5:                                                                                              // 118
                    return '[prejšnji] dddd [ob] LT';                                                                // 119
                }                                                                                                    // 120
            },                                                                                                       // 121
            sameElse : 'L'                                                                                           // 122
        },                                                                                                           // 123
        relativeTime : {                                                                                             // 124
            future : 'čez %s',                                                                                       // 125
            past   : '%s nazaj',                                                                                     // 126
            s      : 'nekaj sekund',                                                                                 // 127
            m      : translate,                                                                                      // 128
            mm     : translate,                                                                                      // 129
            h      : translate,                                                                                      // 130
            hh     : translate,                                                                                      // 131
            d      : 'en dan',                                                                                       // 132
            dd     : translate,                                                                                      // 133
            M      : 'en mesec',                                                                                     // 134
            MM     : translate,                                                                                      // 135
            y      : 'eno leto',                                                                                     // 136
            yy     : translate                                                                                       // 137
        },                                                                                                           // 138
        ordinalParse: /\d{1,2}\./,                                                                                   // 139
        ordinal : '%d.',                                                                                             // 140
        week : {                                                                                                     // 141
            dow : 1, // Monday is the first day of the week.                                                         // 142
            doy : 7  // The week that contains Jan 1st is the first week of the year.                                // 143
        }                                                                                                            // 144
    });                                                                                                              // 145
}));                                                                                                                 // 146
                                                                                                                     // 147
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 176
}).call(this);                                                       // 177
                                                                     // 178
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-sl'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sl.js.map
