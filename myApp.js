require('dotenv').config()
let express = require('express');
let app = express();

const filePath = `${__dirname}/views/index.html`
const publicPath = `${__dirname}/public`

app.use('/public', express.static(publicPath))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})

app.get('/', (req, res) => {
    res.sendFile(filePath)
})

app.get('/json', (req, res) => {
    const style = process.env.MESSAGE_STYLE
    const response = style === 'uppercase' ? "Hello json".toUpperCase() : "Hello json"
    res.json({message: response})
})

























 module.exports = app;
