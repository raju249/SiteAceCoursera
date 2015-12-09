(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-ja/packages/rzymek_moment-locale-ja.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-ja/server.js                                                    //    // 5
//                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                 //    // 8
global.moment = moment;                                                                          // 1  // 9
                                                                                                 // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                       // 12
}).call(this);                                                                                         // 13
                                                                                                       // 14
                                                                                                       // 15
                                                                                                       // 16
                                                                                                       // 17
                                                                                                       // 18
                                                                                                       // 19
(function () {                                                                                         // 20
                                                                                                       // 21
///////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                               //    // 23
// packages/rzymek:moment-locale-ja/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : japanese (ja)                                                                        // 2  // 29
// author : LI Long : https://github.com/baryon                                                  // 3  // 30
                                                                                                 // 4  // 31
(function (factory) {                                                                            // 5  // 32
    if (typeof define === 'function' && define.amd) {                                            // 6  // 33
        define(['moment'], factory); // AMD                                                      // 7  // 34
    } else if (typeof exports === 'object') {                                                    // 8  // 35
        module.exports = factory(require('../moment')); // Node                                  // 9  // 36
    } else {                                                                                     // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 11
    }                                                                                            // 12
}(function (moment) {                                                                            // 13
    return moment.defineLocale('ja', {                                                           // 14
        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),                            // 15
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),                       // 16
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),                                     // 17
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),                                              // 18
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),                                                // 19
        longDateFormat : {                                                                       // 20
            LT : 'Ah時m分',                                                                        // 21
            LTS : 'LTs秒',                                                                        // 22
            L : 'YYYY/MM/DD',                                                                    // 23
            LL : 'YYYY年M月D日',                                                                    // 24
            LLL : 'YYYY年M月D日LT',                                                                 // 25
            LLLL : 'YYYY年M月D日LT dddd'                                                            // 26
        },                                                                                       // 27
        meridiemParse: /午前|午後/i,                                                                 // 28
        isPM : function (input) {                                                                // 29
            return input === '午後';                                                               // 30
        },                                                                                       // 31
        meridiem : function (hour, minute, isLower) {                                            // 32
            if (hour < 12) {                                                                     // 33
                return '午前';                                                                     // 34
            } else {                                                                             // 35
                return '午後';                                                                     // 36
            }                                                                                    // 37
        },                                                                                       // 38
        calendar : {                                                                             // 39
            sameDay : '[今日] LT',                                                                 // 40
            nextDay : '[明日] LT',                                                                 // 41
            nextWeek : '[来週]dddd LT',                                                            // 42
            lastDay : '[昨日] LT',                                                                 // 43
            lastWeek : '[前週]dddd LT',                                                            // 44
            sameElse : 'L'                                                                       // 45
        },                                                                                       // 46
        relativeTime : {                                                                         // 47
            future : '%s後',                                                                      // 48
            past : '%s前',                                                                        // 49
            s : '数秒',                                                                            // 50
            m : '1分',                                                                            // 51
            mm : '%d分',                                                                          // 52
            h : '1時間',                                                                           // 53
            hh : '%d時間',                                                                         // 54
            d : '1日',                                                                            // 55
            dd : '%d日',                                                                          // 56
            M : '1ヶ月',                                                                           // 57
            MM : '%dヶ月',                                                                         // 58
            y : '1年',                                                                            // 59
            yy : '%d年'                                                                           // 60
        }                                                                                        // 61
    });                                                                                          // 62
}));                                                                                             // 63
                                                                                                 // 64
///////////////////////////////////////////////////////////////////////////////////////////////////    // 92
                                                                                                       // 93
}).call(this);                                                                                         // 94
                                                                                                       // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ja'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ja.js.map
