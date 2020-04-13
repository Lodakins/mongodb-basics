var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const insertDocuments = require('./interns');
var url = "mongodb://localhost:27017/lodakins";

var mongo = new MongoClient(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongo.connect(function(err,db){
   assert.equal(err,null);
    console.log("database created successfully");
      //const collect = db.collection("myMovies");
     var dbo = db.db('lodakins');
      insertDocuments(dbo,(result)=>{
       console.log(result);
        
       db.close();
   })
})



// mongoClient.connect(url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },function(err,db){
//     if(err) throw err;

//     console.log("database created by lodakins");

//     db.close();
// });