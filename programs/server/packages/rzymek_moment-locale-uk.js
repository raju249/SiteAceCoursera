(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-uk/packages/rzymek_moment-locale-uk.js                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-uk/server.js                                                    //     // 5
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
// packages/rzymek:moment-locale-uk/locale.js                                                    //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : ukrainian (uk)                                                                       // 2   // 29
// author : zemlanin : https://github.com/zemlanin                                               // 3   // 30
// Author : Menelion Elensúle : https://github.com/Oire                                          // 4   // 31
                                                                                                 // 5   // 32
(function (factory) {                                                                            // 6   // 33
    if (typeof define === 'function' && define.amd) {                                            // 7   // 34
        define(['moment'], factory); // AMD                                                      // 8   // 35
    } else if (typeof exports === 'object') {                                                    // 9   // 36
        module.exports = factory(require('../moment')); // Node                                  // 10  // 37
    } else {                                                                                     // 11  // 38
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 12  // 39
    }                                                                                            // 13  // 40
}(function (moment) {                                                                            // 14  // 41
    function plural(word, num) {                                                                 // 15  // 42
        var forms = word.split('_');                                                             // 16  // 43
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }                                                                                            // 18  // 45
                                                                                                 // 19  // 46
    function relativeTimeWithPlural(number, withoutSuffix, key) {                                // 20  // 47
        var format = {                                                                           // 21  // 48
            'mm': 'хвилина_хвилини_хвилин',                                                      // 22  // 49
            'hh': 'година_години_годин',                                                         // 23  // 50
            'dd': 'день_дні_днів',                                                               // 24  // 51
            'MM': 'місяць_місяці_місяців',                                                       // 25  // 52
            'yy': 'рік_роки_років'                                                               // 26  // 53
        };                                                                                       // 27  // 54
        if (key === 'm') {                                                                       // 28  // 55
            return withoutSuffix ? 'хвилина' : 'хвилину';                                        // 29  // 56
        }                                                                                        // 30  // 57
        else if (key === 'h') {                                                                  // 31  // 58
            return withoutSuffix ? 'година' : 'годину';                                          // 32  // 59
        }                                                                                        // 33  // 60
        else {                                                                                   // 34  // 61
            return number + ' ' + plural(format[key], +number);                                  // 35  // 62
        }                                                                                        // 36  // 63
    }                                                                                            // 37  // 64
                                                                                                 // 38  // 65
    function monthsCaseReplace(m, format) {                                                      // 39  // 66
        var months = {                                                                           // 40  // 67
            'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
            'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
        },                                                                                       // 43  // 70
                                                                                                 // 44  // 71
        nounCase = (/D[oD]? *MMMM?/).test(format) ?                                              // 45  // 72
            'accusative' :                                                                       // 46  // 73
            'nominative';                                                                        // 47  // 74
                                                                                                 // 48  // 75
        return months[nounCase][m.month()];                                                      // 49  // 76
    }                                                                                            // 50  // 77
                                                                                                 // 51  // 78
    function weekdaysCaseReplace(m, format) {                                                    // 52  // 79
        var weekdays = {                                                                         // 53  // 80
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),  // 54  // 81
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),  // 55  // 82
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')   // 56  // 83
        },                                                                                       // 57  // 84
                                                                                                 // 58  // 85
        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?                                         // 59  // 86
            'accusative' :                                                                       // 60  // 87
            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?                              // 61  // 88
                'genitive' :                                                                     // 62  // 89
                'nominative');                                                                   // 63  // 90
                                                                                                 // 64  // 91
        return weekdays[nounCase][m.day()];                                                      // 65  // 92
    }                                                                                            // 66  // 93
                                                                                                 // 67  // 94
    function processHoursFunction(str) {                                                         // 68  // 95
        return function () {                                                                     // 69  // 96
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';                        // 70  // 97
        };                                                                                       // 71  // 98
    }                                                                                            // 72  // 99
                                                                                                 // 73  // 100
    return moment.defineLocale('uk', {                                                           // 74  // 101
        months : monthsCaseReplace,                                                              // 75  // 102
        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),       // 76  // 103
        weekdays : weekdaysCaseReplace,                                                          // 77  // 104
        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),                                       // 78  // 105
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),                                         // 79  // 106
        longDateFormat : {                                                                       // 80  // 107
            LT : 'HH:mm',                                                                        // 81  // 108
            LTS : 'LT:ss',                                                                       // 82  // 109
            L : 'DD.MM.YYYY',                                                                    // 83  // 110
            LL : 'D MMMM YYYY р.',                                                               // 84  // 111
            LLL : 'D MMMM YYYY р., LT',                                                          // 85  // 112
            LLLL : 'dddd, D MMMM YYYY р., LT'                                                    // 86  // 113
        },                                                                                       // 87  // 114
        calendar : {                                                                             // 88  // 115
            sameDay: processHoursFunction('[Сьогодні '),                                         // 89  // 116
            nextDay: processHoursFunction('[Завтра '),                                           // 90  // 117
            lastDay: processHoursFunction('[Вчора '),                                            // 91  // 118
            nextWeek: processHoursFunction('[У] dddd ['),                                        // 92  // 119
            lastWeek: function () {                                                              // 93  // 120
                switch (this.day()) {                                                            // 94  // 121
                case 0:                                                                          // 95  // 122
                case 3:                                                                          // 96  // 123
                case 5:                                                                          // 97  // 124
                case 6:                                                                          // 98  // 125
                    return processHoursFunction('[Минулої] dddd [').call(this);                  // 99  // 126
                case 1:                                                                          // 100
                case 2:                                                                          // 101
                case 4:                                                                          // 102
                    return processHoursFunction('[Минулого] dddd [').call(this);                 // 103
                }                                                                                // 104
            },                                                                                   // 105
            sameElse: 'L'                                                                        // 106
        },                                                                                       // 107
        relativeTime : {                                                                         // 108
            future : 'за %s',                                                                    // 109
            past : '%s тому',                                                                    // 110
            s : 'декілька секунд',                                                               // 111
            m : relativeTimeWithPlural,                                                          // 112
            mm : relativeTimeWithPlural,                                                         // 113
            h : 'годину',                                                                        // 114
            hh : relativeTimeWithPlural,                                                         // 115
            d : 'день',                                                                          // 116
            dd : relativeTimeWithPlural,                                                         // 117
            M : 'місяць',                                                                        // 118
            MM : relativeTimeWithPlural,                                                         // 119
            y : 'рік',                                                                           // 120
            yy : relativeTimeWithPlural                                                          // 121
        },                                                                                       // 122
                                                                                                 // 123
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
                                                                                                 // 125
        meridiemParse: /ночі|ранку|дня|вечора/,                                                  // 126
        isPM: function (input) {                                                                 // 127
            return /^(дня|вечора)$/.test(input);                                                 // 128
        },                                                                                       // 129
        meridiem : function (hour, minute, isLower) {                                            // 130
            if (hour < 4) {                                                                      // 131
                return 'ночі';                                                                   // 132
            } else if (hour < 12) {                                                              // 133
                return 'ранку';                                                                  // 134
            } else if (hour < 17) {                                                              // 135
                return 'дня';                                                                    // 136
            } else {                                                                             // 137
                return 'вечора';                                                                 // 138
            }                                                                                    // 139
        },                                                                                       // 140
                                                                                                 // 141
        ordinalParse: /\d{1,2}-(й|го)/,                                                          // 142
        ordinal: function (number, period) {                                                     // 143
            switch (period) {                                                                    // 144
            case 'M':                                                                            // 145
            case 'd':                                                                            // 146
            case 'DDD':                                                                          // 147
            case 'w':                                                                            // 148
            case 'W':                                                                            // 149
                return number + '-й';                                                            // 150
            case 'D':                                                                            // 151
                return number + '-го';                                                           // 152
            default:                                                                             // 153
                return number;                                                                   // 154
            }                                                                                    // 155
        },                                                                                       // 156
                                                                                                 // 157
        week : {                                                                                 // 158
            dow : 1, // Monday is the first day of the week.                                     // 159
            doy : 7  // The week that contains Jan 1st is the first week of the year.            // 160
        }                                                                                        // 161
    });                                                                                          // 162
}));                                                                                             // 163
                                                                                                 // 164
///////////////////////////////////////////////////////////////////////////////////////////////////     // 192
                                                                                                        // 193
}).call(this);                                                                                          // 194
                                                                                                        // 195
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-uk'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-uk.js.map
