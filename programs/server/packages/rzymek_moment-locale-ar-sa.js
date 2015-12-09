(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek_moment-locale-ar-sa/packages/rzymek_moment-locale-ar-sa.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/rzymek:moment-locale-ar-sa/server.js                                                               //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
global.moment = moment;                                                                                        // 1   // 9
                                                                                                               // 2   // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                      // 12
}).call(this);                                                                                                        // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      // 16
                                                                                                                      // 17
                                                                                                                      // 18
                                                                                                                      // 19
(function () {                                                                                                        // 20
                                                                                                                      // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                             //     // 23
// packages/rzymek:moment-locale-ar-sa/locale.js                                                               //     // 24
//                                                                                                             //     // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                               //     // 27
// moment.js locale configuration                                                                              // 1   // 28
// locale : Arabic Saudi Arabia (ar-sa)                                                                        // 2   // 29
// author : Suhail Alkowaileet : https://github.com/xsoh                                                       // 3   // 30
                                                                                                               // 4   // 31
(function (factory) {                                                                                          // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                          // 6   // 33
        define(['moment'], factory); // AMD                                                                    // 7   // 34
    } else if (typeof exports === 'object') {                                                                  // 8   // 35
        module.exports = factory(require('../moment')); // Node                                                // 9   // 36
    } else {                                                                                                   // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global               // 11  // 38
    }                                                                                                          // 12  // 39
}(function (moment) {                                                                                          // 13  // 40
    var symbolMap = {                                                                                          // 14  // 41
        '1': '١',                                                                                              // 15  // 42
        '2': '٢',                                                                                              // 16  // 43
        '3': '٣',                                                                                              // 17  // 44
        '4': '٤',                                                                                              // 18  // 45
        '5': '٥',                                                                                              // 19  // 46
        '6': '٦',                                                                                              // 20  // 47
        '7': '٧',                                                                                              // 21  // 48
        '8': '٨',                                                                                              // 22  // 49
        '9': '٩',                                                                                              // 23  // 50
        '0': '٠'                                                                                               // 24  // 51
    }, numberMap = {                                                                                           // 25  // 52
        '١': '1',                                                                                              // 26  // 53
        '٢': '2',                                                                                              // 27  // 54
        '٣': '3',                                                                                              // 28  // 55
        '٤': '4',                                                                                              // 29  // 56
        '٥': '5',                                                                                              // 30  // 57
        '٦': '6',                                                                                              // 31  // 58
        '٧': '7',                                                                                              // 32  // 59
        '٨': '8',                                                                                              // 33  // 60
        '٩': '9',                                                                                              // 34  // 61
        '٠': '0'                                                                                               // 35  // 62
    };                                                                                                         // 36  // 63
                                                                                                               // 37  // 64
    return moment.defineLocale('ar-sa', {                                                                      // 38  // 65
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),      // 39  // 66
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'), // 40  // 67
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),                           // 41  // 68
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),                                    // 42  // 69
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),                                                              // 43  // 70
        longDateFormat : {                                                                                     // 44  // 71
            LT : 'HH:mm',                                                                                      // 45  // 72
            LTS : 'HH:mm:ss',                                                                                  // 46  // 73
            L : 'DD/MM/YYYY',                                                                                  // 47  // 74
            LL : 'D MMMM YYYY',                                                                                // 48  // 75
            LLL : 'D MMMM YYYY LT',                                                                            // 49  // 76
            LLLL : 'dddd D MMMM YYYY LT'                                                                       // 50  // 77
        },                                                                                                     // 51  // 78
        meridiemParse: /ص|م/,                                                                                  // 52  // 79
        isPM : function (input) {                                                                              // 53  // 80
            return 'م' === input;                                                                              // 54  // 81
        },                                                                                                     // 55  // 82
        meridiem : function (hour, minute, isLower) {                                                          // 56  // 83
            if (hour < 12) {                                                                                   // 57  // 84
                return 'ص';                                                                                    // 58  // 85
            } else {                                                                                           // 59  // 86
                return 'م';                                                                                    // 60  // 87
            }                                                                                                  // 61  // 88
        },                                                                                                     // 62  // 89
        calendar : {                                                                                           // 63  // 90
            sameDay: '[اليوم على الساعة] LT',                                                                  // 64  // 91
            nextDay: '[غدا على الساعة] LT',                                                                    // 65  // 92
            nextWeek: 'dddd [على الساعة] LT',                                                                  // 66  // 93
            lastDay: '[أمس على الساعة] LT',                                                                    // 67  // 94
            lastWeek: 'dddd [على الساعة] LT',                                                                  // 68  // 95
            sameElse: 'L'                                                                                      // 69  // 96
        },                                                                                                     // 70  // 97
        relativeTime : {                                                                                       // 71  // 98
            future : 'في %s',                                                                                  // 72  // 99
            past : 'منذ %s',                                                                                   // 73  // 100
            s : 'ثوان',                                                                                        // 74  // 101
            m : 'دقيقة',                                                                                       // 75  // 102
            mm : '%d دقائق',                                                                                   // 76  // 103
            h : 'ساعة',                                                                                        // 77  // 104
            hh : '%d ساعات',                                                                                   // 78  // 105
            d : 'يوم',                                                                                         // 79  // 106
            dd : '%d أيام',                                                                                    // 80  // 107
            M : 'شهر',                                                                                         // 81  // 108
            MM : '%d أشهر',                                                                                    // 82  // 109
            y : 'سنة',                                                                                         // 83  // 110
            yy : '%d سنوات'                                                                                    // 84  // 111
        },                                                                                                     // 85  // 112
        preparse: function (string) {                                                                          // 86  // 113
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {                                          // 87  // 114
                return numberMap[match];                                                                       // 88  // 115
            }).replace(/،/g, ',');                                                                             // 89  // 116
        },                                                                                                     // 90  // 117
        postformat: function (string) {                                                                        // 91  // 118
            return string.replace(/\d/g, function (match) {                                                    // 92  // 119
                return symbolMap[match];                                                                       // 93  // 120
            }).replace(/,/g, '،');                                                                             // 94  // 121
        },                                                                                                     // 95  // 122
        week : {                                                                                               // 96  // 123
            dow : 6, // Saturday is the first day of the week.                                                 // 97  // 124
            doy : 12  // The week that contains Jan 1st is the first week of the year.                         // 98  // 125
        }                                                                                                      // 99  // 126
    });                                                                                                        // 100
}));                                                                                                           // 101
                                                                                                               // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 130
                                                                                                                      // 131
}).call(this);                                                                                                        // 132
                                                                                                                      // 133
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ar-sa'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ar-sa.js.map
