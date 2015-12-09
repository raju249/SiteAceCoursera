(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-bn/packages/rzymek_moment-locale-bn //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-bn/server.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
global.moment = moment;                                                                                               // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-bn/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : Bengali (bn)                                                                                              // 2
// author : Kaushik Gandhi : https://github.com/kaushikgandhi                                                         // 3
                                                                                                                      // 4
(function (factory) {                                                                                                 // 5
    if (typeof define === 'function' && define.amd) {                                                                 // 6
        define(['moment'], factory); // AMD                                                                           // 7
    } else if (typeof exports === 'object') {                                                                         // 8
        module.exports = factory(require('../moment')); // Node                                                       // 9
    } else {                                                                                                          // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                      // 11
    }                                                                                                                 // 12
}(function (moment) {                                                                                                 // 13
    var symbolMap = {                                                                                                 // 14
        '1': '১',                                                                                                     // 15
        '2': '২',                                                                                                     // 16
        '3': '৩',                                                                                                     // 17
        '4': '৪',                                                                                                     // 18
        '5': '৫',                                                                                                     // 19
        '6': '৬',                                                                                                     // 20
        '7': '৭',                                                                                                     // 21
        '8': '৮',                                                                                                     // 22
        '9': '৯',                                                                                                     // 23
        '0': '০'                                                                                                      // 24
    },                                                                                                                // 25
    numberMap = {                                                                                                     // 26
        '১': '1',                                                                                                     // 27
        '২': '2',                                                                                                     // 28
        '৩': '3',                                                                                                     // 29
        '৪': '4',                                                                                                     // 30
        '৫': '5',                                                                                                     // 31
        '৬': '6',                                                                                                     // 32
        '৭': '7',                                                                                                     // 33
        '৮': '8',                                                                                                     // 34
        '৯': '9',                                                                                                     // 35
        '০': '0'                                                                                                      // 36
    };                                                                                                                // 37
                                                                                                                      // 38
    return moment.defineLocale('bn', {                                                                                // 39
        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'), // 40
        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),                            // 41
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),                         // 42
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),                                         // 43
        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),                                                        // 44
        longDateFormat : {                                                                                            // 45
            LT : 'A h:mm সময়',                                                                                        // 46
            LTS : 'A h:mm:ss সময়',                                                                                    // 47
            L : 'DD/MM/YYYY',                                                                                         // 48
            LL : 'D MMMM YYYY',                                                                                       // 49
            LLL : 'D MMMM YYYY, LT',                                                                                  // 50
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                            // 51
        },                                                                                                            // 52
        calendar : {                                                                                                  // 53
            sameDay : '[আজ] LT',                                                                                      // 54
            nextDay : '[আগামীকাল] LT',                                                                                // 55
            nextWeek : 'dddd, LT',                                                                                    // 56
            lastDay : '[গতকাল] LT',                                                                                   // 57
            lastWeek : '[গত] dddd, LT',                                                                               // 58
            sameElse : 'L'                                                                                            // 59
        },                                                                                                            // 60
        relativeTime : {                                                                                              // 61
            future : '%s পরে',                                                                                        // 62
            past : '%s আগে',                                                                                          // 63
            s : 'কএক সেকেন্ড',                                                                                        // 64
            m : 'এক মিনিট',                                                                                           // 65
            mm : '%d মিনিট',                                                                                          // 66
            h : 'এক ঘন্টা',                                                                                           // 67
            hh : '%d ঘন্টা',                                                                                          // 68
            d : 'এক দিন',                                                                                             // 69
            dd : '%d দিন',                                                                                            // 70
            M : 'এক মাস',                                                                                             // 71
            MM : '%d মাস',                                                                                            // 72
            y : 'এক বছর',                                                                                             // 73
            yy : '%d বছর'                                                                                             // 74
        },                                                                                                            // 75
        preparse: function (string) {                                                                                 // 76
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {                                                 // 77
                return numberMap[match];                                                                              // 78
            });                                                                                                       // 79
        },                                                                                                            // 80
        postformat: function (string) {                                                                               // 81
            return string.replace(/\d/g, function (match) {                                                           // 82
                return symbolMap[match];                                                                              // 83
            });                                                                                                       // 84
        },                                                                                                            // 85
        meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,                                                                    // 86
        isPM: function (input) {                                                                                      // 87
            return /^(দুপুর|বিকেল|রাত)$/.test(input);                                                                 // 88
        },                                                                                                            // 89
        //Bengali is a vast language its spoken                                                                       // 90
        //in different forms in various parts of the world.                                                           // 91
        //I have just generalized with most common one used                                                           // 92
        meridiem : function (hour, minute, isLower) {                                                                 // 93
            if (hour < 4) {                                                                                           // 94
                return 'রাত';                                                                                         // 95
            } else if (hour < 10) {                                                                                   // 96
                return 'শকাল';                                                                                        // 97
            } else if (hour < 17) {                                                                                   // 98
                return 'দুপুর';                                                                                       // 99
            } else if (hour < 20) {                                                                                   // 100
                return 'বিকেল';                                                                                       // 101
            } else {                                                                                                  // 102
                return 'রাত';                                                                                         // 103
            }                                                                                                         // 104
        },                                                                                                            // 105
        week : {                                                                                                      // 106
            dow : 0, // Sunday is the first day of the week.                                                          // 107
            doy : 6  // The week that contains Jan 1st is the first week of the year.                                 // 108
        }                                                                                                             // 109
    });                                                                                                               // 110
}));                                                                                                                  // 111
                                                                                                                      // 112
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 141
}).call(this);                                                       // 142
                                                                     // 143
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-bn'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-bn.js.map
