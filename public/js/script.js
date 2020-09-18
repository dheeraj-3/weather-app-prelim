// console.log('123')

// fetch('http://localhost:3000/weather?longitude=79.35&latitude=13.68').then( response => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })

const formInput = document.querySelector('form')

formInput.addEventListener('submit', e => {
    e.preventDefault()
    const longitude = formInput.querySelector('#long').value
    const latitude = formInput.querySelector('#lat').value
    
    console.log(longitude, latitude)
    fetch(`http://localhost:3000/weather?longitude=${longitude}&latitude=${latitude}`).then( response => {
    response.json().then(data => {
        const temperatureResult = data.temperature
        // console.log(temperature)

        const resultDiv = document.querySelector('#result')
        resultDiv.textContent = ''

        const elementh1 = document.createElement('h1')
        elementh1.textContent = `The temperature is ${temperatureResult}`
        // const resultDiv = document.querySelector('#result')
        resultDiv.appendChild(elementh1)
    })
})
})