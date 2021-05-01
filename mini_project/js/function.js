let weatherImage = document.querySelector('.weather-image');
let weatherText = document.querySelector('.weather-text');
let weatherTempCurrent = document.querySelector('.weather-temp-current span');
let weatherTempMin = document.querySelector('.weather-temp-minmax .min');
let weatherTempMax = document.querySelector('.weather-temp-minmax .max');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=38839cb93ff3097889b4eba2996ff3d5')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        console.log(myJson.weather[0].main);
        console.log(myJson.weather[0].icon);
        console.log(myJson.main.temp - 273.15);
        console.log(myJson.main.temp_max - 273.15);
        console.log(myJson.main.temp_min - 273.15);

        // 10, 21 => 1021 || 10 + 21 => 31 || '10' + '21' => '1021'
        weatherImage.src = '../images/' + myJson.weather[0].icon + '@2x.png';

        weatherText.innerHTML = myJson.weather[0].main;

        weatherTempCurrent.innerHTML = Math.floor(myJson.main.temp - 273.15);

        weatherTempMin.innerHTML = Math.floor(myJson.main.temp_min - 273.15);

        weatherTempMax.innerHTML = Math.floor(myJson.main.temp_max - 273.15);

    }); // method chaining
