(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rzymek_moment-locale-et/packages/rzymek_moment-locale-et.js                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
(function () {                                                                                             // 1
                                                                                                           // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                   //    // 4
// packages/rzymek:moment-locale-et/server.js                                                        //    // 5
//                                                                                                   //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                     //    // 8
global.moment = moment;                                                                              // 1  // 9
                                                                                                     // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                           // 12
}).call(this);                                                                                             // 13
                                                                                                           // 14
                                                                                                           // 15
                                                                                                           // 16
                                                                                                           // 17
                                                                                                           // 18
                                                                                                           // 19
(function () {                                                                                             // 20
                                                                                                           // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                   //    // 23
// packages/rzymek:moment-locale-et/locale.js                                                        //    // 24
//                                                                                                   //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                     //    // 27
// moment.js locale configuration                                                                    // 1  // 28
// locale : estonian (et)                                                                            // 2  // 29
// author : Henry Kehlmann : https://github.com/madhenry                                             // 3  // 30
// improvements : Illimar Tambek : https://github.com/ragulka                                        // 4  // 31
                                                                                                     // 5  // 32
(function (factory) {                                                                                // 6  // 33
    if (typeof define === 'function' && define.amd) {                                                // 7  // 34
        define(['moment'], factory); // AMD                                                          // 8  // 35
    } else if (typeof exports === 'object') {                                                        // 9  // 36
        module.exports = factory(require('../moment')); // Node                                      // 10
    } else {                                                                                         // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global     // 12
    }                                                                                                // 13
}(function (moment) {                                                                                // 14
    function processRelativeTime(number, withoutSuffix, key, isFuture) {                             // 15
        var format = {                                                                               // 16
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],                                  // 17
            'm' : ['ühe minuti', 'üks minut'],                                                       // 18
            'mm': [number + ' minuti', number + ' minutit'],                                         // 19
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],                                            // 20
            'hh': [number + ' tunni', number + ' tundi'],                                            // 21
            'd' : ['ühe päeva', 'üks päev'],                                                         // 22
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],                                                // 23
            'MM': [number + ' kuu', number + ' kuud'],                                               // 24
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],                                               // 25
            'yy': [number + ' aasta', number + ' aastat']                                            // 26
        };                                                                                           // 27
        if (withoutSuffix) {                                                                         // 28
            return format[key][2] ? format[key][2] : format[key][1];                                 // 29
        }                                                                                            // 30
        return isFuture ? format[key][0] : format[key][1];                                           // 31
    }                                                                                                // 32
                                                                                                     // 33
    return moment.defineLocale('et', {                                                               // 34
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),     // 36
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'), // 37
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),                                                  // 38
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),                                                  // 39
        longDateFormat : {                                                                           // 40
            LT   : 'H:mm',                                                                           // 41
            LTS : 'LT:ss',                                                                           // 42
            L    : 'DD.MM.YYYY',                                                                     // 43
            LL   : 'D. MMMM YYYY',                                                                   // 44
            LLL  : 'D. MMMM YYYY LT',                                                                // 45
            LLLL : 'dddd, D. MMMM YYYY LT'                                                           // 46
        },                                                                                           // 47
        calendar : {                                                                                 // 48
            sameDay  : '[Täna,] LT',                                                                 // 49
            nextDay  : '[Homme,] LT',                                                                // 50
            nextWeek : '[Järgmine] dddd LT',                                                         // 51
            lastDay  : '[Eile,] LT',                                                                 // 52
            lastWeek : '[Eelmine] dddd LT',                                                          // 53
            sameElse : 'L'                                                                           // 54
        },                                                                                           // 55
        relativeTime : {                                                                             // 56
            future : '%s pärast',                                                                    // 57
            past   : '%s tagasi',                                                                    // 58
            s      : processRelativeTime,                                                            // 59
            m      : processRelativeTime,                                                            // 60
            mm     : processRelativeTime,                                                            // 61
            h      : processRelativeTime,                                                            // 62
            hh     : processRelativeTime,                                                            // 63
            d      : processRelativeTime,                                                            // 64
            dd     : '%d päeva',                                                                     // 65
            M      : processRelativeTime,                                                            // 66
            MM     : processRelativeTime,                                                            // 67
            y      : processRelativeTime,                                                            // 68
            yy     : processRelativeTime                                                             // 69
        },                                                                                           // 70
        ordinalParse: /\d{1,2}\./,                                                                   // 71
        ordinal : '%d.',                                                                             // 72
        week : {                                                                                     // 73
            dow : 1, // Monday is the first day of the week.                                         // 74
            doy : 4  // The week that contains Jan 4th is the first week of the year.                // 75
        }                                                                                            // 76
    });                                                                                              // 77
}));                                                                                                 // 78
                                                                                                     // 79
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 107
                                                                                                           // 108
}).call(this);                                                                                             // 109
                                                                                                           // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-et'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-et.js.map
