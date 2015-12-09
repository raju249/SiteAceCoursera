(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-ms-my/packages/rzymek_moment-locale-ms-my.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/rzymek:moment-locale-ms-my/server.js                                                                 //    // 5
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
// packages/rzymek:moment-locale-ms-my/locale.js                                                                 //    // 24
//                                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                 //    // 27
// moment.js locale configuration                                                                                // 1  // 28
// locale : Bahasa Malaysia (ms-MY)                                                                              // 2  // 29
// author : Weldan Jamili : https://github.com/weldan                                                            // 3  // 30
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
    return moment.defineLocale('ms-my', {                                                                        // 14
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'), // 15
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),                              // 16
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),                                      // 17
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),                                                // 18
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),                                                         // 19
        longDateFormat : {                                                                                       // 20
            LT : 'HH.mm',                                                                                        // 21
            LTS : 'LT.ss',                                                                                       // 22
            L : 'DD/MM/YYYY',                                                                                    // 23
            LL : 'D MMMM YYYY',                                                                                  // 24
            LLL : 'D MMMM YYYY [pukul] LT',                                                                      // 25
            LLLL : 'dddd, D MMMM YYYY [pukul] LT'                                                                // 26
        },                                                                                                       // 27
        meridiemParse: /pagi|tengahari|petang|malam/,                                                            // 28
        meridiemHour: function (hour, meridiem) {                                                                // 29
            if (hour === 12) {                                                                                   // 30
                hour = 0;                                                                                        // 31
            }                                                                                                    // 32
            if (meridiem === 'pagi') {                                                                           // 33
                return hour;                                                                                     // 34
            } else if (meridiem === 'tengahari') {                                                               // 35
                return hour >= 11 ? hour : hour + 12;                                                            // 36
            } else if (meridiem === 'petang' || meridiem === 'malam') {                                          // 37
                return hour + 12;                                                                                // 38
            }                                                                                                    // 39
        },                                                                                                       // 40
        meridiem : function (hours, minutes, isLower) {                                                          // 41
            if (hours < 11) {                                                                                    // 42
                return 'pagi';                                                                                   // 43
            } else if (hours < 15) {                                                                             // 44
                return 'tengahari';                                                                              // 45
            } else if (hours < 19) {                                                                             // 46
                return 'petang';                                                                                 // 47
            } else {                                                                                             // 48
                return 'malam';                                                                                  // 49
            }                                                                                                    // 50
        },                                                                                                       // 51
        calendar : {                                                                                             // 52
            sameDay : '[Hari ini pukul] LT',                                                                     // 53
            nextDay : '[Esok pukul] LT',                                                                         // 54
            nextWeek : 'dddd [pukul] LT',                                                                        // 55
            lastDay : '[Kelmarin pukul] LT',                                                                     // 56
            lastWeek : 'dddd [lepas pukul] LT',                                                                  // 57
            sameElse : 'L'                                                                                       // 58
        },                                                                                                       // 59
        relativeTime : {                                                                                         // 60
            future : 'dalam %s',                                                                                 // 61
            past : '%s yang lepas',                                                                              // 62
            s : 'beberapa saat',                                                                                 // 63
            m : 'seminit',                                                                                       // 64
            mm : '%d minit',                                                                                     // 65
            h : 'sejam',                                                                                         // 66
            hh : '%d jam',                                                                                       // 67
            d : 'sehari',                                                                                        // 68
            dd : '%d hari',                                                                                      // 69
            M : 'sebulan',                                                                                       // 70
            MM : '%d bulan',                                                                                     // 71
            y : 'setahun',                                                                                       // 72
            yy : '%d tahun'                                                                                      // 73
        },                                                                                                       // 74
        week : {                                                                                                 // 75
            dow : 1, // Monday is the first day of the week.                                                     // 76
            doy : 7  // The week that contains Jan 1st is the first week of the year.                            // 77
        }                                                                                                        // 78
    });                                                                                                          // 79
}));                                                                                                             // 80
                                                                                                                 // 81
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 109
                                                                                                                       // 110
}).call(this);                                                                                                         // 111
                                                                                                                       // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ms-my'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ms-my.js.map
