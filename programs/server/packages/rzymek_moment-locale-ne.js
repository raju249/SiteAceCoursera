(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-ne/packages/rzymek_moment-locale-ne.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-ne/server.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
global.moment = moment;                                                                                             // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 12
}).call(this);                                                                                                         // 13
                                                                                                                       // 14
                                                                                                                       // 15
                                                                                                                       // 16
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       // 19
(function () {                                                                                                         // 20
                                                                                                                       // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-ne/locale.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : nepali/nepalese                                                                                         // 2
// author : suvash : https://github.com/suvash                                                                      // 3
                                                                                                                    // 4
(function (factory) {                                                                                               // 5
    if (typeof define === 'function' && define.amd) {                                                               // 6
        define(['moment'], factory); // AMD                                                                         // 7
    } else if (typeof exports === 'object') {                                                                       // 8
        module.exports = factory(require('../moment')); // Node                                                     // 9
    } else {                                                                                                        // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                    // 11
    }                                                                                                               // 12
}(function (moment) {                                                                                               // 13
    var symbolMap = {                                                                                               // 14
        '1': '१',                                                                                                   // 15
        '2': '२',                                                                                                   // 16
        '3': '३',                                                                                                   // 17
        '4': '४',                                                                                                   // 18
        '5': '५',                                                                                                   // 19
        '6': '६',                                                                                                   // 20
        '7': '७',                                                                                                   // 21
        '8': '८',                                                                                                   // 22
        '9': '९',                                                                                                   // 23
        '0': '०'                                                                                                    // 24
    },                                                                                                              // 25
    numberMap = {                                                                                                   // 26
        '१': '1',                                                                                                   // 27
        '२': '2',                                                                                                   // 28
        '३': '3',                                                                                                   // 29
        '४': '4',                                                                                                   // 30
        '५': '5',                                                                                                   // 31
        '६': '6',                                                                                                   // 32
        '७': '7',                                                                                                   // 33
        '८': '8',                                                                                                   // 34
        '९': '9',                                                                                                   // 35
        '०': '0'                                                                                                    // 36
    };                                                                                                              // 37
                                                                                                                    // 38
    return moment.defineLocale('ne', {                                                                              // 39
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'), // 40
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),            // 41
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),                              // 42
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),                                       // 43
        weekdaysMin : 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),                                                      // 44
        longDateFormat : {                                                                                          // 45
            LT : 'Aको h:mm बजे',                                                                                    // 46
            LTS : 'Aको h:mm:ss बजे',                                                                                // 47
            L : 'DD/MM/YYYY',                                                                                       // 48
            LL : 'D MMMM YYYY',                                                                                     // 49
            LLL : 'D MMMM YYYY, LT',                                                                                // 50
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                          // 51
        },                                                                                                          // 52
        preparse: function (string) {                                                                               // 53
            return string.replace(/[१२३४५६७८९०]/g, function (match) {                                               // 54
                return numberMap[match];                                                                            // 55
            });                                                                                                     // 56
        },                                                                                                          // 57
        postformat: function (string) {                                                                             // 58
            return string.replace(/\d/g, function (match) {                                                         // 59
                return symbolMap[match];                                                                            // 60
            });                                                                                                     // 61
        },                                                                                                          // 62
        meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,                                                        // 63
        meridiemHour : function (hour, meridiem) {                                                                  // 64
            if (hour === 12) {                                                                                      // 65
                hour = 0;                                                                                           // 66
            }                                                                                                       // 67
            if (meridiem === 'राती') {                                                                              // 68
                return hour < 3 ? hour : hour + 12;                                                                 // 69
            } else if (meridiem === 'बिहान') {                                                                      // 70
                return hour;                                                                                        // 71
            } else if (meridiem === 'दिउँसो') {                                                                     // 72
                return hour >= 10 ? hour : hour + 12;                                                               // 73
            } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {                                              // 74
                return hour + 12;                                                                                   // 75
            }                                                                                                       // 76
        },                                                                                                          // 77
        meridiem : function (hour, minute, isLower) {                                                               // 78
            if (hour < 3) {                                                                                         // 79
                return 'राती';                                                                                      // 80
            } else if (hour < 10) {                                                                                 // 81
                return 'बिहान';                                                                                     // 82
            } else if (hour < 15) {                                                                                 // 83
                return 'दिउँसो';                                                                                    // 84
            } else if (hour < 18) {                                                                                 // 85
                return 'बेलुका';                                                                                    // 86
            } else if (hour < 20) {                                                                                 // 87
                return 'साँझ';                                                                                      // 88
            } else {                                                                                                // 89
                return 'राती';                                                                                      // 90
            }                                                                                                       // 91
        },                                                                                                          // 92
        calendar : {                                                                                                // 93
            sameDay : '[आज] LT',                                                                                    // 94
            nextDay : '[भोली] LT',                                                                                  // 95
            nextWeek : '[आउँदो] dddd[,] LT',                                                                        // 96
            lastDay : '[हिजो] LT',                                                                                  // 97
            lastWeek : '[गएको] dddd[,] LT',                                                                         // 98
            sameElse : 'L'                                                                                          // 99
        },                                                                                                          // 100
        relativeTime : {                                                                                            // 101
            future : '%sमा',                                                                                        // 102
            past : '%s अगाडी',                                                                                      // 103
            s : 'केही समय',                                                                                         // 104
            m : 'एक मिनेट',                                                                                         // 105
            mm : '%d मिनेट',                                                                                        // 106
            h : 'एक घण्टा',                                                                                         // 107
            hh : '%d घण्टा',                                                                                        // 108
            d : 'एक दिन',                                                                                           // 109
            dd : '%d दिन',                                                                                          // 110
            M : 'एक महिना',                                                                                         // 111
            MM : '%d महिना',                                                                                        // 112
            y : 'एक बर्ष',                                                                                          // 113
            yy : '%d बर्ष'                                                                                          // 114
        },                                                                                                          // 115
        week : {                                                                                                    // 116
            dow : 1, // Monday is the first day of the week.                                                        // 117
            doy : 7  // The week that contains Jan 1st is the first week of the year.                               // 118
        }                                                                                                           // 119
    });                                                                                                             // 120
}));                                                                                                                // 121
                                                                                                                    // 122
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 151
}).call(this);                                                                                                         // 152
                                                                                                                       // 153
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ne'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ne.js.map
