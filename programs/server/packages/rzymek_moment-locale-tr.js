(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rzymek_moment-locale-tr/packages/rzymek_moment-locale-tr.js                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                        //    // 4
// packages/rzymek:moment-locale-tr/server.js                                                             //    // 5
//                                                                                                        //    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                          //    // 8
global.moment = moment;                                                                                   // 1  // 9
                                                                                                          // 2  // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                // 12
}).call(this);                                                                                                  // 13
                                                                                                                // 14
                                                                                                                // 15
                                                                                                                // 16
                                                                                                                // 17
                                                                                                                // 18
                                                                                                                // 19
(function () {                                                                                                  // 20
                                                                                                                // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                        //    // 23
// packages/rzymek:moment-locale-tr/locale.js                                                             //    // 24
//                                                                                                        //    // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                          //    // 27
// moment.js locale configuration                                                                         // 1  // 28
// locale : turkish (tr)                                                                                  // 2  // 29
// authors : Erhan Gundogan : https://github.com/erhangundogan,                                           // 3  // 30
//           Burak Yiğit Kaya: https://github.com/BYK                                                     // 4  // 31
                                                                                                          // 5  // 32
(function (factory) {                                                                                     // 6  // 33
    if (typeof define === 'function' && define.amd) {                                                     // 7  // 34
        define(['moment'], factory); // AMD                                                               // 8  // 35
    } else if (typeof exports === 'object') {                                                             // 9  // 36
        module.exports = factory(require('../moment')); // Node                                           // 10
    } else {                                                                                              // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global          // 12
    }                                                                                                     // 13
}(function (moment) {                                                                                     // 14
    var suffixes = {                                                                                      // 15
        1: '\'inci',                                                                                      // 16
        5: '\'inci',                                                                                      // 17
        8: '\'inci',                                                                                      // 18
        70: '\'inci',                                                                                     // 19
        80: '\'inci',                                                                                     // 20
                                                                                                          // 21
        2: '\'nci',                                                                                       // 22
        7: '\'nci',                                                                                       // 23
        20: '\'nci',                                                                                      // 24
        50: '\'nci',                                                                                      // 25
                                                                                                          // 26
        3: '\'üncü',                                                                                      // 27
        4: '\'üncü',                                                                                      // 28
        100: '\'üncü',                                                                                    // 29
                                                                                                          // 30
        6: '\'ncı',                                                                                       // 31
                                                                                                          // 32
        9: '\'uncu',                                                                                      // 33
        10: '\'uncu',                                                                                     // 34
        30: '\'uncu',                                                                                     // 35
                                                                                                          // 36
        60: '\'ıncı',                                                                                     // 37
        90: '\'ıncı'                                                                                      // 38
    };                                                                                                    // 39
                                                                                                          // 40
    return moment.defineLocale('tr', {                                                                    // 41
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'), // 42
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),                       // 43
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),                    // 44
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),                                         // 45
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),                                                  // 46
        longDateFormat : {                                                                                // 47
            LT : 'HH:mm',                                                                                 // 48
            LTS : 'LT:ss',                                                                                // 49
            L : 'DD.MM.YYYY',                                                                             // 50
            LL : 'D MMMM YYYY',                                                                           // 51
            LLL : 'D MMMM YYYY LT',                                                                       // 52
            LLLL : 'dddd, D MMMM YYYY LT'                                                                 // 53
        },                                                                                                // 54
        calendar : {                                                                                      // 55
            sameDay : '[bugün saat] LT',                                                                  // 56
            nextDay : '[yarın saat] LT',                                                                  // 57
            nextWeek : '[haftaya] dddd [saat] LT',                                                        // 58
            lastDay : '[dün] LT',                                                                         // 59
            lastWeek : '[geçen hafta] dddd [saat] LT',                                                    // 60
            sameElse : 'L'                                                                                // 61
        },                                                                                                // 62
        relativeTime : {                                                                                  // 63
            future : '%s sonra',                                                                          // 64
            past : '%s önce',                                                                             // 65
            s : 'birkaç saniye',                                                                          // 66
            m : 'bir dakika',                                                                             // 67
            mm : '%d dakika',                                                                             // 68
            h : 'bir saat',                                                                               // 69
            hh : '%d saat',                                                                               // 70
            d : 'bir gün',                                                                                // 71
            dd : '%d gün',                                                                                // 72
            M : 'bir ay',                                                                                 // 73
            MM : '%d ay',                                                                                 // 74
            y : 'bir yıl',                                                                                // 75
            yy : '%d yıl'                                                                                 // 76
        },                                                                                                // 77
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,                                            // 78
        ordinal : function (number) {                                                                     // 79
            if (number === 0) {  // special case for zero                                                 // 80
                return number + '\'ıncı';                                                                 // 81
            }                                                                                             // 82
            var a = number % 10,                                                                          // 83
                b = number % 100 - a,                                                                     // 84
                c = number >= 100 ? 100 : null;                                                           // 85
                                                                                                          // 86
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);                                  // 87
        },                                                                                                // 88
        week : {                                                                                          // 89
            dow : 1, // Monday is the first day of the week.                                              // 90
            doy : 7  // The week that contains Jan 1st is the first week of the year.                     // 91
        }                                                                                                 // 92
    });                                                                                                   // 93
}));                                                                                                      // 94
                                                                                                          // 95
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 123
                                                                                                                // 124
}).call(this);                                                                                                  // 125
                                                                                                                // 126
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-tr'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-tr.js.map
