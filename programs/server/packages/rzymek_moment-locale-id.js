(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-id/packages/rzymek_moment-locale-id //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-id/server.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
global.moment = moment;                                                                                               // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-id/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : Bahasa Indonesia (id)                                                                                     // 2
// author : Mohammad Satrio Utomo : https://github.com/tyok                                                           // 3
// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan                    // 4
                                                                                                                      // 5
(function (factory) {                                                                                                 // 6
    if (typeof define === 'function' && define.amd) {                                                                 // 7
        define(['moment'], factory); // AMD                                                                           // 8
    } else if (typeof exports === 'object') {                                                                         // 9
        module.exports = factory(require('../moment')); // Node                                                       // 10
    } else {                                                                                                          // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                      // 12
    }                                                                                                                 // 13
}(function (moment) {                                                                                                 // 14
    return moment.defineLocale('id', {                                                                                // 15
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'), // 16
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),                                   // 17
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),                                           // 18
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),                                                     // 19
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),                                                              // 20
        longDateFormat : {                                                                                            // 21
            LT : 'HH.mm',                                                                                             // 22
            LTS : 'LT.ss',                                                                                            // 23
            L : 'DD/MM/YYYY',                                                                                         // 24
            LL : 'D MMMM YYYY',                                                                                       // 25
            LLL : 'D MMMM YYYY [pukul] LT',                                                                           // 26
            LLLL : 'dddd, D MMMM YYYY [pukul] LT'                                                                     // 27
        },                                                                                                            // 28
        meridiemParse: /pagi|siang|sore|malam/,                                                                       // 29
        meridiemHour : function (hour, meridiem) {                                                                    // 30
            if (hour === 12) {                                                                                        // 31
                hour = 0;                                                                                             // 32
            }                                                                                                         // 33
            if (meridiem === 'pagi') {                                                                                // 34
                return hour;                                                                                          // 35
            } else if (meridiem === 'siang') {                                                                        // 36
                return hour >= 11 ? hour : hour + 12;                                                                 // 37
            } else if (meridiem === 'sore' || meridiem === 'malam') {                                                 // 38
                return hour + 12;                                                                                     // 39
            }                                                                                                         // 40
        },                                                                                                            // 41
        meridiem : function (hours, minutes, isLower) {                                                               // 42
            if (hours < 11) {                                                                                         // 43
                return 'pagi';                                                                                        // 44
            } else if (hours < 15) {                                                                                  // 45
                return 'siang';                                                                                       // 46
            } else if (hours < 19) {                                                                                  // 47
                return 'sore';                                                                                        // 48
            } else {                                                                                                  // 49
                return 'malam';                                                                                       // 50
            }                                                                                                         // 51
        },                                                                                                            // 52
        calendar : {                                                                                                  // 53
            sameDay : '[Hari ini pukul] LT',                                                                          // 54
            nextDay : '[Besok pukul] LT',                                                                             // 55
            nextWeek : 'dddd [pukul] LT',                                                                             // 56
            lastDay : '[Kemarin pukul] LT',                                                                           // 57
            lastWeek : 'dddd [lalu pukul] LT',                                                                        // 58
            sameElse : 'L'                                                                                            // 59
        },                                                                                                            // 60
        relativeTime : {                                                                                              // 61
            future : 'dalam %s',                                                                                      // 62
            past : '%s yang lalu',                                                                                    // 63
            s : 'beberapa detik',                                                                                     // 64
            m : 'semenit',                                                                                            // 65
            mm : '%d menit',                                                                                          // 66
            h : 'sejam',                                                                                              // 67
            hh : '%d jam',                                                                                            // 68
            d : 'sehari',                                                                                             // 69
            dd : '%d hari',                                                                                           // 70
            M : 'sebulan',                                                                                            // 71
            MM : '%d bulan',                                                                                          // 72
            y : 'setahun',                                                                                            // 73
            yy : '%d tahun'                                                                                           // 74
        },                                                                                                            // 75
        week : {                                                                                                      // 76
            dow : 1, // Monday is the first day of the week.                                                          // 77
            doy : 7  // The week that contains Jan 1st is the first week of the year.                                 // 78
        }                                                                                                             // 79
    });                                                                                                               // 80
}));                                                                                                                  // 81
                                                                                                                      // 82
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 111
}).call(this);                                                       // 112
                                                                     // 113
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-id'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-id.js.map
