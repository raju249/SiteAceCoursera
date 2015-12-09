(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-ar/packages/rzymek_moment-locale-ar.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-ar/server.js                                                                       //
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
// packages/rzymek:moment-locale-ar/locale.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// Locale: Arabic (ar)                                                                                              // 2
// Author: Abdel Said: https://github.com/abdelsaid                                                                 // 3
// Changes in months, weekdays: Ahmed Elkhatib                                                                      // 4
// Native plural forms: forabi https://github.com/forabi                                                            // 5
                                                                                                                    // 6
(function (factory) {                                                                                               // 7
    if (typeof define === 'function' && define.amd) {                                                               // 8
        define(['moment'], factory); // AMD                                                                         // 9
    } else if (typeof exports === 'object') {                                                                       // 10
        module.exports = factory(require('../moment')); // Node                                                     // 11
    } else {                                                                                                        // 12
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                    // 13
    }                                                                                                               // 14
}(function (moment) {                                                                                               // 15
    var symbolMap = {                                                                                               // 16
        '1': '١',                                                                                                   // 17
        '2': '٢',                                                                                                   // 18
        '3': '٣',                                                                                                   // 19
        '4': '٤',                                                                                                   // 20
        '5': '٥',                                                                                                   // 21
        '6': '٦',                                                                                                   // 22
        '7': '٧',                                                                                                   // 23
        '8': '٨',                                                                                                   // 24
        '9': '٩',                                                                                                   // 25
        '0': '٠'                                                                                                    // 26
    }, numberMap = {                                                                                                // 27
        '١': '1',                                                                                                   // 28
        '٢': '2',                                                                                                   // 29
        '٣': '3',                                                                                                   // 30
        '٤': '4',                                                                                                   // 31
        '٥': '5',                                                                                                   // 32
        '٦': '6',                                                                                                   // 33
        '٧': '7',                                                                                                   // 34
        '٨': '8',                                                                                                   // 35
        '٩': '9',                                                                                                   // 36
        '٠': '0'                                                                                                    // 37
    }, pluralForm = function (n) {                                                                                  // 38
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5; // 39
    }, plurals = {                                                                                                  // 40
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],             // 41
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],            // 42
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],                  // 43
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],                        // 44
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],                         // 45
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']                        // 46
    }, pluralize = function (u) {                                                                                   // 47
        return function (number, withoutSuffix, string, isFuture) {                                                 // 48
            var f = pluralForm(number),                                                                             // 49
                str = plurals[u][pluralForm(number)];                                                               // 50
            if (f === 2) {                                                                                          // 51
                str = str[withoutSuffix ? 0 : 1];                                                                   // 52
            }                                                                                                       // 53
            return str.replace(/%d/i, number);                                                                      // 54
        };                                                                                                          // 55
    }, months = [                                                                                                   // 56
        'كانون الثاني يناير',                                                                                       // 57
        'شباط فبراير',                                                                                              // 58
        'آذار مارس',                                                                                                // 59
        'نيسان أبريل',                                                                                              // 60
        'أيار مايو',                                                                                                // 61
        'حزيران يونيو',                                                                                             // 62
        'تموز يوليو',                                                                                               // 63
        'آب أغسطس',                                                                                                 // 64
        'أيلول سبتمبر',                                                                                             // 65
        'تشرين الأول أكتوبر',                                                                                       // 66
        'تشرين الثاني نوفمبر',                                                                                      // 67
        'كانون الأول ديسمبر'                                                                                        // 68
    ];                                                                                                              // 69
                                                                                                                    // 70
    return moment.defineLocale('ar', {                                                                              // 71
        months : months,                                                                                            // 72
        monthsShort : months,                                                                                       // 73
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),                                // 74
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),                                         // 75
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),                                                                   // 76
        longDateFormat : {                                                                                          // 77
            LT : 'HH:mm',                                                                                           // 78
            LTS : 'HH:mm:ss',                                                                                       // 79
            L : 'DD/MM/YYYY',                                                                                       // 80
            LL : 'D MMMM YYYY',                                                                                     // 81
            LLL : 'D MMMM YYYY LT',                                                                                 // 82
            LLLL : 'dddd D MMMM YYYY LT'                                                                            // 83
        },                                                                                                          // 84
        meridiemParse: /ص|م/,                                                                                       // 85
        isPM : function (input) {                                                                                   // 86
            return 'م' === input;                                                                                   // 87
        },                                                                                                          // 88
        meridiem : function (hour, minute, isLower) {                                                               // 89
            if (hour < 12) {                                                                                        // 90
                return 'ص';                                                                                         // 91
            } else {                                                                                                // 92
                return 'م';                                                                                         // 93
            }                                                                                                       // 94
        },                                                                                                          // 95
        calendar : {                                                                                                // 96
            sameDay: '[اليوم عند الساعة] LT',                                                                       // 97
            nextDay: '[غدًا عند الساعة] LT',                                                                        // 98
            nextWeek: 'dddd [عند الساعة] LT',                                                                       // 99
            lastDay: '[أمس عند الساعة] LT',                                                                         // 100
            lastWeek: 'dddd [عند الساعة] LT',                                                                       // 101
            sameElse: 'L'                                                                                           // 102
        },                                                                                                          // 103
        relativeTime : {                                                                                            // 104
            future : 'بعد %s',                                                                                      // 105
            past : 'منذ %s',                                                                                        // 106
            s : pluralize('s'),                                                                                     // 107
            m : pluralize('m'),                                                                                     // 108
            mm : pluralize('m'),                                                                                    // 109
            h : pluralize('h'),                                                                                     // 110
            hh : pluralize('h'),                                                                                    // 111
            d : pluralize('d'),                                                                                     // 112
            dd : pluralize('d'),                                                                                    // 113
            M : pluralize('M'),                                                                                     // 114
            MM : pluralize('M'),                                                                                    // 115
            y : pluralize('y'),                                                                                     // 116
            yy : pluralize('y')                                                                                     // 117
        },                                                                                                          // 118
        preparse: function (string) {                                                                               // 119
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {                                               // 120
                return numberMap[match];                                                                            // 121
            }).replace(/،/g, ',');                                                                                  // 122
        },                                                                                                          // 123
        postformat: function (string) {                                                                             // 124
            return string.replace(/\d/g, function (match) {                                                         // 125
                return symbolMap[match];                                                                            // 126
            }).replace(/,/g, '،');                                                                                  // 127
        },                                                                                                          // 128
        week : {                                                                                                    // 129
            dow : 6, // Saturday is the first day of the week.                                                      // 130
            doy : 12  // The week that contains Jan 1st is the first week of the year.                              // 131
        }                                                                                                           // 132
    });                                                                                                             // 133
}));                                                                                                                // 134
                                                                                                                    // 135
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 164
}).call(this);                                                                                                         // 165
                                                                                                                       // 166
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ar'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ar.js.map
