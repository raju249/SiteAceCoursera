(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/rzymek_moment-locale-es/packages/rzymek_moment-locale-es.js                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                 //    // 4
// packages/rzymek:moment-locale-es/server.js                                                      //    // 5
//                                                                                                 //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                   //    // 8
global.moment = moment;                                                                            // 1  // 9
                                                                                                   // 2  // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                         // 12
}).call(this);                                                                                           // 13
                                                                                                         // 14
                                                                                                         // 15
                                                                                                         // 16
                                                                                                         // 17
                                                                                                         // 18
                                                                                                         // 19
(function () {                                                                                           // 20
                                                                                                         // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                 //    // 23
// packages/rzymek:moment-locale-es/locale.js                                                      //    // 24
//                                                                                                 //    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                   //    // 27
// moment.js locale configuration                                                                  // 1  // 28
// locale : spanish (es)                                                                           // 2  // 29
// author : Julio Napurí : https://github.com/julionc                                              // 3  // 30
                                                                                                   // 4  // 31
(function (factory) {                                                                              // 5  // 32
    if (typeof define === 'function' && define.amd) {                                              // 6  // 33
        define(['moment'], factory); // AMD                                                        // 7  // 34
    } else if (typeof exports === 'object') {                                                      // 8  // 35
        module.exports = factory(require('../moment')); // Node                                    // 9  // 36
    } else {                                                                                       // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global   // 11
    }                                                                                              // 12
}(function (moment) {                                                                              // 13
    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), // 14
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');                // 15
                                                                                                   // 16
    return moment.defineLocale('es', {                                                             // 17
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {                                                       // 19
            if (/-MMM-/.test(format)) {                                                            // 20
                return monthsShort[m.month()];                                                     // 21
            } else {                                                                               // 22
                return monthsShortDot[m.month()];                                                  // 23
            }                                                                                      // 24
        },                                                                                         // 25
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),              // 26
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),                           // 27
        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),                                           // 28
        longDateFormat : {                                                                         // 29
            LT : 'H:mm',                                                                           // 30
            LTS : 'LT:ss',                                                                         // 31
            L : 'DD/MM/YYYY',                                                                      // 32
            LL : 'D [de] MMMM [de] YYYY',                                                          // 33
            LLL : 'D [de] MMMM [de] YYYY LT',                                                      // 34
            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'                                                // 35
        },                                                                                         // 36
        calendar : {                                                                               // 37
            sameDay : function () {                                                                // 38
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';                   // 39
            },                                                                                     // 40
            nextDay : function () {                                                                // 41
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';                // 42
            },                                                                                     // 43
            nextWeek : function () {                                                               // 44
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';                  // 45
            },                                                                                     // 46
            lastDay : function () {                                                                // 47
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';                  // 48
            },                                                                                     // 49
            lastWeek : function () {                                                               // 50
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';      // 51
            },                                                                                     // 52
            sameElse : 'L'                                                                         // 53
        },                                                                                         // 54
        relativeTime : {                                                                           // 55
            future : 'en %s',                                                                      // 56
            past : 'hace %s',                                                                      // 57
            s : 'unos segundos',                                                                   // 58
            m : 'un minuto',                                                                       // 59
            mm : '%d minutos',                                                                     // 60
            h : 'una hora',                                                                        // 61
            hh : '%d horas',                                                                       // 62
            d : 'un día',                                                                          // 63
            dd : '%d días',                                                                        // 64
            M : 'un mes',                                                                          // 65
            MM : '%d meses',                                                                       // 66
            y : 'un año',                                                                          // 67
            yy : '%d años'                                                                         // 68
        },                                                                                         // 69
        ordinalParse : /\d{1,2}º/,                                                                 // 70
        ordinal : '%dº',                                                                           // 71
        week : {                                                                                   // 72
            dow : 1, // Monday is the first day of the week.                                       // 73
            doy : 4  // The week that contains Jan 4th is the first week of the year.              // 74
        }                                                                                          // 75
    });                                                                                            // 76
}));                                                                                               // 77
                                                                                                   // 78
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 106
                                                                                                         // 107
}).call(this);                                                                                           // 108
                                                                                                         // 109
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-es'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-es.js.map
