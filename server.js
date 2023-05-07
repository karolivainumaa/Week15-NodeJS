const express = require('express');
const wish = require('./model/wish');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlendcoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    Wish.fetchAllWishes(wishesFromFile => {
        console.log(wishesFromFile);
        res.render('index', {myWishes: wishesFromFile});
    });
});

app.post('/wish', (req, res) =>{
    let UserData = req.body.userWish;

    let newWish = new Wish(userData);
    newWish.saveWish();
    res.redirect('/');
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running ${port}.`);
});