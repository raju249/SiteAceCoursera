(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-is/packages/rzymek_moment-locale-is.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-is/server.js                                                                     //   // 5
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
// packages/rzymek:moment-locale-is/locale.js                                                                     //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : icelandic (is)                                                                                        // 2
// author : Hinrik Örn Sigurðsson : https://github.com/hinrik                                                     // 3
                                                                                                                  // 4
(function (factory) {                                                                                             // 5
    if (typeof define === 'function' && define.amd) {                                                             // 6
        define(['moment'], factory); // AMD                                                                       // 7
    } else if (typeof exports === 'object') {                                                                     // 8
        module.exports = factory(require('../moment')); // Node                                                   // 9
    } else {                                                                                                      // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 11
    }                                                                                                             // 12
}(function (moment) {                                                                                             // 13
    function plural(n) {                                                                                          // 14
        if (n % 100 === 11) {                                                                                     // 15
            return true;                                                                                          // 16
        } else if (n % 10 === 1) {                                                                                // 17
            return false;                                                                                         // 18
        }                                                                                                         // 19
        return true;                                                                                              // 20
    }                                                                                                             // 21
                                                                                                                  // 22
    function translate(number, withoutSuffix, key, isFuture) {                                                    // 23
        var result = number + ' ';                                                                                // 24
        switch (key) {                                                                                            // 25
        case 's':                                                                                                 // 26
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';                           // 27
        case 'm':                                                                                                 // 28
            return withoutSuffix ? 'mínúta' : 'mínútu';                                                           // 29
        case 'mm':                                                                                                // 30
            if (plural(number)) {                                                                                 // 31
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');                              // 32
            } else if (withoutSuffix) {                                                                           // 33
                return result + 'mínúta';                                                                         // 34
            }                                                                                                     // 35
            return result + 'mínútu';                                                                             // 36
        case 'hh':                                                                                                // 37
            if (plural(number)) {                                                                                 // 38
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');                  // 39
            }                                                                                                     // 40
            return result + 'klukkustund';                                                                        // 41
        case 'd':                                                                                                 // 42
            if (withoutSuffix) {                                                                                  // 43
                return 'dagur';                                                                                   // 44
            }                                                                                                     // 45
            return isFuture ? 'dag' : 'degi';                                                                     // 46
        case 'dd':                                                                                                // 47
            if (plural(number)) {                                                                                 // 48
                if (withoutSuffix) {                                                                              // 49
                    return result + 'dagar';                                                                      // 50
                }                                                                                                 // 51
                return result + (isFuture ? 'daga' : 'dögum');                                                    // 52
            } else if (withoutSuffix) {                                                                           // 53
                return result + 'dagur';                                                                          // 54
            }                                                                                                     // 55
            return result + (isFuture ? 'dag' : 'degi');                                                          // 56
        case 'M':                                                                                                 // 57
            if (withoutSuffix) {                                                                                  // 58
                return 'mánuður';                                                                                 // 59
            }                                                                                                     // 60
            return isFuture ? 'mánuð' : 'mánuði';                                                                 // 61
        case 'MM':                                                                                                // 62
            if (plural(number)) {                                                                                 // 63
                if (withoutSuffix) {                                                                              // 64
                    return result + 'mánuðir';                                                                    // 65
                }                                                                                                 // 66
                return result + (isFuture ? 'mánuði' : 'mánuðum');                                                // 67
            } else if (withoutSuffix) {                                                                           // 68
                return result + 'mánuður';                                                                        // 69
            }                                                                                                     // 70
            return result + (isFuture ? 'mánuð' : 'mánuði');                                                      // 71
        case 'y':                                                                                                 // 72
            return withoutSuffix || isFuture ? 'ár' : 'ári';                                                      // 73
        case 'yy':                                                                                                // 74
            if (plural(number)) {                                                                                 // 75
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');                                      // 76
            }                                                                                                     // 77
            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');                                           // 78
        }                                                                                                         // 79
    }                                                                                                             // 80
                                                                                                                  // 81
    return moment.defineLocale('is', {                                                                            // 82
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),  // 83
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),                               // 84
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'), // 85
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),                                                 // 86
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),                                                          // 87
        longDateFormat : {                                                                                        // 88
            LT : 'H:mm',                                                                                          // 89
            LTS : 'LT:ss',                                                                                        // 90
            L : 'DD/MM/YYYY',                                                                                     // 91
            LL : 'D. MMMM YYYY',                                                                                  // 92
            LLL : 'D. MMMM YYYY [kl.] LT',                                                                        // 93
            LLLL : 'dddd, D. MMMM YYYY [kl.] LT'                                                                  // 94
        },                                                                                                        // 95
        calendar : {                                                                                              // 96
            sameDay : '[í dag kl.] LT',                                                                           // 97
            nextDay : '[á morgun kl.] LT',                                                                        // 98
            nextWeek : 'dddd [kl.] LT',                                                                           // 99
            lastDay : '[í gær kl.] LT',                                                                           // 100
            lastWeek : '[síðasta] dddd [kl.] LT',                                                                 // 101
            sameElse : 'L'                                                                                        // 102
        },                                                                                                        // 103
        relativeTime : {                                                                                          // 104
            future : 'eftir %s',                                                                                  // 105
            past : 'fyrir %s síðan',                                                                              // 106
            s : translate,                                                                                        // 107
            m : translate,                                                                                        // 108
            mm : translate,                                                                                       // 109
            h : 'klukkustund',                                                                                    // 110
            hh : translate,                                                                                       // 111
            d : translate,                                                                                        // 112
            dd : translate,                                                                                       // 113
            M : translate,                                                                                        // 114
            MM : translate,                                                                                       // 115
            y : translate,                                                                                        // 116
            yy : translate                                                                                        // 117
        },                                                                                                        // 118
        ordinalParse: /\d{1,2}\./,                                                                                // 119
        ordinal : '%d.',                                                                                          // 120
        week : {                                                                                                  // 121
            dow : 1, // Monday is the first day of the week.                                                      // 122
            doy : 4  // The week that contains Jan 4th is the first week of the year.                             // 123
        }                                                                                                         // 124
    });                                                                                                           // 125
}));                                                                                                              // 126
                                                                                                                  // 127
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 155
                                                                                                                       // 156
}).call(this);                                                                                                         // 157
                                                                                                                       // 158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-is'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-is.js.map
