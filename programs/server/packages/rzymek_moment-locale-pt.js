(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek_moment-locale-pt/packages/rzymek_moment-locale-pt.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                              //    // 4
// packages/rzymek:moment-locale-pt/server.js                                                                   //    // 5
//                                                                                                              //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                //    // 8
global.moment = moment;                                                                                         // 1  // 9
                                                                                                                // 2  // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                      // 12
}).call(this);                                                                                                        // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      // 16
                                                                                                                      // 17
                                                                                                                      // 18
                                                                                                                      // 19
(function () {                                                                                                        // 20
                                                                                                                      // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                              //    // 23
// packages/rzymek:moment-locale-pt/locale.js                                                                   //    // 24
//                                                                                                              //    // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                                //    // 27
// moment.js locale configuration                                                                               // 1  // 28
// locale : portuguese (pt)                                                                                     // 2  // 29
// author : Jefferson : https://github.com/jalex79                                                              // 3  // 30
                                                                                                                // 4  // 31
(function (factory) {                                                                                           // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                           // 6  // 33
        define(['moment'], factory); // AMD                                                                     // 7  // 34
    } else if (typeof exports === 'object') {                                                                   // 8  // 35
        module.exports = factory(require('../moment')); // Node                                                 // 9  // 36
    } else {                                                                                                    // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                // 11
    }                                                                                                           // 12
}(function (moment) {                                                                                           // 13
    return moment.defineLocale('pt', {                                                                          // 14
        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),                             // 16
        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'), // 17
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),                                               // 18
        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),                                                      // 19
        longDateFormat : {                                                                                      // 20
            LT : 'HH:mm',                                                                                       // 21
            LTS : 'LT:ss',                                                                                      // 22
            L : 'DD/MM/YYYY',                                                                                   // 23
            LL : 'D [de] MMMM [de] YYYY',                                                                       // 24
            LLL : 'D [de] MMMM [de] YYYY LT',                                                                   // 25
            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'                                                             // 26
        },                                                                                                      // 27
        calendar : {                                                                                            // 28
            sameDay: '[Hoje às] LT',                                                                            // 29
            nextDay: '[Amanhã às] LT',                                                                          // 30
            nextWeek: 'dddd [às] LT',                                                                           // 31
            lastDay: '[Ontem às] LT',                                                                           // 32
            lastWeek: function () {                                                                             // 33
                return (this.day() === 0 || this.day() === 6) ?                                                 // 34
                    '[Último] dddd [às] LT' : // Saturday + Sunday                                              // 35
                    '[Última] dddd [às] LT'; // Monday - Friday                                                 // 36
            },                                                                                                  // 37
            sameElse: 'L'                                                                                       // 38
        },                                                                                                      // 39
        relativeTime : {                                                                                        // 40
            future : 'em %s',                                                                                   // 41
            past : 'há %s',                                                                                     // 42
            s : 'segundos',                                                                                     // 43
            m : 'um minuto',                                                                                    // 44
            mm : '%d minutos',                                                                                  // 45
            h : 'uma hora',                                                                                     // 46
            hh : '%d horas',                                                                                    // 47
            d : 'um dia',                                                                                       // 48
            dd : '%d dias',                                                                                     // 49
            M : 'um mês',                                                                                       // 50
            MM : '%d meses',                                                                                    // 51
            y : 'um ano',                                                                                       // 52
            yy : '%d anos'                                                                                      // 53
        },                                                                                                      // 54
        ordinalParse: /\d{1,2}º/,                                                                               // 55
        ordinal : '%dº',                                                                                        // 56
        week : {                                                                                                // 57
            dow : 1, // Monday is the first day of the week.                                                    // 58
            doy : 4  // The week that contains Jan 4th is the first week of the year.                           // 59
        }                                                                                                       // 60
    });                                                                                                         // 61
}));                                                                                                            // 62
                                                                                                                // 63
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 91
                                                                                                                      // 92
}).call(this);                                                                                                        // 93
                                                                                                                      // 94
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-pt'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-pt.js.map
