(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rzymek_moment-locale-km/packages/rzymek_moment-locale-km.js                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                        //    // 4
// packages/rzymek:moment-locale-km/server.js                                                             //    // 5
//                                                                                                        //    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                          //    // 8
global.moment = moment;                                                                                   // 1  // 9
                                                                                                          // 2  // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                                // 12
}).call(this);                                                                                                  // 13
                                                                                                                // 14
                                                                                                                // 15
                                                                                                                // 16
                                                                                                                // 17
                                                                                                                // 18
                                                                                                                // 19
(function () {                                                                                                  // 20
                                                                                                                // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                        //    // 23
// packages/rzymek:moment-locale-km/locale.js                                                             //    // 24
//                                                                                                        //    // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                          //    // 27
// moment.js locale configuration                                                                         // 1  // 28
// locale : khmer (km)                                                                                    // 2  // 29
// author : Kruy Vanna : https://github.com/kruyvanna                                                     // 3  // 30
                                                                                                          // 4  // 31
(function (factory) {                                                                                     // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                     // 6  // 33
        define(['moment'], factory); // AMD                                                               // 7  // 34
    } else if (typeof exports === 'object') {                                                             // 8  // 35
        module.exports = factory(require('../moment')); // Node                                           // 9  // 36
    } else {                                                                                              // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global          // 11
    }                                                                                                     // 12
}(function (moment) {                                                                                     // 13
    return moment.defineLocale('km', {                                                                    // 14
        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),      // 15
        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'), // 16
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),                            // 17
        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),                       // 18
        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),                         // 19
        longDateFormat: {                                                                                 // 20
            LT: 'HH:mm',                                                                                  // 21
            LTS : 'LT:ss',                                                                                // 22
            L: 'DD/MM/YYYY',                                                                              // 23
            LL: 'D MMMM YYYY',                                                                            // 24
            LLL: 'D MMMM YYYY LT',                                                                        // 25
            LLLL: 'dddd, D MMMM YYYY LT'                                                                  // 26
        },                                                                                                // 27
        calendar: {                                                                                       // 28
            sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',                                                                  // 29
            nextDay: '[ស្អែក ម៉ោង] LT',                                                                   // 30
            nextWeek: 'dddd [ម៉ោង] LT',                                                                   // 31
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',                                                                // 32
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',                                                      // 33
            sameElse: 'L'                                                                                 // 34
        },                                                                                                // 35
        relativeTime: {                                                                                   // 36
            future: '%sទៀត',                                                                              // 37
            past: '%sមុន',                                                                                // 38
            s: 'ប៉ុន្មានវិនាទី',                                                                          // 39
            m: 'មួយនាទី',                                                                                 // 40
            mm: '%d នាទី',                                                                                // 41
            h: 'មួយម៉ោង',                                                                                 // 42
            hh: '%d ម៉ោង',                                                                                // 43
            d: 'មួយថ្ងៃ',                                                                                 // 44
            dd: '%d ថ្ងៃ',                                                                                // 45
            M: 'មួយខែ',                                                                                   // 46
            MM: '%d ខែ',                                                                                  // 47
            y: 'មួយឆ្នាំ',                                                                                // 48
            yy: '%d ឆ្នាំ'                                                                                // 49
        },                                                                                                // 50
        week: {                                                                                           // 51
            dow: 1, // Monday is the first day of the week.                                               // 52
            doy: 4 // The week that contains Jan 4th is the first week of the year.                       // 53
        }                                                                                                 // 54
    });                                                                                                   // 55
}));                                                                                                      // 56
                                                                                                          // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 85
                                                                                                                // 86
}).call(this);                                                                                                  // 87
                                                                                                                // 88
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-km'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-km.js.map
