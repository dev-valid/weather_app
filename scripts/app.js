const cityForm = document.querySelector(".change-location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const forecast = new Forecast();


const updateUI = (data) => {
    let {cityDets, weather} = data;
    weather = weather[0];

    // update details template
    details.innerHTML = `
    <h3 class="card-title text-center">
        <i class="fa-solid fa-location-dot fs-5 text-white-50"></i>
        ${cityDets.EnglishName}
    </h3>
    <div class="temperature my-3 text-center">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    <div class="icon position-center bg-secondary">
        <img src="img/icons/${weather.WeatherIcon}.svg" alt="weather icon" class="w-100 h-100">
    </div>
    <span class="position-center w-100 text-center top-50">${weather.WeatherText}</span>
    `;
    
    // update the night/day background image
    if (weather.IsDayTime) {
        card.classList.remove('night');
        card.classList.add('day');
    }
    else
    {
        card.classList.remove('day');
        card.classList.add('night');
    }

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
};

cityForm.addEventListener("submit" , e => {
    
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem("city", city);    

});

if (localStorage.getItem("city")) {
    forecast.updateCity(localStorage.getItem("city"))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}
