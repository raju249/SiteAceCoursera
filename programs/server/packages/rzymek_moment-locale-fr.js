(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rzymek_moment-locale-fr/packages/rzymek_moment-locale-fr.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-fr/server.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
global.moment = moment;                                                                                             // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 12
}).call(this);                                                                                                         // 13
                                                                                                                       // 14
                                                                                                                       // 15
                                                                                                                       // 16
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       // 19
(function () {                                                                                                         // 20
                                                                                                                       // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rzymek:moment-locale-fr/locale.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// moment.js locale configuration                                                                                   // 1
// locale : french (fr)                                                                                             // 2
// author : John Fischer : https://github.com/jfroffice                                                             // 3
                                                                                                                    // 4
(function (factory) {                                                                                               // 5
    if (typeof define === 'function' && define.amd) {                                                               // 6
        define(['moment'], factory); // AMD                                                                         // 7
    } else if (typeof exports === 'object') {                                                                       // 8
        module.exports = factory(require('../moment')); // Node                                                     // 9
    } else {                                                                                                        // 10
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global                    // 11
    }                                                                                                               // 12
}(function (moment) {                                                                                               // 13
    return moment.defineLocale('fr', {                                                                              // 14
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'), // 15
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),                  // 16
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),                                // 17
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),                                            // 18
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),                                                            // 19
        longDateFormat : {                                                                                          // 20
            LT : 'HH:mm',                                                                                           // 21
            LTS : 'LT:ss',                                                                                          // 22
            L : 'DD/MM/YYYY',                                                                                       // 23
            LL : 'D MMMM YYYY',                                                                                     // 24
            LLL : 'D MMMM YYYY LT',                                                                                 // 25
            LLLL : 'dddd D MMMM YYYY LT'                                                                            // 26
        },                                                                                                          // 27
        calendar : {                                                                                                // 28
            sameDay: '[Aujourd\'hui à] LT',                                                                         // 29
            nextDay: '[Demain à] LT',                                                                               // 30
            nextWeek: 'dddd [à] LT',                                                                                // 31
            lastDay: '[Hier à] LT',                                                                                 // 32
            lastWeek: 'dddd [dernier à] LT',                                                                        // 33
            sameElse: 'L'                                                                                           // 34
        },                                                                                                          // 35
        relativeTime : {                                                                                            // 36
            future : 'dans %s',                                                                                     // 37
            past : 'il y a %s',                                                                                     // 38
            s : 'quelques secondes',                                                                                // 39
            m : 'une minute',                                                                                       // 40
            mm : '%d minutes',                                                                                      // 41
            h : 'une heure',                                                                                        // 42
            hh : '%d heures',                                                                                       // 43
            d : 'un jour',                                                                                          // 44
            dd : '%d jours',                                                                                        // 45
            M : 'un mois',                                                                                          // 46
            MM : '%d mois',                                                                                         // 47
            y : 'un an',                                                                                            // 48
            yy : '%d ans'                                                                                           // 49
        },                                                                                                          // 50
        ordinalParse: /\d{1,2}(er|)/,                                                                               // 51
        ordinal : function (number) {                                                                               // 52
            return number + (number === 1 ? 'er' : '');                                                             // 53
        },                                                                                                          // 54
        week : {                                                                                                    // 55
            dow : 1, // Monday is the first day of the week.                                                        // 56
            doy : 4  // The week that contains Jan 4th is the first week of the year.                               // 57
        }                                                                                                           // 58
    });                                                                                                             // 59
}));                                                                                                                // 60
                                                                                                                    // 61
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 90
}).call(this);                                                                                                         // 91
                                                                                                                       // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rzymek:moment-locale-fr'] = {};

})();

//# sourceMappingURL=rzymek_moment-locale-fr.js.map
