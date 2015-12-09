(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek_moment-locale-az/packages/rzymek_moment-locale-az.js                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                          //     // 4
// packages/rzymek:moment-locale-az/server.js                                                               //     // 5
//                                                                                                          //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                            //     // 8
global.moment = moment;                                                                                     // 1   // 9
                                                                                                            // 2   // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                   // 12
}).call(this);                                                                                                     // 13
                                                                                                                   // 14
                                                                                                                   // 15
                                                                                                                   // 16
                                                                                                                   // 17
                                                                                                                   // 18
                                                                                                                   // 19
(function () {                                                                                                     // 20
                                                                                                                   // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                          //     // 23
// packages/rzymek:moment-locale-az/locale.js                                                               //     // 24
//                                                                                                          //     // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                            //     // 27
// moment.js locale configuration                                                                           // 1   // 28
// locale : azerbaijani (az)                                                                                // 2   // 29
// author : topchiyev : https://github.com/topchiyev                                                        // 3   // 30
                                                                                                            // 4   // 31
(function (factory) {                                                                                       // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                       // 6   // 33
        define(['moment'], factory); // AMD                                                                 // 7   // 34
    } else if (typeof exports === 'object') {                                                               // 8   // 35
        module.exports = factory(require('../moment')); // Node                                             // 9   // 36
    } else {                                                                                                // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global            // 11  // 38
    }                                                                                                       // 12  // 39
}(function (moment) {                                                                                       // 13  // 40
    var suffixes = {                                                                                        // 14  // 41
        1: '-inci',                                                                                         // 15  // 42
        5: '-inci',                                                                                         // 16  // 43
        8: '-inci',                                                                                         // 17  // 44
        70: '-inci',                                                                                        // 18  // 45
        80: '-inci',                                                                                        // 19  // 46
                                                                                                            // 20  // 47
        2: '-nci',                                                                                          // 21  // 48
        7: '-nci',                                                                                          // 22  // 49
        20: '-nci',                                                                                         // 23  // 50
        50: '-nci',                                                                                         // 24  // 51
                                                                                                            // 25  // 52
        3: '-üncü',                                                                                         // 26  // 53
        4: '-üncü',                                                                                         // 27  // 54
        100: '-üncü',                                                                                       // 28  // 55
                                                                                                            // 29  // 56
        6: '-ncı',                                                                                          // 30  // 57
                                                                                                            // 31  // 58
        9: '-uncu',                                                                                         // 32  // 59
        10: '-uncu',                                                                                        // 33  // 60
        30: '-uncu',                                                                                        // 34  // 61
                                                                                                            // 35  // 62
        60: '-ıncı',                                                                                        // 36  // 63
        90: '-ıncı'                                                                                         // 37  // 64
    };                                                                                                      // 38  // 65
    return moment.defineLocale('az', {                                                                      // 39  // 66
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'), // 40  // 67
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),                         // 41  // 68
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),         // 42  // 69
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),                                           // 43  // 70
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),                                                    // 44  // 71
        longDateFormat : {                                                                                  // 45  // 72
            LT : 'HH:mm',                                                                                   // 46  // 73
            LTS : 'LT:ss',                                                                                  // 47  // 74
            L : 'DD.MM.YYYY',                                                                               // 48  // 75
            LL : 'D MMMM YYYY',                                                                             // 49  // 76
            LLL : 'D MMMM YYYY LT',                                                                         // 50  // 77
            LLLL : 'dddd, D MMMM YYYY LT'                                                                   // 51  // 78
        },                                                                                                  // 52  // 79
        calendar : {                                                                                        // 53  // 80
            sameDay : '[bugün saat] LT',                                                                    // 54  // 81
            nextDay : '[sabah saat] LT',                                                                    // 55  // 82
            nextWeek : '[gələn həftə] dddd [saat] LT',                                                      // 56  // 83
            lastDay : '[dünən] LT',                                                                         // 57  // 84
            lastWeek : '[keçən həftə] dddd [saat] LT',                                                      // 58  // 85
            sameElse : 'L'                                                                                  // 59  // 86
        },                                                                                                  // 60  // 87
        relativeTime : {                                                                                    // 61  // 88
            future : '%s sonra',                                                                            // 62  // 89
            past : '%s əvvəl',                                                                              // 63  // 90
            s : 'birneçə saniyyə',                                                                          // 64  // 91
            m : 'bir dəqiqə',                                                                               // 65  // 92
            mm : '%d dəqiqə',                                                                               // 66  // 93
            h : 'bir saat',                                                                                 // 67  // 94
            hh : '%d saat',                                                                                 // 68  // 95
            d : 'bir gün',                                                                                  // 69  // 96
            dd : '%d gün',                                                                                  // 70  // 97
            M : 'bir ay',                                                                                   // 71  // 98
            MM : '%d ay',                                                                                   // 72  // 99
            y : 'bir il',                                                                                   // 73  // 100
            yy : '%d il'                                                                                    // 74  // 101
        },                                                                                                  // 75  // 102
        meridiemParse: /gecə|səhər|gündüz|axşam/,                                                           // 76  // 103
        isPM : function (input) {                                                                           // 77  // 104
            return /^(gündüz|axşam)$/.test(input);                                                          // 78  // 105
        },                                                                                                  // 79  // 106
        meridiem : function (hour, minute, isLower) {                                                       // 80  // 107
            if (hour < 4) {                                                                                 // 81  // 108
                return 'gecə';                                                                              // 82  // 109
            } else if (hour < 12) {                                                                         // 83  // 110
                return 'səhər';                                                                             // 84  // 111
            } else if (hour < 17) {                                                                         // 85  // 112
                return 'gündüz';                                                                            // 86  // 113
            } else {                                                                                        // 87  // 114
                return 'axşam';                                                                             // 88  // 115
            }                                                                                               // 89  // 116
        },                                                                                                  // 90  // 117
        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,                                              // 91  // 118
        ordinal : function (number) {                                                                       // 92  // 119
            if (number === 0) {  // special case for zero                                                   // 93  // 120
                return number + '-ıncı';                                                                    // 94  // 121
            }                                                                                               // 95  // 122
            var a = number % 10,                                                                            // 96  // 123
                b = number % 100 - a,                                                                       // 97  // 124
                c = number >= 100 ? 100 : null;                                                             // 98  // 125
                                                                                                            // 99  // 126
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);                                    // 100
        },                                                                                                  // 101
        week : {                                                                                            // 102
            dow : 1, // Monday is the first day of the week.                                                // 103
            doy : 7  // The week that contains Jan 1st is the first week of the year.                       // 104
        }                                                                                                   // 105
    });                                                                                                     // 106
}));                                                                                                        // 107
                                                                                                            // 108
//////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 136
                                                                                                                   // 137
}).call(this);                                                                                                     // 138
                                                                                                                   // 139
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-az'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-az.js.map
