(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/rzymek_moment-locale-ka/packages/rzymek_moment-locale-ka.js                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                    //     // 4
// packages/rzymek:moment-locale-ka/server.js                                                         //     // 5
//                                                                                                    //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                      //     // 8
global.moment = moment;                                                                               // 1   // 9
                                                                                                      // 2   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                             // 12
}).call(this);                                                                                               // 13
                                                                                                             // 14
                                                                                                             // 15
                                                                                                             // 16
                                                                                                             // 17
                                                                                                             // 18
                                                                                                             // 19
(function () {                                                                                               // 20
                                                                                                             // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                                    //     // 23
// packages/rzymek:moment-locale-ka/locale.js                                                         //     // 24
//                                                                                                    //     // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                                      //     // 27
// moment.js locale configuration                                                                     // 1   // 28
// locale : Georgian (ka)                                                                             // 2   // 29
// author : Irakli Janiashvili : https://github.com/irakli-janiashvili                                // 3   // 30
                                                                                                      // 4   // 31
(function (factory) {                                                                                 // 5   // 32
    if (typeof define === 'function' && define.amd) {                                                 // 6   // 33
        define(['moment'], factory); // AMD                                                           // 7   // 34
    } else if (typeof exports === 'object') {                                                         // 8   // 35
        module.exports = factory(require('../moment')); // Node                                       // 9   // 36
    } else {                                                                                          // 10  // 37
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global      // 11  // 38
    }                                                                                                 // 12  // 39
}(function (moment) {                                                                                 // 13  // 40
    function monthsCaseReplace(m, format) {                                                           // 14  // 41
        var months = {                                                                                // 15  // 42
            'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },                                                                                            // 18  // 45
                                                                                                      // 19  // 46
        nounCase = (/D[oD] *MMMM?/).test(format) ?                                                    // 20  // 47
            'accusative' :                                                                            // 21  // 48
            'nominative';                                                                             // 22  // 49
                                                                                                      // 23  // 50
        return months[nounCase][m.month()];                                                           // 24  // 51
    }                                                                                                 // 25  // 52
                                                                                                      // 26  // 53
    function weekdaysCaseReplace(m, format) {                                                         // 27  // 54
        var weekdays = {                                                                              // 28  // 55
            'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'), // 29  // 56
            'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_') // 30  // 57
        },                                                                                            // 31  // 58
                                                                                                      // 32  // 59
        nounCase = (/(წინა|შემდეგ)/).test(format) ?                                                   // 33  // 60
            'accusative' :                                                                            // 34  // 61
            'nominative';                                                                             // 35  // 62
                                                                                                      // 36  // 63
        return weekdays[nounCase][m.day()];                                                           // 37  // 64
    }                                                                                                 // 38  // 65
                                                                                                      // 39  // 66
    return moment.defineLocale('ka', {                                                                // 40  // 67
        months : monthsCaseReplace,                                                                   // 41  // 68
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),                   // 42  // 69
        weekdays : weekdaysCaseReplace,                                                               // 43  // 70
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),                                     // 44  // 71
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),                                              // 45  // 72
        longDateFormat : {                                                                            // 46  // 73
            LT : 'h:mm A',                                                                            // 47  // 74
            LTS : 'h:mm:ss A',                                                                        // 48  // 75
            L : 'DD/MM/YYYY',                                                                         // 49  // 76
            LL : 'D MMMM YYYY',                                                                       // 50  // 77
            LLL : 'D MMMM YYYY LT',                                                                   // 51  // 78
            LLLL : 'dddd, D MMMM YYYY LT'                                                             // 52  // 79
        },                                                                                            // 53  // 80
        calendar : {                                                                                  // 54  // 81
            sameDay : '[დღეს] LT[-ზე]',                                                               // 55  // 82
            nextDay : '[ხვალ] LT[-ზე]',                                                               // 56  // 83
            lastDay : '[გუშინ] LT[-ზე]',                                                              // 57  // 84
            nextWeek : '[შემდეგ] dddd LT[-ზე]',                                                       // 58  // 85
            lastWeek : '[წინა] dddd LT-ზე',                                                           // 59  // 86
            sameElse : 'L'                                                                            // 60  // 87
        },                                                                                            // 61  // 88
        relativeTime : {                                                                              // 62  // 89
            future : function (s) {                                                                   // 63  // 90
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?                                           // 64  // 91
                    s.replace(/ი$/, 'ში') :                                                           // 65  // 92
                    s + 'ში';                                                                         // 66  // 93
            },                                                                                        // 67  // 94
            past : function (s) {                                                                     // 68  // 95
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {                                          // 69  // 96
                    return s.replace(/(ი|ე)$/, 'ის წინ');                                             // 70  // 97
                }                                                                                     // 71  // 98
                if ((/წელი/).test(s)) {                                                               // 72  // 99
                    return s.replace(/წელი$/, 'წლის წინ');                                            // 73  // 100
                }                                                                                     // 74  // 101
            },                                                                                        // 75  // 102
            s : 'რამდენიმე წამი',                                                                     // 76  // 103
            m : 'წუთი',                                                                               // 77  // 104
            mm : '%d წუთი',                                                                           // 78  // 105
            h : 'საათი',                                                                              // 79  // 106
            hh : '%d საათი',                                                                          // 80  // 107
            d : 'დღე',                                                                                // 81  // 108
            dd : '%d დღე',                                                                            // 82  // 109
            M : 'თვე',                                                                                // 83  // 110
            MM : '%d თვე',                                                                            // 84  // 111
            y : 'წელი',                                                                               // 85  // 112
            yy : '%d წელი'                                                                            // 86  // 113
        },                                                                                            // 87  // 114
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,                                                  // 88  // 115
        ordinal : function (number) {                                                                 // 89  // 116
            if (number === 0) {                                                                       // 90  // 117
                return number;                                                                        // 91  // 118
            }                                                                                         // 92  // 119
                                                                                                      // 93  // 120
            if (number === 1) {                                                                       // 94  // 121
                return number + '-ლი';                                                                // 95  // 122
            }                                                                                         // 96  // 123
                                                                                                      // 97  // 124
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {    // 98  // 125
                return 'მე-' + number;                                                                // 99  // 126
            }                                                                                         // 100
                                                                                                      // 101
            return number + '-ე';                                                                     // 102
        },                                                                                            // 103
        week : {                                                                                      // 104
            dow : 1,                                                                                  // 105
            doy : 7                                                                                   // 106
        }                                                                                             // 107
    });                                                                                               // 108
}));                                                                                                  // 109
                                                                                                      // 110
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 138
                                                                                                             // 139
}).call(this);                                                                                               // 140
                                                                                                             // 141
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-ka'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-ka.js.map
