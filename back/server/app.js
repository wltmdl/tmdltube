const express = require('express');
const path= require('path');

const app = express();  

app.set('view engine', 'pug');
app.set('views',process.cwd()+"/front/views/pages");
//app.set('views',path.resolve(__dirname,"..","..","front/views/pages"));
//app.set('views',path.join(__dirname,"..","..","/front/views/pages"));
//app.set('views',path.join(process.cwd(),"/front/views/pages"));



module.exports = app;
//middlewares