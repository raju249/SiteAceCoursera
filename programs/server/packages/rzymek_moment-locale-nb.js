(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-nb/packages/rzymek_moment-locale-nb.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-nb/server.js                                                                     //   // 5
//                                                                                                                //   // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 7
                                                                                                                  //   // 8
global.moment = moment;                                                                                           // 1
                                                                                                                  // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 11
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 22
//                                                                                                                //   // 23
// packages/rzymek:moment-locale-nb/locale.js                                                                     //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : norwegian bokmål (nb)                                                                                 // 2
// authors : Espen Hovlandsdal : https://github.com/rexxars                                                       // 3
//           Sigurd Gartmann : https://github.com/sigurdga                                                        // 4
                                                                                                                  // 5
(function (factory) {                                                                                             // 6
    if (typeof define === 'function' && define.amd) {                                                             // 7
        define(['moment'], factory); // AMD                                                                       // 8
    } else if (typeof exports === 'object') {                                                                     // 9
        module.exports = factory(require('../moment')); // Node                                                   // 10
    } else {                                                                                                      // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 12
    }                                                                                                             // 13
}(function (moment) {                                                                                             // 14
    return moment.defineLocale('nb', {                                                                            // 15
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'), // 16
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),                               // 17
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),                               // 18
        weekdaysShort : 'søn_man_tirs_ons_tors_fre_lør'.split('_'),                                               // 19
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),                                                          // 20
        longDateFormat : {                                                                                        // 21
            LT : 'H.mm',                                                                                          // 22
            LTS : 'LT.ss',                                                                                        // 23
            L : 'DD.MM.YYYY',                                                                                     // 24
            LL : 'D. MMMM YYYY',                                                                                  // 25
            LLL : 'D. MMMM YYYY [kl.] LT',                                                                        // 26
            LLLL : 'dddd D. MMMM YYYY [kl.] LT'                                                                   // 27
        },                                                                                                        // 28
        calendar : {                                                                                              // 29
            sameDay: '[i dag kl.] LT',                                                                            // 30
            nextDay: '[i morgen kl.] LT',                                                                         // 31
            nextWeek: 'dddd [kl.] LT',                                                                            // 32
            lastDay: '[i går kl.] LT',                                                                            // 33
            lastWeek: '[forrige] dddd [kl.] LT',                                                                  // 34
            sameElse: 'L'                                                                                         // 35
        },                                                                                                        // 36
        relativeTime : {                                                                                          // 37
            future : 'om %s',                                                                                     // 38
            past : 'for %s siden',                                                                                // 39
            s : 'noen sekunder',                                                                                  // 40
            m : 'ett minutt',                                                                                     // 41
            mm : '%d minutter',                                                                                   // 42
            h : 'en time',                                                                                        // 43
            hh : '%d timer',                                                                                      // 44
            d : 'en dag',                                                                                         // 45
            dd : '%d dager',                                                                                      // 46
            M : 'en måned',                                                                                       // 47
            MM : '%d måneder',                                                                                    // 48
            y : 'ett år',                                                                                         // 49
            yy : '%d år'                                                                                          // 50
        },                                                                                                        // 51
        ordinalParse: /\d{1,2}\./,                                                                                // 52
        ordinal : '%d.',                                                                                          // 53
        week : {                                                                                                  // 54
            dow : 1, // Monday is the first day of the week.                                                      // 55
            doy : 4  // The week that contains Jan 4th is the first week of the year.                             // 56
        }                                                                                                         // 57
    });                                                                                                           // 58
}));                                                                                                              // 59
                                                                                                                  // 60
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 88
                                                                                                                       // 89
}).call(this);                                                                                                         // 90
                                                                                                                       // 91
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-nb'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-nb.js.map
