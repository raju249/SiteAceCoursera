(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-sv/packages/rzymek_moment-locale-sv //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-sv/server.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
global.moment = moment;                                                                                              // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-sv/locale.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : swedish (sv)                                                                                             // 2
// author : Jens Alm : https://github.com/ulmus                                                                      // 3
                                                                                                                     // 4
(function (factory) {                                                                                                // 5
    if (typeof define === 'function' && define.amd) {                                                                // 6
        define(['moment'], factory); // AMD                                                                          // 7
    } else if (typeof exports === 'object') {                                                                        // 8
        module.exports = factory(require('../moment')); // Node                                                      // 9
    } else {                                                                                                         // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                     // 11
    }                                                                                                                // 12
}(function (moment) {                                                                                                // 13
    return moment.defineLocale('sv', {                                                                               // 14
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'), // 15
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),                                  // 16
        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),                                   // 17
        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),                                                    // 18
        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),                                                             // 19
        longDateFormat : {                                                                                           // 20
            LT : 'HH:mm',                                                                                            // 21
            LTS : 'LT:ss',                                                                                           // 22
            L : 'YYYY-MM-DD',                                                                                        // 23
            LL : 'D MMMM YYYY',                                                                                      // 24
            LLL : 'D MMMM YYYY LT',                                                                                  // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                             // 26
        },                                                                                                           // 27
        calendar : {                                                                                                 // 28
            sameDay: '[Idag] LT',                                                                                    // 29
            nextDay: '[Imorgon] LT',                                                                                 // 30
            lastDay: '[Igår] LT',                                                                                    // 31
            nextWeek: 'dddd LT',                                                                                     // 32
            lastWeek: '[Förra] dddd[en] LT',                                                                         // 33
            sameElse: 'L'                                                                                            // 34
        },                                                                                                           // 35
        relativeTime : {                                                                                             // 36
            future : 'om %s',                                                                                        // 37
            past : 'för %s sedan',                                                                                   // 38
            s : 'några sekunder',                                                                                    // 39
            m : 'en minut',                                                                                          // 40
            mm : '%d minuter',                                                                                       // 41
            h : 'en timme',                                                                                          // 42
            hh : '%d timmar',                                                                                        // 43
            d : 'en dag',                                                                                            // 44
            dd : '%d dagar',                                                                                         // 45
            M : 'en månad',                                                                                          // 46
            MM : '%d månader',                                                                                       // 47
            y : 'ett år',                                                                                            // 48
            yy : '%d år'                                                                                             // 49
        },                                                                                                           // 50
        ordinalParse: /\d{1,2}(e|a)/,                                                                                // 51
        ordinal : function (number) {                                                                                // 52
            var b = number % 10,                                                                                     // 53
                output = (~~(number % 100 / 10) === 1) ? 'e' :                                                       // 54
                (b === 1) ? 'a' :                                                                                    // 55
                (b === 2) ? 'a' :                                                                                    // 56
                (b === 3) ? 'e' : 'e';                                                                               // 57
            return number + output;                                                                                  // 58
        },                                                                                                           // 59
        week : {                                                                                                     // 60
            dow : 1, // Monday is the first day of the week.                                                         // 61
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                // 62
        }                                                                                                            // 63
    });                                                                                                              // 64
}));                                                                                                                 // 65
                                                                                                                     // 66
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 95
}).call(this);                                                       // 96
                                                                     // 97
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-sv'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sv.js.map
