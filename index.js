console.log('starting server........');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 3000;
app.get('/', (req,res)=>{
    res.render('home');
})
app.get('/FAQs', (req,res)=>{
    res.render('FAQs');
})
app.listen(port, ()=>{console.log(`listening on port : 3000`)})