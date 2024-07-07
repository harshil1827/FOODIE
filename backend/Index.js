const express = require('express')
const connectDB = require('./db');
const userroute = require('./routes/createuser');
const orderdata = require('./routes/orderdata');
const app = express()
const port = 4000

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  next();
})

connectDB();
app.use(express.json());
//console.log(require('./routes/DisplayData'));
app.use('/api', userroute);
app.use('/api',require('./routes/DisplayData') );
app.use('/api', orderdata);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})