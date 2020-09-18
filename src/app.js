const geoData = require('./utils/geoCode')
const weatherData = require('./utils/weatherCode')


const path = require('path')
const express = require('express')
// Loading hbs for partials
const hbs = require('hbs')

// express is a function

const app = express()
const port = process.env.PORT

// To customize server
// publicDirectoryPath = 'C:\\Users\\Dheeraj Raghavendra\\Desktop\\Node\\web-server\\public' -> working

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
// to change path of hbs from default
const viewsPath = path.join(__dirname, '../templates/views')
// setting path of partials
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
// RegisterPartials - ???
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        pageName: 'Index page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Purushottam Sri Rama',
        pageName: 'About page'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        pageName: 'Help page'
    })
})

// app.get('route-parial url', (req, res) => {}) 
// req - object containing information about incoming req to server
// res - contains methods that allow customization of output to requester, can send html, object, array

// Redundant after app.use()
// app.get('', (req, res) => {
//     res.send('Home Page')
// })

// app.get('/help', (req, res) => {
//     res.send('You\'re on the home page')
// })

// app.get('/about', (req, res) => {
//     res.send('You\'re on the about page')
// })

app.get('/weather', (req, res) => {
    // console.log(req.query)
    if(req.query.longitude && req.query.latitude) {
        console.log(typeof parseInt(req.query.longitude))
        // res.send({
        //     place: 'XYZ',
        //     longitude: req.query.longitude,
        //     latitude: req.query.latitude,
        //     temperature: 25
        // })
        geoData(parseInt(req.query.longitide), parseInt(req.query.latitude), (error, data) => weatherData(data, (error, tempData) => res.send({temperature: tempData})))
    } else {
        res.send({
            Error: 'Enter valid inputs'
        })
    }
})

// app.get('/help/*', (req, res) => {
//     res.send('Help article not found')
// })

app.get('/help/*', (req, res) => {
    res.render('error', {
        pageName: 'Help Error',
        content: 'Help page not found'
    })
})

// * - wildcard char, to match any page that hasn't been earlier matched
app.get('*', (req, res) => {
    res.render('error', {
        pageName: 'Error',
        content: '404 error via hbs'
    })
})

// To start server (port number, ())  ; Process of starting a server is asynchronous
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

console.log(process.cwd())

// Template Engine (Handlebars) - To render dynamic webpages using express, also code resuability