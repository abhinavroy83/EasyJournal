const express = require('express')
const app = express()
const port = 5000
const mongodb = require('./db');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}


mongodb();

app.use((req, res, next)=>{
  res.setHeader("Access-Cantrol-Allow-Origin", "https://localhost:3000")
  res.header(
    "Acess-Cantrol-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(cors(corsOptions)) 
// app.use(cors());
// app.options('*', cors());
app.use(express.json());
app.use('/api', require("./Routes/login"));
app.use('/api', require("./Routes/signup"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})