(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-tzm/packages/rzymek_moment-locale-tzm.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-tzm/server.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
global.moment = moment;                                                                                             // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-tzm/locale.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : Morocco Central Atlas Tamaziɣt (tzm)                                                                    // 2
// author : Abdel Said : https://github.com/abdelsaid                                                               // 3
                                                                                                                    // 4
(function (factory) {                                                                                               // 5
    if (typeof define === 'function' && define.amd) {                                                               // 6
        define(['moment'], factory); // AMD                                                                         // 7
    } else if (typeof exports === 'object') {                                                                       // 8
        module.exports = factory(require('../moment')); // Node                                                     // 9
    } else {                                                                                                        // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                    // 11
    }                                                                                                               // 12
}(function (moment) {                                                                                               // 13
    return moment.defineLocale('tzm', {                                                                             // 14
        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),      // 15
        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'), // 16
        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),                                    // 17
        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),                               // 18
        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),                                 // 19
        longDateFormat : {                                                                                          // 20
            LT : 'HH:mm',                                                                                           // 21
            LTS: 'LT:ss',                                                                                           // 22
            L : 'DD/MM/YYYY',                                                                                       // 23
            LL : 'D MMMM YYYY',                                                                                     // 24
            LLL : 'D MMMM YYYY LT',                                                                                 // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                            // 26
        },                                                                                                          // 27
        calendar : {                                                                                                // 28
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',                                                                                 // 29
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',                                                                                 // 30
            nextWeek: 'dddd [ⴴ] LT',                                                                                // 31
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',                                                                                // 32
            lastWeek: 'dddd [ⴴ] LT',                                                                                // 33
            sameElse: 'L'                                                                                           // 34
        },                                                                                                          // 35
        relativeTime : {                                                                                            // 36
            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',                                                                               // 37
            past : 'ⵢⴰⵏ %s',                                                                                        // 38
            s : 'ⵉⵎⵉⴽ',                                                                                             // 39
            m : 'ⵎⵉⵏⵓⴺ',                                                                                            // 40
            mm : '%d ⵎⵉⵏⵓⴺ',                                                                                        // 41
            h : 'ⵙⴰⵄⴰ',                                                                                             // 42
            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',                                                                                     // 43
            d : 'ⴰⵙⵙ',                                                                                              // 44
            dd : '%d oⵙⵙⴰⵏ',                                                                                        // 45
            M : 'ⴰⵢoⵓⵔ',                                                                                            // 46
            MM : '%d ⵉⵢⵢⵉⵔⵏ',                                                                                       // 47
            y : 'ⴰⵙⴳⴰⵙ',                                                                                            // 48
            yy : '%d ⵉⵙⴳⴰⵙⵏ'                                                                                        // 49
        },                                                                                                          // 50
        week : {                                                                                                    // 51
            dow : 6, // Saturday is the first day of the week.                                                      // 52
            doy : 12  // The week that contains Jan 1st is the first week of the year.                              // 53
        }                                                                                                           // 54
    });                                                                                                             // 55
}));                                                                                                                // 56
                                                                                                                    // 57
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 86
}).call(this);                                                                                                         // 87
                                                                                                                       // 88
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-tzm'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-tzm.js.map
