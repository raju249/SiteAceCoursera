(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-fo/packages/rzymek_moment-locale-fo.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-fo/server.js                                                                     //   // 5
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
// packages/rzymek:moment-locale-fo/locale.js                                                                     //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : faroese (fo)                                                                                          // 2
// author : Ragnar Johannesen : https://github.com/ragnar123                                                      // 3
                                                                                                                  // 4
(function (factory) {                                                                                             // 5
    if (typeof define === 'function' && define.amd) {                                                             // 6
        define(['moment'], factory); // AMD                                                                       // 7
    } else if (typeof exports === 'object') {                                                                     // 8
        module.exports = factory(require('../moment')); // Node                                                   // 9
    } else {                                                                                                      // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 11
    }                                                                                                             // 12
}(function (moment) {                                                                                             // 13
    return moment.defineLocale('fo', {                                                                            // 14
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'), // 15
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),                               // 16
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),        // 17
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),                                                 // 18
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),                                                          // 19
        longDateFormat : {                                                                                        // 20
            LT : 'HH:mm',                                                                                         // 21
            LTS : 'LT:ss',                                                                                        // 22
            L : 'DD/MM/YYYY',                                                                                     // 23
            LL : 'D MMMM YYYY',                                                                                   // 24
            LLL : 'D MMMM YYYY LT',                                                                               // 25
            LLLL : 'dddd D. MMMM, YYYY LT'                                                                        // 26
        },                                                                                                        // 27
        calendar : {                                                                                              // 28
            sameDay : '[Í dag kl.] LT',                                                                           // 29
            nextDay : '[Í morgin kl.] LT',                                                                        // 30
            nextWeek : 'dddd [kl.] LT',                                                                           // 31
            lastDay : '[Í gjár kl.] LT',                                                                          // 32
            lastWeek : '[síðstu] dddd [kl] LT',                                                                   // 33
            sameElse : 'L'                                                                                        // 34
        },                                                                                                        // 35
        relativeTime : {                                                                                          // 36
            future : 'um %s',                                                                                     // 37
            past : '%s síðani',                                                                                   // 38
            s : 'fá sekund',                                                                                      // 39
            m : 'ein minutt',                                                                                     // 40
            mm : '%d minuttir',                                                                                   // 41
            h : 'ein tími',                                                                                       // 42
            hh : '%d tímar',                                                                                      // 43
            d : 'ein dagur',                                                                                      // 44
            dd : '%d dagar',                                                                                      // 45
            M : 'ein mánaði',                                                                                     // 46
            MM : '%d mánaðir',                                                                                    // 47
            y : 'eitt ár',                                                                                        // 48
            yy : '%d ár'                                                                                          // 49
        },                                                                                                        // 50
        ordinalParse: /\d{1,2}\./,                                                                                // 51
        ordinal : '%d.',                                                                                          // 52
        week : {                                                                                                  // 53
            dow : 1, // Monday is the first day of the week.                                                      // 54
            doy : 4  // The week that contains Jan 4th is the first week of the year.                             // 55
        }                                                                                                         // 56
    });                                                                                                           // 57
}));                                                                                                              // 58
                                                                                                                  // 59
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 87
                                                                                                                       // 88
}).call(this);                                                                                                         // 89
                                                                                                                       // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-fo'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-fo.js.map
