var express = require("express");
var cors =require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString).then(clientObject=>{
        var database  = clientObject.db("reactdb");
        database.collection("tblproducts").find([{}]).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.post("/registeruser", (req,res)=>{
    var userDetails= {
        id: req.body.id,
        username: req.body.username,
        city: req.body.city,
        mobile: req.body.mobile,
        suscribe: req.body.subscribe
    }
    mongoClient.connect(connectionString, (err,clientObj)=>{
        if(!err){
            var database= clientObj.db("reactdb");
            database.collection("tblusers").insertOne(userDetails, (err, result)=>{
                if(!err){
                    console.log("record inserted");
                    app.redirect("/tblusers");
                }
            })
        }
    })
})
app.listen(4004);
console.log("server started : http://127.0.0.1:12710");

