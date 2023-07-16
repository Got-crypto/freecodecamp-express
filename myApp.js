let express = require('express');
let app = express();

const filePath = `${__dirname}/views/index.html`
const publicPath = `${__dirname}/public`

app.use('/public', express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(filePath)
})

app.get('/json', (req, res) => {
    res.json({message: "Hello json"})
})

























 module.exports = app;
