var tempOption = '';
var place = document.getElementById("place");
var temp_Grp = document.getElementsByName("tempOption");
// capitalizing the city names
var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
// geeting the unit
for (var i = 0; i < temp_Grp.length; i++) {
  if (temp_Grp[i].checked) {
    tempOption = temp_Grp[i].value;
  }
}
// const tempOption = document.querySelector(tempOption).value();
// start of thw async function
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
      switch  (tempOption) {
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