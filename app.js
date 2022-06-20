const express = require('express');
const methodOverride = require('method-override');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter);
app.use(adminRouter);

app.listen(3000, () => {
    console.log('Server online at http://localhost:3000')
})

