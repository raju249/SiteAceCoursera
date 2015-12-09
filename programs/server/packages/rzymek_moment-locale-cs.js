(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-cs/packages/rzymek_moment-locale-cs.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/rzymek:moment-locale-cs/server.js                                                                    //    // 5
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
// packages/rzymek:moment-locale-cs/locale.js                                                                    //    // 24
//                                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                 //    // 27
// moment.js locale configuration                                                                                // 1  // 28
// locale : czech (cs)                                                                                           // 2  // 29
// author : petrbela : https://github.com/petrbela                                                               // 3  // 30
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
    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'), // 14
        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');                              // 15
                                                                                                                 // 16
    function plural(n) {                                                                                         // 17
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);                                                         // 18
    }                                                                                                            // 19
                                                                                                                 // 20
    function translate(number, withoutSuffix, key, isFuture) {                                                   // 21
        var result = number + ' ';                                                                               // 22
        switch (key) {                                                                                           // 23
        case 's':  // a few seconds / in a few seconds / a few seconds ago                                       // 24
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';                                 // 25
        case 'm':  // a minute / in a minute / a minute ago                                                      // 26
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');                                 // 27
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago                                                   // 28
            if (withoutSuffix || isFuture) {                                                                     // 29
                return result + (plural(number) ? 'minuty' : 'minut');                                           // 30
            } else {                                                                                             // 31
                return result + 'minutami';                                                                      // 32
            }                                                                                                    // 33
            break;                                                                                               // 34
        case 'h':  // an hour / in an hour / an hour ago                                                         // 35
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');                                 // 36
        case 'hh': // 9 hours / in 9 hours / 9 hours ago                                                         // 37
            if (withoutSuffix || isFuture) {                                                                     // 38
                return result + (plural(number) ? 'hodiny' : 'hodin');                                           // 39
            } else {                                                                                             // 40
                return result + 'hodinami';                                                                      // 41
            }                                                                                                    // 42
            break;                                                                                               // 43
        case 'd':  // a day / in a day / a day ago                                                               // 44
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';                                                 // 45
        case 'dd': // 9 days / in 9 days / 9 days ago                                                            // 46
            if (withoutSuffix || isFuture) {                                                                     // 47
                return result + (plural(number) ? 'dny' : 'dní');                                                // 48
            } else {                                                                                             // 49
                return result + 'dny';                                                                           // 50
            }                                                                                                    // 51
            break;                                                                                               // 52
        case 'M':  // a month / in a month / a month ago                                                         // 53
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';                                            // 54
        case 'MM': // 9 months / in 9 months / 9 months ago                                                      // 55
            if (withoutSuffix || isFuture) {                                                                     // 56
                return result + (plural(number) ? 'měsíce' : 'měsíců');                                          // 57
            } else {                                                                                             // 58
                return result + 'měsíci';                                                                        // 59
            }                                                                                                    // 60
            break;                                                                                               // 61
        case 'y':  // a year / in a year / a year ago                                                            // 62
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';                                                // 63
        case 'yy': // 9 years / in 9 years / 9 years ago                                                         // 64
            if (withoutSuffix || isFuture) {                                                                     // 65
                return result + (plural(number) ? 'roky' : 'let');                                               // 66
            } else {                                                                                             // 67
                return result + 'lety';                                                                          // 68
            }                                                                                                    // 69
            break;                                                                                               // 70
        }                                                                                                        // 71
    }                                                                                                            // 72
                                                                                                                 // 73
    return moment.defineLocale('cs', {                                                                           // 74
        months : months,                                                                                         // 75
        monthsShort : monthsShort,                                                                               // 76
        monthsParse : (function (months, monthsShort) {                                                          // 77
            var i, _monthsParse = [];                                                                            // 78
            for (i = 0; i < 12; i++) {                                                                           // 79
                // use custom parser to solve problem with July (červenec)                                       // 80
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');               // 81
            }                                                                                                    // 82
            return _monthsParse;                                                                                 // 83
        }(months, monthsShort)),                                                                                 // 84
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),                                // 85
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),                                                       // 86
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),                                                         // 87
        longDateFormat : {                                                                                       // 88
            LT: 'H:mm',                                                                                          // 89
            LTS : 'LT:ss',                                                                                       // 90
            L : 'DD.MM.YYYY',                                                                                    // 91
            LL : 'D. MMMM YYYY',                                                                                 // 92
            LLL : 'D. MMMM YYYY LT',                                                                             // 93
            LLLL : 'dddd D. MMMM YYYY LT'                                                                        // 94
        },                                                                                                       // 95
        calendar : {                                                                                             // 96
            sameDay: '[dnes v] LT',                                                                              // 97
            nextDay: '[zítra v] LT',                                                                             // 98
            nextWeek: function () {                                                                              // 99
                switch (this.day()) {                                                                            // 100
                case 0:                                                                                          // 101
                    return '[v neděli v] LT';                                                                    // 102
                case 1:                                                                                          // 103
                case 2:                                                                                          // 104
                    return '[v] dddd [v] LT';                                                                    // 105
                case 3:                                                                                          // 106
                    return '[ve středu v] LT';                                                                   // 107
                case 4:                                                                                          // 108
                    return '[ve čtvrtek v] LT';                                                                  // 109
                case 5:                                                                                          // 110
                    return '[v pátek v] LT';                                                                     // 111
                case 6:                                                                                          // 112
                    return '[v sobotu v] LT';                                                                    // 113
                }                                                                                                // 114
            },                                                                                                   // 115
            lastDay: '[včera v] LT',                                                                             // 116
            lastWeek: function () {                                                                              // 117
                switch (this.day()) {                                                                            // 118
                case 0:                                                                                          // 119
                    return '[minulou neděli v] LT';                                                              // 120
                case 1:                                                                                          // 121
                case 2:                                                                                          // 122
                    return '[minulé] dddd [v] LT';                                                               // 123
                case 3:                                                                                          // 124
                    return '[minulou středu v] LT';                                                              // 125
                case 4:                                                                                          // 126
                case 5:                                                                                          // 127
                    return '[minulý] dddd [v] LT';                                                               // 128
                case 6:                                                                                          // 129
                    return '[minulou sobotu v] LT';                                                              // 130
                }                                                                                                // 131
            },                                                                                                   // 132
            sameElse: 'L'                                                                                        // 133
        },                                                                                                       // 134
        relativeTime : {                                                                                         // 135
            future : 'za %s',                                                                                    // 136
            past : 'před %s',                                                                                    // 137
            s : translate,                                                                                       // 138
            m : translate,                                                                                       // 139
            mm : translate,                                                                                      // 140
            h : translate,                                                                                       // 141
            hh : translate,                                                                                      // 142
            d : translate,                                                                                       // 143
            dd : translate,                                                                                      // 144
            M : translate,                                                                                       // 145
            MM : translate,                                                                                      // 146
            y : translate,                                                                                       // 147
            yy : translate                                                                                       // 148
        },                                                                                                       // 149
        ordinalParse : /\d{1,2}\./,                                                                              // 150
        ordinal : '%d.',                                                                                         // 151
        week : {                                                                                                 // 152
            dow : 1, // Monday is the first day of the week.                                                     // 153
            doy : 4  // The week that contains Jan 4th is the first week of the year.                            // 154
        }                                                                                                        // 155
    });                                                                                                          // 156
}));                                                                                                             // 157
                                                                                                                 // 158
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 186
                                                                                                                       // 187
}).call(this);                                                                                                         // 188
                                                                                                                       // 189
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-cs'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-cs.js.map
