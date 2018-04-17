const MongoClient= require ('mongodb').MongoClient;
const url ="mongodb://localhost:27017/start_wars_quotes";
const express =require('express');
const app =express();
app.use(express.static('public'))

var db;

MongoClient.connect(url,function(err,database){
  if(err) throw err;
  db-databasel
  app.listen(8080);
});


app.get('/quotes',function(req,res){
  db.collection('quotes').find().toArray(function(err,result){
    if (err) throw err;

    var output ="<h1> All the qutoes</h1>";

    for (var i = 0; i < result.length; i++){
      output +="<div>"
      output +="<h3>" + result[i].name + "</h3>"
      output +="<p>" + result [i].qutoe + "</p>"
      output +="</div>"
    }
    res.send(output);
  });
});

app.post('/signup', function (req, res, next) {
    var user = {
       Name: req.body.name,
       Email: req.body.email,
       Pass: req.body.pass,
   };
   var UserReg = MongoClient.model('UserReg', RegSchema);
   UserReg.create(user, function(err, newUser) {
      if(err) return next(err);
      req.session.user = email;
      return res.send('Logged In!');
   });
});

app.post('/login', function (req, res, next) {
   var email = req.body.email;
   var pass = req.body.pass;

   User.findOne({Email: email, Pass: pass}, function(err, user) {
      if(err) return next(err);
      if(!user) return res.send('Not logged in!');

      req.session.user = email;
      return res.send(Logged In);
   });
});

app.get('/logout', function (req, res) {
   req.session.user = null;
});
