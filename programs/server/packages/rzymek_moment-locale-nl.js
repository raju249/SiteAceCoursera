(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-nl/packages/rzymek_moment-locale-nl //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek:moment-locale-nl/server.js                                                                          //
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
// packages/rzymek:moment-locale-nl/locale.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js locale configuration                                                                                      // 1
// locale : dutch (nl)                                                                                                 // 2
// author : Joris Röling : https://github.com/jjupiter                                                                 // 3
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
    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),                 // 14
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');                         // 15
                                                                                                                       // 16
    return moment.defineLocale('nl', {                                                                                 // 17
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'), // 18
        monthsShort : function (m, format) {                                                                           // 19
            if (/-MMM-/.test(format)) {                                                                                // 20
                return monthsShortWithoutDots[m.month()];                                                              // 21
            } else {                                                                                                   // 22
                return monthsShortWithDots[m.month()];                                                                 // 23
            }                                                                                                          // 24
        },                                                                                                             // 25
        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),                            // 26
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),                                                      // 27
        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),                                                               // 28
        longDateFormat : {                                                                                             // 29
            LT : 'HH:mm',                                                                                              // 30
            LTS : 'LT:ss',                                                                                             // 31
            L : 'DD-MM-YYYY',                                                                                          // 32
            LL : 'D MMMM YYYY',                                                                                        // 33
            LLL : 'D MMMM YYYY LT',                                                                                    // 34
            LLLL : 'dddd D MMMM YYYY LT'                                                                               // 35
        },                                                                                                             // 36
        calendar : {                                                                                                   // 37
            sameDay: '[vandaag om] LT',                                                                                // 38
            nextDay: '[morgen om] LT',                                                                                 // 39
            nextWeek: 'dddd [om] LT',                                                                                  // 40
            lastDay: '[gisteren om] LT',                                                                               // 41
            lastWeek: '[afgelopen] dddd [om] LT',                                                                      // 42
            sameElse: 'L'                                                                                              // 43
        },                                                                                                             // 44
        relativeTime : {                                                                                               // 45
            future : 'over %s',                                                                                        // 46
            past : '%s geleden',                                                                                       // 47
            s : 'een paar seconden',                                                                                   // 48
            m : 'één minuut',                                                                                          // 49
            mm : '%d minuten',                                                                                         // 50
            h : 'één uur',                                                                                             // 51
            hh : '%d uur',                                                                                             // 52
            d : 'één dag',                                                                                             // 53
            dd : '%d dagen',                                                                                           // 54
            M : 'één maand',                                                                                           // 55
            MM : '%d maanden',                                                                                         // 56
            y : 'één jaar',                                                                                            // 57
            yy : '%d jaar'                                                                                             // 58
        },                                                                                                             // 59
        ordinalParse: /\d{1,2}(ste|de)/,                                                                               // 60
        ordinal : function (number) {                                                                                  // 61
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');                           // 62
        },                                                                                                             // 63
        week : {                                                                                                       // 64
            dow : 1, // Monday is the first day of the week.                                                           // 65
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                  // 66
        }                                                                                                              // 67
    });                                                                                                                // 68
}));                                                                                                                   // 69
                                                                                                                       // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 99
}).call(this);                                                       // 100
                                                                     // 101
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-nl'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-nl.js.map
