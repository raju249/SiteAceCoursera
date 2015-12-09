(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-it/packages/rzymek_moment-locale-it.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-it/server.js                                                    //    // 5
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
// packages/rzymek:moment-locale-it/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : italian (it)                                                                         // 2  // 29
// author : Lorenzo : https://github.com/aliem                                                   // 3  // 30
// author: Mattia Larentis: https://github.com/nostalgiaz                                        // 4  // 31
                                                                                                 // 5  // 32
(function (factory) {                                                                            // 6  // 33
    if (typeof define === 'function' && define.amd) {                                            // 7  // 34
        define(['moment'], factory); // AMD                                                      // 8  // 35
    } else if (typeof exports === 'object') {                                                    // 9  // 36
        module.exports = factory(require('../moment')); // Node                                  // 10
    } else {                                                                                     // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 12
    }                                                                                            // 13
}(function (moment) {                                                                            // 14
    return moment.defineLocale('it', {                                                           // 15
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),              // 17
        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),        // 18
        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),                                // 19
        weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),                                              // 20
        longDateFormat : {                                                                       // 21
            LT : 'HH:mm',                                                                        // 22
            LTS : 'LT:ss',                                                                       // 23
            L : 'DD/MM/YYYY',                                                                    // 24
            LL : 'D MMMM YYYY',                                                                  // 25
            LLL : 'D MMMM YYYY LT',                                                              // 26
            LLLL : 'dddd, D MMMM YYYY LT'                                                        // 27
        },                                                                                       // 28
        calendar : {                                                                             // 29
            sameDay: '[Oggi alle] LT',                                                           // 30
            nextDay: '[Domani alle] LT',                                                         // 31
            nextWeek: 'dddd [alle] LT',                                                          // 32
            lastDay: '[Ieri alle] LT',                                                           // 33
            lastWeek: function () {                                                              // 34
                switch (this.day()) {                                                            // 35
                    case 0:                                                                      // 36
                        return '[la scorsa] dddd [alle] LT';                                     // 37
                    default:                                                                     // 38
                        return '[lo scorso] dddd [alle] LT';                                     // 39
                }                                                                                // 40
            },                                                                                   // 41
            sameElse: 'L'                                                                        // 42
        },                                                                                       // 43
        relativeTime : {                                                                         // 44
            future : function (s) {                                                              // 45
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;                         // 46
            },                                                                                   // 47
            past : '%s fa',                                                                      // 48
            s : 'alcuni secondi',                                                                // 49
            m : 'un minuto',                                                                     // 50
            mm : '%d minuti',                                                                    // 51
            h : 'un\'ora',                                                                       // 52
            hh : '%d ore',                                                                       // 53
            d : 'un giorno',                                                                     // 54
            dd : '%d giorni',                                                                    // 55
            M : 'un mese',                                                                       // 56
            MM : '%d mesi',                                                                      // 57
            y : 'un anno',                                                                       // 58
            yy : '%d anni'                                                                       // 59
        },                                                                                       // 60
        ordinalParse : /\d{1,2}º/,                                                               // 61
        ordinal: '%dº',                                                                          // 62
        week : {                                                                                 // 63
            dow : 1, // Monday is the first day of the week.                                     // 64
            doy : 4  // The week that contains Jan 4th is the first week of the year.            // 65
        }                                                                                        // 66
    });                                                                                          // 67
}));                                                                                             // 68
                                                                                                 // 69
///////////////////////////////////////////////////////////////////////////////////////////////////    // 97
                                                                                                       // 98
}).call(this);                                                                                         // 99
                                                                                                       // 100
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-it'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-it.js.map
