(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Random = Package.random.Random;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var moment = Package['momentjs:moment'].moment;
var Avatar = Package['utilities:avatar'].Avatar;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var Comments;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/arkham_comments-ui/lib/model.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Comments = (function () {                                                                                            // 1
  var timeTick = new Tracker.Dependency(),                                                                           // 2
    collection = new Mongo.Collection('comments'),                                                                   // 3
    noOptOptions = {                                                                                                 // 4
      validate: false,                                                                                               // 5
      filter: false,                                                                                                 // 6
      getAutoValues: false,                                                                                          // 7
      removeEmptyStrings: false                                                                                      // 8
    },                                                                                                               // 9
    ReplySchema, CommentSchema;                                                                                      // 10
                                                                                                                     // 11
  moment.locale('en');                                                                                               // 12
                                                                                                                     // 13
  /*                                                                                                                 // 14
   * Helper Functions                                                                                                // 15
   */                                                                                                                // 16
                                                                                                                     // 17
  function transformUser(userId) {                                                                                   // 18
    var user = Meteor.users.findOne(userId),                                                                         // 19
      displayName;                                                                                                   // 20
                                                                                                                     // 21
    if (user) {                                                                                                      // 22
      if (user.emails && user.emails[0]) {                                                                           // 23
        displayName = user.emails[0].address;                                                                        // 24
      }                                                                                                              // 25
                                                                                                                     // 26
      if (user.username) {                                                                                           // 27
        displayName = user.username;                                                                                 // 28
      }                                                                                                              // 29
                                                                                                                     // 30
      return { displayName: displayName };                                                                           // 31
    }                                                                                                                // 32
  }                                                                                                                  // 33
                                                                                                                     // 34
  function transformReplies(scope, position) {                                                                       // 35
    if (!position) {                                                                                                 // 36
      position = [];                                                                                                 // 37
    }                                                                                                                // 38
                                                                                                                     // 39
    return _.map(scope.replies, function (reply, index) {                                                            // 40
      position.push(index);                                                                                          // 41
                                                                                                                     // 42
      reply.position = position;                                                                                     // 43
      reply.documentId = scope._id;                                                                                  // 44
                                                                                                                     // 45
      reply.user = scope.user.bind(reply);                                                                           // 46
      reply.likesCount = scope.likesCount.bind(reply);                                                               // 47
      reply.createdAgo = scope.createdAgo.bind(reply);                                                               // 48
                                                                                                                     // 49
      // clone position                                                                                              // 50
      reply.position = position.slice(0);                                                                            // 51
                                                                                                                     // 52
      if (reply.replies) {                                                                                           // 53
        // recursive!                                                                                                // 54
        reply.enhancedReplies = _.bind(transformReplies, null, _.extend(_.clone(scope), { replies: reply.replies }), position)();
      }                                                                                                              // 56
                                                                                                                     // 57
      position.pop();                                                                                                // 58
                                                                                                                     // 59
      return reply;                                                                                                  // 60
    });                                                                                                              // 61
  }                                                                                                                  // 62
                                                                                                                     // 63
  function modifyNestedReplies(nestedArray, position, callback) {                                                    // 64
    var currentPos = position.shift();                                                                               // 65
                                                                                                                     // 66
    if (nestedArray[currentPos]) {                                                                                   // 67
      if (position.length && nestedArray[currentPos] && nestedArray[currentPos].replies) {                           // 68
        modifyNestedReplies(nestedArray[currentPos].replies, position, callback);                                    // 69
      } else {                                                                                                       // 70
        callback(nestedArray, currentPos);                                                                           // 71
      }                                                                                                              // 72
    }                                                                                                                // 73
  }                                                                                                                  // 74
                                                                                                                     // 75
  function getUserIdsByComment(comment) {                                                                            // 76
    var ids = [];                                                                                                    // 77
                                                                                                                     // 78
    ids.push(comment.userId);                                                                                        // 79
                                                                                                                     // 80
    if (comment.replies) {                                                                                           // 81
      _.each(comment.replies, function (reply) {                                                                     // 82
        ids = _.union(ids, getUserIdsByComment(reply));                                                              // 83
      });                                                                                                            // 84
    }                                                                                                                // 85
                                                                                                                     // 86
    return ids;                                                                                                      // 87
  }                                                                                                                  // 88
                                                                                                                     // 89
  function getImageFromContent(content) {                                                                            // 90
    var urls;                                                                                                        // 91
                                                                                                                     // 92
    if (content) {                                                                                                   // 93
      urls = content.match(/(\S+\.[^/\s]+(\/\S+|\/|))(.jpg|.png|.gif)/g) ;                                           // 94
                                                                                                                     // 95
      if (urls && urls[0]) {                                                                                         // 96
        return urls[0];                                                                                              // 97
      }                                                                                                              // 98
    }                                                                                                                // 99
                                                                                                                     // 100
    return '';                                                                                                       // 101
  }                                                                                                                  // 102
                                                                                                                     // 103
  /*                                                                                                                 // 104
   * Schema Definitions                                                                                              // 105
   */                                                                                                                // 106
                                                                                                                     // 107
  ReplySchema = new SimpleSchema({                                                                                   // 108
    replyId: {                                                                                                       // 109
      type: String                                                                                                   // 110
    },                                                                                                               // 111
    userId: {                                                                                                        // 112
      type: String                                                                                                   // 113
    },                                                                                                               // 114
    image: {                                                                                                         // 115
      type: String,                                                                                                  // 116
      optional: true,                                                                                                // 117
      autoValue: function () {                                                                                       // 118
        return getImageFromContent(this.siblingField('content').value);                                              // 119
      }                                                                                                              // 120
    },                                                                                                               // 121
    content: {                                                                                                       // 122
      type: String,                                                                                                  // 123
      min: 1,                                                                                                        // 124
      max: 10000                                                                                                     // 125
    },                                                                                                               // 126
    replies: {                                                                                                       // 127
      type: [Object],                                                                                                // 128
      autoValue: function (doc) {                                                                                    // 129
        if (this.isInsert) {                                                                                         // 130
          return [];                                                                                                 // 131
        }                                                                                                            // 132
      },                                                                                                             // 133
      optional: true                                                                                                 // 134
    },                                                                                                               // 135
    likes: {                                                                                                         // 136
      type: [String],                                                                                                // 137
      autoValue: function() {                                                                                        // 138
        if (this.isInsert) {                                                                                         // 139
          return [];                                                                                                 // 140
        }                                                                                                            // 141
      },                                                                                                             // 142
      optional: true                                                                                                 // 143
    },                                                                                                               // 144
    createdAt: {                                                                                                     // 145
      type: Date,                                                                                                    // 146
      autoValue: function() {                                                                                        // 147
        if (this.isInsert) {                                                                                         // 148
          return new Date;                                                                                           // 149
        } else if (this.isUpsert) {                                                                                  // 150
          return {$setOnInsert: new Date};                                                                           // 151
        } else {                                                                                                     // 152
          this.unset();                                                                                              // 153
        }                                                                                                            // 154
      }                                                                                                              // 155
    },                                                                                                               // 156
    lastUpdatedAt: {                                                                                                 // 157
      type: Date,                                                                                                    // 158
      autoValue: function() {                                                                                        // 159
        if (this.isUpdate) {                                                                                         // 160
          return new Date();                                                                                         // 161
        }                                                                                                            // 162
      },                                                                                                             // 163
      denyInsert: true,                                                                                              // 164
      optional: true                                                                                                 // 165
    }                                                                                                                // 166
  });                                                                                                                // 167
                                                                                                                     // 168
  CommentSchema = new SimpleSchema({                                                                                 // 169
    userId: {                                                                                                        // 170
      type: String                                                                                                   // 171
    },                                                                                                               // 172
    referenceId: {                                                                                                   // 173
      type: String                                                                                                   // 174
    },                                                                                                               // 175
    image: {                                                                                                         // 176
      type: String,                                                                                                  // 177
      optional: true,                                                                                                // 178
      autoValue: function () {                                                                                       // 179
        return getImageFromContent(this.siblingField('content').value);                                              // 180
      }                                                                                                              // 181
    },                                                                                                               // 182
    content: {                                                                                                       // 183
      type: String,                                                                                                  // 184
      min: 1,                                                                                                        // 185
      max: 10000                                                                                                     // 186
    },                                                                                                               // 187
    replies: {                                                                                                       // 188
      type: [Object],                                                                                                // 189
      autoValue: function () {                                                                                       // 190
        if (this.isInsert) {                                                                                         // 191
          return [];                                                                                                 // 192
        }                                                                                                            // 193
      },                                                                                                             // 194
      optional: true                                                                                                 // 195
    },                                                                                                               // 196
    likes: {                                                                                                         // 197
      type: [String],                                                                                                // 198
      autoValue: function() {                                                                                        // 199
        if (this.isInsert) {                                                                                         // 200
          return [];                                                                                                 // 201
        }                                                                                                            // 202
      },                                                                                                             // 203
      optional: true                                                                                                 // 204
    },                                                                                                               // 205
    createdAt: {                                                                                                     // 206
      type: Date,                                                                                                    // 207
      autoValue: function() {                                                                                        // 208
        if (this.isInsert) {                                                                                         // 209
          return new Date;                                                                                           // 210
        } else if (this.isUpsert) {                                                                                  // 211
          return {$setOnInsert: new Date};                                                                           // 212
        } else {                                                                                                     // 213
          this.unset();                                                                                              // 214
        }                                                                                                            // 215
      }                                                                                                              // 216
    },                                                                                                               // 217
    lastUpdatedAt: {                                                                                                 // 218
      type: Date,                                                                                                    // 219
      autoValue: function() {                                                                                        // 220
        if (this.isUpdate) {                                                                                         // 221
          return new Date();                                                                                         // 222
        }                                                                                                            // 223
      },                                                                                                             // 224
      denyInsert: true,                                                                                              // 225
      optional: true                                                                                                 // 226
    }                                                                                                                // 227
  });                                                                                                                // 228
                                                                                                                     // 229
  /*                                                                                                                 // 230
   * Model Configuration                                                                                             // 231
   */                                                                                                                // 232
                                                                                                                     // 233
  // Reactive moment changes                                                                                         // 234
  Meteor.setInterval(function () {                                                                                   // 235
    timeTick.changed();                                                                                              // 236
  }, 1000);                                                                                                          // 237
                                                                                                                     // 238
  function fromNowReactive(mmt) {                                                                                    // 239
    timeTick.depend();                                                                                               // 240
    return mmt.fromNow();                                                                                            // 241
  }                                                                                                                  // 242
                                                                                                                     // 243
  collection.attachSchema(CommentSchema);                                                                            // 244
                                                                                                                     // 245
  // Is handled with Meteor.methods                                                                                  // 246
  collection.allow({                                                                                                 // 247
    insert: function () { return false; },                                                                           // 248
    update: function () { return false; },                                                                           // 249
    remove: function () { return false; }                                                                            // 250
  });                                                                                                                // 251
                                                                                                                     // 252
  collection.helpers({                                                                                               // 253
    likesCount: function () {                                                                                        // 254
      if (this.likes && this.likes.length) {                                                                         // 255
        return this.likes.length;                                                                                    // 256
      }                                                                                                              // 257
                                                                                                                     // 258
      return 0;                                                                                                      // 259
    },                                                                                                               // 260
    user: function () {                                                                                              // 261
      return transformUser(this.userId);                                                                             // 262
    },                                                                                                               // 263
    createdAgo: function () {                                                                                        // 264
      return fromNowReactive(moment(this.createdAt));                                                                // 265
    },                                                                                                               // 266
    enhancedReplies: function (position) {                                                                           // 267
      return transformReplies(this);                                                                                 // 268
    }                                                                                                                // 269
  });                                                                                                                // 270
                                                                                                                     // 271
  /*                                                                                                                 // 272
   * Meteor Methods                                                                                                  // 273
   */                                                                                                                // 274
                                                                                                                     // 275
  Meteor.methods({                                                                                                   // 276
    'comments/add': function (referenceId, content) {                                                                // 277
      check(referenceId, String);                                                                                    // 278
      check(content, String);                                                                                        // 279
                                                                                                                     // 280
      content = content.trim();                                                                                      // 281
                                                                                                                     // 282
      if (!this.userId || !content) {                                                                                // 283
        return;                                                                                                      // 284
      }                                                                                                              // 285
                                                                                                                     // 286
      collection.insert(                                                                                             // 287
          { referenceId: referenceId, content: content, userId: this.userId, createdAt: (new Date()), likes: [], replies: [] }
      );                                                                                                             // 289
    },                                                                                                               // 290
    'comments/edit': function (documentId, newContent) {                                                             // 291
      check(documentId, String);                                                                                     // 292
      check(newContent, String);                                                                                     // 293
                                                                                                                     // 294
      newContent = newContent.trim();                                                                                // 295
                                                                                                                     // 296
      if (!this.userId || !newContent) {                                                                             // 297
        return;                                                                                                      // 298
      }                                                                                                              // 299
                                                                                                                     // 300
      collection.update(                                                                                             // 301
        { _id: documentId, userId: this.userId },                                                                    // 302
        { $set: { content: newContent, likes: [], image: getImageFromContent(newContent) } }                         // 303
      );                                                                                                             // 304
    },                                                                                                               // 305
    'comments/remove': function (documentId) {                                                                       // 306
      check(documentId, String);                                                                                     // 307
      collection.remove({ _id: documentId, userId: this.userId });                                                   // 308
    },                                                                                                               // 309
    'comments/like': function (documentId) {                                                                         // 310
      check (documentId, String);                                                                                    // 311
      check(this.userId, String);                                                                                    // 312
                                                                                                                     // 313
      if (!this.userId) {                                                                                            // 314
        return;                                                                                                      // 315
      }                                                                                                              // 316
                                                                                                                     // 317
      if (collection.findOne({ _id: documentId, likes: { $in: [this.userId] } })) {                                  // 318
        collection.update({ _id: documentId }, { $pull: { likes: this.userId } }, noOptOptions)                      // 319
      } else {                                                                                                       // 320
        collection.update({ _id: documentId }, { $push: { likes: this.userId } }, noOptOptions)                      // 321
      }                                                                                                              // 322
    },                                                                                                               // 323
    'comments/reply/add': function (documentId, docScope, content) {                                                 // 324
      check(documentId, String);                                                                                     // 325
      check(docScope, Object);                                                                                       // 326
      check(content, String);                                                                                        // 327
                                                                                                                     // 328
      var doc = collection.findOne({ _id: documentId }),                                                             // 329
          reply;                                                                                                     // 330
                                                                                                                     // 331
      content = content.trim();                                                                                      // 332
                                                                                                                     // 333
      if (!doc || !this.userId || !content) {                                                                        // 334
        return false;                                                                                                // 335
      }                                                                                                              // 336
                                                                                                                     // 337
      reply = {                                                                                                      // 338
        replyId: Random.id(),                                                                                        // 339
        content: content,                                                                                            // 340
        userId: this.userId,                                                                                         // 341
        createdAt: (new Date()),                                                                                     // 342
        replies: [], likes: [],                                                                                      // 343
        lastUpdatedAt: (new Date())                                                                                  // 344
      };                                                                                                             // 345
                                                                                                                     // 346
      check(reply, ReplySchema);                                                                                     // 347
                                                                                                                     // 348
      if (docScope._id) {                                                                                            // 349
        // highest level reply                                                                                       // 350
        doc.replies.unshift(reply);                                                                                  // 351
      } else if (docScope.position) {                                                                                // 352
        // nested reply                                                                                              // 353
        modifyNestedReplies(doc.replies, docScope.position, function (replies, index) {                              // 354
          replies[index].replies.unshift(reply);                                                                     // 355
        });                                                                                                          // 356
      }                                                                                                              // 357
                                                                                                                     // 358
      collection.update({ _id: documentId }, { $set: { replies: doc.replies } }, noOptOptions);                      // 359
    },                                                                                                               // 360
    'comments/reply/edit': function (documentId, docScope, newContent) {                                             // 361
      check(documentId, String);                                                                                     // 362
      check(docScope, Object);                                                                                       // 363
      check(newContent, String);                                                                                     // 364
                                                                                                                     // 365
      var doc = collection.findOne(documentId),                                                                      // 366
          userId = this.userId;                                                                                      // 367
                                                                                                                     // 368
      newContent = newContent.trim();                                                                                // 369
                                                                                                                     // 370
      if (!userId || !newContent) {                                                                                  // 371
        return;                                                                                                      // 372
      }                                                                                                              // 373
                                                                                                                     // 374
      modifyNestedReplies(doc.replies, docScope.position, function (replies, index) {                                // 375
        if (replies[index].userId === userId) {                                                                      // 376
          replies[index].content = newContent;                                                                       // 377
          replies[index].likes = [];                                                                                 // 378
          replies[index].image = getImageFromContent(newContent);                                                    // 379
        }                                                                                                            // 380
      });                                                                                                            // 381
                                                                                                                     // 382
      collection.update({ _id: documentId }, { $set: { replies: doc.replies } }, noOptOptions);                      // 383
    },                                                                                                               // 384
    'comments/reply/like': function (documentId, docScope) {                                                         // 385
      check(documentId, String);                                                                                     // 386
      check(docScope, Object);                                                                                       // 387
                                                                                                                     // 388
      var doc = collection.findOne({ _id: documentId }),                                                             // 389
          userId = this.userId;                                                                                      // 390
                                                                                                                     // 391
      if (!userId) {                                                                                                 // 392
        return;                                                                                                      // 393
      }                                                                                                              // 394
                                                                                                                     // 395
      modifyNestedReplies(doc.replies, docScope.position, function (replies, index) {                                // 396
        if (replies[index].likes.indexOf(userId) > -1) {                                                             // 397
          replies[index].likes.splice(replies[index].likes.indexOf(userId), 1);                                      // 398
        } else {                                                                                                     // 399
          replies[index].likes.push(userId);                                                                         // 400
        }                                                                                                            // 401
      });                                                                                                            // 402
                                                                                                                     // 403
      collection.update({ _id: documentId }, { $set: { replies: doc.replies }  }, noOptOptions);                     // 404
    },                                                                                                               // 405
    'comments/reply/remove': function (documentId, docScope) {                                                       // 406
      check(documentId, String);                                                                                     // 407
      check(docScope, Object);                                                                                       // 408
                                                                                                                     // 409
      var doc = collection.findOne({ _id: documentId }),                                                             // 410
          userId = this.userId;                                                                                      // 411
                                                                                                                     // 412
      if (!userId) {                                                                                                 // 413
        return;                                                                                                      // 414
      }                                                                                                              // 415
                                                                                                                     // 416
      modifyNestedReplies(doc.replies, docScope.position, function (replies, index) {                                // 417
        if (replies[index].userId === userId) {                                                                      // 418
          replies.splice(index, 1);                                                                                  // 419
        }                                                                                                            // 420
      });                                                                                                            // 421
                                                                                                                     // 422
      collection.update({ _id: documentId }, { $set: { replies: doc.replies }  }, noOptOptions);                     // 423
    },                                                                                                               // 424
    'comments/count': function (referenceId) {                                                                       // 425
      check(referenceId, String);                                                                                    // 426
      return collection.find({ referenceId: referenceId }).count();                                                  // 427
    }                                                                                                                // 428
  });                                                                                                                // 429
                                                                                                                     // 430
                                                                                                                     // 431
  if (Meteor.isServer) {                                                                                             // 432
    Meteor.publishComposite('comments/reference', function (id, limit) {                                             // 433
      check(id, String);                                                                                             // 434
      check(limit, Number);                                                                                          // 435
                                                                                                                     // 436
      return {                                                                                                       // 437
        find: function () {                                                                                          // 438
          return collection.find({ referenceId: id }, { limit: limit, sort: { createdAt: -1 } });                    // 439
        },                                                                                                           // 440
        children: [{                                                                                                 // 441
          find: function (comment) {                                                                                 // 442
            var userIds = getUserIdsByComment(comment);                                                              // 443
                                                                                                                     // 444
            return Meteor.users.find({ _id: { $in: userIds } }, { fields: { profile: 1, emails: 1, username: 1 } });
          }                                                                                                          // 446
        }]                                                                                                           // 447
      };                                                                                                             // 448
    })                                                                                                               // 449
  }                                                                                                                  // 450
                                                                                                                     // 451
  /*                                                                                                                 // 452
   * Public API                                                                                                      // 453
   */                                                                                                                // 454
                                                                                                                     // 455
  return {                                                                                                           // 456
    get: function (id) {                                                                                             // 457
      return collection.find({ referenceId: id }, { sort: { createdAt: -1 } });                                      // 458
    },                                                                                                               // 459
    getOne: function (id) {                                                                                          // 460
      return collection.findOne({ _id: id });                                                                        // 461
    },                                                                                                               // 462
    getAll: function () {                                                                                            // 463
      return collection.find({}, { sort: { createdAt: -1 } });                                                       // 464
    },                                                                                                               // 465
    add: function (referenceId, content) {                                                                           // 466
      Meteor.call('comments/add', referenceId, content);                                                             // 467
    },                                                                                                               // 468
    edit: function (documentId, newContent) {                                                                        // 469
      Meteor.call('comments/edit', documentId, newContent);                                                          // 470
    },                                                                                                               // 471
    remove: function (documentId) {                                                                                  // 472
      Meteor.call('comments/remove', documentId);                                                                    // 473
    },                                                                                                               // 474
    like: function (documentId) {                                                                                    // 475
      Meteor.call('comments/like', documentId);                                                                      // 476
    },                                                                                                               // 477
    reply: function (documentId, docScope, content) {                                                                // 478
      Meteor.call('comments/reply/add', documentId, docScope, content);                                              // 479
    },                                                                                                               // 480
    editReply: function (documentId, docScope, content) {                                                            // 481
      Meteor.call('comments/reply/edit', documentId, docScope, content);                                             // 482
    },                                                                                                               // 483
    removeReply: function (documentId, docScope) {                                                                   // 484
      Meteor.call('comments/reply/remove', documentId, docScope);                                                    // 485
    },                                                                                                               // 486
    likeReply: function (documentId, docScope) {                                                                     // 487
      Meteor.call('comments/reply/like', documentId, docScope);                                                      // 488
    },                                                                                                               // 489
    session: {                                                                                                       // 490
      set: function (key, val) {                                                                                     // 491
        return Session.set('commentsUi_' + key, val);                                                                // 492
      },                                                                                                             // 493
      get: function (key) {                                                                                          // 494
        return Session.get('commentsUi_' + key);                                                                     // 495
      },                                                                                                             // 496
      equals: function (key, val) {                                                                                  // 497
        return Session.equals('commentsUi_' + key, val);                                                             // 498
      }                                                                                                              // 499
    },                                                                                                               // 500
    changeSchema: function (cb) {                                                                                    // 501
      var currentSchema = collection.simpleSchema().schema(),                                                        // 502
        callbackResult = cb(currentSchema),                                                                          // 503
        newSchema;                                                                                                   // 504
                                                                                                                     // 505
      newSchema = callbackResult ? callbackResult : currentSchema;                                                   // 506
      !!newSchema && collection.attachSchema(newSchema, { replace: true });                                          // 507
    },                                                                                                               // 508
    _collection: collection                                                                                          // 509
  };                                                                                                                 // 510
})();                                                                                                                // 511
                                                                                                                     // 512
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['arkham:comments-ui'] = {
  Comments: Comments
};

})();

//# sourceMappingURL=arkham_comments-ui.js.map
