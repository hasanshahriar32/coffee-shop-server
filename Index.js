const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const UserRoute = require('./Routes/UserRoute')
const bodyParser = require('body-parser')

// middlewere
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));
// YixPMwybAOFcMmBY
// coffe-shop

  // mongoose.connect('mongodb+srv://coffe-shop:YixPMwybAOFcMmBY@coffee-shop.8gjmnco.mongodb.net/?retryWrites=true&w=majority', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }).then(() => {
  //   console.log('succeccful')
  // }).catch(err => console.log(err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled



  const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://coffe-shop:YixPMwybAOFcMmBY@coffee-shop.8gjmnco.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

};
connectDB();



app.use('/', UserRoute)

app.get('/', async(req, res) => {
    res.send('coffee shop server is running');
})

app.listen(port, () => console.log(`coffee shop running on ${port}`))