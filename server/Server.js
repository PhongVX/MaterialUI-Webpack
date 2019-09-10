var express=require('express');
var app=express();


const db = {
    "tasks":[
        {
            "id":1,
            "title":"Read Book",
            "description":"learning reactjs",
            "status":0
        },
        {
            "id":2,
            "title":"Play game",
            "description":"",
            "status":1
        },
        {
            "id":3,
            "title":"learning java",
            "description":"",
            "status":2
        }
    ]
}

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

app.listen(3000);

app.get('/',function(req,res){
    res.render("home");
})

app.get('/tasks', function(req,res){
    res.json(db["tasks"])
})