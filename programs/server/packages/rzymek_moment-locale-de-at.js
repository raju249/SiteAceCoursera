(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-de-at/packages/rzymek_moment-locale-de-at.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-de-at/server.js                                                                  //   // 5
//                                                                                                                //   // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 7
                                                                                                                  //   // 8
global.moment = moment;                                                                                           // 1
                                                                                                                  // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 11
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 22
//                                                                                                                //   // 23
// packages/rzymek:moment-locale-de-at/locale.js                                                                  //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : austrian german (de-at)                                                                               // 2
// author : lluchs : https://github.com/lluchs                                                                    // 3
// author: Menelion Elensúle: https://github.com/Oire                                                             // 4
// author : Martin Groller : https://github.com/MadMG                                                             // 5
                                                                                                                  // 6
(function (factory) {                                                                                             // 7
    if (typeof define === 'function' && define.amd) {                                                             // 8
        define(['moment'], factory); // AMD                                                                       // 9
    } else if (typeof exports === 'object') {                                                                     // 10
        module.exports = factory(require('../moment')); // Node                                                   // 11
    } else {                                                                                                      // 12
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 13
    }                                                                                                             // 14
}(function (moment) {                                                                                             // 15
    function processRelativeTime(number, withoutSuffix, key, isFuture) {                                          // 16
        var format = {                                                                                            // 17
            'm': ['eine Minute', 'einer Minute'],                                                                 // 18
            'h': ['eine Stunde', 'einer Stunde'],                                                                 // 19
            'd': ['ein Tag', 'einem Tag'],                                                                        // 20
            'dd': [number + ' Tage', number + ' Tagen'],                                                          // 21
            'M': ['ein Monat', 'einem Monat'],                                                                    // 22
            'MM': [number + ' Monate', number + ' Monaten'],                                                      // 23
            'y': ['ein Jahr', 'einem Jahr'],                                                                      // 24
            'yy': [number + ' Jahre', number + ' Jahren']                                                         // 25
        };                                                                                                        // 26
        return withoutSuffix ? format[key][0] : format[key][1];                                                   // 27
    }                                                                                                             // 28
                                                                                                                  // 29
    return moment.defineLocale('de-at', {                                                                         // 30
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'), // 31
        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),                  // 32
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),                      // 33
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),                                                 // 34
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),                                                          // 35
        longDateFormat : {                                                                                        // 36
            LT: 'HH:mm',                                                                                          // 37
            LTS: 'HH:mm:ss',                                                                                      // 38
            L : 'DD.MM.YYYY',                                                                                     // 39
            LL : 'D. MMMM YYYY',                                                                                  // 40
            LLL : 'D. MMMM YYYY LT',                                                                              // 41
            LLLL : 'dddd, D. MMMM YYYY LT'                                                                        // 42
        },                                                                                                        // 43
        calendar : {                                                                                              // 44
            sameDay: '[Heute um] LT [Uhr]',                                                                       // 45
            sameElse: 'L',                                                                                        // 46
            nextDay: '[Morgen um] LT [Uhr]',                                                                      // 47
            nextWeek: 'dddd [um] LT [Uhr]',                                                                       // 48
            lastDay: '[Gestern um] LT [Uhr]',                                                                     // 49
            lastWeek: '[letzten] dddd [um] LT [Uhr]'                                                              // 50
        },                                                                                                        // 51
        relativeTime : {                                                                                          // 52
            future : 'in %s',                                                                                     // 53
            past : 'vor %s',                                                                                      // 54
            s : 'ein paar Sekunden',                                                                              // 55
            m : processRelativeTime,                                                                              // 56
            mm : '%d Minuten',                                                                                    // 57
            h : processRelativeTime,                                                                              // 58
            hh : '%d Stunden',                                                                                    // 59
            d : processRelativeTime,                                                                              // 60
            dd : processRelativeTime,                                                                             // 61
            M : processRelativeTime,                                                                              // 62
            MM : processRelativeTime,                                                                             // 63
            y : processRelativeTime,                                                                              // 64
            yy : processRelativeTime                                                                              // 65
        },                                                                                                        // 66
        ordinalParse: /\d{1,2}\./,                                                                                // 67
        ordinal : '%d.',                                                                                          // 68
        week : {                                                                                                  // 69
            dow : 1, // Monday is the first day of the week.                                                      // 70
            doy : 4  // The week that contains Jan 4th is the first week of the year.                             // 71
        }                                                                                                         // 72
    });                                                                                                           // 73
}));                                                                                                              // 74
                                                                                                                  // 75
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 103
                                                                                                                       // 104
}).call(this);                                                                                                         // 105
                                                                                                                       // 106
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-de-at'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-de-at.js.map
