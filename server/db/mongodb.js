var mongoose = require('mongoose');
//连接MongoDB数据库
mongoose.connect('mongodb://root:123456@192.168.1.8:27017/dumall');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb 连接成功!');
});

module.exports = mongoose;
