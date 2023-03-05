const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
port = process.env.PORT || 80;

// serving static files
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

const partialPath = path.join(__dirname, '../partials');
// console.log(partialPath)

hbs.registerPartials(partialPath);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/weather', (req, res) => {
    res.render('weather.hbs');
});

app.get('*', (req, res) => {
    res.render('error.hbs', {
        errorMessage: "Oops! Page Not Found",
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});