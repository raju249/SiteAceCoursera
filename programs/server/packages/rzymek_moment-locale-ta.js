(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-ta/packages/rzymek_moment-locale-ta //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-ta/server.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
global.moment = moment;                                                                                                // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-ta/locale.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js locale configuration                                                                                      // 1
// locale : tamil (ta)                                                                                                 // 2
// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404                                                    // 3
                                                                                                                       // 4
(function (factory) {                                                                                                  // 5
    if (typeof define === 'function' && define.amd) {                                                                  // 6
        define(['moment'], factory); // AMD                                                                            // 7
    } else if (typeof exports === 'object') {                                                                          // 8
        module.exports = factory(require('../moment')); // Node                                                        // 9
    } else {                                                                                                           // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                       // 11
    }                                                                                                                  // 12
}(function (moment) {                                                                                                  // 13
    /*var symbolMap = {                                                                                                // 14
            '1': '௧',                                                                                                  // 15
            '2': '௨',                                                                                                  // 16
            '3': '௩',                                                                                                  // 17
            '4': '௪',                                                                                                  // 18
            '5': '௫',                                                                                                  // 19
            '6': '௬',                                                                                                  // 20
            '7': '௭',                                                                                                  // 21
            '8': '௮',                                                                                                  // 22
            '9': '௯',                                                                                                  // 23
            '0': '௦'                                                                                                   // 24
        },                                                                                                             // 25
        numberMap = {                                                                                                  // 26
            '௧': '1',                                                                                                  // 27
            '௨': '2',                                                                                                  // 28
            '௩': '3',                                                                                                  // 29
            '௪': '4',                                                                                                  // 30
            '௫': '5',                                                                                                  // 31
            '௬': '6',                                                                                                  // 32
            '௭': '7',                                                                                                  // 33
            '௮': '8',                                                                                                  // 34
            '௯': '9',                                                                                                  // 35
            '௦': '0'                                                                                                   // 36
        }; */                                                                                                          // 37
                                                                                                                       // 38
    return moment.defineLocale('ta', {                                                                                 // 39
        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'), // 40
        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),                                 // 43
        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),                                                                // 44
        longDateFormat : {                                                                                             // 45
            LT : 'HH:mm',                                                                                              // 46
            LTS : 'LT:ss',                                                                                             // 47
            L : 'DD/MM/YYYY',                                                                                          // 48
            LL : 'D MMMM YYYY',                                                                                        // 49
            LLL : 'D MMMM YYYY, LT',                                                                                   // 50
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                             // 51
        },                                                                                                             // 52
        calendar : {                                                                                                   // 53
            sameDay : '[இன்று] LT',                                                                                    // 54
            nextDay : '[நாளை] LT',                                                                                     // 55
            nextWeek : 'dddd, LT',                                                                                     // 56
            lastDay : '[நேற்று] LT',                                                                                   // 57
            lastWeek : '[கடந்த வாரம்] dddd, LT',                                                                       // 58
            sameElse : 'L'                                                                                             // 59
        },                                                                                                             // 60
        relativeTime : {                                                                                               // 61
            future : '%s இல்',                                                                                         // 62
            past : '%s முன்',                                                                                          // 63
            s : 'ஒரு சில விநாடிகள்',                                                                                   // 64
            m : 'ஒரு நிமிடம்',                                                                                         // 65
            mm : '%d நிமிடங்கள்',                                                                                      // 66
            h : 'ஒரு மணி நேரம்',                                                                                       // 67
            hh : '%d மணி நேரம்',                                                                                       // 68
            d : 'ஒரு நாள்',                                                                                            // 69
            dd : '%d நாட்கள்',                                                                                         // 70
            M : 'ஒரு மாதம்',                                                                                           // 71
            MM : '%d மாதங்கள்',                                                                                        // 72
            y : 'ஒரு வருடம்',                                                                                          // 73
            yy : '%d ஆண்டுகள்'                                                                                         // 74
        },                                                                                                             // 75
/*        preparse: function (string) {                                                                                // 76
            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {                                                  // 77
                return numberMap[match];                                                                               // 78
            });                                                                                                        // 79
        },                                                                                                             // 80
        postformat: function (string) {                                                                                // 81
            return string.replace(/\d/g, function (match) {                                                            // 82
                return symbolMap[match];                                                                               // 83
            });                                                                                                        // 84
        },*/                                                                                                           // 85
        ordinalParse: /\d{1,2}வது/,                                                                                    // 86
        ordinal : function (number) {                                                                                  // 87
            return number + 'வது';                                                                                     // 88
        },                                                                                                             // 89
                                                                                                                       // 90
                                                                                                                       // 91
        // refer http://ta.wikipedia.org/s/1er1                                                                        // 92
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,                                                        // 93
        meridiem : function (hour, minute, isLower) {                                                                  // 94
            if (hour < 2) {                                                                                            // 95
                return ' யாமம்';                                                                                       // 96
            } else if (hour < 6) {                                                                                     // 97
                return ' வைகறை';  // வைகறை                                                                             // 98
            } else if (hour < 10) {                                                                                    // 99
                return ' காலை'; // காலை                                                                                // 100
            } else if (hour < 14) {                                                                                    // 101
                return ' நண்பகல்'; // நண்பகல்                                                                          // 102
            } else if (hour < 18) {                                                                                    // 103
                return ' எற்பாடு'; // எற்பாடு                                                                          // 104
            } else if (hour < 22) {                                                                                    // 105
                return ' மாலை'; // மாலை                                                                                // 106
            } else {                                                                                                   // 107
                return ' யாமம்';                                                                                       // 108
            }                                                                                                          // 109
        },                                                                                                             // 110
        meridiemHour : function (hour, meridiem) {                                                                     // 111
            if (hour === 12) {                                                                                         // 112
                hour = 0;                                                                                              // 113
            }                                                                                                          // 114
            if (meridiem === 'யாமம்') {                                                                                // 115
                return hour < 2 ? hour : hour + 12;                                                                    // 116
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {                                                  // 117
                return hour;                                                                                           // 118
            } else if (meridiem === 'நண்பகல்') {                                                                       // 119
                return hour >= 10 ? hour : hour + 12;                                                                  // 120
            } else {                                                                                                   // 121
                return hour + 12;                                                                                      // 122
            }                                                                                                          // 123
        },                                                                                                             // 124
        week : {                                                                                                       // 125
            dow : 0, // Sunday is the first day of the week.                                                           // 126
            doy : 6  // The week that contains Jan 1st is the first week of the year.                                  // 127
        }                                                                                                              // 128
    });                                                                                                                // 129
}));                                                                                                                   // 130
                                                                                                                       // 131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 160
}).call(this);                                                       // 161
                                                                     // 162
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ta'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ta.js.map
