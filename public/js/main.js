const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById("cityName");
const city_Name = document.getElementById("city_Name");
const temperature = document.getElementById("temperature");
const tempStatus = document.getElementById("temp_status");
const degree = document.getElementById("degree");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_Name.innerHTML = "Please write something before search"
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3a1a96669db4cec724d7ec43e0bce329`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData)
            temperature.style.visibility = "visible";
            tempStatus.style.visibility = "visible";
            degree.innerHTML = arrData[0].main.temp;
            tempStatus.innerHTML = arrData[0].weather[0].main;
            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == 'Clear') {
                tempStatus.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }
            else if (tempMood == 'Clouds') {
                tempStatus.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`
            }
            else if (tempMood == 'Rain') {
                tempStatus.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`
            }
            else {
                tempStatus.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }
        }
        catch (error) {
            city_Name.innerHTML = "Please enter the city name properly"
        }

    }
}

submitBtn.addEventListener('click', getInfo);


