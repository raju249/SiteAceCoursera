(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek_moment-locale-da/packages/rzymek_moment-locale-da.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-da/server.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
global.moment = moment;                                                                                            // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-da/locale.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// moment.js locale configuration                                                                                  // 1
// locale : danish (da)                                                                                            // 2
// author : Ulrik Nielsen : https://github.com/mrbase                                                              // 3
                                                                                                                   // 4
(function (factory) {                                                                                              // 5
    if (typeof define === 'function' && define.amd) {                                                              // 6
        define(['moment'], factory); // AMD                                                                        // 7
    } else if (typeof exports === 'object') {                                                                      // 8
        module.exports = factory(require('../moment')); // Node                                                    // 9
    } else {                                                                                                       // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                   // 11
    }                                                                                                              // 12
}(function (moment) {                                                                                              // 13
    return moment.defineLocale('da', {                                                                             // 14
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'), // 15
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),                                // 16
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),                                // 17
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),                                                  // 18
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),                                                           // 19
        longDateFormat : {                                                                                         // 20
            LT : 'HH:mm',                                                                                          // 21
            LTS : 'LT:ss',                                                                                         // 22
            L : 'DD/MM/YYYY',                                                                                      // 23
            LL : 'D. MMMM YYYY',                                                                                   // 24
            LLL : 'D. MMMM YYYY LT',                                                                               // 25
            LLLL : 'dddd [d.] D. MMMM YYYY LT'                                                                     // 26
        },                                                                                                         // 27
        calendar : {                                                                                               // 28
            sameDay : '[I dag kl.] LT',                                                                            // 29
            nextDay : '[I morgen kl.] LT',                                                                         // 30
            nextWeek : 'dddd [kl.] LT',                                                                            // 31
            lastDay : '[I går kl.] LT',                                                                            // 32
            lastWeek : '[sidste] dddd [kl] LT',                                                                    // 33
            sameElse : 'L'                                                                                         // 34
        },                                                                                                         // 35
        relativeTime : {                                                                                           // 36
            future : 'om %s',                                                                                      // 37
            past : '%s siden',                                                                                     // 38
            s : 'få sekunder',                                                                                     // 39
            m : 'et minut',                                                                                        // 40
            mm : '%d minutter',                                                                                    // 41
            h : 'en time',                                                                                         // 42
            hh : '%d timer',                                                                                       // 43
            d : 'en dag',                                                                                          // 44
            dd : '%d dage',                                                                                        // 45
            M : 'en måned',                                                                                        // 46
            MM : '%d måneder',                                                                                     // 47
            y : 'et år',                                                                                           // 48
            yy : '%d år'                                                                                           // 49
        },                                                                                                         // 50
        ordinalParse: /\d{1,2}\./,                                                                                 // 51
        ordinal : '%d.',                                                                                           // 52
        week : {                                                                                                   // 53
            dow : 1, // Monday is the first day of the week.                                                       // 54
            doy : 4  // The week that contains Jan 4th is the first week of the year.                              // 55
        }                                                                                                          // 56
    });                                                                                                            // 57
}));                                                                                                               // 58
                                                                                                                   // 59
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 88
}).call(this);                                                                                                        // 89
                                                                                                                      // 90
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-da'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-da.js.map
