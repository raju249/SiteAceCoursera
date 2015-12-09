(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-my/packages/rzymek_moment-locale-my //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-my/server.js                                                                          //
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
// packages/rzymek:moment-locale-my/locale.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js locale configuration                                                                                      // 1
// locale : Burmese (my)                                                                                               // 2
// author : Squar team, mysquar.com                                                                                    // 3
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
    var symbolMap = {                                                                                                  // 14
        '1': '၁',                                                                                                      // 15
        '2': '၂',                                                                                                      // 16
        '3': '၃',                                                                                                      // 17
        '4': '၄',                                                                                                      // 18
        '5': '၅',                                                                                                      // 19
        '6': '၆',                                                                                                      // 20
        '7': '၇',                                                                                                      // 21
        '8': '၈',                                                                                                      // 22
        '9': '၉',                                                                                                      // 23
        '0': '၀'                                                                                                       // 24
    }, numberMap = {                                                                                                   // 25
        '၁': '1',                                                                                                      // 26
        '၂': '2',                                                                                                      // 27
        '၃': '3',                                                                                                      // 28
        '၄': '4',                                                                                                      // 29
        '၅': '5',                                                                                                      // 30
        '၆': '6',                                                                                                      // 31
        '၇': '7',                                                                                                      // 32
        '၈': '8',                                                                                                      // 33
        '၉': '9',                                                                                                      // 34
        '၀': '0'                                                                                                       // 35
    };                                                                                                                 // 36
    return moment.defineLocale('my', {                                                                                 // 37
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'), // 38
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),                                    // 39
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),                                  // 40
        weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),                                                       // 41
        weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),                                                         // 42
        longDateFormat: {                                                                                              // 43
            LT: 'HH:mm',                                                                                               // 44
            LTS: 'HH:mm:ss',                                                                                           // 45
            L: 'DD/MM/YYYY',                                                                                           // 46
            LL: 'D MMMM YYYY',                                                                                         // 47
            LLL: 'D MMMM YYYY LT',                                                                                     // 48
            LLLL: 'dddd D MMMM YYYY LT'                                                                                // 49
        },                                                                                                             // 50
        calendar: {                                                                                                    // 51
            sameDay: '[ယနေ.] LT [မှာ]',                                                                                // 52
            nextDay: '[မနက်ဖြန်] LT [မှာ]',                                                                            // 53
            nextWeek: 'dddd LT [မှာ]',                                                                                 // 54
            lastDay: '[မနေ.က] LT [မှာ]',                                                                               // 55
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',                                                                    // 56
            sameElse: 'L'                                                                                              // 57
        },                                                                                                             // 58
        relativeTime: {                                                                                                // 59
            future: 'လာမည့် %s မှာ',                                                                                   // 60
            past: 'လွန်ခဲ့သော %s က',                                                                                   // 61
            s: 'စက္ကန်.အနည်းငယ်',                                                                                      // 62
            m: 'တစ်မိနစ်',                                                                                             // 63
            mm: '%d မိနစ်',                                                                                            // 64
            h: 'တစ်နာရီ',                                                                                              // 65
            hh: '%d နာရီ',                                                                                             // 66
            d: 'တစ်ရက်',                                                                                               // 67
            dd: '%d ရက်',                                                                                              // 68
            M: 'တစ်လ',                                                                                                 // 69
            MM: '%d လ',                                                                                                // 70
            y: 'တစ်နှစ်',                                                                                              // 71
            yy: '%d နှစ်'                                                                                              // 72
        },                                                                                                             // 73
        preparse: function (string) {                                                                                  // 74
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {                                                  // 75
                return numberMap[match];                                                                               // 76
            });                                                                                                        // 77
        },                                                                                                             // 78
        postformat: function (string) {                                                                                // 79
            return string.replace(/\d/g, function (match) {                                                            // 80
                return symbolMap[match];                                                                               // 81
            });                                                                                                        // 82
        },                                                                                                             // 83
        week: {                                                                                                        // 84
            dow: 1, // Monday is the first day of the week.                                                            // 85
            doy: 4 // The week that contains Jan 1st is the first week of the year.                                    // 86
        }                                                                                                              // 87
    });                                                                                                                // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 119
}).call(this);                                                       // 120
                                                                     // 121
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-my'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-my.js.map
