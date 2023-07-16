require('dotenv').config()
const bodyParser = require('body-parser')
let express = require('express');
let app = express();

const filePath = `${__dirname}/views/index.html`
const publicPath = `${__dirname}/public`

app.use('/public', express.static(publicPath))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})

app.use(bodyParser.urlencoded({extended: !1}))

app.get('/', (req, res) => {
    res.sendFile(filePath)
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
    
    }, (req, res) => {
        res.json({time: req.time})
    }
)

app.get('/json', (req, res) => {
    const style = process.env.MESSAGE_STYLE
    const response = style === 'uppercase' ? "Hello json".toUpperCase() : "Hello json"
    res.json({message: response})
})

app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.json({echo: word})
})

const nameHandler = (req, res) => {
    const first = req.query.first || req.body.first
    const last = req.query.last || req.body.last

    res.json({name: `${first || ""}${!first || !last ? "" : " "}${last || ""}`})
}

app.route('/name').get(nameHandler).post(nameHandler)




















 module.exports = app;
