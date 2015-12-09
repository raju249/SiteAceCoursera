(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rzymek_moment-locale-ar-ma/packages/rzymek_moment-locale-ar-ma.js                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                        //    // 4
// packages/rzymek:moment-locale-ar-ma/server.js                                                          //    // 5
//                                                                                                        //    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                          //    // 8
global.moment = moment;                                                                                   // 1  // 9
                                                                                                          // 2  // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                // 12
}).call(this);                                                                                                  // 13
                                                                                                                // 14
                                                                                                                // 15
                                                                                                                // 16
                                                                                                                // 17
                                                                                                                // 18
                                                                                                                // 19
(function () {                                                                                                  // 20
                                                                                                                // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                        //    // 23
// packages/rzymek:moment-locale-ar-ma/locale.js                                                          //    // 24
//                                                                                                        //    // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                          //    // 27
// moment.js locale configuration                                                                         // 1  // 28
// locale : Moroccan Arabic (ar-ma)                                                                       // 2  // 29
// author : ElFadili Yassine : https://github.com/ElFadiliY                                               // 3  // 30
// author : Abdel Said : https://github.com/abdelsaid                                                     // 4  // 31
                                                                                                          // 5  // 32
(function (factory) {                                                                                     // 6  // 33
    if (typeof define === 'function' && define.amd) {                                                     // 7  // 34
        define(['moment'], factory); // AMD                                                               // 8  // 35
    } else if (typeof exports === 'object') {                                                             // 9  // 36
        module.exports = factory(require('../moment')); // Node                                           // 10
    } else {                                                                                              // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global          // 12
    }                                                                                                     // 13
}(function (moment) {                                                                                     // 14
    return moment.defineLocale('ar-ma', {                                                                 // 15
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),      // 16
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'), // 17
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),                      // 18
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),                               // 19
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),                                                         // 20
        longDateFormat : {                                                                                // 21
            LT : 'HH:mm',                                                                                 // 22
            LTS : 'LT:ss',                                                                                // 23
            L : 'DD/MM/YYYY',                                                                             // 24
            LL : 'D MMMM YYYY',                                                                           // 25
            LLL : 'D MMMM YYYY LT',                                                                       // 26
            LLLL : 'dddd D MMMM YYYY LT'                                                                  // 27
        },                                                                                                // 28
        calendar : {                                                                                      // 29
            sameDay: '[اليوم على الساعة] LT',                                                             // 30
            nextDay: '[غدا على الساعة] LT',                                                               // 31
            nextWeek: 'dddd [على الساعة] LT',                                                             // 32
            lastDay: '[أمس على الساعة] LT',                                                               // 33
            lastWeek: 'dddd [على الساعة] LT',                                                             // 34
            sameElse: 'L'                                                                                 // 35
        },                                                                                                // 36
        relativeTime : {                                                                                  // 37
            future : 'في %s',                                                                             // 38
            past : 'منذ %s',                                                                              // 39
            s : 'ثوان',                                                                                   // 40
            m : 'دقيقة',                                                                                  // 41
            mm : '%d دقائق',                                                                              // 42
            h : 'ساعة',                                                                                   // 43
            hh : '%d ساعات',                                                                              // 44
            d : 'يوم',                                                                                    // 45
            dd : '%d أيام',                                                                               // 46
            M : 'شهر',                                                                                    // 47
            MM : '%d أشهر',                                                                               // 48
            y : 'سنة',                                                                                    // 49
            yy : '%d سنوات'                                                                               // 50
        },                                                                                                // 51
        week : {                                                                                          // 52
            dow : 6, // Saturday is the first day of the week.                                            // 53
            doy : 12  // The week that contains Jan 1st is the first week of the year.                    // 54
        }                                                                                                 // 55
    });                                                                                                   // 56
}));                                                                                                      // 57
                                                                                                          // 58
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 86
                                                                                                                // 87
}).call(this);                                                                                                  // 88
                                                                                                                // 89
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ar-ma'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ar-ma.js.map
