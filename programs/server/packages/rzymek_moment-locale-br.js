(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek_moment-locale-br/packages/rzymek_moment-locale-br.js                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {                                                                                                       // 1
                                                                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                            //     // 4
// packages/rzymek:moment-locale-br/server.js                                                                 //     // 5
//                                                                                                            //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                              //     // 8
global.moment = moment;                                                                                       // 1   // 9
                                                                                                              // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                                     // 12
}).call(this);                                                                                                       // 13
                                                                                                                     // 14
                                                                                                                     // 15
                                                                                                                     // 16
                                                                                                                     // 17
                                                                                                                     // 18
                                                                                                                     // 19
(function () {                                                                                                       // 20
                                                                                                                     // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                            //     // 23
// packages/rzymek:moment-locale-br/locale.js                                                                 //     // 24
//                                                                                                            //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                              //     // 27
// moment.js locale configuration                                                                             // 1   // 28
// locale : breton (br)                                                                                       // 2   // 29
// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou                                           // 3   // 30
                                                                                                              // 4   // 31
(function (factory) {                                                                                         // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                         // 6   // 33
        define(['moment'], factory); // AMD                                                                   // 7   // 34
    } else if (typeof exports === 'object') {                                                                 // 8   // 35
        module.exports = factory(require('../moment')); // Node                                               // 9   // 36
    } else {                                                                                                  // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global              // 11  // 38
    }                                                                                                         // 12  // 39
}(function (moment) {                                                                                         // 13  // 40
    function relativeTimeWithMutation(number, withoutSuffix, key) {                                           // 14  // 41
        var format = {                                                                                        // 15  // 42
            'mm': 'munutenn',                                                                                 // 16  // 43
            'MM': 'miz',                                                                                      // 17  // 44
            'dd': 'devezh'                                                                                    // 18  // 45
        };                                                                                                    // 19  // 46
        return number + ' ' + mutation(format[key], number);                                                  // 20  // 47
    }                                                                                                         // 21  // 48
                                                                                                              // 22  // 49
    function specialMutationForYears(number) {                                                                // 23  // 50
        switch (lastNumber(number)) {                                                                         // 24  // 51
        case 1:                                                                                               // 25  // 52
        case 3:                                                                                               // 26  // 53
        case 4:                                                                                               // 27  // 54
        case 5:                                                                                               // 28  // 55
        case 9:                                                                                               // 29  // 56
            return number + ' bloaz';                                                                         // 30  // 57
        default:                                                                                              // 31  // 58
            return number + ' vloaz';                                                                         // 32  // 59
        }                                                                                                     // 33  // 60
    }                                                                                                         // 34  // 61
                                                                                                              // 35  // 62
    function lastNumber(number) {                                                                             // 36  // 63
        if (number > 9) {                                                                                     // 37  // 64
            return lastNumber(number % 10);                                                                   // 38  // 65
        }                                                                                                     // 39  // 66
        return number;                                                                                        // 40  // 67
    }                                                                                                         // 41  // 68
                                                                                                              // 42  // 69
    function mutation(text, number) {                                                                         // 43  // 70
        if (number === 2) {                                                                                   // 44  // 71
            return softMutation(text);                                                                        // 45  // 72
        }                                                                                                     // 46  // 73
        return text;                                                                                          // 47  // 74
    }                                                                                                         // 48  // 75
                                                                                                              // 49  // 76
    function softMutation(text) {                                                                             // 50  // 77
        var mutationTable = {                                                                                 // 51  // 78
            'm': 'v',                                                                                         // 52  // 79
            'b': 'v',                                                                                         // 53  // 80
            'd': 'z'                                                                                          // 54  // 81
        };                                                                                                    // 55  // 82
        if (mutationTable[text.charAt(0)] === undefined) {                                                    // 56  // 83
            return text;                                                                                      // 57  // 84
        }                                                                                                     // 58  // 85
        return mutationTable[text.charAt(0)] + text.substring(1);                                             // 59  // 86
    }                                                                                                         // 60  // 87
                                                                                                              // 61  // 88
    return moment.defineLocale('br', {                                                                        // 62  // 89
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'), // 63  // 90
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),                         // 64  // 91
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),                                  // 65  // 92
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),                                             // 66  // 93
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),                                                     // 67  // 94
        longDateFormat : {                                                                                    // 68  // 95
            LT : 'h[e]mm A',                                                                                  // 69  // 96
            LTS : 'h[e]mm:ss A',                                                                              // 70  // 97
            L : 'DD/MM/YYYY',                                                                                 // 71  // 98
            LL : 'D [a viz] MMMM YYYY',                                                                       // 72  // 99
            LLL : 'D [a viz] MMMM YYYY LT',                                                                   // 73  // 100
            LLLL : 'dddd, D [a viz] MMMM YYYY LT'                                                             // 74  // 101
        },                                                                                                    // 75  // 102
        calendar : {                                                                                          // 76  // 103
            sameDay : '[Hiziv da] LT',                                                                        // 77  // 104
            nextDay : '[Warc\'hoazh da] LT',                                                                  // 78  // 105
            nextWeek : 'dddd [da] LT',                                                                        // 79  // 106
            lastDay : '[Dec\'h da] LT',                                                                       // 80  // 107
            lastWeek : 'dddd [paset da] LT',                                                                  // 81  // 108
            sameElse : 'L'                                                                                    // 82  // 109
        },                                                                                                    // 83  // 110
        relativeTime : {                                                                                      // 84  // 111
            future : 'a-benn %s',                                                                             // 85  // 112
            past : '%s \'zo',                                                                                 // 86  // 113
            s : 'un nebeud segondennoù',                                                                      // 87  // 114
            m : 'ur vunutenn',                                                                                // 88  // 115
            mm : relativeTimeWithMutation,                                                                    // 89  // 116
            h : 'un eur',                                                                                     // 90  // 117
            hh : '%d eur',                                                                                    // 91  // 118
            d : 'un devezh',                                                                                  // 92  // 119
            dd : relativeTimeWithMutation,                                                                    // 93  // 120
            M : 'ur miz',                                                                                     // 94  // 121
            MM : relativeTimeWithMutation,                                                                    // 95  // 122
            y : 'ur bloaz',                                                                                   // 96  // 123
            yy : specialMutationForYears                                                                      // 97  // 124
        },                                                                                                    // 98  // 125
        ordinalParse: /\d{1,2}(añ|vet)/,                                                                      // 99  // 126
        ordinal : function (number) {                                                                         // 100
            var output = (number === 1) ? 'añ' : 'vet';                                                       // 101
            return number + output;                                                                           // 102
        },                                                                                                    // 103
        week : {                                                                                              // 104
            dow : 1, // Monday is the first day of the week.                                                  // 105
            doy : 4  // The week that contains Jan 4th is the first week of the year.                         // 106
        }                                                                                                     // 107
    });                                                                                                       // 108
}));                                                                                                          // 109
                                                                                                              // 110
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 138
                                                                                                                     // 139
}).call(this);                                                                                                       // 140
                                                                                                                     // 141
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-br'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-br.js.map
