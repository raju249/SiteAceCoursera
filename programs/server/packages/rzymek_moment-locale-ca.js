(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-ca/packages/rzymek_moment-locale-ca.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/rzymek:moment-locale-ca/server.js                                                                    //    // 5
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
// packages/rzymek:moment-locale-ca/locale.js                                                                    //    // 24
//                                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                 //    // 27
// moment.js locale configuration                                                                                // 1  // 28
// locale : catalan (ca)                                                                                         // 2  // 29
// author : Juan G. Hurtado : https://github.com/juanghurtado                                                    // 3  // 30
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
    return moment.defineLocale('ca', {                                                                           // 14
        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'), // 15
        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),                  // 16
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),                     // 17
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),                                                // 18
        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),                                                         // 19
        longDateFormat : {                                                                                       // 20
            LT : 'H:mm',                                                                                         // 21
            LTS : 'LT:ss',                                                                                       // 22
            L : 'DD/MM/YYYY',                                                                                    // 23
            LL : 'D MMMM YYYY',                                                                                  // 24
            LLL : 'D MMMM YYYY LT',                                                                              // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                         // 26
        },                                                                                                       // 27
        calendar : {                                                                                             // 28
            sameDay : function () {                                                                              // 29
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';                              // 30
            },                                                                                                   // 31
            nextDay : function () {                                                                              // 32
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';                              // 33
            },                                                                                                   // 34
            nextWeek : function () {                                                                             // 35
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';                              // 36
            },                                                                                                   // 37
            lastDay : function () {                                                                              // 38
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';                              // 39
            },                                                                                                   // 40
            lastWeek : function () {                                                                             // 41
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';                  // 42
            },                                                                                                   // 43
            sameElse : 'L'                                                                                       // 44
        },                                                                                                       // 45
        relativeTime : {                                                                                         // 46
            future : 'en %s',                                                                                    // 47
            past : 'fa %s',                                                                                      // 48
            s : 'uns segons',                                                                                    // 49
            m : 'un minut',                                                                                      // 50
            mm : '%d minuts',                                                                                    // 51
            h : 'una hora',                                                                                      // 52
            hh : '%d hores',                                                                                     // 53
            d : 'un dia',                                                                                        // 54
            dd : '%d dies',                                                                                      // 55
            M : 'un mes',                                                                                        // 56
            MM : '%d mesos',                                                                                     // 57
            y : 'un any',                                                                                        // 58
            yy : '%d anys'                                                                                       // 59
        },                                                                                                       // 60
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,                                                                      // 61
        ordinal : function (number, period) {                                                                    // 62
            var output = (number === 1) ? 'r' :                                                                  // 63
                (number === 2) ? 'n' :                                                                           // 64
                (number === 3) ? 'r' :                                                                           // 65
                (number === 4) ? 't' : 'è';                                                                      // 66
            if (period === 'w' || period === 'W') {                                                              // 67
                output = 'a';                                                                                    // 68
            }                                                                                                    // 69
            return number + output;                                                                              // 70
        },                                                                                                       // 71
        week : {                                                                                                 // 72
            dow : 1, // Monday is the first day of the week.                                                     // 73
            doy : 4  // The week that contains Jan 4th is the first week of the year.                            // 74
        }                                                                                                        // 75
    });                                                                                                          // 76
}));                                                                                                             // 77
                                                                                                                 // 78
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 106
                                                                                                                       // 107
}).call(this);                                                                                                         // 108
                                                                                                                       // 109
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ca'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ca.js.map
