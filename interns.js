const assert = require("assert");


var data=[{
    movie:"The Banker",
    year:"2020",
    rating:8    
    },{
        movie:"Bad Boys",
        year:"2020",
        rating: 7
    },{
        movie:"The Hunt",
        year:"2020",
        rating: 7
    },{
        movie:"Bloodshot",
        year:"2020",
        rating: 7.5
    },{
        movie:"First Cow",
        year:"2020",
        rating: 6.5
    }
]

const insertDocuments = function(db,callback){
        // Get the Movies Collection
        const collection = db.collection("myMovies");
        collection.insertMany(data,(err,result)=>{
            assert.equal(err,null);
            assert.equal(5,result.result.n);
            assert.equal(5,result.insertedCount);
            console.log("Insertion into the database successfull");
            callback(result);
        })
}


module.exports= insertDocuments;

// var url="mongodb://localhost:27017";

// mongoClient.connect(url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },function(err,db){
//     var myobj = [
//         { name: 'John', address : 'Highway 71'},
//         { name: 'Peter', address: 'Lowstreet 4'},
//         { name: 'Amy', address: 'Apple st 652'},
//         { name: 'Hannah', address: 'Mountain 21'},
//         { name: 'Michael', address: 'Valley 345'},
//         { name: 'Sandy', address: 'Ocean blvd 2'},
//         { name: 'Betty', address: 'Green Grass 1'},
//         { name: 'Richard', address: 'Sky st 331'},
//         { name: 'Susan', address: 'One way 98'},
//         { name: 'Vicky', address: 'Yellow Garden 2'},
//         { name: 'Ben', address: 'Park Lane 38'},
//         { name: 'William', address: 'Central st 954'},
//         { name: 'Chuck', address: 'Main Road 989'},
//         { name: 'Viola', address: 'Sideway 1633'}
//       ];
//     if(err) throw err;

//     var dbo = db.db("lodakins");
//     dbo.createCollection("interns",function(err,result){
//         if(err) throw err;
//         console.log("Interns collection created");
//         db.close();
//     })
// })