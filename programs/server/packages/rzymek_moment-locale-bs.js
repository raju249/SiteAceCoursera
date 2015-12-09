(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-bs/packages/rzymek_moment-locale-bs.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-bs/server.js                                                                     //   // 5
//                                                                                                                //   // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 7
                                                                                                                  //   // 8
global.moment = moment;                                                                                           // 1
                                                                                                                  // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 11
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 22
//                                                                                                                //   // 23
// packages/rzymek:moment-locale-bs/locale.js                                                                     //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : bosnian (bs)                                                                                          // 2
// author : Nedim Cholich : https://github.com/frontyard                                                          // 3
// based on (hr) translation by Bojan Marković                                                                    // 4
                                                                                                                  // 5
(function (factory) {                                                                                             // 6
    if (typeof define === 'function' && define.amd) {                                                             // 7
        define(['moment'], factory); // AMD                                                                       // 8
    } else if (typeof exports === 'object') {                                                                     // 9
        module.exports = factory(require('../moment')); // Node                                                   // 10
    } else {                                                                                                      // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 12
    }                                                                                                             // 13
}(function (moment) {                                                                                             // 14
    function translate(number, withoutSuffix, key) {                                                              // 15
        var result = number + ' ';                                                                                // 16
        switch (key) {                                                                                            // 17
        case 'm':                                                                                                 // 18
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';                                               // 19
        case 'mm':                                                                                                // 20
            if (number === 1) {                                                                                   // 21
                result += 'minuta';                                                                               // 22
            } else if (number === 2 || number === 3 || number === 4) {                                            // 23
                result += 'minute';                                                                               // 24
            } else {                                                                                              // 25
                result += 'minuta';                                                                               // 26
            }                                                                                                     // 27
            return result;                                                                                        // 28
        case 'h':                                                                                                 // 29
            return withoutSuffix ? 'jedan sat' : 'jednog sata';                                                   // 30
        case 'hh':                                                                                                // 31
            if (number === 1) {                                                                                   // 32
                result += 'sat';                                                                                  // 33
            } else if (number === 2 || number === 3 || number === 4) {                                            // 34
                result += 'sata';                                                                                 // 35
            } else {                                                                                              // 36
                result += 'sati';                                                                                 // 37
            }                                                                                                     // 38
            return result;                                                                                        // 39
        case 'dd':                                                                                                // 40
            if (number === 1) {                                                                                   // 41
                result += 'dan';                                                                                  // 42
            } else {                                                                                              // 43
                result += 'dana';                                                                                 // 44
            }                                                                                                     // 45
            return result;                                                                                        // 46
        case 'MM':                                                                                                // 47
            if (number === 1) {                                                                                   // 48
                result += 'mjesec';                                                                               // 49
            } else if (number === 2 || number === 3 || number === 4) {                                            // 50
                result += 'mjeseca';                                                                              // 51
            } else {                                                                                              // 52
                result += 'mjeseci';                                                                              // 53
            }                                                                                                     // 54
            return result;                                                                                        // 55
        case 'yy':                                                                                                // 56
            if (number === 1) {                                                                                   // 57
                result += 'godina';                                                                               // 58
            } else if (number === 2 || number === 3 || number === 4) {                                            // 59
                result += 'godine';                                                                               // 60
            } else {                                                                                              // 61
                result += 'godina';                                                                               // 62
            }                                                                                                     // 63
            return result;                                                                                        // 64
        }                                                                                                         // 65
    }                                                                                                             // 66
                                                                                                                  // 67
    return moment.defineLocale('bs', {                                                                            // 68
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'), // 69
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),                   // 70
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),                        // 71
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),                                          // 72
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),                                                          // 73
        longDateFormat : {                                                                                        // 74
            LT : 'H:mm',                                                                                          // 75
            LTS : 'LT:ss',                                                                                        // 76
            L : 'DD. MM. YYYY',                                                                                   // 77
            LL : 'D. MMMM YYYY',                                                                                  // 78
            LLL : 'D. MMMM YYYY LT',                                                                              // 79
            LLLL : 'dddd, D. MMMM YYYY LT'                                                                        // 80
        },                                                                                                        // 81
        calendar : {                                                                                              // 82
            sameDay  : '[danas u] LT',                                                                            // 83
            nextDay  : '[sutra u] LT',                                                                            // 84
                                                                                                                  // 85
            nextWeek : function () {                                                                              // 86
                switch (this.day()) {                                                                             // 87
                case 0:                                                                                           // 88
                    return '[u] [nedjelju] [u] LT';                                                               // 89
                case 3:                                                                                           // 90
                    return '[u] [srijedu] [u] LT';                                                                // 91
                case 6:                                                                                           // 92
                    return '[u] [subotu] [u] LT';                                                                 // 93
                case 1:                                                                                           // 94
                case 2:                                                                                           // 95
                case 4:                                                                                           // 96
                case 5:                                                                                           // 97
                    return '[u] dddd [u] LT';                                                                     // 98
                }                                                                                                 // 99
            },                                                                                                    // 100
            lastDay  : '[jučer u] LT',                                                                            // 101
            lastWeek : function () {                                                                              // 102
                switch (this.day()) {                                                                             // 103
                case 0:                                                                                           // 104
                case 3:                                                                                           // 105
                    return '[prošlu] dddd [u] LT';                                                                // 106
                case 6:                                                                                           // 107
                    return '[prošle] [subote] [u] LT';                                                            // 108
                case 1:                                                                                           // 109
                case 2:                                                                                           // 110
                case 4:                                                                                           // 111
                case 5:                                                                                           // 112
                    return '[prošli] dddd [u] LT';                                                                // 113
                }                                                                                                 // 114
            },                                                                                                    // 115
            sameElse : 'L'                                                                                        // 116
        },                                                                                                        // 117
        relativeTime : {                                                                                          // 118
            future : 'za %s',                                                                                     // 119
            past   : 'prije %s',                                                                                  // 120
            s      : 'par sekundi',                                                                               // 121
            m      : translate,                                                                                   // 122
            mm     : translate,                                                                                   // 123
            h      : translate,                                                                                   // 124
            hh     : translate,                                                                                   // 125
            d      : 'dan',                                                                                       // 126
            dd     : translate,                                                                                   // 127
            M      : 'mjesec',                                                                                    // 128
            MM     : translate,                                                                                   // 129
            y      : 'godinu',                                                                                    // 130
            yy     : translate                                                                                    // 131
        },                                                                                                        // 132
        ordinalParse: /\d{1,2}\./,                                                                                // 133
        ordinal : '%d.',                                                                                          // 134
        week : {                                                                                                  // 135
            dow : 1, // Monday is the first day of the week.                                                      // 136
            doy : 7  // The week that contains Jan 1st is the first week of the year.                             // 137
        }                                                                                                         // 138
    });                                                                                                           // 139
}));                                                                                                              // 140
                                                                                                                  // 141
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 169
                                                                                                                       // 170
}).call(this);                                                                                                         // 171
                                                                                                                       // 172
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-bs'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-bs.js.map
