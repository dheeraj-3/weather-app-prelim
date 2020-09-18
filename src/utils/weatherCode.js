const request = require('request')
// const geoCode = require('util')

// Weather Details
// url = 'http://api.weatherstack.com/current?access_key=e2cf4a92b4db0cfd0f66237191ec38d4&query=Krishna Janma Bhoomi Mandir, Mathura, Mathura, Uttar Pradesh, India'

// request({url, json:true}, (error, response) => {
//     const data = response.body
//     console.log(`It is currently ${data.current.temperature} degrees in ${data.location.name}. Precipitation is ${data.current.precip}`)
// })

const weatherData = (place, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e2cf4a92b4db0cfd0f66237191ec38d4&query=${place}`

    request({url}, (error, response) => {

        if(error) {
            console.log('Unable to connect to weather services')
        // } else if(response.body.error) {
        //     console.log('abc')
        } else {
            const data = JSON.parse(response.body)
            const temp = data.current.temperature

            callback(undefined, temp)
        }
        
    })
}

// weatherData('Mathura', (error, tempData) => console.log(tempData))

module.exports = weatherData