var mongoose = require('mongoose');
var shortlyDb = require('/config.js');
var crypto = require('crypto');

var Link = new mongoose.model('Link', shortlyDb.urlSchema);

module.exports = Link;
  // tableName: 'urls',
  // hasTimestamps: true,
  // defaults: {
  //   visits: 0
  // },
  // initialize: function(){
  //   this.on('creating', function(model, attrs, options){
  //     var shasum = crypto.createHash('sha1');
  //     shasum.update(model.get('url'));
  //     model.set('code', shasum.digest('hex').slice(0, 5));
  //   });
  // }
