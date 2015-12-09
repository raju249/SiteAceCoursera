(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/rzymek_moment-locale-hy-am/packages/rzymek_moment-locale-hy-am.js                             //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
(function () {                                                                                            // 1
                                                                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                 //     // 4
// packages/rzymek:moment-locale-hy-am/server.js                                                   //     // 5
//                                                                                                 //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                   //     // 8
global.moment = moment;                                                                            // 1   // 9
                                                                                                   // 2   // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                          // 12
}).call(this);                                                                                            // 13
                                                                                                          // 14
                                                                                                          // 15
                                                                                                          // 16
                                                                                                          // 17
                                                                                                          // 18
                                                                                                          // 19
(function () {                                                                                            // 20
                                                                                                          // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                 //     // 23
// packages/rzymek:moment-locale-hy-am/locale.js                                                   //     // 24
//                                                                                                 //     // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                   //     // 27
// moment.js locale configuration                                                                  // 1   // 28
// locale : Armenian (hy-am)                                                                       // 2   // 29
// author : Armendarabyan : https://github.com/armendarabyan                                       // 3   // 30
                                                                                                   // 4   // 31
(function (factory) {                                                                              // 5   // 32
    if (typeof define === 'function' && define.amd) {                                              // 6   // 33
        define(['moment'], factory); // AMD                                                        // 7   // 34
    } else if (typeof exports === 'object') {                                                      // 8   // 35
        module.exports = factory(require('../moment')); // Node                                    // 9   // 36
    } else {                                                                                       // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global   // 11  // 38
    }                                                                                              // 12  // 39
}(function (moment) {                                                                              // 13  // 40
    function monthsCaseReplace(m, format) {                                                        // 14  // 41
        var months = {                                                                             // 15  // 42
            'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
            'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
        },                                                                                         // 18  // 45
                                                                                                   // 19  // 46
        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?                               // 20  // 47
            'accusative' :                                                                         // 21  // 48
            'nominative';                                                                          // 22  // 49
                                                                                                   // 23  // 50
        return months[nounCase][m.month()];                                                        // 24  // 51
    }                                                                                              // 25  // 52
                                                                                                   // 26  // 53
    function monthsShortCaseReplace(m, format) {                                                   // 27  // 54
        var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');            // 28  // 55
                                                                                                   // 29  // 56
        return monthsShort[m.month()];                                                             // 30  // 57
    }                                                                                              // 31  // 58
                                                                                                   // 32  // 59
    function weekdaysCaseReplace(m, format) {                                                      // 33  // 60
        var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'); // 34  // 61
                                                                                                   // 35  // 62
        return weekdays[m.day()];                                                                  // 36  // 63
    }                                                                                              // 37  // 64
                                                                                                   // 38  // 65
    return moment.defineLocale('hy-am', {                                                          // 39  // 66
        months : monthsCaseReplace,                                                                // 40  // 67
        monthsShort : monthsShortCaseReplace,                                                      // 41  // 68
        weekdays : weekdaysCaseReplace,                                                            // 42  // 69
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),                                 // 43  // 70
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),                                   // 44  // 71
        longDateFormat : {                                                                         // 45  // 72
            LT : 'HH:mm',                                                                          // 46  // 73
            LTS : 'LT:ss',                                                                         // 47  // 74
            L : 'DD.MM.YYYY',                                                                      // 48  // 75
            LL : 'D MMMM YYYY թ.',                                                                 // 49  // 76
            LLL : 'D MMMM YYYY թ., LT',                                                            // 50  // 77
            LLLL : 'dddd, D MMMM YYYY թ., LT'                                                      // 51  // 78
        },                                                                                         // 52  // 79
        calendar : {                                                                               // 53  // 80
            sameDay: '[այսօր] LT',                                                                 // 54  // 81
            nextDay: '[վաղը] LT',                                                                  // 55  // 82
            lastDay: '[երեկ] LT',                                                                  // 56  // 83
            nextWeek: function () {                                                                // 57  // 84
                return 'dddd [օրը ժամը] LT';                                                       // 58  // 85
            },                                                                                     // 59  // 86
            lastWeek: function () {                                                                // 60  // 87
                return '[անցած] dddd [օրը ժամը] LT';                                               // 61  // 88
            },                                                                                     // 62  // 89
            sameElse: 'L'                                                                          // 63  // 90
        },                                                                                         // 64  // 91
        relativeTime : {                                                                           // 65  // 92
            future : '%s հետո',                                                                    // 66  // 93
            past : '%s առաջ',                                                                      // 67  // 94
            s : 'մի քանի վայրկյան',                                                                // 68  // 95
            m : 'րոպե',                                                                            // 69  // 96
            mm : '%d րոպե',                                                                        // 70  // 97
            h : 'ժամ',                                                                             // 71  // 98
            hh : '%d ժամ',                                                                         // 72  // 99
            d : 'օր',                                                                              // 73  // 100
            dd : '%d օր',                                                                          // 74  // 101
            M : 'ամիս',                                                                            // 75  // 102
            MM : '%d ամիս',                                                                        // 76  // 103
            y : 'տարի',                                                                            // 77  // 104
            yy : '%d տարի'                                                                         // 78  // 105
        },                                                                                         // 79  // 106
                                                                                                   // 80  // 107
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,                                        // 81  // 108
        isPM: function (input) {                                                                   // 82  // 109
            return /^(ցերեկվա|երեկոյան)$/.test(input);                                             // 83  // 110
        },                                                                                         // 84  // 111
        meridiem : function (hour) {                                                               // 85  // 112
            if (hour < 4) {                                                                        // 86  // 113
                return 'գիշերվա';                                                                  // 87  // 114
            } else if (hour < 12) {                                                                // 88  // 115
                return 'առավոտվա';                                                                 // 89  // 116
            } else if (hour < 17) {                                                                // 90  // 117
                return 'ցերեկվա';                                                                  // 91  // 118
            } else {                                                                               // 92  // 119
                return 'երեկոյան';                                                                 // 93  // 120
            }                                                                                      // 94  // 121
        },                                                                                         // 95  // 122
                                                                                                   // 96  // 123
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,                                                   // 97  // 124
        ordinal: function (number, period) {                                                       // 98  // 125
            switch (period) {                                                                      // 99  // 126
            case 'DDD':                                                                            // 100
            case 'w':                                                                              // 101
            case 'W':                                                                              // 102
            case 'DDDo':                                                                           // 103
                if (number === 1) {                                                                // 104
                    return number + '-ին';                                                         // 105
                }                                                                                  // 106
                return number + '-րդ';                                                             // 107
            default:                                                                               // 108
                return number;                                                                     // 109
            }                                                                                      // 110
        },                                                                                         // 111
                                                                                                   // 112
        week : {                                                                                   // 113
            dow : 1, // Monday is the first day of the week.                                       // 114
            doy : 7  // The week that contains Jan 1st is the first week of the year.              // 115
        }                                                                                          // 116
    });                                                                                            // 117
}));                                                                                               // 118
                                                                                                   // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 147
                                                                                                          // 148
}).call(this);                                                                                            // 149
                                                                                                          // 150
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-hy-am'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-hy-am.js.map
