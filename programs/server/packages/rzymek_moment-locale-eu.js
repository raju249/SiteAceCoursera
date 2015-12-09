(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rzymek_moment-locale-eu/packages/rzymek_moment-locale-eu.js                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
(function () {                                                                                             // 1
                                                                                                           // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                   //    // 4
// packages/rzymek:moment-locale-eu/server.js                                                        //    // 5
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
// packages/rzymek:moment-locale-eu/locale.js                                                        //    // 24
//                                                                                                   //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                     //    // 27
// moment.js locale configuration                                                                    // 1  // 28
// locale : euskara (eu)                                                                             // 2  // 29
// author : Eneko Illarramendi : https://github.com/eillarra                                         // 3  // 30
                                                                                                     // 4  // 31
(function (factory) {                                                                                // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                // 6  // 33
        define(['moment'], factory); // AMD                                                          // 7  // 34
    } else if (typeof exports === 'object') {                                                        // 8  // 35
        module.exports = factory(require('../moment')); // Node                                      // 9  // 36
    } else {                                                                                         // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global     // 11
    }                                                                                                // 12
}(function (moment) {                                                                                // 13
    return moment.defineLocale('eu', {                                                               // 14
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),      // 16
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'), // 17
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),                                    // 18
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),                                             // 19
        longDateFormat : {                                                                           // 20
            LT : 'HH:mm',                                                                            // 21
            LTS : 'LT:ss',                                                                           // 22
            L : 'YYYY-MM-DD',                                                                        // 23
            LL : 'YYYY[ko] MMMM[ren] D[a]',                                                          // 24
            LLL : 'YYYY[ko] MMMM[ren] D[a] LT',                                                      // 25
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] LT',                                               // 26
            l : 'YYYY-M-D',                                                                          // 27
            ll : 'YYYY[ko] MMM D[a]',                                                                // 28
            lll : 'YYYY[ko] MMM D[a] LT',                                                            // 29
            llll : 'ddd, YYYY[ko] MMM D[a] LT'                                                       // 30
        },                                                                                           // 31
        calendar : {                                                                                 // 32
            sameDay : '[gaur] LT[etan]',                                                             // 33
            nextDay : '[bihar] LT[etan]',                                                            // 34
            nextWeek : 'dddd LT[etan]',                                                              // 35
            lastDay : '[atzo] LT[etan]',                                                             // 36
            lastWeek : '[aurreko] dddd LT[etan]',                                                    // 37
            sameElse : 'L'                                                                           // 38
        },                                                                                           // 39
        relativeTime : {                                                                             // 40
            future : '%s barru',                                                                     // 41
            past : 'duela %s',                                                                       // 42
            s : 'segundo batzuk',                                                                    // 43
            m : 'minutu bat',                                                                        // 44
            mm : '%d minutu',                                                                        // 45
            h : 'ordu bat',                                                                          // 46
            hh : '%d ordu',                                                                          // 47
            d : 'egun bat',                                                                          // 48
            dd : '%d egun',                                                                          // 49
            M : 'hilabete bat',                                                                      // 50
            MM : '%d hilabete',                                                                      // 51
            y : 'urte bat',                                                                          // 52
            yy : '%d urte'                                                                           // 53
        },                                                                                           // 54
        ordinalParse: /\d{1,2}\./,                                                                   // 55
        ordinal : '%d.',                                                                             // 56
        week : {                                                                                     // 57
            dow : 1, // Monday is the first day of the week.                                         // 58
            doy : 7  // The week that contains Jan 1st is the first week of the year.                // 59
        }                                                                                            // 60
    });                                                                                              // 61
}));                                                                                                 // 62
                                                                                                     // 63
///////////////////////////////////////////////////////////////////////////////////////////////////////    // 91
                                                                                                           // 92
}).call(this);                                                                                             // 93
                                                                                                           // 94
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-eu'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-eu.js.map
