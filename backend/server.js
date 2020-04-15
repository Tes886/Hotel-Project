const express = require('express')
const path = require('path');

const cors = require('cors');
const mongoose = require('mongoose'); // require us to connect with the DB
// to have envi variable in .env file
require('dotenv').config();

// to create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware, allow us to parse json
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// database uri, where our DB stored
const uri = process.env.ATLAS_URI;
// flages,useNewUrlParser: to deal with the updates with mongoDB
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true  });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established Successfully");
});

// // require routes
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users')
const commentRouter = require('./routes/comment')

//const orderRouter = require('./routes/orders')
//const errorRoutes = require('./routes/error');

// // use routes
 app.use('/products', adminRouter);
 app.use('/users', userRouter);
 app.use('/comment', commentRouter);
 
 //app.use('/orders', orderRouter);

// listen the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

