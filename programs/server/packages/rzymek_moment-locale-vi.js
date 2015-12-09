(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-vi/packages/rzymek_moment-locale-vi.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-vi/server.js                                                    //    // 5
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
// packages/rzymek:moment-locale-vi/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : vietnamese (vi)                                                                      // 2  // 29
// author : Bang Nguyen : https://github.com/bangnk                                              // 3  // 30
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
    return moment.defineLocale('vi', {                                                           // 14
        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),  // 16
        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),          // 17
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),                                       // 18
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),                                         // 19
        longDateFormat : {                                                                       // 20
            LT : 'HH:mm',                                                                        // 21
            LTS : 'LT:ss',                                                                       // 22
            L : 'DD/MM/YYYY',                                                                    // 23
            LL : 'D MMMM [năm] YYYY',                                                            // 24
            LLL : 'D MMMM [năm] YYYY LT',                                                        // 25
            LLLL : 'dddd, D MMMM [năm] YYYY LT',                                                 // 26
            l : 'DD/M/YYYY',                                                                     // 27
            ll : 'D MMM YYYY',                                                                   // 28
            lll : 'D MMM YYYY LT',                                                               // 29
            llll : 'ddd, D MMM YYYY LT'                                                          // 30
        },                                                                                       // 31
        calendar : {                                                                             // 32
            sameDay: '[Hôm nay lúc] LT',                                                         // 33
            nextDay: '[Ngày mai lúc] LT',                                                        // 34
            nextWeek: 'dddd [tuần tới lúc] LT',                                                  // 35
            lastDay: '[Hôm qua lúc] LT',                                                         // 36
            lastWeek: 'dddd [tuần rồi lúc] LT',                                                  // 37
            sameElse: 'L'                                                                        // 38
        },                                                                                       // 39
        relativeTime : {                                                                         // 40
            future : '%s tới',                                                                   // 41
            past : '%s trước',                                                                   // 42
            s : 'vài giây',                                                                      // 43
            m : 'một phút',                                                                      // 44
            mm : '%d phút',                                                                      // 45
            h : 'một giờ',                                                                       // 46
            hh : '%d giờ',                                                                       // 47
            d : 'một ngày',                                                                      // 48
            dd : '%d ngày',                                                                      // 49
            M : 'một tháng',                                                                     // 50
            MM : '%d tháng',                                                                     // 51
            y : 'một năm',                                                                       // 52
            yy : '%d năm'                                                                        // 53
        },                                                                                       // 54
        ordinalParse: /\d{1,2}/,                                                                 // 55
        ordinal : function (number) {                                                            // 56
            return number;                                                                       // 57
        },                                                                                       // 58
        week : {                                                                                 // 59
            dow : 1, // Monday is the first day of the week.                                     // 60
            doy : 4  // The week that contains Jan 4th is the first week of the year.            // 61
        }                                                                                        // 62
    });                                                                                          // 63
}));                                                                                             // 64
                                                                                                 // 65
///////////////////////////////////////////////////////////////////////////////////////////////////    // 93
                                                                                                       // 94
}).call(this);                                                                                         // 95
                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-vi'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-vi.js.map
