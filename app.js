const express = require('express');
const methodOverride = require('method-override');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const carrinhoRouter = require('./routes/carrinhoRouter');
const session = require('express-session');

const app = express();

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'ecomerce muambas',
    resave: false,
    saveUninitialized: true,
   
  }))

app.use(homeRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(carrinhoRouter);


app.listen(3000, () => {
    console.log('Server online at http://localhost:3000')
})

