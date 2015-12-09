(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/rzymek_moment-locale-cv/packages/rzymek_moment-locale-cv.js                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                 //    // 4
// packages/rzymek:moment-locale-cv/server.js                                                      //    // 5
//                                                                                                 //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                   //    // 8
global.moment = moment;                                                                            // 1  // 9
                                                                                                   // 2  // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 11
                                                                                                         // 12
}).call(this);                                                                                           // 13
                                                                                                         // 14
                                                                                                         // 15
                                                                                                         // 16
                                                                                                         // 17
                                                                                                         // 18
                                                                                                         // 19
(function () {                                                                                           // 20
                                                                                                         // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
//                                                                                                 //    // 23
// packages/rzymek:moment-locale-cv/locale.js                                                      //    // 24
//                                                                                                 //    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                                   //    // 27
// moment.js locale configuration                                                                  // 1  // 28
// locale : chuvash (cv)                                                                           // 2  // 29
// author : Anatoly Mironov : https://github.com/mirontoli                                         // 3  // 30
                                                                                                   // 4  // 31
(function (factory) {                                                                              // 5  // 32
    if (typeof define === 'function' && define.amd) {                                              // 6  // 33
        define(['moment'], factory); // AMD                                                        // 7  // 34
    } else if (typeof exports === 'object') {                                                      // 8  // 35
        module.exports = factory(require('../moment')); // Node                                    // 9  // 36
    } else {                                                                                       // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global   // 11
    }                                                                                              // 12
}(function (moment) {                                                                              // 13
    return moment.defineLocale('cv', {                                                             // 14
        months : 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),       // 15
        monthsShort : 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),                 // 16
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'), // 17
        weekdaysShort : 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),                                   // 18
        weekdaysMin : 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),                                           // 19
        longDateFormat : {                                                                         // 20
            LT : 'HH:mm',                                                                          // 21
            LTS : 'LT:ss',                                                                         // 22
            L : 'DD-MM-YYYY',                                                                      // 23
            LL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',                                            // 24
            LLL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',                                       // 25
            LLLL : 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'                                 // 26
        },                                                                                         // 27
        calendar : {                                                                               // 28
            sameDay: '[Паян] LT [сехетре]',                                                        // 29
            nextDay: '[Ыран] LT [сехетре]',                                                        // 30
            lastDay: '[Ĕнер] LT [сехетре]',                                                        // 31
            nextWeek: '[Çитес] dddd LT [сехетре]',                                                 // 32
            lastWeek: '[Иртнĕ] dddd LT [сехетре]',                                                 // 33
            sameElse: 'L'                                                                          // 34
        },                                                                                         // 35
        relativeTime : {                                                                           // 36
            future : function (output) {                                                           // 37
                var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран'; // 38
                return output + affix;                                                             // 39
            },                                                                                     // 40
            past : '%s каялла',                                                                    // 41
            s : 'пĕр-ик çеккунт',                                                                  // 42
            m : 'пĕр минут',                                                                       // 43
            mm : '%d минут',                                                                       // 44
            h : 'пĕр сехет',                                                                       // 45
            hh : '%d сехет',                                                                       // 46
            d : 'пĕр кун',                                                                         // 47
            dd : '%d кун',                                                                         // 48
            M : 'пĕр уйăх',                                                                        // 49
            MM : '%d уйăх',                                                                        // 50
            y : 'пĕр çул',                                                                         // 51
            yy : '%d çул'                                                                          // 52
        },                                                                                         // 53
        ordinalParse: /\d{1,2}-мĕш/,                                                               // 54
        ordinal : '%d-мĕш',                                                                        // 55
        week : {                                                                                   // 56
            dow : 1, // Monday is the first day of the week.                                       // 57
            doy : 7  // The week that contains Jan 1st is the first week of the year.              // 58
        }                                                                                          // 59
    });                                                                                            // 60
}));                                                                                               // 61
                                                                                                   // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////    // 90
                                                                                                         // 91
}).call(this);                                                                                           // 92
                                                                                                         // 93
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-cv'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-cv.js.map
