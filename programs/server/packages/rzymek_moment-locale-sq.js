(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek_moment-locale-sq/packages/rzymek_moment-locale-sq.js                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                           //    // 4
// packages/rzymek:moment-locale-sq/server.js                                                                //    // 5
//                                                                                                           //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                             //    // 8
global.moment = moment;                                                                                      // 1  // 9
                                                                                                             // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                   // 12
}).call(this);                                                                                                     // 13
                                                                                                                   // 14
                                                                                                                   // 15
                                                                                                                   // 16
                                                                                                                   // 17
                                                                                                                   // 18
                                                                                                                   // 19
(function () {                                                                                                     // 20
                                                                                                                   // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                           //    // 23
// packages/rzymek:moment-locale-sq/locale.js                                                                //    // 24
//                                                                                                           //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                             //    // 27
// moment.js locale configuration                                                                            // 1  // 28
// locale : Albanian (sq)                                                                                    // 2  // 29
// author : Flakërim Ismani : https://github.com/flakerimi                                                   // 3  // 30
// author: Menelion Elensúle: https://github.com/Oire (tests)                                                // 4  // 31
// author : Oerd Cukalla : https://github.com/oerd (fixes)                                                   // 5  // 32
                                                                                                             // 6  // 33
(function (factory) {                                                                                        // 7  // 34
    if (typeof define === 'function' && define.amd) {                                                        // 8  // 35
        define(['moment'], factory); // AMD                                                                  // 9  // 36
    } else if (typeof exports === 'object') {                                                                // 10
        module.exports = factory(require('../moment')); // Node                                              // 11
    } else {                                                                                                 // 12
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global             // 13
    }                                                                                                        // 14
}(function (moment) {                                                                                        // 15
    return moment.defineLocale('sq', {                                                                       // 16
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'), // 17
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),                          // 18
        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),                   // 19
        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),                                            // 20
        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),                                                         // 21
        meridiemParse: /PD|MD/,                                                                              // 22
        isPM: function (input) {                                                                             // 23
            return input.charAt(0) === 'M';                                                                  // 24
        },                                                                                                   // 25
        meridiem : function (hours, minutes, isLower) {                                                      // 26
            return hours < 12 ? 'PD' : 'MD';                                                                 // 27
        },                                                                                                   // 28
        longDateFormat : {                                                                                   // 29
            LT : 'HH:mm',                                                                                    // 30
            LTS : 'LT:ss',                                                                                   // 31
            L : 'DD/MM/YYYY',                                                                                // 32
            LL : 'D MMMM YYYY',                                                                              // 33
            LLL : 'D MMMM YYYY LT',                                                                          // 34
            LLLL : 'dddd, D MMMM YYYY LT'                                                                    // 35
        },                                                                                                   // 36
        calendar : {                                                                                         // 37
            sameDay : '[Sot në] LT',                                                                         // 38
            nextDay : '[Nesër në] LT',                                                                       // 39
            nextWeek : 'dddd [në] LT',                                                                       // 40
            lastDay : '[Dje në] LT',                                                                         // 41
            lastWeek : 'dddd [e kaluar në] LT',                                                              // 42
            sameElse : 'L'                                                                                   // 43
        },                                                                                                   // 44
        relativeTime : {                                                                                     // 45
            future : 'në %s',                                                                                // 46
            past : '%s më parë',                                                                             // 47
            s : 'disa sekonda',                                                                              // 48
            m : 'një minutë',                                                                                // 49
            mm : '%d minuta',                                                                                // 50
            h : 'një orë',                                                                                   // 51
            hh : '%d orë',                                                                                   // 52
            d : 'një ditë',                                                                                  // 53
            dd : '%d ditë',                                                                                  // 54
            M : 'një muaj',                                                                                  // 55
            MM : '%d muaj',                                                                                  // 56
            y : 'një vit',                                                                                   // 57
            yy : '%d vite'                                                                                   // 58
        },                                                                                                   // 59
        ordinalParse: /\d{1,2}\./,                                                                           // 60
        ordinal : '%d.',                                                                                     // 61
        week : {                                                                                             // 62
            dow : 1, // Monday is the first day of the week.                                                 // 63
            doy : 4  // The week that contains Jan 4th is the first week of the year.                        // 64
        }                                                                                                    // 65
    });                                                                                                      // 66
}));                                                                                                         // 67
                                                                                                             // 68
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 96
                                                                                                                   // 97
}).call(this);                                                                                                     // 98
                                                                                                                   // 99
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-sq'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-sq.js.map
