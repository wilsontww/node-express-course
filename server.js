const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var mockUsername="billyTheKid";
var mockPassword="superSecret";

const mockUserData=[
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfuly got users. Nice!',
        users: mockUserData
    })
})

app.post('/login', function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if (username==mockUsername && password==mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.post('/alter-login', function(req,res){
    const updateUsername=req.body.username;
    const updatePassword=req.body.password;

    if (updateUsername!==null && updatePassword!==null){
        mockUsername=updateUsername;
        mockPassword=updatePassword;
        res.json({
            success: true,
            message: 'username and password updated!'
        })
    } else {
        res.json({
            success: false,
            message: 'username or password cannot be blank'
        })
    }
})


app.listen(8000,function(){
    console.log("server is running")
})