(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-gl/packages/rzymek_moment-locale-gl //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-gl/server.js                                                                         //
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
// packages/rzymek:moment-locale-gl/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : galician (gl)                                                                                             // 2
// author : Juan G. Hurtado : https://github.com/juanghurtado                                                         // 3
                                                                                                                      // 4
(function (factory) {                                                                                                 // 5
    if (typeof define === 'function' && define.amd) {                                                                 // 6
        define(['moment'], factory); // AMD                                                                           // 7
    } else if (typeof exports === 'object') {                                                                         // 8
        module.exports = factory(require('../moment')); // Node                                                       // 9
    } else {                                                                                                          // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                      // 11
    }                                                                                                                 // 12
}(function (moment) {                                                                                                 // 13
    return moment.defineLocale('gl', {                                                                                // 14
        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'), // 15
        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),                       // 16
        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),                                     // 17
        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),                                              // 18
        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),                                                              // 19
        longDateFormat : {                                                                                            // 20
            LT : 'H:mm',                                                                                              // 21
            LTS : 'LT:ss',                                                                                            // 22
            L : 'DD/MM/YYYY',                                                                                         // 23
            LL : 'D MMMM YYYY',                                                                                       // 24
            LLL : 'D MMMM YYYY LT',                                                                                   // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                              // 26
        },                                                                                                            // 27
        calendar : {                                                                                                  // 28
            sameDay : function () {                                                                                   // 29
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';                                       // 30
            },                                                                                                        // 31
            nextDay : function () {                                                                                   // 32
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';                                       // 33
            },                                                                                                        // 34
            nextWeek : function () {                                                                                  // 35
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';                                       // 36
            },                                                                                                        // 37
            lastDay : function () {                                                                                   // 38
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';                                        // 39
            },                                                                                                        // 40
            lastWeek : function () {                                                                                  // 41
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';                            // 42
            },                                                                                                        // 43
            sameElse : 'L'                                                                                            // 44
        },                                                                                                            // 45
        relativeTime : {                                                                                              // 46
            future : function (str) {                                                                                 // 47
                if (str === 'uns segundos') {                                                                         // 48
                    return 'nuns segundos';                                                                           // 49
                }                                                                                                     // 50
                return 'en ' + str;                                                                                   // 51
            },                                                                                                        // 52
            past : 'hai %s',                                                                                          // 53
            s : 'uns segundos',                                                                                       // 54
            m : 'un minuto',                                                                                          // 55
            mm : '%d minutos',                                                                                        // 56
            h : 'unha hora',                                                                                          // 57
            hh : '%d horas',                                                                                          // 58
            d : 'un día',                                                                                             // 59
            dd : '%d días',                                                                                           // 60
            M : 'un mes',                                                                                             // 61
            MM : '%d meses',                                                                                          // 62
            y : 'un ano',                                                                                             // 63
            yy : '%d anos'                                                                                            // 64
        },                                                                                                            // 65
        ordinalParse : /\d{1,2}º/,                                                                                    // 66
        ordinal : '%dº',                                                                                              // 67
        week : {                                                                                                      // 68
            dow : 1, // Monday is the first day of the week.                                                          // 69
            doy : 7  // The week that contains Jan 1st is the first week of the year.                                 // 70
        }                                                                                                             // 71
    });                                                                                                               // 72
}));                                                                                                                  // 73
                                                                                                                      // 74
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 103
}).call(this);                                                       // 104
                                                                     // 105
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-gl'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-gl.js.map
