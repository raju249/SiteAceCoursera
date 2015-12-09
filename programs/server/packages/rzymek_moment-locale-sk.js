(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-sk/packages/rzymek_moment-locale-sk.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/rzymek:moment-locale-sk/server.js                                                                    //    // 5
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
// packages/rzymek:moment-locale-sk/locale.js                                                                    //    // 24
//                                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                 //    // 27
// moment.js locale configuration                                                                                // 1  // 28
// locale : slovak (sk)                                                                                          // 2  // 29
// author : Martin Minka : https://github.com/k2s                                                                // 3  // 30
// based on work of petrbela : https://github.com/petrbela                                                       // 4  // 31
                                                                                                                 // 5  // 32
(function (factory) {                                                                                            // 6  // 33
    if (typeof define === 'function' && define.amd) {                                                            // 7  // 34
        define(['moment'], factory); // AMD                                                                      // 8  // 35
    } else if (typeof exports === 'object') {                                                                    // 9  // 36
        module.exports = factory(require('../moment')); // Node                                                  // 10
    } else {                                                                                                     // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                 // 12
    }                                                                                                            // 13
}(function (moment) {                                                                                            // 14
    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'), // 15
        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');                              // 16
                                                                                                                 // 17
    function plural(n) {                                                                                         // 18
        return (n > 1) && (n < 5);                                                                               // 19
    }                                                                                                            // 20
                                                                                                                 // 21
    function translate(number, withoutSuffix, key, isFuture) {                                                   // 22
        var result = number + ' ';                                                                               // 23
        switch (key) {                                                                                           // 24
        case 's':  // a few seconds / in a few seconds / a few seconds ago                                       // 25
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';                                 // 26
        case 'm':  // a minute / in a minute / a minute ago                                                      // 27
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');                                 // 28
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago                                                   // 29
            if (withoutSuffix || isFuture) {                                                                     // 30
                return result + (plural(number) ? 'minúty' : 'minút');                                           // 31
            } else {                                                                                             // 32
                return result + 'minútami';                                                                      // 33
            }                                                                                                    // 34
            break;                                                                                               // 35
        case 'h':  // an hour / in an hour / an hour ago                                                         // 36
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');                                 // 37
        case 'hh': // 9 hours / in 9 hours / 9 hours ago                                                         // 38
            if (withoutSuffix || isFuture) {                                                                     // 39
                return result + (plural(number) ? 'hodiny' : 'hodín');                                           // 40
            } else {                                                                                             // 41
                return result + 'hodinami';                                                                      // 42
            }                                                                                                    // 43
            break;                                                                                               // 44
        case 'd':  // a day / in a day / a day ago                                                               // 45
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';                                                 // 46
        case 'dd': // 9 days / in 9 days / 9 days ago                                                            // 47
            if (withoutSuffix || isFuture) {                                                                     // 48
                return result + (plural(number) ? 'dni' : 'dní');                                                // 49
            } else {                                                                                             // 50
                return result + 'dňami';                                                                         // 51
            }                                                                                                    // 52
            break;                                                                                               // 53
        case 'M':  // a month / in a month / a month ago                                                         // 54
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';                                          // 55
        case 'MM': // 9 months / in 9 months / 9 months ago                                                      // 56
            if (withoutSuffix || isFuture) {                                                                     // 57
                return result + (plural(number) ? 'mesiace' : 'mesiacov');                                       // 58
            } else {                                                                                             // 59
                return result + 'mesiacmi';                                                                      // 60
            }                                                                                                    // 61
            break;                                                                                               // 62
        case 'y':  // a year / in a year / a year ago                                                            // 63
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';                                                // 64
        case 'yy': // 9 years / in 9 years / 9 years ago                                                         // 65
            if (withoutSuffix || isFuture) {                                                                     // 66
                return result + (plural(number) ? 'roky' : 'rokov');                                             // 67
            } else {                                                                                             // 68
                return result + 'rokmi';                                                                         // 69
            }                                                                                                    // 70
            break;                                                                                               // 71
        }                                                                                                        // 72
    }                                                                                                            // 73
                                                                                                                 // 74
    return moment.defineLocale('sk', {                                                                           // 75
        months : months,                                                                                         // 76
        monthsShort : monthsShort,                                                                               // 77
        monthsParse : (function (months, monthsShort) {                                                          // 78
            var i, _monthsParse = [];                                                                            // 79
            for (i = 0; i < 12; i++) {                                                                           // 80
                // use custom parser to solve problem with July (červenec)                                       // 81
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');               // 82
            }                                                                                                    // 83
            return _monthsParse;                                                                                 // 84
        }(months, monthsShort)),                                                                                 // 85
        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),                             // 86
        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),                                                       // 87
        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),                                                         // 88
        longDateFormat : {                                                                                       // 89
            LT: 'H:mm',                                                                                          // 90
            LTS : 'LT:ss',                                                                                       // 91
            L : 'DD.MM.YYYY',                                                                                    // 92
            LL : 'D. MMMM YYYY',                                                                                 // 93
            LLL : 'D. MMMM YYYY LT',                                                                             // 94
            LLLL : 'dddd D. MMMM YYYY LT'                                                                        // 95
        },                                                                                                       // 96
        calendar : {                                                                                             // 97
            sameDay: '[dnes o] LT',                                                                              // 98
            nextDay: '[zajtra o] LT',                                                                            // 99
            nextWeek: function () {                                                                              // 100
                switch (this.day()) {                                                                            // 101
                case 0:                                                                                          // 102
                    return '[v nedeľu o] LT';                                                                    // 103
                case 1:                                                                                          // 104
                case 2:                                                                                          // 105
                    return '[v] dddd [o] LT';                                                                    // 106
                case 3:                                                                                          // 107
                    return '[v stredu o] LT';                                                                    // 108
                case 4:                                                                                          // 109
                    return '[vo štvrtok o] LT';                                                                  // 110
                case 5:                                                                                          // 111
                    return '[v piatok o] LT';                                                                    // 112
                case 6:                                                                                          // 113
                    return '[v sobotu o] LT';                                                                    // 114
                }                                                                                                // 115
            },                                                                                                   // 116
            lastDay: '[včera o] LT',                                                                             // 117
            lastWeek: function () {                                                                              // 118
                switch (this.day()) {                                                                            // 119
                case 0:                                                                                          // 120
                    return '[minulú nedeľu o] LT';                                                               // 121
                case 1:                                                                                          // 122
                case 2:                                                                                          // 123
                    return '[minulý] dddd [o] LT';                                                               // 124
                case 3:                                                                                          // 125
                    return '[minulú stredu o] LT';                                                               // 126
                case 4:                                                                                          // 127
                case 5:                                                                                          // 128
                    return '[minulý] dddd [o] LT';                                                               // 129
                case 6:                                                                                          // 130
                    return '[minulú sobotu o] LT';                                                               // 131
                }                                                                                                // 132
            },                                                                                                   // 133
            sameElse: 'L'                                                                                        // 134
        },                                                                                                       // 135
        relativeTime : {                                                                                         // 136
            future : 'za %s',                                                                                    // 137
            past : 'pred %s',                                                                                    // 138
            s : translate,                                                                                       // 139
            m : translate,                                                                                       // 140
            mm : translate,                                                                                      // 141
            h : translate,                                                                                       // 142
            hh : translate,                                                                                      // 143
            d : translate,                                                                                       // 144
            dd : translate,                                                                                      // 145
            M : translate,                                                                                       // 146
            MM : translate,                                                                                      // 147
            y : translate,                                                                                       // 148
            yy : translate                                                                                       // 149
        },                                                                                                       // 150
        ordinalParse: /\d{1,2}\./,                                                                               // 151
        ordinal : '%d.',                                                                                         // 152
        week : {                                                                                                 // 153
            dow : 1, // Monday is the first day of the week.                                                     // 154
            doy : 4  // The week that contains Jan 4th is the first week of the year.                            // 155
        }                                                                                                        // 156
    });                                                                                                          // 157
}));                                                                                                             // 158
                                                                                                                 // 159
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 187
                                                                                                                       // 188
}).call(this);                                                                                                         // 189
                                                                                                                       // 190
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-sk'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sk.js.map
