(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek_moment-locale-el/packages/rzymek_moment-locale-el.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-el/server.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
global.moment = moment;                                                                                            // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 12
}).call(this);                                                                                                        // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      // 16
                                                                                                                      // 17
                                                                                                                      // 18
                                                                                                                      // 19
(function () {                                                                                                        // 20
                                                                                                                      // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rzymek:moment-locale-el/locale.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// moment.js locale configuration                                                                                  // 1
// locale : modern greek (el)                                                                                      // 2
// author : Aggelos Karalias : https://github.com/mehiel                                                           // 3
                                                                                                                   // 4
(function (factory) {                                                                                              // 5
    if (typeof define === 'function' && define.amd) {                                                              // 6
        define(['moment'], factory); // AMD                                                                        // 7
    } else if (typeof exports === 'object') {                                                                      // 8
        module.exports = factory(require('../moment')); // Node                                                    // 9
    } else {                                                                                                       // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                   // 11
    }                                                                                                              // 12
}(function (moment) {                                                                                              // 13
    return moment.defineLocale('el', {                                                                             // 14
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {                                                               // 17
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM' // 18
                return this._monthsGenitiveEl[momentToFormat.month()];                                             // 19
            } else {                                                                                               // 20
                return this._monthsNominativeEl[momentToFormat.month()];                                           // 21
            }                                                                                                      // 22
        },                                                                                                         // 23
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),                              // 24
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),                            // 25
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),                                                  // 26
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),                                                           // 27
        meridiem : function (hours, minutes, isLower) {                                                            // 28
            if (hours > 11) {                                                                                      // 29
                return isLower ? 'μμ' : 'ΜΜ';                                                                      // 30
            } else {                                                                                               // 31
                return isLower ? 'πμ' : 'ΠΜ';                                                                      // 32
            }                                                                                                      // 33
        },                                                                                                         // 34
        isPM : function (input) {                                                                                  // 35
            return ((input + '').toLowerCase()[0] === 'μ');                                                        // 36
        },                                                                                                         // 37
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,                                                                           // 38
        longDateFormat : {                                                                                         // 39
            LT : 'h:mm A',                                                                                         // 40
            LTS : 'h:mm:ss A',                                                                                     // 41
            L : 'DD/MM/YYYY',                                                                                      // 42
            LL : 'D MMMM YYYY',                                                                                    // 43
            LLL : 'D MMMM YYYY LT',                                                                                // 44
            LLLL : 'dddd, D MMMM YYYY LT'                                                                          // 45
        },                                                                                                         // 46
        calendarEl : {                                                                                             // 47
            sameDay : '[Σήμερα {}] LT',                                                                            // 48
            nextDay : '[Αύριο {}] LT',                                                                             // 49
            nextWeek : 'dddd [{}] LT',                                                                             // 50
            lastDay : '[Χθες {}] LT',                                                                              // 51
            lastWeek : function () {                                                                               // 52
                switch (this.day()) {                                                                              // 53
                    case 6:                                                                                        // 54
                        return '[το προηγούμενο] dddd [{}] LT';                                                    // 55
                    default:                                                                                       // 56
                        return '[την προηγούμενη] dddd [{}] LT';                                                   // 57
                }                                                                                                  // 58
            },                                                                                                     // 59
            sameElse : 'L'                                                                                         // 60
        },                                                                                                         // 61
        calendar : function (key, mom) {                                                                           // 62
            var output = this._calendarEl[key],                                                                    // 63
                hours = mom && mom.hours();                                                                        // 64
                                                                                                                   // 65
            if (typeof output === 'function') {                                                                    // 66
                output = output.apply(mom);                                                                        // 67
            }                                                                                                      // 68
                                                                                                                   // 69
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));                                      // 70
        },                                                                                                         // 71
        relativeTime : {                                                                                           // 72
            future : 'σε %s',                                                                                      // 73
            past : '%s πριν',                                                                                      // 74
            s : 'λίγα δευτερόλεπτα',                                                                               // 75
            m : 'ένα λεπτό',                                                                                       // 76
            mm : '%d λεπτά',                                                                                       // 77
            h : 'μία ώρα',                                                                                         // 78
            hh : '%d ώρες',                                                                                        // 79
            d : 'μία μέρα',                                                                                        // 80
            dd : '%d μέρες',                                                                                       // 81
            M : 'ένας μήνας',                                                                                      // 82
            MM : '%d μήνες',                                                                                       // 83
            y : 'ένας χρόνος',                                                                                     // 84
            yy : '%d χρόνια'                                                                                       // 85
        },                                                                                                         // 86
        ordinalParse: /\d{1,2}η/,                                                                                  // 87
        ordinal: '%dη',                                                                                            // 88
        week : {                                                                                                   // 89
            dow : 1, // Monday is the first day of the week.                                                       // 90
            doy : 4  // The week that contains Jan 4st is the first week of the year.                              // 91
        }                                                                                                          // 92
    });                                                                                                            // 93
}));                                                                                                               // 94
                                                                                                                   // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 124
}).call(this);                                                                                                        // 125
                                                                                                                      // 126
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-el'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-el.js.map
