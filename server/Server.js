var express=require('express');
var bodyParser = require('body-parser')
var app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
            "id":2,
            "first_name":"Smith",
            "last_name":"Michael",
            "age":22,
            "sex":"Male",
            "location":"Viet Nam"
        },
        {
            "id":3,
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

app.post('/employees', function(req,res){
    db['employees'].push(req.body)
    res.json({}), 201
})

app.post('/deleteEmployee', function(req,res){
    let id = req.body.id
    for (var i = 0; i < db['employees'].length; i++) {
        var obj = db['employees'][i];
        if(obj.id == id){
            db['employees'].splice(i, 1);
        }
    } 
    res.json({}), 200
})