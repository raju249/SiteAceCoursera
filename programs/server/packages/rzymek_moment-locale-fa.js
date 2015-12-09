(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rzymek_moment-locale-fa/packages/rzymek_moment-locale-fa.js                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
                                                                                                                 // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                        //     // 4
// packages/rzymek:moment-locale-fa/server.js                                                             //     // 5
//                                                                                                        //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                          //     // 8
global.moment = moment;                                                                                   // 1   // 9
                                                                                                          // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                 // 12
}).call(this);                                                                                                   // 13
                                                                                                                 // 14
                                                                                                                 // 15
                                                                                                                 // 16
                                                                                                                 // 17
                                                                                                                 // 18
                                                                                                                 // 19
(function () {                                                                                                   // 20
                                                                                                                 // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                        //     // 23
// packages/rzymek:moment-locale-fa/locale.js                                                             //     // 24
//                                                                                                        //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                          //     // 27
// moment.js locale configuration                                                                         // 1   // 28
// locale : Persian (fa)                                                                                  // 2   // 29
// author : Ebrahim Byagowi : https://github.com/ebraminio                                                // 3   // 30
                                                                                                          // 4   // 31
(function (factory) {                                                                                     // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                     // 6   // 33
        define(['moment'], factory); // AMD                                                               // 7   // 34
    } else if (typeof exports === 'object') {                                                             // 8   // 35
        module.exports = factory(require('../moment')); // Node                                           // 9   // 36
    } else {                                                                                              // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global          // 11  // 38
    }                                                                                                     // 12  // 39
}(function (moment) {                                                                                     // 13  // 40
    var symbolMap = {                                                                                     // 14  // 41
        '1': '۱',                                                                                         // 15  // 42
        '2': '۲',                                                                                         // 16  // 43
        '3': '۳',                                                                                         // 17  // 44
        '4': '۴',                                                                                         // 18  // 45
        '5': '۵',                                                                                         // 19  // 46
        '6': '۶',                                                                                         // 20  // 47
        '7': '۷',                                                                                         // 21  // 48
        '8': '۸',                                                                                         // 22  // 49
        '9': '۹',                                                                                         // 23  // 50
        '0': '۰'                                                                                          // 24  // 51
    }, numberMap = {                                                                                      // 25  // 52
        '۱': '1',                                                                                         // 26  // 53
        '۲': '2',                                                                                         // 27  // 54
        '۳': '3',                                                                                         // 28  // 55
        '۴': '4',                                                                                         // 29  // 56
        '۵': '5',                                                                                         // 30  // 57
        '۶': '6',                                                                                         // 31  // 58
        '۷': '7',                                                                                         // 32  // 59
        '۸': '8',                                                                                         // 33  // 60
        '۹': '9',                                                                                         // 34  // 61
        '۰': '0'                                                                                          // 35  // 62
    };                                                                                                    // 36  // 63
                                                                                                          // 37  // 64
    return moment.defineLocale('fa', {                                                                    // 38  // 65
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),      // 39  // 66
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'), // 40  // 67
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),        // 41  // 68
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),   // 42  // 69
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),                                                         // 43  // 70
        longDateFormat : {                                                                                // 44  // 71
            LT : 'HH:mm',                                                                                 // 45  // 72
            LTS : 'LT:ss',                                                                                // 46  // 73
            L : 'DD/MM/YYYY',                                                                             // 47  // 74
            LL : 'D MMMM YYYY',                                                                           // 48  // 75
            LLL : 'D MMMM YYYY LT',                                                                       // 49  // 76
            LLLL : 'dddd, D MMMM YYYY LT'                                                                 // 50  // 77
        },                                                                                                // 51  // 78
        meridiemParse: /قبل از ظهر|بعد از ظهر/,                                                           // 52  // 79
        isPM: function (input) {                                                                          // 53  // 80
            return /بعد از ظهر/.test(input);                                                              // 54  // 81
        },                                                                                                // 55  // 82
        meridiem : function (hour, minute, isLower) {                                                     // 56  // 83
            if (hour < 12) {                                                                              // 57  // 84
                return 'قبل از ظهر';                                                                      // 58  // 85
            } else {                                                                                      // 59  // 86
                return 'بعد از ظهر';                                                                      // 60  // 87
            }                                                                                             // 61  // 88
        },                                                                                                // 62  // 89
        calendar : {                                                                                      // 63  // 90
            sameDay : '[امروز ساعت] LT',                                                                  // 64  // 91
            nextDay : '[فردا ساعت] LT',                                                                   // 65  // 92
            nextWeek : 'dddd [ساعت] LT',                                                                  // 66  // 93
            lastDay : '[دیروز ساعت] LT',                                                                  // 67  // 94
            lastWeek : 'dddd [پیش] [ساعت] LT',                                                            // 68  // 95
            sameElse : 'L'                                                                                // 69  // 96
        },                                                                                                // 70  // 97
        relativeTime : {                                                                                  // 71  // 98
            future : 'در %s',                                                                             // 72  // 99
            past : '%s پیش',                                                                              // 73  // 100
            s : 'چندین ثانیه',                                                                            // 74  // 101
            m : 'یک دقیقه',                                                                               // 75  // 102
            mm : '%d دقیقه',                                                                              // 76  // 103
            h : 'یک ساعت',                                                                                // 77  // 104
            hh : '%d ساعت',                                                                               // 78  // 105
            d : 'یک روز',                                                                                 // 79  // 106
            dd : '%d روز',                                                                                // 80  // 107
            M : 'یک ماه',                                                                                 // 81  // 108
            MM : '%d ماه',                                                                                // 82  // 109
            y : 'یک سال',                                                                                 // 83  // 110
            yy : '%d سال'                                                                                 // 84  // 111
        },                                                                                                // 85  // 112
        preparse: function (string) {                                                                     // 86  // 113
            return string.replace(/[۰-۹]/g, function (match) {                                            // 87  // 114
                return numberMap[match];                                                                  // 88  // 115
            }).replace(/،/g, ',');                                                                        // 89  // 116
        },                                                                                                // 90  // 117
        postformat: function (string) {                                                                   // 91  // 118
            return string.replace(/\d/g, function (match) {                                               // 92  // 119
                return symbolMap[match];                                                                  // 93  // 120
            }).replace(/,/g, '،');                                                                        // 94  // 121
        },                                                                                                // 95  // 122
        ordinalParse: /\d{1,2}م/,                                                                         // 96  // 123
        ordinal : '%dم',                                                                                  // 97  // 124
        week : {                                                                                          // 98  // 125
            dow : 6, // Saturday is the first day of the week.                                            // 99  // 126
            doy : 12 // The week that contains Jan 1st is the first week of the year.                     // 100
        }                                                                                                 // 101
    });                                                                                                   // 102
}));                                                                                                      // 103
                                                                                                          // 104
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 132
                                                                                                                 // 133
}).call(this);                                                                                                   // 134
                                                                                                                 // 135
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-fa'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-fa.js.map
