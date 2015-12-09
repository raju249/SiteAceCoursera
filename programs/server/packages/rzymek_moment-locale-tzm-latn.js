(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-tzm-latn/packages/rzymek_moment-loc //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-tzm-latn/server.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
global.moment = moment;                                                                                              // 1
                                                                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek:moment-locale-tzm-latn/locale.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// moment.js locale configuration                                                                                    // 1
// locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)                                                       // 2
// author : Abdel Said : https://github.com/abdelsaid                                                                // 3
                                                                                                                     // 4
(function (factory) {                                                                                                // 5
    if (typeof define === 'function' && define.amd) {                                                                // 6
        define(['moment'], factory); // AMD                                                                          // 7
    } else if (typeof exports === 'object') {                                                                        // 8
        module.exports = factory(require('../moment')); // Node                                                      // 9
    } else {                                                                                                         // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                     // 11
    }                                                                                                                // 12
}(function (moment) {                                                                                                // 13
    return moment.defineLocale('tzm-latn', {                                                                         // 14
        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'), // 15
        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),                                     // 17
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),                                // 18
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),                                  // 19
        longDateFormat : {                                                                                           // 20
            LT : 'HH:mm',                                                                                            // 21
            LTS : 'LT:ss',                                                                                           // 22
            L : 'DD/MM/YYYY',                                                                                        // 23
            LL : 'D MMMM YYYY',                                                                                      // 24
            LLL : 'D MMMM YYYY LT',                                                                                  // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                             // 26
        },                                                                                                           // 27
        calendar : {                                                                                                 // 28
            sameDay: '[asdkh g] LT',                                                                                 // 29
            nextDay: '[aska g] LT',                                                                                  // 30
            nextWeek: 'dddd [g] LT',                                                                                 // 31
            lastDay: '[assant g] LT',                                                                                // 32
            lastWeek: 'dddd [g] LT',                                                                                 // 33
            sameElse: 'L'                                                                                            // 34
        },                                                                                                           // 35
        relativeTime : {                                                                                             // 36
            future : 'dadkh s yan %s',                                                                               // 37
            past : 'yan %s',                                                                                         // 38
            s : 'imik',                                                                                              // 39
            m : 'minuḍ',                                                                                             // 40
            mm : '%d minuḍ',                                                                                         // 41
            h : 'saɛa',                                                                                              // 42
            hh : '%d tassaɛin',                                                                                      // 43
            d : 'ass',                                                                                               // 44
            dd : '%d ossan',                                                                                         // 45
            M : 'ayowr',                                                                                             // 46
            MM : '%d iyyirn',                                                                                        // 47
            y : 'asgas',                                                                                             // 48
            yy : '%d isgasn'                                                                                         // 49
        },                                                                                                           // 50
        week : {                                                                                                     // 51
            dow : 6, // Saturday is the first day of the week.                                                       // 52
            doy : 12  // The week that contains Jan 1st is the first week of the year.                               // 53
        }                                                                                                            // 54
    });                                                                                                              // 55
}));                                                                                                                 // 56
                                                                                                                     // 57
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 86
}).call(this);                                                       // 87
                                                                     // 88
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-tzm-latn'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-tzm-latn.js.map
