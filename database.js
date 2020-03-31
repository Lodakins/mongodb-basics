var mongodb = require('mongodb');
var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/lodakins";

mongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },function(err,db){
    if(err) throw err;

    console.log("database created by lodakins");

    db.close();
});