(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var Inject = Package['meteorhacks:inject-initial'].Inject;

/* Package-scope variables */
var getDescendantProp, getService, getCustomUrl, getGravatarUrl, getEmailOrHash, sizeClass, shapeClass, customClasses, initialsText, createCSS, sizeName, Avatar;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/utilities_avatar/utils.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// see http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string         // 1
getDescendantProp = function (obj, desc) {                                                                           // 2
  var arr = desc.split(".");                                                                                         // 3
  while(arr.length && (obj = obj[arr.shift()]));                                                                     // 4
  return obj;                                                                                                        // 5
};                                                                                                                   // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/utilities_avatar/helpers.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Get the account service to use for the user's avatar                                                              // 1
// Priority: Twitter > Facebook > Google > GitHub > Instagram > Linkedin                                             // 2
getService = function (user) {                                                                                       // 3
  var services = user && user.services || {};                                                                        // 4
  if (getCustomUrl(user)) { return 'custom'; }                                                                       // 5
  var service = _.find([['twitter', 'profile_image_url_https'], ['facebook', 'id'], ['google', 'picture'], ['github', 'username'], ['instagram', 'profile_picture'], ['linkedin', 'pictureUrl']], function(s) { return !!services[s[0]] && s[1].length && !!services[s[0]][s[1]]; });
  if(!service)                                                                                                       // 7
    return 'none';                                                                                                   // 8
  else                                                                                                               // 9
    return service[0];                                                                                               // 10
};                                                                                                                   // 11
                                                                                                                     // 12
getCustomUrl = function (user) {                                                                                     // 13
  var computeUrl = function(prop) {                                                                                  // 14
    if (typeof prop === 'function') {                                                                                // 15
      prop = prop.call(user);                                                                                        // 16
    }                                                                                                                // 17
    if (prop && typeof prop === 'string') {                                                                          // 18
      return prop;                                                                                                   // 19
    }                                                                                                                // 20
  }                                                                                                                  // 21
                                                                                                                     // 22
  var customProp = user && Avatar.options.customImageProperty;                                                       // 23
  if (typeof customProp === 'function') {                                                                            // 24
    return computeUrl(customProp);                                                                                   // 25
  } else if (customProp) {                                                                                           // 26
    return computeUrl(getDescendantProp(user, customProp));                                                          // 27
  }                                                                                                                  // 28
}                                                                                                                    // 29
                                                                                                                     // 30
getGravatarUrl = function (user, defaultUrl) {                                                                       // 31
  var gravatarDefault;                                                                                               // 32
  var validGravatars = ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank'];                         // 33
                                                                                                                     // 34
  // Initials are shown when Gravatar returns 404.                                                                   // 35
  if (Avatar.options.fallbackType !== 'initials') {                                                                  // 36
    var valid = _.contains(validGravatars, Avatar.options.gravatarDefault);                                          // 37
    gravatarDefault = valid ? Avatar.options.gravatarDefault : defaultUrl;                                           // 38
  }                                                                                                                  // 39
  else {                                                                                                             // 40
    gravatarDefault = '404';                                                                                         // 41
  }                                                                                                                  // 42
                                                                                                                     // 43
  var options = {                                                                                                    // 44
    // NOTE: Gravatar's default option requires a publicly accessible URL,                                           // 45
    // so it won't work when your app is running on localhost and you're                                             // 46
    // using an image with either the standard default image URL or a custom                                         // 47
    // defaultImageUrl that is a relative path (e.g. 'images/defaultAvatar.png').                                    // 48
    default: gravatarDefault,                                                                                        // 49
    size: 200, // use 200x200 like twitter and facebook above (might be useful later)                                // 50
    secure: true                                                                                                     // 51
  };                                                                                                                 // 52
                                                                                                                     // 53
  var emailOrHash = getEmailOrHash(user);                                                                            // 54
  return Gravatar.imageUrl(emailOrHash, options);                                                                    // 55
};                                                                                                                   // 56
                                                                                                                     // 57
// Get the user's email address or (if the emailHashProperty is defined) hash                                        // 58
getEmailOrHash = function (user) {                                                                                   // 59
  var emailOrHash;                                                                                                   // 60
  if (user && Avatar.options.emailHashProperty && !!getDescendantProp(user, Avatar.options.emailHashProperty)) {     // 61
    emailOrHash = getDescendantProp(user, Avatar.options.emailHashProperty);                                         // 62
  }                                                                                                                  // 63
  else if (user && user.emails) {                                                                                    // 64
    var emails = _.pluck(user.emails, 'address');                                                                    // 65
    emailOrHash = emails[0] || '00000000000000000000000000000000';                                                   // 66
  }                                                                                                                  // 67
  else {                                                                                                             // 68
    // If all else fails, return 32 zeros (trash hash, hehe) so that Gravatar                                        // 69
    // has something to build a URL with at least.                                                                   // 70
    emailOrHash = '00000000000000000000000000000000';                                                                // 71
  }                                                                                                                  // 72
  return emailOrHash;                                                                                                // 73
};                                                                                                                   // 74
                                                                                                                     // 75
// Returns the size class to use for an avatar                                                                       // 76
sizeClass = function(context) {                                                                                      // 77
  // Defaults are 'large', 'small', 'extra-small', but user can add new ones                                         // 78
  return Avatar.options.imageSizes[context.size] ? Avatar.getCssClassPrefix() + '-' + context.size : '';             // 79
}                                                                                                                    // 80
                                                                                                                     // 81
// Returns the shape class for an avatar                                                                             // 82
shapeClass = function (context) {                                                                                    // 83
  var valid = ['rounded', 'circle'];                                                                                 // 84
  return _.contains(valid, context.shape) ? Avatar.getCssClassPrefix() + '-' + context.shape : '';                   // 85
}                                                                                                                    // 86
                                                                                                                     // 87
// Returns the custom class(es) for an avatar                                                                        // 88
customClasses = function (context) {                                                                                 // 89
  return context.class ? context.class : '';                                                                         // 90
}                                                                                                                    // 91
                                                                                                                     // 92
// Returns the initials text for an avatar                                                                           // 93
initialsText = function(user, context) {                                                                             // 94
  return context.initials || Avatar.getInitials(user);                                                               // 95
}                                                                                                                    // 96
                                                                                                                     // 97
// Creates the dynamically generated CSS file                                                                        // 98
//                                                                                                                   // 99
// CSS is dynamically generated so that we can have both a custom class prefix and also allow for custom sizes       // 100
createCSS = function () {                                                                                            // 101
                                                                                                                     // 102
  // We only need to do this on the server                                                                           // 103
                                                                                                                     // 104
  if (!Meteor.isServer)                                                                                              // 105
    return;                                                                                                          // 106
                                                                                                                     // 107
  // The base CSS styles                                                                                             // 108
                                                                                                                     // 109
  var p = '.' + Avatar.getCssClassPrefix();                                                                          // 110
  var a = p + ' ';                                                                                                   // 111
                                                                                                                     // 112
  var css =                                                                                                          // 113
    p + ' { \n\
      height: 50px; \n\
      width: 50px; \n\
      position: relative; \n\
    } \n' +                                                                                                          // 118
    a + p + '-image, \n' +                                                                                           // 119
    a + p + '-initials { \n\
      height: 100%; \n\
      width: 100%; \n\
      position: absolute; \n\
      top: 0px; \n\
      left: 0px; \n\
    } \n' +                                                                                                          // 126
    a + p + '-image { \n\
      z-index: 10; \n\
      background-color: #fff; \n\
    } \n' +                                                                                                          // 130
    a + p + '-initials { \n\
      display: block; \n\
      background-size: 100% 100%; \n\
      background-color: ' + Avatar.options.backgroundColor + '; \n\
      color: ' + Avatar.options.textColor +'; \n\
      font-size: 25px; \n\
      line-height: 50px; \n\
      font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif; \n\
      text-align: center; \n\
      z-index: 1; \n\
    } \n' +                                                                                                          // 141
    p + '-rounded ' + p + '-image, \n' +                                                                             // 142
    p + '-rounded ' + p + '-initials { \n\
      border-radius: 5px; \n\
    } \n'+                                                                                                           // 145
    p + '-circle ' + p + '-image, \n' +                                                                              // 146
    p + '-circle ' + p + '-initials { \n\
      border-radius: 50%; \n\
    } \n' +                                                                                                          // 149
    p + '-hide-image ' + p + '-image { \n\
      display: none; \n\
    } \n' +                                                                                                          // 152
    p + '-hide-initials ' + p + '-initials { \n\
      display: none; \n\
    } \n\
  ';                                                                                                                 // 156
                                                                                                                     // 157
  // CSS for each of the defined sizes                                                                               // 158
                                                                                                                     // 159
  for (sizeName in Avatar.options.imageSizes) {                                                                      // 160
                                                                                                                     // 161
    var size = Avatar.options.imageSizes[sizeName];                                                                  // 162
                                                                                                                     // 163
    css = css + p + '-' + sizeName + ' {' +                                                                          // 164
      'width: ' + size + 'px; ' +                                                                                    // 165
      'min-width: ' + size + 'px; ' +                                                                                // 166
      'height: ' + size + 'px;' +                                                                                    // 167
    '}\n' +                                                                                                          // 168
    p + '-' + sizeName + ' ' + p + '-initials {' +                                                                   // 169
      'font-size: ' + size / 2 + 'px; ' +                                                                            // 170
      'line-height: ' + size + 'px;' +                                                                               // 171
    '}\n';                                                                                                           // 172
  }                                                                                                                  // 173
                                                                                                                     // 174
  // In order to allow for custom sizes and a custom prefix we need to be able to create a style sheet               // 175
  // on the fly. To do this cleanly we use the meteor-hacks:inject package to inject the styles directly             // 176
  // into the HTML code before it's sent to the client.                                                              // 177
                                                                                                                     // 178
  Inject.rawHead('avatar-styles', '<style>' + css + '</style>');                                                     // 179
}                                                                                                                    // 180
                                                                                                                     // 181
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/utilities_avatar/export.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Avatar object to be exported                                                                                      // 1
                                                                                                                     // 2
Avatar = {                                                                                                           // 3
                                                                                                                     // 4
  // Default functionality. You can override these options by calling                                                // 5
  // Avater.setOptions (do not set Avatar.options directly)                                                          // 6
                                                                                                                     // 7
  options: {                                                                                                         // 8
                                                                                                                     // 9
    // Determines the type of fallback to use when no image can be found via                                         // 10
    // linked services (Gravatar included):                                                                          // 11
    //   "default image" (the default option, which will show either the image                                       // 12
    //   specified by defaultImageUrl, the package's default image, or a Gravatar                                    // 13
    //   default image)                                                                                              // 14
    //     OR                                                                                                        // 15
    //   "initials" (show the user's initials).                                                                      // 16
    fallbackType: '',                                                                                                // 17
                                                                                                                     // 18
    // This will replace the included default avatar image's URL                                                     // 19
    // ('packages/utilities_avatar/default.png'). It can be a relative path                                          // 20
    // (relative to website's base URL, e.g. 'images/defaultAvatar.png').                                            // 21
    defaultImageUrl: '',                                                                                             // 22
                                                                                                                     // 23
    // This property name will be used to fetch an avatar url from the user's profile                                // 24
    // (e.g. 'avatar'). If this property is set and a property of that name exists                                   // 25
    // on the user's profile (e.g. user.profile.avatar) that property will be used                                   // 26
    // as the avatar url.                                                                                            // 27
    customImageProperty: '',                                                                                         // 28
                                                                                                                     // 29
    // Gravatar default option to use (overrides default image URL)                                                  // 30
    // Options are available at:                                                                                     // 31
    // https://secure.gravatar.com/site/implement/images/#default-image                                              // 32
    gravatarDefault: '',                                                                                             // 33
                                                                                                                     // 34
    // This property on the user object will be used for retrieving gravatars                                        // 35
    // (useful when user emails are not published).                                                                  // 36
    emailHashProperty: '',                                                                                           // 37
                                                                                                                     // 38
    // This property is used to prefix the CSS classes of the DOM elements.                                          // 39
    // If no value is set, then the default CSS class assigned to all DOM elements are prefixed with 'avatar' as default.
    // If a value is set to, 'foo' for example, the resulting CSS classes are prefixed with 'foo'.                   // 41
    cssClassPrefix: '',                                                                                              // 42
                                                                                                                     // 43
    // This property defines the various image sizes available                                                       // 44
    imageSizes: {                                                                                                    // 45
      'large': 80,                                                                                                   // 46
      'small': 30,                                                                                                   // 47
      'extra-small': 20                                                                                              // 48
    },                                                                                                               // 49
                                                                                                                     // 50
    // Default background color when displaying the initials.                                                        // 51
    // Can also be set to a function to map an user object to a background color.                                    // 52
    backgroundColor: "#aaa",                                                                                         // 53
                                                                                                                     // 54
    // Default text color when displaying the initials.                                                              // 55
    // Can also be set to a function to map an user object to a text color.                                          // 56
    textColor: "#fff",                                                                                               // 57
                                                                                                                     // 58
    // Generate the required CSS and includ it in the head of your application.                                      // 59
    // Setting this to false will exclude the generated CSS and leave the                                            // 60
    // avatar unstyled by the package.                                                                               // 61
    generateCSS: true                                                                                                // 62
  },                                                                                                                 // 63
                                                                                                                     // 64
  // Sets the Avatar options. You must use this setter function rather than assigning directly to                    // 65
  // Avatar.options, otherwise the stylesheet won't be generated.                                                    // 66
                                                                                                                     // 67
  setOptions: function(options) {                                                                                    // 68
    Avatar.options = _.extend(Avatar.options, options);                                                              // 69
    if (Avatar.options.generateCSS)                                                                                  // 70
      createCSS();                                                                                                   // 71
  },                                                                                                                 // 72
                                                                                                                     // 73
  // Returns the cssClassPrefix property from options                                                                // 74
  getCssClassPrefix: function () {                                                                                   // 75
    return (Avatar.options.cssClassPrefix)? Avatar.options.cssClassPrefix: 'avatar';                                 // 76
  },                                                                                                                 // 77
                                                                                                                     // 78
  // Returns a background color for initials                                                                         // 79
  getBackgroundColor: function (user) {                                                                              // 80
    if (_.isString(Avatar.options.backgroundColor))                                                                  // 81
      return Avatar.options.backgroundColor;                                                                         // 82
    else if (_.isFunction(Avatar.options.backgroundColor))                                                           // 83
      return Avatar.options.backgroundColor(user);                                                                   // 84
  },                                                                                                                 // 85
                                                                                                                     // 86
  // Returns a text color for initials                                                                               // 87
  getTextColor: function (user) {                                                                                    // 88
    if (_.isString(Avatar.options.textColor))                                                                        // 89
      return Avatar.options.textColor;                                                                               // 90
    else if (_.isFunction(Avatar.options.textColor))                                                                 // 91
      return Avatar.options.textColor(user);                                                                         // 92
  },                                                                                                                 // 93
                                                                                                                     // 94
  // Get the initials of the user                                                                                    // 95
  getInitials: function (user) {                                                                                     // 96
                                                                                                                     // 97
    var initials = '';                                                                                               // 98
    var name = '';                                                                                                   // 99
    var parts = [];                                                                                                  // 100
                                                                                                                     // 101
    if (user && user.profile && user.profile.firstName) {                                                            // 102
      initials = user.profile.firstName.charAt(0).toUpperCase();                                                     // 103
                                                                                                                     // 104
      if (user.profile.lastName) {                                                                                   // 105
        initials += user.profile.lastName.charAt(0).toUpperCase();                                                   // 106
      }                                                                                                              // 107
      else if (user.profile.familyName) {                                                                            // 108
        initials += user.profile.familyName.charAt(0).toUpperCase();                                                 // 109
      }                                                                                                              // 110
      else if (user.profile.secondName) {                                                                            // 111
        initials += user.profile.secondName.charAt(0).toUpperCase();                                                 // 112
      }                                                                                                              // 113
    }                                                                                                                // 114
    else {                                                                                                           // 115
      if (user && user.profile && user.profile.name) {                                                               // 116
        name = user.profile.name;                                                                                    // 117
      }                                                                                                              // 118
      else if (user && user.username) {                                                                              // 119
        name = user.username;                                                                                        // 120
      }                                                                                                              // 121
                                                                                                                     // 122
      parts = name.split(' ');                                                                                       // 123
      // Limit getInitials to first and last initial to avoid problems with                                          // 124
      // very long multi-part names (e.g. "Jose Manuel Garcia Galvez")                                               // 125
      initials = _.first(parts).charAt(0).toUpperCase();                                                             // 126
      if (parts.length > 1) {                                                                                        // 127
        initials += _.last(parts).charAt(0).toUpperCase();                                                           // 128
      }                                                                                                              // 129
    }                                                                                                                // 130
                                                                                                                     // 131
    return initials;                                                                                                 // 132
  },                                                                                                                 // 133
                                                                                                                     // 134
  // Get the url of the user's avatar                                                                                // 135
  getUrl: function (user) {                                                                                          // 136
                                                                                                                     // 137
    var url = '';                                                                                                    // 138
    var defaultUrl, svc;                                                                                             // 139
                                                                                                                     // 140
    if (user) {                                                                                                      // 141
      svc = getService(user);                                                                                        // 142
      if (svc === 'twitter') {                                                                                       // 143
        // use larger image (200x200 is smallest custom option)                                                      // 144
        url = user.services.twitter.profile_image_url_https.replace('_normal.', '_200x200.');                        // 145
      }                                                                                                              // 146
      else if (svc === 'facebook') {                                                                                 // 147
        // use larger image (~200x200)                                                                               // 148
        url = 'https://graph.facebook.com/' + user.services.facebook.id + '/picture/?type=large';                    // 149
      }                                                                                                              // 150
      else if (svc === 'google') {                                                                                   // 151
        url = user.services.google.picture;                                                                          // 152
      }                                                                                                              // 153
      else if (svc === 'github') {                                                                                   // 154
        url = 'https://avatars.githubusercontent.com/' + user.services.github.username + '?s=200';                   // 155
      }                                                                                                              // 156
      else if (svc === 'instagram') {                                                                                // 157
        url = user.services.instagram.profile_picture;                                                               // 158
      }                                                                                                              // 159
      else if (svc === 'linkedin') {                                                                                 // 160
        url = user.services.linkedin.pictureUrl;                                                                     // 161
      }                                                                                                              // 162
      else if (svc === "custom") {                                                                                   // 163
        url = getCustomUrl(user);                                                                                    // 164
      }                                                                                                              // 165
      else if (svc === 'none') {                                                                                     // 166
        defaultUrl = Avatar.options.defaultImageUrl || '/packages/utilities_avatar/default.png';                     // 167
        // If it's a relative path (no '//' anywhere), complete the URL                                              // 168
        if (defaultUrl.indexOf('//') === -1) {                                                                       // 169
          // Strip starting slash if it exists                                                                       // 170
          if (defaultUrl.charAt(0) === '/') defaultUrl = defaultUrl.slice(1);                                        // 171
          // Then add the relative path to the server's base URL                                                     // 172
          defaultUrl = Meteor.absoluteUrl() + defaultUrl;                                                            // 173
        }                                                                                                            // 174
        url = getGravatarUrl(user, defaultUrl);                                                                      // 175
      }                                                                                                              // 176
    }                                                                                                                // 177
                                                                                                                     // 178
    return url;                                                                                                      // 179
  },                                                                                                                 // 180
                                                                                                                     // 181
  // Create a Gravatar-compatible hash for a given email address                                                     // 182
  hash: function (email) {                                                                                           // 183
    return Gravatar.hash(email);                                                                                     // 184
  }                                                                                                                  // 185
}                                                                                                                    // 186
                                                                                                                     // 187
// Call setOptions to generate the default CSS. This will be replaced if the user calls setOptions in their own code
                                                                                                                     // 189
Avatar.setOptions({});                                                                                               // 190
                                                                                                                     // 191
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['utilities:avatar'] = {
  Avatar: Avatar
};

})();

//# sourceMappingURL=utilities_avatar.js.map
