(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-zh-tw/packages/rzymek_moment-locale-zh-tw.js                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-zh-tw/server.js                                                 //     // 5
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
// packages/rzymek:moment-locale-zh-tw/locale.js                                                 //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : traditional chinese (zh-tw)                                                          // 2   // 29
// author : Ben : https://github.com/ben-lin                                                     // 3   // 30
                                                                                                 // 4   // 31
(function (factory) {                                                                            // 5   // 32
    if (typeof define === 'function' && define.amd) {                                            // 6   // 33
        define(['moment'], factory); // AMD                                                      // 7   // 34
    } else if (typeof exports === 'object') {                                                    // 8   // 35
        module.exports = factory(require('../moment')); // Node                                  // 9   // 36
    } else {                                                                                     // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 11  // 38
    }                                                                                            // 12  // 39
}(function (moment) {                                                                            // 13  // 40
    return moment.defineLocale('zh-tw', {                                                        // 14  // 41
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),                             // 15  // 42
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),                       // 16  // 43
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),                                     // 17  // 44
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),                                       // 18  // 45
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),                                                // 19  // 46
        longDateFormat : {                                                                       // 20  // 47
            LT : 'Ah點mm',                                                                        // 21  // 48
            LTS : 'Ah點m分s秒',                                                                     // 22  // 49
            L : 'YYYY年MMMD日',                                                                    // 23  // 50
            LL : 'YYYY年MMMD日',                                                                   // 24  // 51
            LLL : 'YYYY年MMMD日LT',                                                                // 25  // 52
            LLLL : 'YYYY年MMMD日ddddLT',                                                           // 26  // 53
            l : 'YYYY年MMMD日',                                                                    // 27  // 54
            ll : 'YYYY年MMMD日',                                                                   // 28  // 55
            lll : 'YYYY年MMMD日LT',                                                                // 29  // 56
            llll : 'YYYY年MMMD日ddddLT'                                                            // 30  // 57
        },                                                                                       // 31  // 58
        meridiemParse: /早上|上午|中午|下午|晚上/,                                                         // 32  // 59
        meridiemHour : function (hour, meridiem) {                                               // 33  // 60
            if (hour === 12) {                                                                   // 34  // 61
                hour = 0;                                                                        // 35  // 62
            }                                                                                    // 36  // 63
            if (meridiem === '早上' || meridiem === '上午') {                                        // 37  // 64
                return hour;                                                                     // 38  // 65
            } else if (meridiem === '中午') {                                                      // 39  // 66
                return hour >= 11 ? hour : hour + 12;                                            // 40  // 67
            } else if (meridiem === '下午' || meridiem === '晚上') {                                 // 41  // 68
                return hour + 12;                                                                // 42  // 69
            }                                                                                    // 43  // 70
        },                                                                                       // 44  // 71
        meridiem : function (hour, minute, isLower) {                                            // 45  // 72
            var hm = hour * 100 + minute;                                                        // 46  // 73
            if (hm < 900) {                                                                      // 47  // 74
                return '早上';                                                                     // 48  // 75
            } else if (hm < 1130) {                                                              // 49  // 76
                return '上午';                                                                     // 50  // 77
            } else if (hm < 1230) {                                                              // 51  // 78
                return '中午';                                                                     // 52  // 79
            } else if (hm < 1800) {                                                              // 53  // 80
                return '下午';                                                                     // 54  // 81
            } else {                                                                             // 55  // 82
                return '晚上';                                                                     // 56  // 83
            }                                                                                    // 57  // 84
        },                                                                                       // 58  // 85
        calendar : {                                                                             // 59  // 86
            sameDay : '[今天]LT',                                                                  // 60  // 87
            nextDay : '[明天]LT',                                                                  // 61  // 88
            nextWeek : '[下]ddddLT',                                                              // 62  // 89
            lastDay : '[昨天]LT',                                                                  // 63  // 90
            lastWeek : '[上]ddddLT',                                                              // 64  // 91
            sameElse : 'L'                                                                       // 65  // 92
        },                                                                                       // 66  // 93
        ordinalParse: /\d{1,2}(日|月|週)/,                                                          // 67  // 94
        ordinal : function (number, period) {                                                    // 68  // 95
            switch (period) {                                                                    // 69  // 96
            case 'd' :                                                                           // 70  // 97
            case 'D' :                                                                           // 71  // 98
            case 'DDD' :                                                                         // 72  // 99
                return number + '日';                                                             // 73  // 100
            case 'M' :                                                                           // 74  // 101
                return number + '月';                                                             // 75  // 102
            case 'w' :                                                                           // 76  // 103
            case 'W' :                                                                           // 77  // 104
                return number + '週';                                                             // 78  // 105
            default :                                                                            // 79  // 106
                return number;                                                                   // 80  // 107
            }                                                                                    // 81  // 108
        },                                                                                       // 82  // 109
        relativeTime : {                                                                         // 83  // 110
            future : '%s內',                                                                      // 84  // 111
            past : '%s前',                                                                        // 85  // 112
            s : '幾秒',                                                                            // 86  // 113
            m : '一分鐘',                                                                           // 87  // 114
            mm : '%d分鐘',                                                                         // 88  // 115
            h : '一小時',                                                                           // 89  // 116
            hh : '%d小時',                                                                         // 90  // 117
            d : '一天',                                                                            // 91  // 118
            dd : '%d天',                                                                          // 92  // 119
            M : '一個月',                                                                           // 93  // 120
            MM : '%d個月',                                                                         // 94  // 121
            y : '一年',                                                                            // 95  // 122
            yy : '%d年'                                                                           // 96  // 123
        }                                                                                        // 97  // 124
    });                                                                                          // 98  // 125
}));                                                                                             // 99  // 126
                                                                                                 // 100
///////////////////////////////////////////////////////////////////////////////////////////////////     // 128
                                                                                                        // 129
}).call(this);                                                                                          // 130
                                                                                                        // 131
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-zh-tw'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-zh-tw.js.map
