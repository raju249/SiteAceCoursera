(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rzymek_moment-locale-hr/packages/rzymek_moment-locale-hr.js                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/rzymek:moment-locale-hr/server.js                                                    //     // 5
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
// packages/rzymek:moment-locale-hr/locale.js                                                    //     // 24
//                                                                                               //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                 //     // 27
// moment.js locale configuration                                                                // 1   // 28
// locale : hrvatski (hr)                                                                        // 2   // 29
// author : Bojan Marković : https://github.com/bmarkovic                                        // 3   // 30
                                                                                                 // 4   // 31
// based on (sl) translation by Robert Sedovšek                                                  // 5   // 32
                                                                                                 // 6   // 33
(function (factory) {                                                                            // 7   // 34
    if (typeof define === 'function' && define.amd) {                                            // 8   // 35
        define(['moment'], factory); // AMD                                                      // 9   // 36
    } else if (typeof exports === 'object') {                                                    // 10  // 37
        module.exports = factory(require('../moment')); // Node                                  // 11  // 38
    } else {                                                                                     // 12  // 39
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global // 13  // 40
    }                                                                                            // 14  // 41
}(function (moment) {                                                                            // 15  // 42
    function translate(number, withoutSuffix, key) {                                             // 16  // 43
        var result = number + ' ';                                                               // 17  // 44
        switch (key) {                                                                           // 18  // 45
        case 'm':                                                                                // 19  // 46
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';                              // 20  // 47
        case 'mm':                                                                               // 21  // 48
            if (number === 1) {                                                                  // 22  // 49
                result += 'minuta';                                                              // 23  // 50
            } else if (number === 2 || number === 3 || number === 4) {                           // 24  // 51
                result += 'minute';                                                              // 25  // 52
            } else {                                                                             // 26  // 53
                result += 'minuta';                                                              // 27  // 54
            }                                                                                    // 28  // 55
            return result;                                                                       // 29  // 56
        case 'h':                                                                                // 30  // 57
            return withoutSuffix ? 'jedan sat' : 'jednog sata';                                  // 31  // 58
        case 'hh':                                                                               // 32  // 59
            if (number === 1) {                                                                  // 33  // 60
                result += 'sat';                                                                 // 34  // 61
            } else if (number === 2 || number === 3 || number === 4) {                           // 35  // 62
                result += 'sata';                                                                // 36  // 63
            } else {                                                                             // 37  // 64
                result += 'sati';                                                                // 38  // 65
            }                                                                                    // 39  // 66
            return result;                                                                       // 40  // 67
        case 'dd':                                                                               // 41  // 68
            if (number === 1) {                                                                  // 42  // 69
                result += 'dan';                                                                 // 43  // 70
            } else {                                                                             // 44  // 71
                result += 'dana';                                                                // 45  // 72
            }                                                                                    // 46  // 73
            return result;                                                                       // 47  // 74
        case 'MM':                                                                               // 48  // 75
            if (number === 1) {                                                                  // 49  // 76
                result += 'mjesec';                                                              // 50  // 77
            } else if (number === 2 || number === 3 || number === 4) {                           // 51  // 78
                result += 'mjeseca';                                                             // 52  // 79
            } else {                                                                             // 53  // 80
                result += 'mjeseci';                                                             // 54  // 81
            }                                                                                    // 55  // 82
            return result;                                                                       // 56  // 83
        case 'yy':                                                                               // 57  // 84
            if (number === 1) {                                                                  // 58  // 85
                result += 'godina';                                                              // 59  // 86
            } else if (number === 2 || number === 3 || number === 4) {                           // 60  // 87
                result += 'godine';                                                              // 61  // 88
            } else {                                                                             // 62  // 89
                result += 'godina';                                                              // 63  // 90
            }                                                                                    // 64  // 91
            return result;                                                                       // 65  // 92
        }                                                                                        // 66  // 93
    }                                                                                            // 67  // 94
                                                                                                 // 68  // 95
    return moment.defineLocale('hr', {                                                           // 69  // 96
        months : 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
        monthsShort : 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),  // 71  // 98
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),       // 72  // 99
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),                         // 73  // 100
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),                                         // 74  // 101
        longDateFormat : {                                                                       // 75  // 102
            LT : 'H:mm',                                                                         // 76  // 103
            LTS : 'LT:ss',                                                                       // 77  // 104
            L : 'DD. MM. YYYY',                                                                  // 78  // 105
            LL : 'D. MMMM YYYY',                                                                 // 79  // 106
            LLL : 'D. MMMM YYYY LT',                                                             // 80  // 107
            LLLL : 'dddd, D. MMMM YYYY LT'                                                       // 81  // 108
        },                                                                                       // 82  // 109
        calendar : {                                                                             // 83  // 110
            sameDay  : '[danas u] LT',                                                           // 84  // 111
            nextDay  : '[sutra u] LT',                                                           // 85  // 112
                                                                                                 // 86  // 113
            nextWeek : function () {                                                             // 87  // 114
                switch (this.day()) {                                                            // 88  // 115
                case 0:                                                                          // 89  // 116
                    return '[u] [nedjelju] [u] LT';                                              // 90  // 117
                case 3:                                                                          // 91  // 118
                    return '[u] [srijedu] [u] LT';                                               // 92  // 119
                case 6:                                                                          // 93  // 120
                    return '[u] [subotu] [u] LT';                                                // 94  // 121
                case 1:                                                                          // 95  // 122
                case 2:                                                                          // 96  // 123
                case 4:                                                                          // 97  // 124
                case 5:                                                                          // 98  // 125
                    return '[u] dddd [u] LT';                                                    // 99  // 126
                }                                                                                // 100
            },                                                                                   // 101
            lastDay  : '[jučer u] LT',                                                           // 102
            lastWeek : function () {                                                             // 103
                switch (this.day()) {                                                            // 104
                case 0:                                                                          // 105
                case 3:                                                                          // 106
                    return '[prošlu] dddd [u] LT';                                               // 107
                case 6:                                                                          // 108
                    return '[prošle] [subote] [u] LT';                                           // 109
                case 1:                                                                          // 110
                case 2:                                                                          // 111
                case 4:                                                                          // 112
                case 5:                                                                          // 113
                    return '[prošli] dddd [u] LT';                                               // 114
                }                                                                                // 115
            },                                                                                   // 116
            sameElse : 'L'                                                                       // 117
        },                                                                                       // 118
        relativeTime : {                                                                         // 119
            future : 'za %s',                                                                    // 120
            past   : 'prije %s',                                                                 // 121
            s      : 'par sekundi',                                                              // 122
            m      : translate,                                                                  // 123
            mm     : translate,                                                                  // 124
            h      : translate,                                                                  // 125
            hh     : translate,                                                                  // 126
            d      : 'dan',                                                                      // 127
            dd     : translate,                                                                  // 128
            M      : 'mjesec',                                                                   // 129
            MM     : translate,                                                                  // 130
            y      : 'godinu',                                                                   // 131
            yy     : translate                                                                   // 132
        },                                                                                       // 133
        ordinalParse: /\d{1,2}\./,                                                               // 134
        ordinal : '%d.',                                                                         // 135
        week : {                                                                                 // 136
            dow : 1, // Monday is the first day of the week.                                     // 137
            doy : 7  // The week that contains Jan 1st is the first week of the year.            // 138
        }                                                                                        // 139
    });                                                                                          // 140
}));                                                                                             // 141
                                                                                                 // 142
///////////////////////////////////////////////////////////////////////////////////////////////////     // 170
                                                                                                        // 171
}).call(this);                                                                                          // 172
                                                                                                        // 173
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-hr'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-hr.js.map
