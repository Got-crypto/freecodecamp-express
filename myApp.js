require('dotenv').config()
let express = require('express');
let app = express();

const filePath = `${__dirname}/views/index.html`
const publicPath = `${__dirname}/public`

app.use('/public', express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(filePath)
})

app.get('/json', (req, res) => {
    const style = process.env.MESSAGE_STYLE
    res.json({message: style === 'uppercase' ? "Hello json".toUpperCase() : "Hello json".toLowerCase()})
})

























 module.exports = app;
