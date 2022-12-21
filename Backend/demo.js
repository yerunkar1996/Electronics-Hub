
// app.use("/",function(req, res, next){
//    console.log("A new request received at " + Date());
//    //This function call is very important. It tells that more processing is
//    //required for the current request and is in the next middleware
//    //function route handler.
//    next();
// });

// app.get("/",function(req, res){
//     res.send("Middleware");
//  });

// var express = require('express');
// var app = express();
// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//     console.log("A request for things received at " + Date());
//     next();
//  });
 
//  // Route handler that sends the response
//  app.get('/things', function(req, res){
//     res.send('Things');
//  });
// app.listen(3000,()=>{
//     console.log("Server is running")
// });



// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.cookie('name', 'express').send('cookie set'); //Sets name = express
// });

// app.get('/clear_cookie_foo', function(req, res){
//     res.clearCookie('foo');
//     res.send('cookie foo cleared');
//  });

// app.listen(3000,()=>{
//     console.log("Server is running")
// });