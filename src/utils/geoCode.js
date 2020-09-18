const request = require('request')

// const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/77.67,27.49.json?access_token=pk.eyJ1IjoiamFpc3JpcmFtIiwiYSI6ImNrYXBlNDY4aTF4N3Eyc3A2b2JoNm9uejkifQ.jdhsT7U0eE27mT5Y8Aa6AA'

// request({url: geoURL}, (error, response) => {
//     const data = JSON.parse(response.body)

//     console.log(data.features[0].place_name)
//     console.log(data.features[0].text)
// })

const geoData = (longitude, latitude, callback) => {
    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoiamFpc3JpcmFtIiwiYSI6ImNrYXBlNDY4aTF4N3Eyc3A2b2JoNm9uejkifQ.jdhsT7U0eE27mT5Y8Aa6AA`

    request({url: geoURL}, (error, response) => {
        if(error) {
            console.log('Unable to connect to weather services')
        // } else if(response.body.error) {
        //     console.log('abc')
        } else {
            const data = JSON.parse(response.body)
            const name = data.features[0].place_name
            // console.log(data.features[0].text)
            callback(undefined, name)
        }
    })
}

module.exports = geoData
