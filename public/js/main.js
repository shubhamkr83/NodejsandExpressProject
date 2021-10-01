const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=523df27c7c6211cb898451283d346719`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;

            if (tempStatus == "Sunny") {
                weathercon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            } else if (tempStatus == "Clouds") {
                weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #eccc68'></i>";
            } else if (tempStatus == "Rainy") {
                weathercon.innerHTML = "<i class='fas fa-cloud-rain' style='color: #eccc68'></i>";
            } else {
                weathercon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener("click", getInfo);