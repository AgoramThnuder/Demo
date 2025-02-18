const express=require('express');
const app = express();
const middleware = (req, res, next) => {
    console.log('Hello from middleware');
    next();
};
app.use(middleware);
app.get('/', (req, res) => {
    res.send('Home');
});
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
