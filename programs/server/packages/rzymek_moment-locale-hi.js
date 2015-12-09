(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rzymek_moment-locale-hi/packages/rzymek_moment-locale-hi.js                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
(function () {                                                                                                    // 1
                                                                                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                         //     // 4
// packages/rzymek:moment-locale-hi/server.js                                                              //     // 5
//                                                                                                         //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                           //     // 8
global.moment = moment;                                                                                    // 1   // 9
                                                                                                           // 2   // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                  // 12
}).call(this);                                                                                                    // 13
                                                                                                                  // 14
                                                                                                                  // 15
                                                                                                                  // 16
                                                                                                                  // 17
                                                                                                                  // 18
                                                                                                                  // 19
(function () {                                                                                                    // 20
                                                                                                                  // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                         //     // 23
// packages/rzymek:moment-locale-hi/locale.js                                                              //     // 24
//                                                                                                         //     // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                           //     // 27
// moment.js locale configuration                                                                          // 1   // 28
// locale : hindi (hi)                                                                                     // 2   // 29
// author : Mayank Singhal : https://github.com/mayanksinghal                                              // 3   // 30
                                                                                                           // 4   // 31
(function (factory) {                                                                                      // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                      // 6   // 33
        define(['moment'], factory); // AMD                                                                // 7   // 34
    } else if (typeof exports === 'object') {                                                              // 8   // 35
        module.exports = factory(require('../moment')); // Node                                            // 9   // 36
    } else {                                                                                               // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global           // 11  // 38
    }                                                                                                      // 12  // 39
}(function (moment) {                                                                                      // 13  // 40
    var symbolMap = {                                                                                      // 14  // 41
        '1': '१',                                                                                          // 15  // 42
        '2': '२',                                                                                          // 16  // 43
        '3': '३',                                                                                          // 17  // 44
        '4': '४',                                                                                          // 18  // 45
        '5': '५',                                                                                          // 19  // 46
        '6': '६',                                                                                          // 20  // 47
        '7': '७',                                                                                          // 21  // 48
        '8': '८',                                                                                          // 22  // 49
        '9': '९',                                                                                          // 23  // 50
        '0': '०'                                                                                           // 24  // 51
    },                                                                                                     // 25  // 52
    numberMap = {                                                                                          // 26  // 53
        '१': '1',                                                                                          // 27  // 54
        '२': '2',                                                                                          // 28  // 55
        '३': '3',                                                                                          // 29  // 56
        '४': '4',                                                                                          // 30  // 57
        '५': '5',                                                                                          // 31  // 58
        '६': '6',                                                                                          // 32  // 59
        '७': '7',                                                                                          // 33  // 60
        '८': '8',                                                                                          // 34  // 61
        '९': '9',                                                                                          // 35  // 62
        '०': '0'                                                                                           // 36  // 63
    };                                                                                                     // 37  // 64
                                                                                                           // 38  // 65
    return moment.defineLocale('hi', {                                                                     // 39  // 66
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'), // 40  // 67
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),             // 41  // 68
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),                      // 42  // 69
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),                                      // 43  // 70
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),                                                     // 44  // 71
        longDateFormat : {                                                                                 // 45  // 72
            LT : 'A h:mm बजे',                                                                             // 46  // 73
            LTS : 'A h:mm:ss बजे',                                                                         // 47  // 74
            L : 'DD/MM/YYYY',                                                                              // 48  // 75
            LL : 'D MMMM YYYY',                                                                            // 49  // 76
            LLL : 'D MMMM YYYY, LT',                                                                       // 50  // 77
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                 // 51  // 78
        },                                                                                                 // 52  // 79
        calendar : {                                                                                       // 53  // 80
            sameDay : '[आज] LT',                                                                           // 54  // 81
            nextDay : '[कल] LT',                                                                           // 55  // 82
            nextWeek : 'dddd, LT',                                                                         // 56  // 83
            lastDay : '[कल] LT',                                                                           // 57  // 84
            lastWeek : '[पिछले] dddd, LT',                                                                 // 58  // 85
            sameElse : 'L'                                                                                 // 59  // 86
        },                                                                                                 // 60  // 87
        relativeTime : {                                                                                   // 61  // 88
            future : '%s में',                                                                             // 62  // 89
            past : '%s पहले',                                                                              // 63  // 90
            s : 'कुछ ही क्षण',                                                                             // 64  // 91
            m : 'एक मिनट',                                                                                 // 65  // 92
            mm : '%d मिनट',                                                                                // 66  // 93
            h : 'एक घंटा',                                                                                 // 67  // 94
            hh : '%d घंटे',                                                                                // 68  // 95
            d : 'एक दिन',                                                                                  // 69  // 96
            dd : '%d दिन',                                                                                 // 70  // 97
            M : 'एक महीने',                                                                                // 71  // 98
            MM : '%d महीने',                                                                               // 72  // 99
            y : 'एक वर्ष',                                                                                 // 73  // 100
            yy : '%d वर्ष'                                                                                 // 74  // 101
        },                                                                                                 // 75  // 102
        preparse: function (string) {                                                                      // 76  // 103
            return string.replace(/[१२३४५६७८९०]/g, function (match) {                                      // 77  // 104
                return numberMap[match];                                                                   // 78  // 105
            });                                                                                            // 79  // 106
        },                                                                                                 // 80  // 107
        postformat: function (string) {                                                                    // 81  // 108
            return string.replace(/\d/g, function (match) {                                                // 82  // 109
                return symbolMap[match];                                                                   // 83  // 110
            });                                                                                            // 84  // 111
        },                                                                                                 // 85  // 112
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists                    // 86  // 113
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.                          // 87  // 114
        meridiemParse: /रात|सुबह|दोपहर|शाम/,                                                               // 88  // 115
        meridiemHour : function (hour, meridiem) {                                                         // 89  // 116
            if (hour === 12) {                                                                             // 90  // 117
                hour = 0;                                                                                  // 91  // 118
            }                                                                                              // 92  // 119
            if (meridiem === 'रात') {                                                                      // 93  // 120
                return hour < 4 ? hour : hour + 12;                                                        // 94  // 121
            } else if (meridiem === 'सुबह') {                                                              // 95  // 122
                return hour;                                                                               // 96  // 123
            } else if (meridiem === 'दोपहर') {                                                             // 97  // 124
                return hour >= 10 ? hour : hour + 12;                                                      // 98  // 125
            } else if (meridiem === 'शाम') {                                                               // 99  // 126
                return hour + 12;                                                                          // 100
            }                                                                                              // 101
        },                                                                                                 // 102
        meridiem : function (hour, minute, isLower) {                                                      // 103
            if (hour < 4) {                                                                                // 104
                return 'रात';                                                                              // 105
            } else if (hour < 10) {                                                                        // 106
                return 'सुबह';                                                                             // 107
            } else if (hour < 17) {                                                                        // 108
                return 'दोपहर';                                                                            // 109
            } else if (hour < 20) {                                                                        // 110
                return 'शाम';                                                                              // 111
            } else {                                                                                       // 112
                return 'रात';                                                                              // 113
            }                                                                                              // 114
        },                                                                                                 // 115
        week : {                                                                                           // 116
            dow : 0, // Sunday is the first day of the week.                                               // 117
            doy : 6  // The week that contains Jan 1st is the first week of the year.                      // 118
        }                                                                                                  // 119
    });                                                                                                    // 120
}));                                                                                                       // 121
                                                                                                           // 122
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 150
                                                                                                                  // 151
}).call(this);                                                                                                    // 152
                                                                                                                  // 153
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-hi'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-hi.js.map
