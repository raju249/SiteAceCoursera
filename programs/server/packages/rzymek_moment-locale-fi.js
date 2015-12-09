(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rzymek_moment-locale-fi/packages/rzymek_moment-locale-fi.js                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
                                                                                                                 // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                        //     // 4
// packages/rzymek:moment-locale-fi/server.js                                                             //     // 5
//                                                                                                        //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                          //     // 8
global.moment = moment;                                                                                   // 1   // 9
                                                                                                          // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                 // 12
}).call(this);                                                                                                   // 13
                                                                                                                 // 14
                                                                                                                 // 15
                                                                                                                 // 16
                                                                                                                 // 17
                                                                                                                 // 18
                                                                                                                 // 19
(function () {                                                                                                   // 20
                                                                                                                 // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                        //     // 23
// packages/rzymek:moment-locale-fi/locale.js                                                             //     // 24
//                                                                                                        //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                          //     // 27
// moment.js locale configuration                                                                         // 1   // 28
// locale : finnish (fi)                                                                                  // 2   // 29
// author : Tarmo Aidantausta : https://github.com/bleadof                                                // 3   // 30
                                                                                                          // 4   // 31
(function (factory) {                                                                                     // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                     // 6   // 33
        define(['moment'], factory); // AMD                                                               // 7   // 34
    } else if (typeof exports === 'object') {                                                             // 8   // 35
        module.exports = factory(require('../moment')); // Node                                           // 9   // 36
    } else {                                                                                              // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global          // 11  // 38
    }                                                                                                     // 12  // 39
}(function (moment) {                                                                                     // 13  // 40
    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), // 14  // 41
        numbersFuture = [                                                                                 // 15  // 42
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',                           // 16  // 43
            numbersPast[7], numbersPast[8], numbersPast[9]                                                // 17  // 44
        ];                                                                                                // 18  // 45
                                                                                                          // 19  // 46
    function translate(number, withoutSuffix, key, isFuture) {                                            // 20  // 47
        var result = '';                                                                                  // 21  // 48
        switch (key) {                                                                                    // 22  // 49
        case 's':                                                                                         // 23  // 50
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';                                    // 24  // 51
        case 'm':                                                                                         // 25  // 52
            return isFuture ? 'minuutin' : 'minuutti';                                                    // 26  // 53
        case 'mm':                                                                                        // 27  // 54
            result = isFuture ? 'minuutin' : 'minuuttia';                                                 // 28  // 55
            break;                                                                                        // 29  // 56
        case 'h':                                                                                         // 30  // 57
            return isFuture ? 'tunnin' : 'tunti';                                                         // 31  // 58
        case 'hh':                                                                                        // 32  // 59
            result = isFuture ? 'tunnin' : 'tuntia';                                                      // 33  // 60
            break;                                                                                        // 34  // 61
        case 'd':                                                                                         // 35  // 62
            return isFuture ? 'päivän' : 'päivä';                                                         // 36  // 63
        case 'dd':                                                                                        // 37  // 64
            result = isFuture ? 'päivän' : 'päivää';                                                      // 38  // 65
            break;                                                                                        // 39  // 66
        case 'M':                                                                                         // 40  // 67
            return isFuture ? 'kuukauden' : 'kuukausi';                                                   // 41  // 68
        case 'MM':                                                                                        // 42  // 69
            result = isFuture ? 'kuukauden' : 'kuukautta';                                                // 43  // 70
            break;                                                                                        // 44  // 71
        case 'y':                                                                                         // 45  // 72
            return isFuture ? 'vuoden' : 'vuosi';                                                         // 46  // 73
        case 'yy':                                                                                        // 47  // 74
            result = isFuture ? 'vuoden' : 'vuotta';                                                      // 48  // 75
            break;                                                                                        // 49  // 76
        }                                                                                                 // 50  // 77
        result = verbalNumber(number, isFuture) + ' ' + result;                                           // 51  // 78
        return result;                                                                                    // 52  // 79
    }                                                                                                     // 53  // 80
                                                                                                          // 54  // 81
    function verbalNumber(number, isFuture) {                                                             // 55  // 82
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;           // 56  // 83
    }                                                                                                     // 57  // 84
                                                                                                          // 58  // 85
    return moment.defineLocale('fi', {                                                                    // 59  // 86
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),  // 61  // 88
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),       // 62  // 89
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),                                                // 63  // 90
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),                                                  // 64  // 91
        longDateFormat : {                                                                                // 65  // 92
            LT : 'HH.mm',                                                                                 // 66  // 93
            LTS : 'HH.mm.ss',                                                                             // 67  // 94
            L : 'DD.MM.YYYY',                                                                             // 68  // 95
            LL : 'Do MMMM[ta] YYYY',                                                                      // 69  // 96
            LLL : 'Do MMMM[ta] YYYY, [klo] LT',                                                           // 70  // 97
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] LT',                                                    // 71  // 98
            l : 'D.M.YYYY',                                                                               // 72  // 99
            ll : 'Do MMM YYYY',                                                                           // 73  // 100
            lll : 'Do MMM YYYY, [klo] LT',                                                                // 74  // 101
            llll : 'ddd, Do MMM YYYY, [klo] LT'                                                           // 75  // 102
        },                                                                                                // 76  // 103
        calendar : {                                                                                      // 77  // 104
            sameDay : '[tänään] [klo] LT',                                                                // 78  // 105
            nextDay : '[huomenna] [klo] LT',                                                              // 79  // 106
            nextWeek : 'dddd [klo] LT',                                                                   // 80  // 107
            lastDay : '[eilen] [klo] LT',                                                                 // 81  // 108
            lastWeek : '[viime] dddd[na] [klo] LT',                                                       // 82  // 109
            sameElse : 'L'                                                                                // 83  // 110
        },                                                                                                // 84  // 111
        relativeTime : {                                                                                  // 85  // 112
            future : '%s päästä',                                                                         // 86  // 113
            past : '%s sitten',                                                                           // 87  // 114
            s : translate,                                                                                // 88  // 115
            m : translate,                                                                                // 89  // 116
            mm : translate,                                                                               // 90  // 117
            h : translate,                                                                                // 91  // 118
            hh : translate,                                                                               // 92  // 119
            d : translate,                                                                                // 93  // 120
            dd : translate,                                                                               // 94  // 121
            M : translate,                                                                                // 95  // 122
            MM : translate,                                                                               // 96  // 123
            y : translate,                                                                                // 97  // 124
            yy : translate                                                                                // 98  // 125
        },                                                                                                // 99  // 126
        ordinalParse: /\d{1,2}\./,                                                                        // 100
        ordinal : '%d.',                                                                                  // 101
        week : {                                                                                          // 102
            dow : 1, // Monday is the first day of the week.                                              // 103
            doy : 4  // The week that contains Jan 4th is the first week of the year.                     // 104
        }                                                                                                 // 105
    });                                                                                                   // 106
}));                                                                                                      // 107
                                                                                                          // 108
////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 136
                                                                                                                 // 137
}).call(this);                                                                                                   // 138
                                                                                                                 // 139
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-fi'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-fi.js.map
