(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-tl-ph/packages/rzymek_moment-locale //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-tl-ph/server.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
global.moment = moment;                                                                                                // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-tl-ph/locale.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js locale configuration                                                                                      // 1
// locale : Tagalog/Filipino (tl-ph)                                                                                   // 2
// author : Dan Hagman                                                                                                 // 3
                                                                                                                       // 4
(function (factory) {                                                                                                  // 5
    if (typeof define === 'function' && define.amd) {                                                                  // 6
        define(['moment'], factory); // AMD                                                                            // 7
    } else if (typeof exports === 'object') {                                                                          // 8
        module.exports = factory(require('../moment')); // Node                                                        // 9
    } else {                                                                                                           // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                       // 11
    }                                                                                                                  // 12
}(function (moment) {                                                                                                  // 13
    return moment.defineLocale('tl-ph', {                                                                              // 14
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'), // 15
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),                                    // 16
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),                                // 17
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),                                                      // 18
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),                                                              // 19
        longDateFormat : {                                                                                             // 20
            LT : 'HH:mm',                                                                                              // 21
            LTS : 'LT:ss',                                                                                             // 22
            L : 'MM/D/YYYY',                                                                                           // 23
            LL : 'MMMM D, YYYY',                                                                                       // 24
            LLL : 'MMMM D, YYYY LT',                                                                                   // 25
            LLLL : 'dddd, MMMM DD, YYYY LT'                                                                            // 26
        },                                                                                                             // 27
        calendar : {                                                                                                   // 28
            sameDay: '[Ngayon sa] LT',                                                                                 // 29
            nextDay: '[Bukas sa] LT',                                                                                  // 30
            nextWeek: 'dddd [sa] LT',                                                                                  // 31
            lastDay: '[Kahapon sa] LT',                                                                                // 32
            lastWeek: 'dddd [huling linggo] LT',                                                                       // 33
            sameElse: 'L'                                                                                              // 34
        },                                                                                                             // 35
        relativeTime : {                                                                                               // 36
            future : 'sa loob ng %s',                                                                                  // 37
            past : '%s ang nakalipas',                                                                                 // 38
            s : 'ilang segundo',                                                                                       // 39
            m : 'isang minuto',                                                                                        // 40
            mm : '%d minuto',                                                                                          // 41
            h : 'isang oras',                                                                                          // 42
            hh : '%d oras',                                                                                            // 43
            d : 'isang araw',                                                                                          // 44
            dd : '%d araw',                                                                                            // 45
            M : 'isang buwan',                                                                                         // 46
            MM : '%d buwan',                                                                                           // 47
            y : 'isang taon',                                                                                          // 48
            yy : '%d taon'                                                                                             // 49
        },                                                                                                             // 50
        ordinalParse: /\d{1,2}/,                                                                                       // 51
        ordinal : function (number) {                                                                                  // 52
            return number;                                                                                             // 53
        },                                                                                                             // 54
        week : {                                                                                                       // 55
            dow : 1, // Monday is the first day of the week.                                                           // 56
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                  // 57
        }                                                                                                              // 58
    });                                                                                                                // 59
}));                                                                                                                   // 60
                                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 90
}).call(this);                                                       // 91
                                                                     // 92
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-tl-ph'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-tl-ph.js.map
