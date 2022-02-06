var place = document.getElementById("place");
var temp = document.getElementById("temp");
var capitalizeString=(str)=>str[0].toUpperCase()+str.slice(1).toLowerCase()
// const tempOpt=prompt("Do you want temperature in Celsius or Farenheit?(type C or F)");
async function myfunc() {
  var input = capitalizeString(document.getElementById("city").value);
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=49fd6f61e2b89421e0c3b527bc26efd6";
    try {
        var response = await fetch(url);
        var responseJSON = await response.json();
        var placeV = input + " , " + responseJSON.sys['country'];
        var weather = responseJSON.weather[0]['main'];
        var tempInC = (responseJSON.main['temp'] - 273.15).toFixed(2) + " C";
        var tempInF = ((responseJSON.main['temp']-273.15) * 9 / 5 +32).toFixed(2) + " F";
      place.innerHTML = placeV;
      switch (tempOpt) {
        case "c":
          temp.innerHTML = tempInC + " , " + weather;
          break;  
        case "f":
          temp.innerHTML = tempInF + " , " + weather;
          break;
      }
    } catch(err) { 
      alert('Please type a city name or Check your internet connection');
    }
  var icon = await responseJSON.weather[0]['icon'];
  var iconImage = await "http://openweathermap.org/img/wn/"+ icon + "@4x.png";
  var image = document.getElementById("icon");
  image.src = iconImage;
  document.getElementById("output").style.visibility = "visible";
}