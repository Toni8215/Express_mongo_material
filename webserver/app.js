const express = require('express');
const path = require('path');
const mongoose= require ('mongoose');
const RepoModel = require('./moduleOne/moduleOneEntity.js').Model;


function createApp() {
  const app = express();
  return app;
}

function setupStaticRoutes(app) {
  app.use(express.static(path.resolve(__dirname, './', 'webapp/dist')));
  return app;
}

function setupMiddlewares(app) {

  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  return app;
}

   mongoose.connect('mongodb://localhost/repos');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("data base connected");

  });
function setupRestRoutes(app) {
   const routes =require(path.join(__dirname, './moduleOne'));
  app.use('/',routes );

  app.use(function(req, res, next) {
    var err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
      "error": err.message
    });
  });

  app.use(function(err, req, res, next) {
    return res.status(err.status || 500).json({
      "error": err.message
    });
  });

  return app;
}

  let app = createApp();

  app = setupStaticRoutes(app);

  app = setupMiddlewares(app);

  app = setupRestRoutes(app);



  app.listen(3000,() =>{
    console.log("server running on port 3000");
    console.log("app");
  });
