(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rzymek_moment-locale-lt/packages/rzymek_moment-locale-lt //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rzymek:moment-locale-lt/server.js                                                                         //
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
// packages/rzymek:moment-locale-lt/locale.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// moment.js locale configuration                                                                                     // 1
// locale : Lithuanian (lt)                                                                                           // 2
// author : Mindaugas Mozūras : https://github.com/mmozuras                                                           // 3
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
    var units = {                                                                                                     // 14
        'm' : 'minutė_minutės_minutę',                                                                                // 15
        'mm': 'minutės_minučių_minutes',                                                                              // 16
        'h' : 'valanda_valandos_valandą',                                                                             // 17
        'hh': 'valandos_valandų_valandas',                                                                            // 18
        'd' : 'diena_dienos_dieną',                                                                                   // 19
        'dd': 'dienos_dienų_dienas',                                                                                  // 20
        'M' : 'mėnuo_mėnesio_mėnesį',                                                                                 // 21
        'MM': 'mėnesiai_mėnesių_mėnesius',                                                                            // 22
        'y' : 'metai_metų_metus',                                                                                     // 23
        'yy': 'metai_metų_metus'                                                                                      // 24
    },                                                                                                                // 25
    weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'); // 26
                                                                                                                      // 27
    function translateSeconds(number, withoutSuffix, key, isFuture) {                                                 // 28
        if (withoutSuffix) {                                                                                          // 29
            return 'kelios sekundės';                                                                                 // 30
        } else {                                                                                                      // 31
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';                                                  // 32
        }                                                                                                             // 33
    }                                                                                                                 // 34
                                                                                                                      // 35
    function translateSingular(number, withoutSuffix, key, isFuture) {                                                // 36
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);                            // 37
    }                                                                                                                 // 38
                                                                                                                      // 39
    function special(number) {                                                                                        // 40
        return number % 10 === 0 || (number > 10 && number < 20);                                                     // 41
    }                                                                                                                 // 42
                                                                                                                      // 43
    function forms(key) {                                                                                             // 44
        return units[key].split('_');                                                                                 // 45
    }                                                                                                                 // 46
                                                                                                                      // 47
    function translate(number, withoutSuffix, key, isFuture) {                                                        // 48
        var result = number + ' ';                                                                                    // 49
        if (number === 1) {                                                                                           // 50
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);                               // 51
        } else if (withoutSuffix) {                                                                                   // 52
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);                                        // 53
        } else {                                                                                                      // 54
            if (isFuture) {                                                                                           // 55
                return result + forms(key)[1];                                                                        // 56
            } else {                                                                                                  // 57
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);                                    // 58
            }                                                                                                         // 59
        }                                                                                                             // 60
    }                                                                                                                 // 61
                                                                                                                      // 62
    function relativeWeekDay(moment, format) {                                                                        // 63
        var nominative = format.indexOf('dddd HH:mm') === -1,                                                         // 64
            weekDay = weekDays[moment.day()];                                                                         // 65
                                                                                                                      // 66
        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';                                 // 67
    }                                                                                                                 // 68
                                                                                                                      // 69
    return moment.defineLocale('lt', {                                                                                // 70
        months : 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),                                   // 72
        weekdays : relativeWeekDay,                                                                                   // 73
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),                                                     // 74
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),                                                                    // 75
        longDateFormat : {                                                                                            // 76
            LT : 'HH:mm',                                                                                             // 77
            LTS : 'LT:ss',                                                                                            // 78
            L : 'YYYY-MM-DD',                                                                                         // 79
            LL : 'YYYY [m.] MMMM D [d.]',                                                                             // 80
            LLL : 'YYYY [m.] MMMM D [d.], LT [val.]',                                                                 // 81
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',                                                          // 82
            l : 'YYYY-MM-DD',                                                                                         // 83
            ll : 'YYYY [m.] MMMM D [d.]',                                                                             // 84
            lll : 'YYYY [m.] MMMM D [d.], LT [val.]',                                                                 // 85
            llll : 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'                                                            // 86
        },                                                                                                            // 87
        calendar : {                                                                                                  // 88
            sameDay : '[Šiandien] LT',                                                                                // 89
            nextDay : '[Rytoj] LT',                                                                                   // 90
            nextWeek : 'dddd LT',                                                                                     // 91
            lastDay : '[Vakar] LT',                                                                                   // 92
            lastWeek : '[Praėjusį] dddd LT',                                                                          // 93
            sameElse : 'L'                                                                                            // 94
        },                                                                                                            // 95
        relativeTime : {                                                                                              // 96
            future : 'po %s',                                                                                         // 97
            past : 'prieš %s',                                                                                        // 98
            s : translateSeconds,                                                                                     // 99
            m : translateSingular,                                                                                    // 100
            mm : translate,                                                                                           // 101
            h : translateSingular,                                                                                    // 102
            hh : translate,                                                                                           // 103
            d : translateSingular,                                                                                    // 104
            dd : translate,                                                                                           // 105
            M : translateSingular,                                                                                    // 106
            MM : translate,                                                                                           // 107
            y : translateSingular,                                                                                    // 108
            yy : translate                                                                                            // 109
        },                                                                                                            // 110
        ordinalParse: /\d{1,2}-oji/,                                                                                  // 111
        ordinal : function (number) {                                                                                 // 112
            return number + '-oji';                                                                                   // 113
        },                                                                                                            // 114
        week : {                                                                                                      // 115
            dow : 1, // Monday is the first day of the week.                                                          // 116
            doy : 4  // The week that contains Jan 4th is the first week of the year.                                 // 117
        }                                                                                                             // 118
    });                                                                                                               // 119
}));                                                                                                                  // 120
                                                                                                                      // 121
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 150
}).call(this);                                                       // 151
                                                                     // 152
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-lt'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-lt.js.map
