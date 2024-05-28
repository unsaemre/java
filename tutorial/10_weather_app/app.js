// api_key = e253190d56f69d5ca020ee85534bb851
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

class weatherApp {
    constructor() {
        this.API_KEY = `e253190d56f69d5ca020ee85534bb851`
        this.city = document.querySelector('.city')
        this.des = document.querySelector('.des')
        this.degree = document.querySelector('.degree span')
        this.icon = document.querySelector('.icon')
        this.init()
    }

    paintWeather(data) {
        this.city.innerText = data.name
        this.des.innerText = data.weather[0].description
        this.degree.innerText = data.main.temp
    }

   async fatchDeta (baseURL){
        const res = await fatch(baseURL)
        const data = await res.json()
        this.paintWeather(data)
    }

    init() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position);

                const lat = position.coords.latitude
                const lon = position.coords.longitude
                
                const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_kEY}`

                this.fatchDeta(baseURL)
            })
          }
    }
}

const weather = new weatherApp()