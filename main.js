

// Daten von der OpenWeather abfragen
// Webseitendaten aus dem Internet auslesen

const kelvinCovert = (kelvin) => {
    return `${(kelvin - 273.15).toFixed()}°`;
};

// 2 Sachen zu machen
// 1. Eingabe infos bekommen
// 2. onclick --> function durchzuführen 
// Station 1: holen wir die Infos von unserem API
// Method ---> fetchen/holen("URL")
// fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid={API_CODE}`)

const getWeather = () => {
    console.log("is clicked")

    const city = document.getElementById("city").value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ca342c4c6976ce9ec0a15d8f5d0a690`)

        // Station 2: Übersetzten
        // .then machen wir etwas mit unserer Antwort
        // Argument in diesem Fall haben wir es response benannen
        // ist zuerst nicht in der "Sprache", die wir wollen
        // wir brauchen es in Objekt von json deshalb verweden wir diese Methode --->  .json()

        // HINWEIS: unser Argument kann irgenwelcher Name haben
        .then((res) => {
            // console.log(res)
            return res.json()
        })

        // Station 3: Die Infos, die wir wollen, ist jetzt in dem echten Format
        .then((data) => {
            // console.log(data);

            // City Name
            document.getElementById("cityName").innerHTML = data.name;

            // Temperature
            // data.main.temp_max
            document.getElementById("tempMax").innerHTML = kelvinCovert(data.main.temp_max);

            // data.main.temp_min
            document.getElementById("tempMin").innerHTML = kelvinCovert(data.main.temp_min);

        });

}