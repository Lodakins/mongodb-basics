var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const insertDocuments = require('./interns');
const findDocuments = require('./findInterns');
const updateDoc = require('./updateInterns');
var url = "mongodb://localhost:27017";

var mongo = new MongoClient(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongo.connect(function(err,db){
   assert.equal(err,null);
    console.log("database connection successfully");
     var dbo = db.db('lodakins');

       insertDocuments(dbo,(result)=>{
          console.log(result)

        findDocuments(dbo,(result)=>{
          console.log(result)
          
            updateDoc(dbo,(res)=>{
             //console.log(res);
               db.close();
           });

        });

      });
    
});
