(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-pl/packages/rzymek_moment-locale-pl.js                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-pl/server.js                                                    //     // 5
//                                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                 //     // 8
global.moment = moment;                                                                          // 1   // 9
                                                                                                 // 2   // 10
///////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                        // 12
}).call(this);                                                                                          // 13
                                                                                                        // 14
                                                                                                        // 15
                                                                                                        // 16
                                                                                                        // 17
                                                                                                        // 18
                                                                                                        // 19
(function () {                                                                                          // 20
                                                                                                        // 21
///////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                               //     // 23
// packages/rzymek:moment-locale-pl/locale.js                                                    //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : polish (pl)                                                                          // 2   // 29
// author : Rafal Hirsz : https://github.com/evoL                                                // 3   // 30
                                                                                                 // 4   // 31
(function (factory) {                                                                            // 5   // 32
    if (typeof define === 'function' && define.amd) {                                            // 6   // 33
        define(['moment'], factory); // AMD                                                      // 7   // 34
    } else if (typeof exports === 'object') {                                                    // 8   // 35
        module.exports = factory(require('../moment')); // Node                                  // 9   // 36
    } else {                                                                                     // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 11  // 38
    }                                                                                            // 12  // 39
}(function (moment) {                                                                            // 13  // 40
    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
                                                                                                 // 16  // 43
    function plural(n) {                                                                         // 17  // 44
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);                        // 18  // 45
    }                                                                                            // 19  // 46
                                                                                                 // 20  // 47
    function translate(number, withoutSuffix, key) {                                             // 21  // 48
        var result = number + ' ';                                                               // 22  // 49
        switch (key) {                                                                           // 23  // 50
        case 'm':                                                                                // 24  // 51
            return withoutSuffix ? 'minuta' : 'minutę';                                          // 25  // 52
        case 'mm':                                                                               // 26  // 53
            return result + (plural(number) ? 'minuty' : 'minut');                               // 27  // 54
        case 'h':                                                                                // 28  // 55
            return withoutSuffix  ? 'godzina'  : 'godzinę';                                      // 29  // 56
        case 'hh':                                                                               // 30  // 57
            return result + (plural(number) ? 'godziny' : 'godzin');                             // 31  // 58
        case 'MM':                                                                               // 32  // 59
            return result + (plural(number) ? 'miesiące' : 'miesięcy');                          // 33  // 60
        case 'yy':                                                                               // 34  // 61
            return result + (plural(number) ? 'lata' : 'lat');                                   // 35  // 62
        }                                                                                        // 36  // 63
    }                                                                                            // 37  // 64
                                                                                                 // 38  // 65
    return moment.defineLocale('pl', {                                                           // 39  // 66
        months : function (momentToFormat, format) {                                             // 40  // 67
            if (/D MMMM/.test(format)) {                                                         // 41  // 68
                return monthsSubjective[momentToFormat.month()];                                 // 42  // 69
            } else {                                                                             // 43  // 70
                return monthsNominative[momentToFormat.month()];                                 // 44  // 71
            }                                                                                    // 45  // 72
        },                                                                                       // 46  // 73
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),              // 47  // 74
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),      // 48  // 75
        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),                                    // 49  // 76
        weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),                                          // 50  // 77
        longDateFormat : {                                                                       // 51  // 78
            LT : 'HH:mm',                                                                        // 52  // 79
            LTS : 'LT:ss',                                                                       // 53  // 80
            L : 'DD.MM.YYYY',                                                                    // 54  // 81
            LL : 'D MMMM YYYY',                                                                  // 55  // 82
            LLL : 'D MMMM YYYY LT',                                                              // 56  // 83
            LLLL : 'dddd, D MMMM YYYY LT'                                                        // 57  // 84
        },                                                                                       // 58  // 85
        calendar : {                                                                             // 59  // 86
            sameDay: '[Dziś o] LT',                                                              // 60  // 87
            nextDay: '[Jutro o] LT',                                                             // 61  // 88
            nextWeek: '[W] dddd [o] LT',                                                         // 62  // 89
            lastDay: '[Wczoraj o] LT',                                                           // 63  // 90
            lastWeek: function () {                                                              // 64  // 91
                switch (this.day()) {                                                            // 65  // 92
                case 0:                                                                          // 66  // 93
                    return '[W zeszłą niedzielę o] LT';                                          // 67  // 94
                case 3:                                                                          // 68  // 95
                    return '[W zeszłą środę o] LT';                                              // 69  // 96
                case 6:                                                                          // 70  // 97
                    return '[W zeszłą sobotę o] LT';                                             // 71  // 98
                default:                                                                         // 72  // 99
                    return '[W zeszły] dddd [o] LT';                                             // 73  // 100
                }                                                                                // 74  // 101
            },                                                                                   // 75  // 102
            sameElse: 'L'                                                                        // 76  // 103
        },                                                                                       // 77  // 104
        relativeTime : {                                                                         // 78  // 105
            future : 'za %s',                                                                    // 79  // 106
            past : '%s temu',                                                                    // 80  // 107
            s : 'kilka sekund',                                                                  // 81  // 108
            m : translate,                                                                       // 82  // 109
            mm : translate,                                                                      // 83  // 110
            h : translate,                                                                       // 84  // 111
            hh : translate,                                                                      // 85  // 112
            d : '1 dzień',                                                                       // 86  // 113
            dd : '%d dni',                                                                       // 87  // 114
            M : 'miesiąc',                                                                       // 88  // 115
            MM : translate,                                                                      // 89  // 116
            y : 'rok',                                                                           // 90  // 117
            yy : translate                                                                       // 91  // 118
        },                                                                                       // 92  // 119
        ordinalParse: /\d{1,2}\./,                                                               // 93  // 120
        ordinal : '%d.',                                                                         // 94  // 121
        week : {                                                                                 // 95  // 122
            dow : 1, // Monday is the first day of the week.                                     // 96  // 123
            doy : 4  // The week that contains Jan 4th is the first week of the year.            // 97  // 124
        }                                                                                        // 98  // 125
    });                                                                                          // 99  // 126
}));                                                                                             // 100
                                                                                                 // 101
///////////////////////////////////////////////////////////////////////////////////////////////////     // 129
                                                                                                        // 130
}).call(this);                                                                                          // 131
                                                                                                        // 132
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-pl'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-pl.js.map
