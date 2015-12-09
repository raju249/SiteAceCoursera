(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-ml/packages/rzymek_moment-locale-ml //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-ml/server.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
global.moment = moment;                                                                                               // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-ml/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : malayalam (ml)                                                                                            // 2
// author : Floyd Pink : https://github.com/floydpink                                                                 // 3
                                                                                                                      // 4
(function (factory) {                                                                                                 // 5
    if (typeof define === 'function' && define.amd) {                                                                 // 6
        define(['moment'], factory); // AMD                                                                           // 7
    } else if (typeof exports === 'object') {                                                                         // 8
        module.exports = factory(require('../moment')); // Node                                                       // 9
    } else {                                                                                                          // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                      // 11
    }                                                                                                                 // 12
}(function (moment) {                                                                                                 // 13
    return moment.defineLocale('ml', {                                                                                // 14
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'), // 15
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),            // 16
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),                // 17
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),                                        // 18
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),                                                             // 19
        longDateFormat : {                                                                                            // 20
            LT : 'A h:mm -നു',                                                                                        // 21
            LTS : 'A h:mm:ss -നു',                                                                                    // 22
            L : 'DD/MM/YYYY',                                                                                         // 23
            LL : 'D MMMM YYYY',                                                                                       // 24
            LLL : 'D MMMM YYYY, LT',                                                                                  // 25
            LLLL : 'dddd, D MMMM YYYY, LT'                                                                            // 26
        },                                                                                                            // 27
        calendar : {                                                                                                  // 28
            sameDay : '[ഇന്ന്] LT',                                                                                   // 29
            nextDay : '[നാളെ] LT',                                                                                    // 30
            nextWeek : 'dddd, LT',                                                                                    // 31
            lastDay : '[ഇന്നലെ] LT',                                                                                  // 32
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',                                                                           // 33
            sameElse : 'L'                                                                                            // 34
        },                                                                                                            // 35
        relativeTime : {                                                                                              // 36
            future : '%s കഴിഞ്ഞ്',                                                                                    // 37
            past : '%s മുൻപ്',                                                                                        // 38
            s : 'അൽപ നിമിഷങ്ങൾ',                                                                                      // 39
            m : 'ഒരു മിനിറ്റ്',                                                                                       // 40
            mm : '%d മിനിറ്റ്',                                                                                       // 41
            h : 'ഒരു മണിക്കൂർ',                                                                                       // 42
            hh : '%d മണിക്കൂർ',                                                                                       // 43
            d : 'ഒരു ദിവസം',                                                                                          // 44
            dd : '%d ദിവസം',                                                                                          // 45
            M : 'ഒരു മാസം',                                                                                           // 46
            MM : '%d മാസം',                                                                                           // 47
            y : 'ഒരു വർഷം',                                                                                           // 48
            yy : '%d വർഷം'                                                                                            // 49
        },                                                                                                            // 50
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,                                               // 51
        isPM : function (input) {                                                                                     // 52
            return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);                                                  // 53
        },                                                                                                            // 54
        meridiem : function (hour, minute, isLower) {                                                                 // 55
            if (hour < 4) {                                                                                           // 56
                return 'രാത്രി';                                                                                      // 57
            } else if (hour < 12) {                                                                                   // 58
                return 'രാവിലെ';                                                                                      // 59
            } else if (hour < 17) {                                                                                   // 60
                return 'ഉച്ച കഴിഞ്ഞ്';                                                                                // 61
            } else if (hour < 20) {                                                                                   // 62
                return 'വൈകുന്നേരം';                                                                                  // 63
            } else {                                                                                                  // 64
                return 'രാത്രി';                                                                                      // 65
            }                                                                                                         // 66
        }                                                                                                             // 67
    });                                                                                                               // 68
}));                                                                                                                  // 69
                                                                                                                      // 70
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 99
}).call(this);                                                       // 100
                                                                     // 101
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ml'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ml.js.map
