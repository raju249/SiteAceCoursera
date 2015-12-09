(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-ko/packages/rzymek_moment-locale-ko.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-ko/server.js                                                    //    // 5
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
// packages/rzymek:moment-locale-ko/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : korean (ko)                                                                          // 2  // 29
//                                                                                               // 3  // 30
// authors                                                                                       // 4  // 31
//                                                                                               // 5  // 32
// - Kyungwook, Park : https://github.com/kyungw00k                                              // 6  // 33
// - Jeeeyul Lee <jeeeyul@gmail.com>                                                             // 7  // 34
(function (factory) {                                                                            // 8  // 35
    if (typeof define === 'function' && define.amd) {                                            // 9  // 36
        define(['moment'], factory); // AMD                                                      // 10
    } else if (typeof exports === 'object') {                                                    // 11
        module.exports = factory(require('../moment')); // Node                                  // 12
    } else {                                                                                     // 13
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 14
    }                                                                                            // 15
}(function (moment) {                                                                            // 16
    return moment.defineLocale('ko', {                                                           // 17
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),                            // 18
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),                       // 19
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),                                     // 20
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),                                              // 21
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),                                                // 22
        longDateFormat : {                                                                       // 23
            LT : 'A h시 m분',                                                                      // 24
            LTS : 'A h시 m분 s초',                                                                  // 25
            L : 'YYYY.MM.DD',                                                                    // 26
            LL : 'YYYY년 MMMM D일',                                                                // 27
            LLL : 'YYYY년 MMMM D일 LT',                                                            // 28
            LLLL : 'YYYY년 MMMM D일 dddd LT'                                                       // 29
        },                                                                                       // 30
        calendar : {                                                                             // 31
            sameDay : '오늘 LT',                                                                   // 32
            nextDay : '내일 LT',                                                                   // 33
            nextWeek : 'dddd LT',                                                                // 34
            lastDay : '어제 LT',                                                                   // 35
            lastWeek : '지난주 dddd LT',                                                            // 36
            sameElse : 'L'                                                                       // 37
        },                                                                                       // 38
        relativeTime : {                                                                         // 39
            future : '%s 후',                                                                     // 40
            past : '%s 전',                                                                       // 41
            s : '몇초',                                                                            // 42
            ss : '%d초',                                                                          // 43
            m : '일분',                                                                            // 44
            mm : '%d분',                                                                          // 45
            h : '한시간',                                                                           // 46
            hh : '%d시간',                                                                         // 47
            d : '하루',                                                                            // 48
            dd : '%d일',                                                                          // 49
            M : '한달',                                                                            // 50
            MM : '%d달',                                                                          // 51
            y : '일년',                                                                            // 52
            yy : '%d년'                                                                           // 53
        },                                                                                       // 54
        ordinalParse : /\d{1,2}일/,                                                               // 55
        ordinal : '%d일',                                                                         // 56
        meridiemParse : /오전|오후/,                                                                 // 57
        isPM : function (token) {                                                                // 58
            return token === '오후';                                                               // 59
        },                                                                                       // 60
        meridiem : function (hour, minute, isUpper) {                                            // 61
            return hour < 12 ? '오전' : '오후';                                                      // 62
        }                                                                                        // 63
    });                                                                                          // 64
}));                                                                                             // 65
                                                                                                 // 66
///////////////////////////////////////////////////////////////////////////////////////////////////    // 94
                                                                                                       // 95
}).call(this);                                                                                         // 96
                                                                                                       // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ko'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ko.js.map
