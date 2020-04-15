const assert = require('assert');




const updateInterns =(db, callback)=>{

    const collection = db.collection('myMovies');

    collection.updateOne({movie:'The Banker'},{$set:{ movie:"Men In Black",year:"2020",rating:9}},(err,result)=>{
            assert.equal(err,null);
            assert.equal(true,result.result.ok);
            console.log("Document updated successfully");
            console.log(result);
           
    });


};

module.exports= updateInterns;