(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/rzymek_moment-locale-lv/packages/rzymek_moment-locale-lv.js                                        //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                       //    // 4
// packages/rzymek:moment-locale-lv/server.js                                                            //    // 5
//                                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                         //    // 8
global.moment = moment;                                                                                  // 1  // 9
                                                                                                         // 2  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                               // 12
}).call(this);                                                                                                 // 13
                                                                                                               // 14
                                                                                                               // 15
                                                                                                               // 16
                                                                                                               // 17
                                                                                                               // 18
                                                                                                               // 19
(function () {                                                                                                 // 20
                                                                                                               // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                       //    // 23
// packages/rzymek:moment-locale-lv/locale.js                                                            //    // 24
//                                                                                                       //    // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                         //    // 27
// moment.js locale configuration                                                                        // 1  // 28
// locale : latvian (lv)                                                                                 // 2  // 29
// author : Kristaps Karlsons : https://github.com/skakri                                                // 3  // 30
                                                                                                         // 4  // 31
(function (factory) {                                                                                    // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                    // 6  // 33
        define(['moment'], factory); // AMD                                                              // 7  // 34
    } else if (typeof exports === 'object') {                                                            // 8  // 35
        module.exports = factory(require('../moment')); // Node                                          // 9  // 36
    } else {                                                                                             // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global         // 11
    }                                                                                                    // 12
}(function (moment) {                                                                                    // 13
    var units = {                                                                                        // 14
        'mm': 'minūti_minūtes_minūte_minūtes',                                                           // 15
        'hh': 'stundu_stundas_stunda_stundas',                                                           // 16
        'dd': 'dienu_dienas_diena_dienas',                                                               // 17
        'MM': 'mēnesi_mēnešus_mēnesis_mēneši',                                                           // 18
        'yy': 'gadu_gadus_gads_gadi'                                                                     // 19
    };                                                                                                   // 20
                                                                                                         // 21
    function format(word, number, withoutSuffix) {                                                       // 22
        var forms = word.split('_');                                                                     // 23
        if (withoutSuffix) {                                                                             // 24
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];                             // 25
        } else {                                                                                         // 26
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];                             // 27
        }                                                                                                // 28
    }                                                                                                    // 29
                                                                                                         // 30
    function relativeTimeWithPlural(number, withoutSuffix, key) {                                        // 31
        return number + ' ' + format(units[key], number, withoutSuffix);                                 // 32
    }                                                                                                    // 33
                                                                                                         // 34
    return moment.defineLocale('lv', {                                                                   // 35
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),                      // 37
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'), // 38
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),                                                    // 39
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),                                                      // 40
        longDateFormat : {                                                                               // 41
            LT : 'HH:mm',                                                                                // 42
            LTS : 'LT:ss',                                                                               // 43
            L : 'DD.MM.YYYY',                                                                            // 44
            LL : 'YYYY. [gada] D. MMMM',                                                                 // 45
            LLL : 'YYYY. [gada] D. MMMM, LT',                                                            // 46
            LLLL : 'YYYY. [gada] D. MMMM, dddd, LT'                                                      // 47
        },                                                                                               // 48
        calendar : {                                                                                     // 49
            sameDay : '[Šodien pulksten] LT',                                                            // 50
            nextDay : '[Rīt pulksten] LT',                                                               // 51
            nextWeek : 'dddd [pulksten] LT',                                                             // 52
            lastDay : '[Vakar pulksten] LT',                                                             // 53
            lastWeek : '[Pagājušā] dddd [pulksten] LT',                                                  // 54
            sameElse : 'L'                                                                               // 55
        },                                                                                               // 56
        relativeTime : {                                                                                 // 57
            future : '%s vēlāk',                                                                         // 58
            past : '%s agrāk',                                                                           // 59
            s : 'dažas sekundes',                                                                        // 60
            m : 'minūti',                                                                                // 61
            mm : relativeTimeWithPlural,                                                                 // 62
            h : 'stundu',                                                                                // 63
            hh : relativeTimeWithPlural,                                                                 // 64
            d : 'dienu',                                                                                 // 65
            dd : relativeTimeWithPlural,                                                                 // 66
            M : 'mēnesi',                                                                                // 67
            MM : relativeTimeWithPlural,                                                                 // 68
            y : 'gadu',                                                                                  // 69
            yy : relativeTimeWithPlural                                                                  // 70
        },                                                                                               // 71
        ordinalParse: /\d{1,2}\./,                                                                       // 72
        ordinal : '%d.',                                                                                 // 73
        week : {                                                                                         // 74
            dow : 1, // Monday is the first day of the week.                                             // 75
            doy : 4  // The week that contains Jan 4th is the first week of the year.                    // 76
        }                                                                                                // 77
    });                                                                                                  // 78
}));                                                                                                     // 79
                                                                                                         // 80
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 108
                                                                                                               // 109
}).call(this);                                                                                                 // 110
                                                                                                               // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-lv'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-lv.js.map
