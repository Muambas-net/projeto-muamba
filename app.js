const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 

app.listen(3000, () => {
    console.log('Server online at http://localhost:3000')
})