(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-th/packages/rzymek_moment-locale-th //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-th/server.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
global.moment = moment;                                                                                               // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 12
}).call(this);                                                       // 13
                                                                     // 14
                                                                     // 15
                                                                     // 16
                                                                     // 17
                                                                     // 18
                                                                     // 19
(function () {                                                       // 20
                                                                     // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-th/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : thai (th)                                                                                                 // 2
// author : Kridsada Thanabulpong : https://github.com/sirn                                                           // 3
                                                                                                                      // 4
(function (factory) {                                                                                                 // 5
    if (typeof define === 'function' && define.amd) {                                                                 // 6
        define(['moment'], factory); // AMD                                                                           // 7
    } else if (typeof exports === 'object') {                                                                         // 8
        module.exports = factory(require('../moment')); // Node                                                       // 9
    } else {                                                                                                          // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                      // 11
    }                                                                                                                 // 12
}(function (moment) {                                                                                                 // 13
    return moment.defineLocale('th', {                                                                                // 14
        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),            // 16
        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),                                       // 17
        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference // 18
        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),                                                            // 19
        longDateFormat : {                                                                                            // 20
            LT : 'H นาฬิกา m นาที',                                                                                   // 21
            LTS : 'LT s วินาที',                                                                                      // 22
            L : 'YYYY/MM/DD',                                                                                         // 23
            LL : 'D MMMM YYYY',                                                                                       // 24
            LLL : 'D MMMM YYYY เวลา LT',                                                                              // 25
            LLLL : 'วันddddที่ D MMMM YYYY เวลา LT'                                                                   // 26
        },                                                                                                            // 27
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,                                                                       // 28
        isPM: function (input) {                                                                                      // 29
            return input === 'หลังเที่ยง';                                                                            // 30
        },                                                                                                            // 31
        meridiem : function (hour, minute, isLower) {                                                                 // 32
            if (hour < 12) {                                                                                          // 33
                return 'ก่อนเที่ยง';                                                                                  // 34
            } else {                                                                                                  // 35
                return 'หลังเที่ยง';                                                                                  // 36
            }                                                                                                         // 37
        },                                                                                                            // 38
        calendar : {                                                                                                  // 39
            sameDay : '[วันนี้ เวลา] LT',                                                                             // 40
            nextDay : '[พรุ่งนี้ เวลา] LT',                                                                           // 41
            nextWeek : 'dddd[หน้า เวลา] LT',                                                                          // 42
            lastDay : '[เมื่อวานนี้ เวลา] LT',                                                                        // 43
            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',                                                                  // 44
            sameElse : 'L'                                                                                            // 45
        },                                                                                                            // 46
        relativeTime : {                                                                                              // 47
            future : 'อีก %s',                                                                                        // 48
            past : '%sที่แล้ว',                                                                                       // 49
            s : 'ไม่กี่วินาที',                                                                                       // 50
            m : '1 นาที',                                                                                             // 51
            mm : '%d นาที',                                                                                           // 52
            h : '1 ชั่วโมง',                                                                                          // 53
            hh : '%d ชั่วโมง',                                                                                        // 54
            d : '1 วัน',                                                                                              // 55
            dd : '%d วัน',                                                                                            // 56
            M : '1 เดือน',                                                                                            // 57
            MM : '%d เดือน',                                                                                          // 58
            y : '1 ปี',                                                                                               // 59
            yy : '%d ปี'                                                                                              // 60
        }                                                                                                             // 61
    });                                                                                                               // 62
}));                                                                                                                  // 63
                                                                                                                      // 64
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 93
}).call(this);                                                       // 94
                                                                     // 95
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-th'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-th.js.map
