(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-de/packages/rzymek_moment-locale-de.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 3
//                                                                                                                //   // 4
// packages/rzymek:moment-locale-de/server.js                                                                     //   // 5
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
// packages/rzymek:moment-locale-de/locale.js                                                                     //   // 24
//                                                                                                                //   // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 26
                                                                                                                  //   // 27
// moment.js locale configuration                                                                                 // 1
// locale : german (de)                                                                                           // 2
// author : lluchs : https://github.com/lluchs                                                                    // 3
// author: Menelion Elensúle: https://github.com/Oire                                                             // 4
                                                                                                                  // 5
(function (factory) {                                                                                             // 6
    if (typeof define === 'function' && define.amd) {                                                             // 7
        define(['moment'], factory); // AMD                                                                       // 8
    } else if (typeof exports === 'object') {                                                                     // 9
        module.exports = factory(require('../moment')); // Node                                                   // 10
    } else {                                                                                                      // 11
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                  // 12
    }                                                                                                             // 13
}(function (moment) {                                                                                             // 14
    function processRelativeTime(number, withoutSuffix, key, isFuture) {                                          // 15
        var format = {                                                                                            // 16
            'm': ['eine Minute', 'einer Minute'],                                                                 // 17
            'h': ['eine Stunde', 'einer Stunde'],                                                                 // 18
            'd': ['ein Tag', 'einem Tag'],                                                                        // 19
            'dd': [number + ' Tage', number + ' Tagen'],                                                          // 20
            'M': ['ein Monat', 'einem Monat'],                                                                    // 21
            'MM': [number + ' Monate', number + ' Monaten'],                                                      // 22
            'y': ['ein Jahr', 'einem Jahr'],                                                                      // 23
            'yy': [number + ' Jahre', number + ' Jahren']                                                         // 24
        };                                                                                                        // 25
        return withoutSuffix ? format[key][0] : format[key][1];                                                   // 26
    }                                                                                                             // 27
                                                                                                                  // 28
    return moment.defineLocale('de', {                                                                            // 29
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'), // 30
        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),                  // 31
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),                      // 32
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),                                                 // 33
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),                                                          // 34
        longDateFormat : {                                                                                        // 35
            LT: 'HH:mm',                                                                                          // 36
            LTS: 'HH:mm:ss',                                                                                      // 37
            L : 'DD.MM.YYYY',                                                                                     // 38
            LL : 'D. MMMM YYYY',                                                                                  // 39
            LLL : 'D. MMMM YYYY LT',                                                                              // 40
            LLLL : 'dddd, D. MMMM YYYY LT'                                                                        // 41
        },                                                                                                        // 42
        calendar : {                                                                                              // 43
            sameDay: '[Heute um] LT [Uhr]',                                                                       // 44
            sameElse: 'L',                                                                                        // 45
            nextDay: '[Morgen um] LT [Uhr]',                                                                      // 46
            nextWeek: 'dddd [um] LT [Uhr]',                                                                       // 47
            lastDay: '[Gestern um] LT [Uhr]',                                                                     // 48
            lastWeek: '[letzten] dddd [um] LT [Uhr]'                                                              // 49
        },                                                                                                        // 50
        relativeTime : {                                                                                          // 51
            future : 'in %s',                                                                                     // 52
            past : 'vor %s',                                                                                      // 53
            s : 'ein paar Sekunden',                                                                              // 54
            m : processRelativeTime,                                                                              // 55
            mm : '%d Minuten',                                                                                    // 56
            h : processRelativeTime,                                                                              // 57
            hh : '%d Stunden',                                                                                    // 58
            d : processRelativeTime,                                                                              // 59
            dd : processRelativeTime,                                                                             // 60
            M : processRelativeTime,                                                                              // 61
            MM : processRelativeTime,                                                                             // 62
            y : processRelativeTime,                                                                              // 63
            yy : processRelativeTime                                                                              // 64
        },                                                                                                        // 65
        ordinalParse: /\d{1,2}\./,                                                                                // 66
        ordinal : '%d.',                                                                                          // 67
        week : {                                                                                                  // 68
            dow : 1, // Monday is the first day of the week.                                                      // 69
            doy : 4  // The week that contains Jan 4th is the first week of the year.                             // 70
        }                                                                                                         // 71
    });                                                                                                           // 72
}));                                                                                                              // 73
                                                                                                                  // 74
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   // 102
                                                                                                                       // 103
}).call(this);                                                                                                         // 104
                                                                                                                       // 105
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-de'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-de.js.map
