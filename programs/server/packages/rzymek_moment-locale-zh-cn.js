(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-zh-cn/packages/rzymek_moment-locale-zh-cn.js                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-zh-cn/server.js                                                 //     // 5
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
// packages/rzymek:moment-locale-zh-cn/locale.js                                                 //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : chinese (zh-cn)                                                                      // 2   // 29
// author : suupic : https://github.com/suupic                                                   // 3   // 30
// author : Zeno Zeng : https://github.com/zenozeng                                              // 4   // 31
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
    return moment.defineLocale('zh-cn', {                                                        // 15  // 42
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),                             // 16  // 43
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),                       // 17  // 44
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),                                     // 18  // 45
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),                                       // 19  // 46
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),                                                // 20  // 47
        longDateFormat : {                                                                       // 21  // 48
            LT : 'Ah点mm',                                                                        // 22  // 49
            LTS : 'Ah点m分s秒',                                                                     // 23  // 50
            L : 'YYYY-MM-DD',                                                                    // 24  // 51
            LL : 'YYYY年MMMD日',                                                                   // 25  // 52
            LLL : 'YYYY年MMMD日LT',                                                                // 26  // 53
            LLLL : 'YYYY年MMMD日ddddLT',                                                           // 27  // 54
            l : 'YYYY-MM-DD',                                                                    // 28  // 55
            ll : 'YYYY年MMMD日',                                                                   // 29  // 56
            lll : 'YYYY年MMMD日LT',                                                                // 30  // 57
            llll : 'YYYY年MMMD日ddddLT'                                                            // 31  // 58
        },                                                                                       // 32  // 59
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,                                                      // 33  // 60
        meridiemHour: function (hour, meridiem) {                                                // 34  // 61
            if (hour === 12) {                                                                   // 35  // 62
                hour = 0;                                                                        // 36  // 63
            }                                                                                    // 37  // 64
            if (meridiem === '凌晨' || meridiem === '早上' ||                                        // 38  // 65
                    meridiem === '上午') {                                                         // 39  // 66
                return hour;                                                                     // 40  // 67
            } else if (meridiem === '下午' || meridiem === '晚上') {                                 // 41  // 68
                return hour + 12;                                                                // 42  // 69
            } else {                                                                             // 43  // 70
                // '中午'                                                                          // 44  // 71
                return hour >= 11 ? hour : hour + 12;                                            // 45  // 72
            }                                                                                    // 46  // 73
        },                                                                                       // 47  // 74
        meridiem : function (hour, minute, isLower) {                                            // 48  // 75
            var hm = hour * 100 + minute;                                                        // 49  // 76
            if (hm < 600) {                                                                      // 50  // 77
                return '凌晨';                                                                     // 51  // 78
            } else if (hm < 900) {                                                               // 52  // 79
                return '早上';                                                                     // 53  // 80
            } else if (hm < 1130) {                                                              // 54  // 81
                return '上午';                                                                     // 55  // 82
            } else if (hm < 1230) {                                                              // 56  // 83
                return '中午';                                                                     // 57  // 84
            } else if (hm < 1800) {                                                              // 58  // 85
                return '下午';                                                                     // 59  // 86
            } else {                                                                             // 60  // 87
                return '晚上';                                                                     // 61  // 88
            }                                                                                    // 62  // 89
        },                                                                                       // 63  // 90
        calendar : {                                                                             // 64  // 91
            sameDay : function () {                                                              // 65  // 92
                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';                           // 66  // 93
            },                                                                                   // 67  // 94
            nextDay : function () {                                                              // 68  // 95
                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';                           // 69  // 96
            },                                                                                   // 70  // 97
            lastDay : function () {                                                              // 71  // 98
                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';                           // 72  // 99
            },                                                                                   // 73  // 100
            nextWeek : function () {                                                             // 74  // 101
                var startOfWeek, prefix;                                                         // 75  // 102
                startOfWeek = moment().startOf('week');                                          // 76  // 103
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';      // 77  // 104
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';          // 78  // 105
            },                                                                                   // 79  // 106
            lastWeek : function () {                                                             // 80  // 107
                var startOfWeek, prefix;                                                         // 81  // 108
                startOfWeek = moment().startOf('week');                                          // 82  // 109
                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';                      // 83  // 110
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';          // 84  // 111
            },                                                                                   // 85  // 112
            sameElse : 'LL'                                                                      // 86  // 113
        },                                                                                       // 87  // 114
        ordinalParse: /\d{1,2}(日|月|周)/,                                                          // 88  // 115
        ordinal : function (number, period) {                                                    // 89  // 116
            switch (period) {                                                                    // 90  // 117
            case 'd':                                                                            // 91  // 118
            case 'D':                                                                            // 92  // 119
            case 'DDD':                                                                          // 93  // 120
                return number + '日';                                                             // 94  // 121
            case 'M':                                                                            // 95  // 122
                return number + '月';                                                             // 96  // 123
            case 'w':                                                                            // 97  // 124
            case 'W':                                                                            // 98  // 125
                return number + '周';                                                             // 99  // 126
            default:                                                                             // 100
                return number;                                                                   // 101
            }                                                                                    // 102
        },                                                                                       // 103
        relativeTime : {                                                                         // 104
            future : '%s内',                                                                      // 105
            past : '%s前',                                                                        // 106
            s : '几秒',                                                                            // 107
            m : '1分钟',                                                                           // 108
            mm : '%d分钟',                                                                         // 109
            h : '1小时',                                                                           // 110
            hh : '%d小时',                                                                         // 111
            d : '1天',                                                                            // 112
            dd : '%d天',                                                                          // 113
            M : '1个月',                                                                           // 114
            MM : '%d个月',                                                                         // 115
            y : '1年',                                                                            // 116
            yy : '%d年'                                                                           // 117
        },                                                                                       // 118
        week : {                                                                                 // 119
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效                            // 120
            dow : 1, // Monday is the first day of the week.                                     // 121
            doy : 4  // The week that contains Jan 4th is the first week of the year.            // 122
        }                                                                                        // 123
    });                                                                                          // 124
}));                                                                                             // 125
                                                                                                 // 126
///////////////////////////////////////////////////////////////////////////////////////////////////     // 154
                                                                                                        // 155
}).call(this);                                                                                          // 156
                                                                                                        // 157
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-zh-cn'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-zh-cn.js.map
