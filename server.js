const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/auth/google', (req, res) => {
    res.render('login');
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});