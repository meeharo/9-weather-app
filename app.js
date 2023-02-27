var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temperature = document.querySelector('.temperature .value')
var cloud = document.querySelector('.short-desc')

var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var content = document.querySelector('.content')

async function changeWeatherUI (input) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(apiURL).then(res => res.json())

    console.log(data)

    if (data.cod == 200) {
        content.classList.remove('hide')

        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        time.innerHTML = new Date().toLocaleString()
        const temp = Math.round(data.main.temp)
        temperature.innerHTML = temp + '*C'
        cloud.innerHTML = data.weather[0] ? data.weather[0].main : ''
    
        visibility.innerHTML = data.visibility + '(m)'
        wind.innerHTML = data.wind.speed + '(m/s)'
        sun.innerHTML = data.main.humidity + '(%)'

        temp >= 20
            ? (document.body.className = 'hot')
            : (document.body.className = 'cold')

    } else {
        content.classList.add('hide')
    }
        

}
search.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        changeWeatherUI(e.target.value)
    }
})

changeWeatherUI('Ha Noi')