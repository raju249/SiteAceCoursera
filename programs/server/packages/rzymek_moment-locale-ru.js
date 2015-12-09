(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/rzymek_moment-locale-ru/packages/rzymek_moment-locale-ru.js                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                    //     // 4
// packages/rzymek:moment-locale-ru/server.js                                                         //     // 5
//                                                                                                    //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                      //     // 8
global.moment = moment;                                                                               // 1   // 9
                                                                                                      // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                             // 12
}).call(this);                                                                                               // 13
                                                                                                             // 14
                                                                                                             // 15
                                                                                                             // 16
                                                                                                             // 17
                                                                                                             // 18
                                                                                                             // 19
(function () {                                                                                               // 20
                                                                                                             // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                    //     // 23
// packages/rzymek:moment-locale-ru/locale.js                                                         //     // 24
//                                                                                                    //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                      //     // 27
// moment.js locale configuration                                                                     // 1   // 28
// locale : russian (ru)                                                                              // 2   // 29
// author : Viktorminator : https://github.com/Viktorminator                                          // 3   // 30
// Author : Menelion Elensúle : https://github.com/Oire                                               // 4   // 31
                                                                                                      // 5   // 32
(function (factory) {                                                                                 // 6   // 33
    if (typeof define === 'function' && define.amd) {                                                 // 7   // 34
        define(['moment'], factory); // AMD                                                           // 8   // 35
    } else if (typeof exports === 'object') {                                                         // 9   // 36
        module.exports = factory(require('../moment')); // Node                                       // 10  // 37
    } else {                                                                                          // 11  // 38
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global      // 12  // 39
    }                                                                                                 // 13  // 40
}(function (moment) {                                                                                 // 14  // 41
    function plural(word, num) {                                                                      // 15  // 42
        var forms = word.split('_');                                                                  // 16  // 43
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }                                                                                                 // 18  // 45
                                                                                                      // 19  // 46
    function relativeTimeWithPlural(number, withoutSuffix, key) {                                     // 20  // 47
        var format = {                                                                                // 21  // 48
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',                      // 22  // 49
            'hh': 'час_часа_часов',                                                                   // 23  // 50
            'dd': 'день_дня_дней',                                                                    // 24  // 51
            'MM': 'месяц_месяца_месяцев',                                                             // 25  // 52
            'yy': 'год_года_лет'                                                                      // 26  // 53
        };                                                                                            // 27  // 54
        if (key === 'm') {                                                                            // 28  // 55
            return withoutSuffix ? 'минута' : 'минуту';                                               // 29  // 56
        }                                                                                             // 30  // 57
        else {                                                                                        // 31  // 58
            return number + ' ' + plural(format[key], +number);                                       // 32  // 59
        }                                                                                             // 33  // 60
    }                                                                                                 // 34  // 61
                                                                                                      // 35  // 62
    function monthsCaseReplace(m, format) {                                                           // 36  // 63
        var months = {                                                                                // 37  // 64
            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
        },                                                                                            // 40  // 67
                                                                                                      // 41  // 68
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?                                  // 42  // 69
            'accusative' :                                                                            // 43  // 70
            'nominative';                                                                             // 44  // 71
                                                                                                      // 45  // 72
        return months[nounCase][m.month()];                                                           // 46  // 73
    }                                                                                                 // 47  // 74
                                                                                                      // 48  // 75
    function monthsShortCaseReplace(m, format) {                                                      // 49  // 76
        var monthsShort = {                                                                           // 50  // 77
            'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),            // 51  // 78
            'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')              // 52  // 79
        },                                                                                            // 53  // 80
                                                                                                      // 54  // 81
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?                                  // 55  // 82
            'accusative' :                                                                            // 56  // 83
            'nominative';                                                                             // 57  // 84
                                                                                                      // 58  // 85
        return monthsShort[nounCase][m.month()];                                                      // 59  // 86
    }                                                                                                 // 60  // 87
                                                                                                      // 61  // 88
    function weekdaysCaseReplace(m, format) {                                                         // 62  // 89
        var weekdays = {                                                                              // 63  // 90
            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'), // 64  // 91
            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')  // 65  // 92
        },                                                                                            // 66  // 93
                                                                                                      // 67  // 94
        nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ?                  // 68  // 95
            'accusative' :                                                                            // 69  // 96
            'nominative';                                                                             // 70  // 97
                                                                                                      // 71  // 98
        return weekdays[nounCase][m.day()];                                                           // 72  // 99
    }                                                                                                 // 73  // 100
                                                                                                      // 74  // 101
    return moment.defineLocale('ru', {                                                                // 75  // 102
        months : monthsCaseReplace,                                                                   // 76  // 103
        monthsShort : monthsShortCaseReplace,                                                         // 77  // 104
        weekdays : weekdaysCaseReplace,                                                               // 78  // 105
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),                                            // 79  // 106
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),                                              // 80  // 107
        monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
        longDateFormat : {                                                                            // 82  // 109
            LT : 'HH:mm',                                                                             // 83  // 110
            LTS : 'LT:ss',                                                                            // 84  // 111
            L : 'DD.MM.YYYY',                                                                         // 85  // 112
            LL : 'D MMMM YYYY г.',                                                                    // 86  // 113
            LLL : 'D MMMM YYYY г., LT',                                                               // 87  // 114
            LLLL : 'dddd, D MMMM YYYY г., LT'                                                         // 88  // 115
        },                                                                                            // 89  // 116
        calendar : {                                                                                  // 90  // 117
            sameDay: '[Сегодня в] LT',                                                                // 91  // 118
            nextDay: '[Завтра в] LT',                                                                 // 92  // 119
            lastDay: '[Вчера в] LT',                                                                  // 93  // 120
            nextWeek: function () {                                                                   // 94  // 121
                return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';                     // 95  // 122
            },                                                                                        // 96  // 123
            lastWeek: function (now) {                                                                // 97  // 124
                if (now.week() !== this.week()) {                                                     // 98  // 125
                    switch (this.day()) {                                                             // 99  // 126
                    case 0:                                                                           // 100
                        return '[В прошлое] dddd [в] LT';                                             // 101
                    case 1:                                                                           // 102
                    case 2:                                                                           // 103
                    case 4:                                                                           // 104
                        return '[В прошлый] dddd [в] LT';                                             // 105
                    case 3:                                                                           // 106
                    case 5:                                                                           // 107
                    case 6:                                                                           // 108
                        return '[В прошлую] dddd [в] LT';                                             // 109
                    }                                                                                 // 110
                } else {                                                                              // 111
                    if (this.day() === 2) {                                                           // 112
                        return '[Во] dddd [в] LT';                                                    // 113
                    } else {                                                                          // 114
                        return '[В] dddd [в] LT';                                                     // 115
                    }                                                                                 // 116
                }                                                                                     // 117
            },                                                                                        // 118
            sameElse: 'L'                                                                             // 119
        },                                                                                            // 120
        relativeTime : {                                                                              // 121
            future : 'через %s',                                                                      // 122
            past : '%s назад',                                                                        // 123
            s : 'несколько секунд',                                                                   // 124
            m : relativeTimeWithPlural,                                                               // 125
            mm : relativeTimeWithPlural,                                                              // 126
            h : 'час',                                                                                // 127
            hh : relativeTimeWithPlural,                                                              // 128
            d : 'день',                                                                               // 129
            dd : relativeTimeWithPlural,                                                              // 130
            M : 'месяц',                                                                              // 131
            MM : relativeTimeWithPlural,                                                              // 132
            y : 'год',                                                                                // 133
            yy : relativeTimeWithPlural                                                               // 134
        },                                                                                            // 135
                                                                                                      // 136
        meridiemParse: /ночи|утра|дня|вечера/i,                                                       // 137
        isPM : function (input) {                                                                     // 138
            return /^(дня|вечера)$/.test(input);                                                      // 139
        },                                                                                            // 140
                                                                                                      // 141
        meridiem : function (hour, minute, isLower) {                                                 // 142
            if (hour < 4) {                                                                           // 143
                return 'ночи';                                                                        // 144
            } else if (hour < 12) {                                                                   // 145
                return 'утра';                                                                        // 146
            } else if (hour < 17) {                                                                   // 147
                return 'дня';                                                                         // 148
            } else {                                                                                  // 149
                return 'вечера';                                                                      // 150
            }                                                                                         // 151
        },                                                                                            // 152
                                                                                                      // 153
        ordinalParse: /\d{1,2}-(й|го|я)/,                                                             // 154
        ordinal: function (number, period) {                                                          // 155
            switch (period) {                                                                         // 156
            case 'M':                                                                                 // 157
            case 'd':                                                                                 // 158
            case 'DDD':                                                                               // 159
                return number + '-й';                                                                 // 160
            case 'D':                                                                                 // 161
                return number + '-го';                                                                // 162
            case 'w':                                                                                 // 163
            case 'W':                                                                                 // 164
                return number + '-я';                                                                 // 165
            default:                                                                                  // 166
                return number;                                                                        // 167
            }                                                                                         // 168
        },                                                                                            // 169
                                                                                                      // 170
        week : {                                                                                      // 171
            dow : 1, // Monday is the first day of the week.                                          // 172
            doy : 7  // The week that contains Jan 1st is the first week of the year.                 // 173
        }                                                                                             // 174
    });                                                                                               // 175
}));                                                                                                  // 176
                                                                                                      // 177
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 205
                                                                                                             // 206
}).call(this);                                                                                               // 207
                                                                                                             // 208
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ru'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ru.js.map
