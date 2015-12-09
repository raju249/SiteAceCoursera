(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-ro/packages/rzymek_moment-locale-ro.js                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                //    // 4
// packages/rzymek:moment-locale-ro/server.js                                                     //    // 5
//                                                                                                //    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                  //    // 8
global.moment = moment;                                                                           // 1  // 9
                                                                                                  // 2  // 10
////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                        // 12
}).call(this);                                                                                          // 13
                                                                                                        // 14
                                                                                                        // 15
                                                                                                        // 16
                                                                                                        // 17
                                                                                                        // 18
                                                                                                        // 19
(function () {                                                                                          // 20
                                                                                                        // 21
////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                //    // 23
// packages/rzymek:moment-locale-ro/locale.js                                                     //    // 24
//                                                                                                //    // 25
////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                  //    // 27
// moment.js locale configuration                                                                 // 1  // 28
// locale : romanian (ro)                                                                         // 2  // 29
// author : Vlad Gurdiga : https://github.com/gurdiga                                             // 3  // 30
// author : Valentin Agachi : https://github.com/avaly                                            // 4  // 31
                                                                                                  // 5  // 32
(function (factory) {                                                                             // 6  // 33
    if (typeof define === 'function' && define.amd) {                                             // 7  // 34
        define(['moment'], factory); // AMD                                                       // 8  // 35
    } else if (typeof exports === 'object') {                                                     // 9  // 36
        module.exports = factory(require('../moment')); // Node                                   // 10
    } else {                                                                                      // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global  // 12
    }                                                                                             // 13
}(function (moment) {                                                                             // 14
    function relativeTimeWithPlural(number, withoutSuffix, key) {                                 // 15
        var format = {                                                                            // 16
                'mm': 'minute',                                                                   // 17
                'hh': 'ore',                                                                      // 18
                'dd': 'zile',                                                                     // 19
                'MM': 'luni',                                                                     // 20
                'yy': 'ani'                                                                       // 21
            },                                                                                    // 22
            separator = ' ';                                                                      // 23
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {                        // 24
            separator = ' de ';                                                                   // 25
        }                                                                                         // 26
                                                                                                  // 27
        return number + separator + format[key];                                                  // 28
    }                                                                                             // 29
                                                                                                  // 30
    return moment.defineLocale('ro', {                                                            // 31
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'), // 33
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),                  // 34
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),                                 // 35
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),                                          // 36
        longDateFormat : {                                                                        // 37
            LT : 'H:mm',                                                                          // 38
            LTS : 'LT:ss',                                                                        // 39
            L : 'DD.MM.YYYY',                                                                     // 40
            LL : 'D MMMM YYYY',                                                                   // 41
            LLL : 'D MMMM YYYY H:mm',                                                             // 42
            LLLL : 'dddd, D MMMM YYYY H:mm'                                                       // 43
        },                                                                                        // 44
        calendar : {                                                                              // 45
            sameDay: '[azi la] LT',                                                               // 46
            nextDay: '[mâine la] LT',                                                             // 47
            nextWeek: 'dddd [la] LT',                                                             // 48
            lastDay: '[ieri la] LT',                                                              // 49
            lastWeek: '[fosta] dddd [la] LT',                                                     // 50
            sameElse: 'L'                                                                         // 51
        },                                                                                        // 52
        relativeTime : {                                                                          // 53
            future : 'peste %s',                                                                  // 54
            past : '%s în urmă',                                                                  // 55
            s : 'câteva secunde',                                                                 // 56
            m : 'un minut',                                                                       // 57
            mm : relativeTimeWithPlural,                                                          // 58
            h : 'o oră',                                                                          // 59
            hh : relativeTimeWithPlural,                                                          // 60
            d : 'o zi',                                                                           // 61
            dd : relativeTimeWithPlural,                                                          // 62
            M : 'o lună',                                                                         // 63
            MM : relativeTimeWithPlural,                                                          // 64
            y : 'un an',                                                                          // 65
            yy : relativeTimeWithPlural                                                           // 66
        },                                                                                        // 67
        week : {                                                                                  // 68
            dow : 1, // Monday is the first day of the week.                                      // 69
            doy : 7  // The week that contains Jan 1st is the first week of the year.             // 70
        }                                                                                         // 71
    });                                                                                           // 72
}));                                                                                              // 73
                                                                                                  // 74
////////////////////////////////////////////////////////////////////////////////////////////////////    // 102
                                                                                                        // 103
}).call(this);                                                                                          // 104
                                                                                                        // 105
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ro'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ro.js.map
