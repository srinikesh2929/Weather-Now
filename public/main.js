async function myfunc() {
  var input = document.getElementById("city").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=49fd6f61e2b89421e0c3b527bc26efd6";
    try {
        var response = await fetch(url);
        var responseJSON = await response.json();
        var place = input + " , " + responseJSON.sys['country'];
        var weather = responseJSON.weather[0]['main'];
        var tempinC = (responseJSON.main['temp'] - 273.15).toFixed(2) + " C";
        var output = " " + place + " " + weather + " " + tempinC;
        var info = document.getElementById("info");
        info.innerHTML = output;
    } catch(err) { 
        alert('Please type a city name or Check your internet connection');
    }
  var icon = await responseJSON.weather[0]['icon'];
  var iconImage = await "http://openweathermap.org/img/wn/"+ icon + "@4x.png";
  var image = document.getElementById("icon");
  image.src = iconImage;
  document.getElementById("output").style.visibility = "visible";
  
}