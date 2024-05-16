var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var conString = "mongodb://127.0.0.1:27017";

app.get("/products", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database  = clientObject.db("reactdb");
        database.collection("tblproducts").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        });
    });
});

app.post("/addproduct", (req, res)=>{
      var user = {
          id: req.body.UserId,
          title: req.body.UserName,
          price: req.body.Password,
          description: req.body.Mobile,
          category:req.body.Email
      };

      mongoClient.connect(conString).then(clientObject=>{
           var database = clientObject.db("reactdb");
           database.collection("tblproducts").insertOne(user).then(()=>{
                console.log("product Added..");
                res.end();
           });
      });


});

app.get("/appointments/:userid", (req, res)=>{

    mongoClient.connect(conString).then(clientObject=>{
            var database  = clientObject.db("reactdb");
            database.collection("appointments").find({UserId:req.params.userid}).toArray().then(documents=>{
                res.send(documents);
                res.end();
            });
    });
});

app.post("/add-task", (req, res)=>{
     var task = {
          Appointment_Id: parseInt(req.body.Appointment_Id),
          Title: req.body.Title,
          Description: req.body.Description,
          Date: new Date(req.body.Date),
          UserId: req.body.UserId
     }
     mongoClient.connect(conString).then(clientObject=>{
          var database = clientObject.db("reactdb");
          database.collection("appointments").insertOne(task).then(()=>{
               console.log("Task Added");
               res.end();
          })
     })
});

app.put("/edit-task/:id", (req, res)=>{
     var id = parseInt(req.params.id);
     mongoClient.connect(conString).then(clientObject=>{
            var database = clientObject.db("reactdb");
            database.collection("appointments").updateOne({Appointment_Id:id},{$set: {Appointment_Id:id, Title:req.body.Title, Description: req.body.Description, Date: new Date(req.body.Date), UserId: req.body.UserId}}).then(()=>{
                console.log("Task-Updated");
                res.end();
            });
     });
});

app.delete("/delete-task/:id", (req, res)=>{

    var id = parseInt(req.params.id);

    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("reactdb");
        database.collection("appointments").deleteOne({Appointment_Id:id}).then(()=>{
              console.log("Task-Deleted");
              res.end();
        });
     });
});


app.listen(7001);
console.log(`Server Started : http://127.0.0.1:7001`);

	
