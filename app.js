const express = require('express');
const methodOverride = require('method-override');
const homeRouter = require('./routes/homeRouter');
<<<<<<< HEAD
const userRouter = require('./routes/userRouter');
=======
const adminRouter = require('./routes/adminRouter');
>>>>>>> 49d2921b0cc1176fe6a4fcbf8822a6eb88f6f75d

const app = express();

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter);
<<<<<<< HEAD
app.use(userRouter);
=======
app.use(adminRouter);
>>>>>>> 49d2921b0cc1176fe6a4fcbf8822a6eb88f6f75d

app.listen(3000, () => {
    console.log('Server online at http://localhost:3000')
})

