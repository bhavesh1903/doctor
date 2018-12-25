let express=require('express');
let bodyParser=require('body-parser');
let app=express();
let morgan=require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let Environment=process.env.NODE_ENV || "development" ;
let config=require(__dirname+"/config/"+Environment);
console.log("__dirname:",__dirname);


app.use(require('./api'));
app.listen(config.server.port);
console.log('API is running on port no:',config.server.port);