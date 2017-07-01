function getWeatherForecast() {
    var forecast = jQuery(".forecast")
    var zipCode = jQuery(".zipCode").val()
    //call back function to present said JSON data to the user.
    //PHP code is stored on localhost:8080 and serves as the processing backend
    jQuery.getJSON("http://arctic-leaf-15909.herokuapp.com/forecast/" + zipCode, function (data) {
        console.log(data)
        forecast.html("Today's Temp: " + data.main.temp + " &#x2109;<br>Humidity: "
            + data.main.humidity + " %<br>Pressure: " + data.main.pressure + " Pa")
    })
}