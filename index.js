const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    res.send('contact');
});
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
app.use((req, res) => {
    res.status(404).send('Page not found');
});