(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-eo/packages/rzymek_moment-locale-eo.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-eo/server.js                                                    //    // 5
//                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                 //    // 8
global.moment = moment;                                                                          // 1  // 9
                                                                                                 // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                       // 12
}).call(this);                                                                                         // 13
                                                                                                       // 14
                                                                                                       // 15
                                                                                                       // 16
                                                                                                       // 17
                                                                                                       // 18
                                                                                                       // 19
(function () {                                                                                         // 20
                                                                                                       // 21
///////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                               //    // 23
// packages/rzymek:moment-locale-eo/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : esperanto (eo)                                                                       // 2  // 29
// author : Colin Dean : https://github.com/colindean                                            // 3  // 30
// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.                  // 4  // 31
//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!                          // 5  // 32
                                                                                                 // 6  // 33
(function (factory) {                                                                            // 7  // 34
    if (typeof define === 'function' && define.amd) {                                            // 8  // 35
        define(['moment'], factory); // AMD                                                      // 9  // 36
    } else if (typeof exports === 'object') {                                                    // 10
        module.exports = factory(require('../moment')); // Node                                  // 11
    } else {                                                                                     // 12
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 13
    }                                                                                            // 14
}(function (moment) {                                                                            // 15
    return moment.defineLocale('eo', {                                                           // 16
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),              // 18
        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),              // 19
        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),                              // 20
        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),                                         // 21
        longDateFormat : {                                                                       // 22
            LT : 'HH:mm',                                                                        // 23
            LTS : 'LT:ss',                                                                       // 24
            L : 'YYYY-MM-DD',                                                                    // 25
            LL : 'D[-an de] MMMM, YYYY',                                                         // 26
            LLL : 'D[-an de] MMMM, YYYY LT',                                                     // 27
            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY LT'                                          // 28
        },                                                                                       // 29
        meridiemParse: /[ap]\.t\.m/i,                                                            // 30
        isPM: function (input) {                                                                 // 31
            return input.charAt(0).toLowerCase() === 'p';                                        // 32
        },                                                                                       // 33
        meridiem : function (hours, minutes, isLower) {                                          // 34
            if (hours > 11) {                                                                    // 35
                return isLower ? 'p.t.m.' : 'P.T.M.';                                            // 36
            } else {                                                                             // 37
                return isLower ? 'a.t.m.' : 'A.T.M.';                                            // 38
            }                                                                                    // 39
        },                                                                                       // 40
        calendar : {                                                                             // 41
            sameDay : '[Hodiaŭ je] LT',                                                          // 42
            nextDay : '[Morgaŭ je] LT',                                                          // 43
            nextWeek : 'dddd [je] LT',                                                           // 44
            lastDay : '[Hieraŭ je] LT',                                                          // 45
            lastWeek : '[pasinta] dddd [je] LT',                                                 // 46
            sameElse : 'L'                                                                       // 47
        },                                                                                       // 48
        relativeTime : {                                                                         // 49
            future : 'je %s',                                                                    // 50
            past : 'antaŭ %s',                                                                   // 51
            s : 'sekundoj',                                                                      // 52
            m : 'minuto',                                                                        // 53
            mm : '%d minutoj',                                                                   // 54
            h : 'horo',                                                                          // 55
            hh : '%d horoj',                                                                     // 56
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo                             // 57
            dd : '%d tagoj',                                                                     // 58
            M : 'monato',                                                                        // 59
            MM : '%d monatoj',                                                                   // 60
            y : 'jaro',                                                                          // 61
            yy : '%d jaroj'                                                                      // 62
        },                                                                                       // 63
        ordinalParse: /\d{1,2}a/,                                                                // 64
        ordinal : '%da',                                                                         // 65
        week : {                                                                                 // 66
            dow : 1, // Monday is the first day of the week.                                     // 67
            doy : 7  // The week that contains Jan 1st is the first week of the year.            // 68
        }                                                                                        // 69
    });                                                                                          // 70
}));                                                                                             // 71
                                                                                                 // 72
///////////////////////////////////////////////////////////////////////////////////////////////////    // 100
                                                                                                       // 101
}).call(this);                                                                                         // 102
                                                                                                       // 103
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-eo'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-eo.js.map
