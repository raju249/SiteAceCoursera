(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rzymek_moment-locale-uz/packages/rzymek_moment-locale-uz.js                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {                                                                                                       // 1
                                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                             //    // 4
// packages/rzymek:moment-locale-uz/server.js                                                                  //    // 5
//                                                                                                             //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                               //    // 8
global.moment = moment;                                                                                        // 1  // 9
                                                                                                               // 2  // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                             //    // 23
// packages/rzymek:moment-locale-uz/locale.js                                                                  //    // 24
//                                                                                                             //    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                               //    // 27
// moment.js locale configuration                                                                              // 1  // 28
// locale : uzbek (uz)                                                                                         // 2  // 29
// author : Sardor Muminov : https://github.com/muminoff                                                       // 3  // 30
                                                                                                               // 4  // 31
(function (factory) {                                                                                          // 5  // 32
    if (typeof define === 'function' && define.amd) {                                                          // 6  // 33
        define(['moment'], factory); // AMD                                                                    // 7  // 34
    } else if (typeof exports === 'object') {                                                                  // 8  // 35
        module.exports = factory(require('../moment')); // Node                                                // 9  // 36
    } else {                                                                                                   // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global               // 11
    }                                                                                                          // 12
}(function (moment) {                                                                                          // 13
    return moment.defineLocale('uz', {                                                                         // 14
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'), // 15
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),                            // 16
        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),                          // 17
        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),                                              // 18
        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),                                                       // 19
        longDateFormat : {                                                                                     // 20
            LT : 'HH:mm',                                                                                      // 21
            LTS : 'LT:ss',                                                                                     // 22
            L : 'DD/MM/YYYY',                                                                                  // 23
            LL : 'D MMMM YYYY',                                                                                // 24
            LLL : 'D MMMM YYYY LT',                                                                            // 25
            LLLL : 'D MMMM YYYY, dddd LT'                                                                      // 26
        },                                                                                                     // 27
        calendar : {                                                                                           // 28
            sameDay : '[Бугун соат] LT [да]',                                                                  // 29
            nextDay : '[Эртага] LT [да]',                                                                      // 30
            nextWeek : 'dddd [куни соат] LT [да]',                                                             // 31
            lastDay : '[Кеча соат] LT [да]',                                                                   // 32
            lastWeek : '[Утган] dddd [куни соат] LT [да]',                                                     // 33
            sameElse : 'L'                                                                                     // 34
        },                                                                                                     // 35
        relativeTime : {                                                                                       // 36
            future : 'Якин %s ичида',                                                                          // 37
            past : 'Бир неча %s олдин',                                                                        // 38
            s : 'фурсат',                                                                                      // 39
            m : 'бир дакика',                                                                                  // 40
            mm : '%d дакика',                                                                                  // 41
            h : 'бир соат',                                                                                    // 42
            hh : '%d соат',                                                                                    // 43
            d : 'бир кун',                                                                                     // 44
            dd : '%d кун',                                                                                     // 45
            M : 'бир ой',                                                                                      // 46
            MM : '%d ой',                                                                                      // 47
            y : 'бир йил',                                                                                     // 48
            yy : '%d йил'                                                                                      // 49
        },                                                                                                     // 50
        week : {                                                                                               // 51
            dow : 1, // Monday is the first day of the week.                                                   // 52
            doy : 7  // The week that contains Jan 4th is the first week of the year.                          // 53
        }                                                                                                      // 54
    });                                                                                                        // 55
}));                                                                                                           // 56
                                                                                                               // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 85
                                                                                                                     // 86
}).call(this);                                                                                                       // 87
                                                                                                                     // 88
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-uz'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-uz.js.map
