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
    ],
    "employees": [
        {
            "id":1,
            "first_name":"Johnson",
            "last_name":"James",
            "age":13,
            "sex":"Male",
            "location":"Viet Nam"
        },
        {
            "id":1,
            "first_name":"Smith",
            "last_name":"Michael",
            "age":22,
            "sex":"Male",
            "location":"Viet Nam"
        },
        {
            "id":1,
            "first_name":"Hernandez",
            "last_name":"Maria",
            "age":25,
            "sex":"FeMale",
            "location":"Viet Nam"
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

app.get('/employees', function(req,res){
    res.json(db["employees"])
})
