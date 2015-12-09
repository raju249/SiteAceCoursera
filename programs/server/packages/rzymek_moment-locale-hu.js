(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/rzymek_moment-locale-hu/packages/rzymek_moment-locale-hu.js                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                //     // 4
// packages/rzymek:moment-locale-hu/server.js                                                     //     // 5
//                                                                                                //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                  //     // 8
global.moment = moment;                                                                           // 1   // 9
                                                                                                  // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                         // 12
}).call(this);                                                                                           // 13
                                                                                                         // 14
                                                                                                         // 15
                                                                                                         // 16
                                                                                                         // 17
                                                                                                         // 18
                                                                                                         // 19
(function () {                                                                                           // 20
                                                                                                         // 21
////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                //     // 23
// packages/rzymek:moment-locale-hu/locale.js                                                     //     // 24
//                                                                                                //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                  //     // 27
// moment.js locale configuration                                                                 // 1   // 28
// locale : hungarian (hu)                                                                        // 2   // 29
// author : Adam Brunner : https://github.com/adambrunner                                         // 3   // 30
                                                                                                  // 4   // 31
(function (factory) {                                                                             // 5   // 32
    if (typeof define === 'function' && define.amd) {                                             // 6   // 33
        define(['moment'], factory); // AMD                                                       // 7   // 34
    } else if (typeof exports === 'object') {                                                     // 8   // 35
        module.exports = factory(require('../moment')); // Node                                   // 9   // 36
    } else {                                                                                      // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global  // 11  // 38
    }                                                                                             // 12  // 39
}(function (moment) {                                                                             // 13  // 40
    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' '); // 14  // 41
                                                                                                  // 15  // 42
    function translate(number, withoutSuffix, key, isFuture) {                                    // 16  // 43
        var num = number,                                                                         // 17  // 44
            suffix;                                                                               // 18  // 45
                                                                                                  // 19  // 46
        switch (key) {                                                                            // 20  // 47
        case 's':                                                                                 // 21  // 48
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';        // 22  // 49
        case 'm':                                                                                 // 23  // 50
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');                      // 24  // 51
        case 'mm':                                                                                // 25  // 52
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');                        // 26  // 53
        case 'h':                                                                                 // 27  // 54
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');                       // 28  // 55
        case 'hh':                                                                                // 29  // 56
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');                         // 30  // 57
        case 'd':                                                                                 // 31  // 58
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');                       // 32  // 59
        case 'dd':                                                                                // 33  // 60
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');                         // 34  // 61
        case 'M':                                                                                 // 35  // 62
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');                   // 36  // 63
        case 'MM':                                                                                // 37  // 64
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');                     // 38  // 65
        case 'y':                                                                                 // 39  // 66
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');                          // 40  // 67
        case 'yy':                                                                                // 41  // 68
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');                            // 42  // 69
        }                                                                                         // 43  // 70
                                                                                                  // 44  // 71
        return '';                                                                                // 45  // 72
    }                                                                                             // 46  // 73
                                                                                                  // 47  // 74
    function week(isFuture) {                                                                     // 48  // 75
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';        // 49  // 76
    }                                                                                             // 50  // 77
                                                                                                  // 51  // 78
    return moment.defineLocale('hu', {                                                            // 52  // 79
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),            // 54  // 81
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),              // 55  // 82
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),                               // 56  // 83
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),                                            // 57  // 84
        longDateFormat : {                                                                        // 58  // 85
            LT : 'H:mm',                                                                          // 59  // 86
            LTS : 'LT:ss',                                                                        // 60  // 87
            L : 'YYYY.MM.DD.',                                                                    // 61  // 88
            LL : 'YYYY. MMMM D.',                                                                 // 62  // 89
            LLL : 'YYYY. MMMM D., LT',                                                            // 63  // 90
            LLLL : 'YYYY. MMMM D., dddd LT'                                                       // 64  // 91
        },                                                                                        // 65  // 92
        meridiemParse: /de|du/i,                                                                  // 66  // 93
        isPM: function (input) {                                                                  // 67  // 94
            return input.charAt(1).toLowerCase() === 'u';                                         // 68  // 95
        },                                                                                        // 69  // 96
        meridiem : function (hours, minutes, isLower) {                                           // 70  // 97
            if (hours < 12) {                                                                     // 71  // 98
                return isLower === true ? 'de' : 'DE';                                            // 72  // 99
            } else {                                                                              // 73  // 100
                return isLower === true ? 'du' : 'DU';                                            // 74  // 101
            }                                                                                     // 75  // 102
        },                                                                                        // 76  // 103
        calendar : {                                                                              // 77  // 104
            sameDay : '[ma] LT[-kor]',                                                            // 78  // 105
            nextDay : '[holnap] LT[-kor]',                                                        // 79  // 106
            nextWeek : function () {                                                              // 80  // 107
                return week.call(this, true);                                                     // 81  // 108
            },                                                                                    // 82  // 109
            lastDay : '[tegnap] LT[-kor]',                                                        // 83  // 110
            lastWeek : function () {                                                              // 84  // 111
                return week.call(this, false);                                                    // 85  // 112
            },                                                                                    // 86  // 113
            sameElse : 'L'                                                                        // 87  // 114
        },                                                                                        // 88  // 115
        relativeTime : {                                                                          // 89  // 116
            future : '%s múlva',                                                                  // 90  // 117
            past : '%s',                                                                          // 91  // 118
            s : translate,                                                                        // 92  // 119
            m : translate,                                                                        // 93  // 120
            mm : translate,                                                                       // 94  // 121
            h : translate,                                                                        // 95  // 122
            hh : translate,                                                                       // 96  // 123
            d : translate,                                                                        // 97  // 124
            dd : translate,                                                                       // 98  // 125
            M : translate,                                                                        // 99  // 126
            MM : translate,                                                                       // 100
            y : translate,                                                                        // 101
            yy : translate                                                                        // 102
        },                                                                                        // 103
        ordinalParse: /\d{1,2}\./,                                                                // 104
        ordinal : '%d.',                                                                          // 105
        week : {                                                                                  // 106
            dow : 1, // Monday is the first day of the week.                                      // 107
            doy : 7  // The week that contains Jan 1st is the first week of the year.             // 108
        }                                                                                         // 109
    });                                                                                           // 110
}));                                                                                              // 111
                                                                                                  // 112
////////////////////////////////////////////////////////////////////////////////////////////////////     // 140
                                                                                                         // 141
}).call(this);                                                                                           // 142
                                                                                                         // 143
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-hu'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-hu.js.map
