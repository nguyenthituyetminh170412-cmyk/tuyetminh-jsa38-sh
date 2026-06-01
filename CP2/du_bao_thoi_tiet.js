const apiKey = "27f6ff89481e587080fdd1b178f1616c";


function getWeatherByCity() {

    let city = document.getElementById("cityInput").value.trim();


    if (city === "") {
        document.getElementById("weatherResult").innerHTML = `
            <p style="color:red;">⚠️ Vui lòng nhập tên thành phố</p>
        `;
        return;
    }

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`;

    fetch(url)
    .then(response => response.json())
    .then(data => {


        if (data.cod == "404") {
            document.getElementById("weatherResult").innerHTML = `
                <p style="color:red;">❌ Không tìm thấy thành phố</p>
            `;
            return;
        }


        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡️ Nhiệt độ: ${data.main.temp}°C</p>
            <p>☁️ Thời tiết: ${data.weather[0].description}</p>
            <p>💧 Độ ẩm: ${data.main.humidity}%</p>
            <p>💨 Tốc độ gió: ${data.wind.speed} m/s</p>
        `;

    })
    .catch(error => {

        document.getElementById("weatherResult").innerHTML = `
            <p style="color:red;">⚠️ Có lỗi xảy ra</p>
        `;

        console.log(error);

    });

}



function getWeatherByLocation() {

    navigator.geolocation.getCurrentPosition(function(position){

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=vi`;

        fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡️ Nhiệt độ: ${data.main.temp}°C</p>
                <p>☁️ Thời tiết: ${data.weather[0].description}</p>
                <p>💧 Độ ẩm: ${data.main.humidity}%</p>
                <p>💨 Tốc độ gió: ${data.wind.speed} m/s</p>
            `;

        })
        .catch(error => {

            document.getElementById("weatherResult").innerHTML = `
                <p style="color:red;">⚠️ Không lấy được vị trí</p>
            `;

            console.log(error);

        });

    });

}