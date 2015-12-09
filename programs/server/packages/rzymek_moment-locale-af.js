(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rzymek_moment-locale-af/packages/rzymek_moment-locale-af.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/rzymek:moment-locale-af/server.js                                                    //    // 5
//                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                 //    // 8
global.moment = moment;                                                                          // 1  // 9
                                                                                                 // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                       // 12
}).call(this);                                                                                         // 13
                                                                                                       // 14
                                                                                                       // 15
                                                                                                       // 16
                                                                                                       // 17
                                                                                                       // 18
                                                                                                       // 19
(function () {                                                                                         // 20
                                                                                                       // 21
///////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                               //    // 23
// packages/rzymek:moment-locale-af/locale.js                                                    //    // 24
//                                                                                               //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                 //    // 27
// moment.js locale configuration                                                                // 1  // 28
// locale : afrikaans (af)                                                                       // 2  // 29
// author : Werner Mollentze : https://github.com/wernerm                                        // 3  // 30
                                                                                                 // 4  // 31
(function (factory) {                                                                            // 5  // 32
    if (typeof define === 'function' && define.amd) {                                            // 6  // 33
        define(['moment'], factory); // AMD                                                      // 7  // 34
    } else if (typeof exports === 'object') {                                                    // 8  // 35
        module.exports = factory(require('../moment')); // Node                                  // 9  // 36
    } else {                                                                                     // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 11
    }                                                                                            // 12
}(function (moment) {                                                                            // 13
    return moment.defineLocale('af', {                                                           // 14
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),              // 16
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),       // 17
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),                                // 18
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),                                         // 19
        meridiemParse: /vm|nm/i,                                                                 // 20
        isPM : function (input) {                                                                // 21
            return /^nm$/i.test(input);                                                          // 22
        },                                                                                       // 23
        meridiem : function (hours, minutes, isLower) {                                          // 24
            if (hours < 12) {                                                                    // 25
                return isLower ? 'vm' : 'VM';                                                    // 26
            } else {                                                                             // 27
                return isLower ? 'nm' : 'NM';                                                    // 28
            }                                                                                    // 29
        },                                                                                       // 30
        longDateFormat : {                                                                       // 31
            LT : 'HH:mm',                                                                        // 32
            LTS : 'LT:ss',                                                                       // 33
            L : 'DD/MM/YYYY',                                                                    // 34
            LL : 'D MMMM YYYY',                                                                  // 35
            LLL : 'D MMMM YYYY LT',                                                              // 36
            LLLL : 'dddd, D MMMM YYYY LT'                                                        // 37
        },                                                                                       // 38
        calendar : {                                                                             // 39
            sameDay : '[Vandag om] LT',                                                          // 40
            nextDay : '[Môre om] LT',                                                            // 41
            nextWeek : 'dddd [om] LT',                                                           // 42
            lastDay : '[Gister om] LT',                                                          // 43
            lastWeek : '[Laas] dddd [om] LT',                                                    // 44
            sameElse : 'L'                                                                       // 45
        },                                                                                       // 46
        relativeTime : {                                                                         // 47
            future : 'oor %s',                                                                   // 48
            past : '%s gelede',                                                                  // 49
            s : '\'n paar sekondes',                                                             // 50
            m : '\'n minuut',                                                                    // 51
            mm : '%d minute',                                                                    // 52
            h : '\'n uur',                                                                       // 53
            hh : '%d ure',                                                                       // 54
            d : '\'n dag',                                                                       // 55
            dd : '%d dae',                                                                       // 56
            M : '\'n maand',                                                                     // 57
            MM : '%d maande',                                                                    // 58
            y : '\'n jaar',                                                                      // 59
            yy : '%d jaar'                                                                       // 60
        },                                                                                       // 61
        ordinalParse: /\d{1,2}(ste|de)/,                                                         // 62
        ordinal : function (number) {                                                            // 63
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },                                                                                       // 65
        week : {                                                                                 // 66
            dow : 1, // Maandag is die eerste dag van die week.                                  // 67
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.     // 68
        }                                                                                        // 69
    });                                                                                          // 70
}));                                                                                             // 71
                                                                                                 // 72
///////////////////////////////////////////////////////////////////////////////////////////////////    // 100
                                                                                                       // 101
}).call(this);                                                                                         // 102
                                                                                                       // 103
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-af'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-af.js.map
