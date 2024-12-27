const express = require('express');
const path = require('path');
const app = express();
const port = 3200;

app.use(express.static(path.join(__dirname, '../')));
app.use('/contact', express.static(path.join(__dirname, '../Contact page')));
app.use('/education', express.static(path.join(__dirname, '../Education page')));
app.use('/experience', express.static(path.join(__dirname, '../Experience page')));
app.use('/project', express.static(path.join(__dirname, '../Project page')));
app.use('/skills', express.static(path.join(__dirname, '../Skills page')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../Contact page', 'index.html'));
});


app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, '../Education page', 'index.html'));
});

app.get('/experience', (req, res) => {
    res.sendFile(path.join(__dirname, '../Experience page', 'index.html'));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, '../Project page', 'index.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, '../Skills page', 'index.html'));
});

app.listen(port);