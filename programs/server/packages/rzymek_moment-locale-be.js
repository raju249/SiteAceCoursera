(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-be/packages/rzymek_moment-locale-be.js                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-be/server.js                                                    //     // 5
//                                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                 //     // 8
global.moment = moment;                                                                          // 1   // 9
                                                                                                 // 2   // 10
///////////////////////////////////////////////////////////////////////////////////////////////////     // 11
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
///////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                               //     // 23
// packages/rzymek:moment-locale-be/locale.js                                                    //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : belarusian (be)                                                                      // 2   // 29
// author : Dmitry Demidov : https://github.com/demidov91                                        // 3   // 30
// author: Praleska: http://praleska.pro/                                                        // 4   // 31
// Author : Menelion Elensúle : https://github.com/Oire                                          // 5   // 32
                                                                                                 // 6   // 33
(function (factory) {                                                                            // 7   // 34
    if (typeof define === 'function' && define.amd) {                                            // 8   // 35
        define(['moment'], factory); // AMD                                                      // 9   // 36
    } else if (typeof exports === 'object') {                                                    // 10  // 37
        module.exports = factory(require('../moment')); // Node                                  // 11  // 38
    } else {                                                                                     // 12  // 39
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 13  // 40
    }                                                                                            // 14  // 41
}(function (moment) {                                                                            // 15  // 42
    function plural(word, num) {                                                                 // 16  // 43
        var forms = word.split('_');                                                             // 17  // 44
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }                                                                                            // 19  // 46
                                                                                                 // 20  // 47
    function relativeTimeWithPlural(number, withoutSuffix, key) {                                // 21  // 48
        var format = {                                                                           // 22  // 49
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',           // 23  // 50
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',           // 24  // 51
            'dd': 'дзень_дні_дзён',                                                              // 25  // 52
            'MM': 'месяц_месяцы_месяцаў',                                                        // 26  // 53
            'yy': 'год_гады_гадоў'                                                               // 27  // 54
        };                                                                                       // 28  // 55
        if (key === 'm') {                                                                       // 29  // 56
            return withoutSuffix ? 'хвіліна' : 'хвіліну';                                        // 30  // 57
        }                                                                                        // 31  // 58
        else if (key === 'h') {                                                                  // 32  // 59
            return withoutSuffix ? 'гадзіна' : 'гадзіну';                                        // 33  // 60
        }                                                                                        // 34  // 61
        else {                                                                                   // 35  // 62
            return number + ' ' + plural(format[key], +number);                                  // 36  // 63
        }                                                                                        // 37  // 64
    }                                                                                            // 38  // 65
                                                                                                 // 39  // 66
    function monthsCaseReplace(m, format) {                                                      // 40  // 67
        var months = {                                                                           // 41  // 68
            'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
            'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
        },                                                                                       // 44  // 71
                                                                                                 // 45  // 72
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?                             // 46  // 73
            'accusative' :                                                                       // 47  // 74
            'nominative';                                                                        // 48  // 75
                                                                                                 // 49  // 76
        return months[nounCase][m.month()];                                                      // 50  // 77
    }                                                                                            // 51  // 78
                                                                                                 // 52  // 79
    function weekdaysCaseReplace(m, format) {                                                    // 53  // 80
        var weekdays = {                                                                         // 54  // 81
            'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),  // 55  // 82
            'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')   // 56  // 83
        },                                                                                       // 57  // 84
                                                                                                 // 58  // 85
        nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ?                 // 59  // 86
            'accusative' :                                                                       // 60  // 87
            'nominative';                                                                        // 61  // 88
                                                                                                 // 62  // 89
        return weekdays[nounCase][m.day()];                                                      // 63  // 90
    }                                                                                            // 64  // 91
                                                                                                 // 65  // 92
    return moment.defineLocale('be', {                                                           // 66  // 93
        months : monthsCaseReplace,                                                              // 67  // 94
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),      // 68  // 95
        weekdays : weekdaysCaseReplace,                                                          // 69  // 96
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),                                       // 70  // 97
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),                                         // 71  // 98
        longDateFormat : {                                                                       // 72  // 99
            LT : 'HH:mm',                                                                        // 73  // 100
            LTS : 'LT:ss',                                                                       // 74  // 101
            L : 'DD.MM.YYYY',                                                                    // 75  // 102
            LL : 'D MMMM YYYY г.',                                                               // 76  // 103
            LLL : 'D MMMM YYYY г., LT',                                                          // 77  // 104
            LLLL : 'dddd, D MMMM YYYY г., LT'                                                    // 78  // 105
        },                                                                                       // 79  // 106
        calendar : {                                                                             // 80  // 107
            sameDay: '[Сёння ў] LT',                                                             // 81  // 108
            nextDay: '[Заўтра ў] LT',                                                            // 82  // 109
            lastDay: '[Учора ў] LT',                                                             // 83  // 110
            nextWeek: function () {                                                              // 84  // 111
                return '[У] dddd [ў] LT';                                                        // 85  // 112
            },                                                                                   // 86  // 113
            lastWeek: function () {                                                              // 87  // 114
                switch (this.day()) {                                                            // 88  // 115
                case 0:                                                                          // 89  // 116
                case 3:                                                                          // 90  // 117
                case 5:                                                                          // 91  // 118
                case 6:                                                                          // 92  // 119
                    return '[У мінулую] dddd [ў] LT';                                            // 93  // 120
                case 1:                                                                          // 94  // 121
                case 2:                                                                          // 95  // 122
                case 4:                                                                          // 96  // 123
                    return '[У мінулы] dddd [ў] LT';                                             // 97  // 124
                }                                                                                // 98  // 125
            },                                                                                   // 99  // 126
            sameElse: 'L'                                                                        // 100
        },                                                                                       // 101
        relativeTime : {                                                                         // 102
            future : 'праз %s',                                                                  // 103
            past : '%s таму',                                                                    // 104
            s : 'некалькі секунд',                                                               // 105
            m : relativeTimeWithPlural,                                                          // 106
            mm : relativeTimeWithPlural,                                                         // 107
            h : relativeTimeWithPlural,                                                          // 108
            hh : relativeTimeWithPlural,                                                         // 109
            d : 'дзень',                                                                         // 110
            dd : relativeTimeWithPlural,                                                         // 111
            M : 'месяц',                                                                         // 112
            MM : relativeTimeWithPlural,                                                         // 113
            y : 'год',                                                                           // 114
            yy : relativeTimeWithPlural                                                          // 115
        },                                                                                       // 116
        meridiemParse: /ночы|раніцы|дня|вечара/,                                                 // 117
        isPM : function (input) {                                                                // 118
            return /^(дня|вечара)$/.test(input);                                                 // 119
        },                                                                                       // 120
        meridiem : function (hour, minute, isLower) {                                            // 121
            if (hour < 4) {                                                                      // 122
                return 'ночы';                                                                   // 123
            } else if (hour < 12) {                                                              // 124
                return 'раніцы';                                                                 // 125
            } else if (hour < 17) {                                                              // 126
                return 'дня';                                                                    // 127
            } else {                                                                             // 128
                return 'вечара';                                                                 // 129
            }                                                                                    // 130
        },                                                                                       // 131
                                                                                                 // 132
        ordinalParse: /\d{1,2}-(і|ы|га)/,                                                        // 133
        ordinal: function (number, period) {                                                     // 134
            switch (period) {                                                                    // 135
            case 'M':                                                                            // 136
            case 'd':                                                                            // 137
            case 'DDD':                                                                          // 138
            case 'w':                                                                            // 139
            case 'W':                                                                            // 140
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
            case 'D':                                                                            // 142
                return number + '-га';                                                           // 143
            default:                                                                             // 144
                return number;                                                                   // 145
            }                                                                                    // 146
        },                                                                                       // 147
                                                                                                 // 148
        week : {                                                                                 // 149
            dow : 1, // Monday is the first day of the week.                                     // 150
            doy : 7  // The week that contains Jan 1st is the first week of the year.            // 151
        }                                                                                        // 152
    });                                                                                          // 153
}));                                                                                             // 154
                                                                                                 // 155
///////////////////////////////////////////////////////////////////////////////////////////////////     // 183
                                                                                                        // 184
}).call(this);                                                                                          // 185
                                                                                                        // 186
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-be'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-be.js.map
