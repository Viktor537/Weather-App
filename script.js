  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".search-btn");

  async function getCoordinates() {
    
    const city = searchBar.value;

    if(city.trim() === "" ) {
      return;
    }

    searchBar.value = "";

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=9f85d6ba6e32a4a0bae08cf9ed0a95ec`);
    const data = await response.json();

    if (data.length === 0) {
      alert("Такъв град не е намерен")
      return;
    }

    return({
      lat:data[0].lat,
      lon:data[0].lon,
      name:data[0].name,
    }
  )
}
  async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9f85d6ba6e32a4a0bae08cf9ed0a95ec`)
     if (!response.ok) {
      return;
    }
    const data = await response.json();
    return(data);

  };
  searchBtn.addEventListener("click", async () => {
    const coords = await getCoordinates();
    
    if (!coords) {
      console.log("Въведете град")
      return;
    }

    const data = await getWeather(coords.lat, coords.lon);

    if(!data ||!data.main || !data.main.temp|| !data.weather || !data.weather[0].main) return;

    const town = document.querySelector("#town")
    const degrees = document.querySelector("#degrees")
    const weather = document.querySelector("#weather")

    document.querySelector("#town").innerText = `Town: ${data.name}`;
    document.querySelector("#degrees").innerText = `Degrees: ${data.main.temp} °C`;
    document.querySelector("#weather").innerText = `Weather: ${data.weather[0].main}`;
  })
