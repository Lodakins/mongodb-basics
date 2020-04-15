const assert = require("assert");



const findDocuments=(db,callback)=>{

       const collect= db.collection("myMovies");

       collect.findOne({},(err,result)=>{

            assert.equal(err,null);
            console.log("Record found");
           
            callback(result);
       });

    //    collect.find({rating:7}).toArray((err,result)=>{
    //         assert.equal(err,null);
    //         console.log("Found Rating that are 7");
    //         console.log(result);
    //    });

       collect.find({},{projection:{_id:0,movie:1}}).toArray((err,result)=>{
           assert.equal(err,null);
           console.log(result);
       })
};


module.exports = findDocuments;