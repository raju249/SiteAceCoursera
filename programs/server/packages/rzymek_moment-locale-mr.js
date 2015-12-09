(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-mr/packages/rzymek_moment-locale-mr //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-mr/server.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
global.moment = moment;                                                                                              // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-mr/locale.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : Marathi (mr)                                                                                             // 2
// author : Harshad Kale : https://github.com/kalehv                                                                 // 3
                                                                                                                     // 4
(function (factory) {                                                                                                // 5
    if (typeof define === 'function' && define.amd) {                                                                // 6
        define(['moment'], factory); // AMD                                                                          // 7
    } else if (typeof exports === 'object') {                                                                        // 8
        module.exports = factory(require('../moment')); // Node                                                      // 9
    } else {                                                                                                         // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                     // 11
    }                                                                                                                // 12
}(function (moment) {                                                                                                // 13
    var symbolMap = {                                                                                                // 14
        '1': '१',                                                                                                    // 15
        '2': '२',                                                                                                    // 16
        '3': '३',                                                                                                    // 17
        '4': '४',                                                                                                    // 18
        '5': '५',                                                                                                    // 19
        '6': '६',                                                                                                    // 20
        '7': '७',                                                                                                    // 21
        '8': '८',                                                                                                    // 22
        '9': '९',                                                                                                    // 23
        '0': '०'                                                                                                     // 24
    },                                                                                                               // 25
    numberMap = {                                                                                                    // 26
        '१': '1',                                                                                                    // 27
        '२': '2',                                                                                                    // 28
        '३': '3',                                                                                                    // 29
        '४': '4',                                                                                                    // 30
        '५': '5',                                                                                                    // 31
        '६': '6',                                                                                                    // 32
        '७': '7',                                                                                                    // 33
        '८': '8',                                                                                                    // 34
        '९': '9',                                                                                                    // 35
        '०': '0'                                                                                                     // 36
    };                                                                                                               // 37
                                                                                                                     // 38
    return moment.defineLocale('mr', {                                                                               // 39
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'), // 40
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),     // 41
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),                                // 42
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),                                                // 43
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),                                                               // 44
        longDateFormat : {                                                                                           // 45
            LT : 'A h:mm वाजता',                                                                                     // 46
            LTS : 'A h:mm:ss वाजता',                                                                                 // 47
            L : 'DD/MM/YYYY',                                                                                        // 48
            LL : 'D MMMM YYYY',                                                                                      // 49
            LLL : 'D MMMM YYYY, LT',                                                                                 // 50
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                           // 51
        },                                                                                                           // 52
        calendar : {                                                                                                 // 53
            sameDay : '[आज] LT',                                                                                     // 54
            nextDay : '[उद्या] LT',                                                                                  // 55
            nextWeek : 'dddd, LT',                                                                                   // 56
            lastDay : '[काल] LT',                                                                                    // 57
            lastWeek: '[मागील] dddd, LT',                                                                            // 58
            sameElse : 'L'                                                                                           // 59
        },                                                                                                           // 60
        relativeTime : {                                                                                             // 61
            future : '%s नंतर',                                                                                      // 62
            past : '%s पूर्वी',                                                                                      // 63
            s : 'सेकंद',                                                                                             // 64
            m: 'एक मिनिट',                                                                                           // 65
            mm: '%d मिनिटे',                                                                                         // 66
            h : 'एक तास',                                                                                            // 67
            hh : '%d तास',                                                                                           // 68
            d : 'एक दिवस',                                                                                           // 69
            dd : '%d दिवस',                                                                                          // 70
            M : 'एक महिना',                                                                                          // 71
            MM : '%d महिने',                                                                                         // 72
            y : 'एक वर्ष',                                                                                           // 73
            yy : '%d वर्षे'                                                                                          // 74
        },                                                                                                           // 75
        preparse: function (string) {                                                                                // 76
            return string.replace(/[१२३४५६७८९०]/g, function (match) {                                                // 77
                return numberMap[match];                                                                             // 78
            });                                                                                                      // 79
        },                                                                                                           // 80
        postformat: function (string) {                                                                              // 81
            return string.replace(/\d/g, function (match) {                                                          // 82
                return symbolMap[match];                                                                             // 83
            });                                                                                                      // 84
        },                                                                                                           // 85
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,                                                               // 86
        meridiemHour : function (hour, meridiem) {                                                                   // 87
            if (hour === 12) {                                                                                       // 88
                hour = 0;                                                                                            // 89
            }                                                                                                        // 90
            if (meridiem === 'रात्री') {                                                                             // 91
                return hour < 4 ? hour : hour + 12;                                                                  // 92
            } else if (meridiem === 'सकाळी') {                                                                       // 93
                return hour;                                                                                         // 94
            } else if (meridiem === 'दुपारी') {                                                                      // 95
                return hour >= 10 ? hour : hour + 12;                                                                // 96
            } else if (meridiem === 'सायंकाळी') {                                                                    // 97
                return hour + 12;                                                                                    // 98
            }                                                                                                        // 99
        },                                                                                                           // 100
        meridiem: function (hour, minute, isLower)                                                                   // 101
        {                                                                                                            // 102
            if (hour < 4) {                                                                                          // 103
                return 'रात्री';                                                                                     // 104
            } else if (hour < 10) {                                                                                  // 105
                return 'सकाळी';                                                                                      // 106
            } else if (hour < 17) {                                                                                  // 107
                return 'दुपारी';                                                                                     // 108
            } else if (hour < 20) {                                                                                  // 109
                return 'सायंकाळी';                                                                                   // 110
            } else {                                                                                                 // 111
                return 'रात्री';                                                                                     // 112
            }                                                                                                        // 113
        },                                                                                                           // 114
        week : {                                                                                                     // 115
            dow : 0, // Sunday is the first day of the week.                                                         // 116
            doy : 6  // The week that contains Jan 1st is the first week of the year.                                // 117
        }                                                                                                            // 118
    });                                                                                                              // 119
}));                                                                                                                 // 120
                                                                                                                     // 121
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 150
}).call(this);                                                       // 151
                                                                     // 152
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-mr'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-mr.js.map
