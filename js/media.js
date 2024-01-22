var countrylist = [];
var searchInput = document.getElementById("searchInput");
var rowData = document.querySelector("rowData");
var finalResult;
var matchedWeather;

async function getWeather() {
  if (searchInput.value.length === 0) {
    var apiResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a675922634cc48a3b3090556231211&q=cairo&day=3`
    );
    finalResult = await apiResponse.json();
    display(finalResult);
  }
}

getWeather();
function display(x) {
  let months = ["january","february","mars","april","may","june","july","august","september","october","november","december"]
  let today = new Date(x.forecast.forecastday[0].date);
  today[0] = today.toLocaleDateString("en-US", { weekday: "long" });
  let dayNum = today.toString().split(" ")
// console.log(dayNum[2]);

  var box = `<div class="cards d-flex justify-content-center">
  <div class="card mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
  <div class="cardHeader d-flex justify-content-between ms-2 me-2 my-2">
      <h5 class="day">${today[0]}</h5>
      <h5 class="date">${dayNum[2]} ${months[today.getMonth()]}</h5>
  </div>
  <div class="card-body">
      <h5 class="card-title fw-light">${x.location.name}</h5>

      <div class="d-flex mt-4 fw-bolder">
       <h1 class="card-text fs-1">${x.current.temp_c}</h1> 
       <p>o</p>
       <h5 class="card-title fs-1">C</h5>
       <img src="${x.current.condition.icon}" class="ms-4"/>
      </div>

      <h5 class="card-title fw-bolder text-blue fs-6 mt-4">${x.current.condition.text}</h5>

      <div class="d-flex justify-content-between align-items-center mt-4">
        <h5 class="card-title fw-bolder fs-6 mx-2"><i class="fa-solid fa-umbrella"></i> ${x.current.humidity}%</h5>
        <h5 class="card-title fw-bolder fs-6 mx-2"><i class="fa-solid fa-wind"></i> ${x.current.wind_kph} Km/h</h5>
        <h5 class="card-title fw-bolder fs-6 mx-2"><i class="fa-regular fa-compass"></i> ${x.current.wind_dir}</h5>
      </div>


  </div>
  </div>
  <div class="card today mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
      <div class="cardHeader text-center my-2">
          <h5 class="day">${today[0]}</h5>
      </div>
      <div class="card-body">
        <div class="d-flex mt-4 fw-bolder justify-content-center">
          <h1 class="card-text fs-1">${x.forecast.forecastday[0].day.maxtemp_c}</h1> 
          <p>o</p>
          <h5 class="card-title fs-1">C</h5>
        </div>
        <div class="d-flex mt-4 justify-content-center">
          <h5 class="card-text fs-3">${x.forecast.forecastday[0].day.mintemp_c}</h5> 
          <p>o</p>
          <h5 class="card-title fs-3">C</h5>
       </div>
          <h5 class="card-title text-center fw-bolder my-3 fs-6">${x.forecast.forecastday[0].day.condition.text}</h5>
      </div>
  </div>
  <div class="card mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
      <div class="cardHeader text-center my-2">
          <h5 class="day">${today[0]}</h5>
      </div>
      <div class="card-body">
        <div class="d-flex mt-4 fw-bolder justify-content-center">
          <h1 class="card-text fs-1">${x.forecast.forecastday[0].day.maxtemp_c}</h1> 
          <p>o</p>
          <h5 class="card-title fs-1">C</h5>
        </div>
          
        <div class="d-flex mt-4 justify-content-center">
          <h5 class="card-text fs-3">${x.forecast.forecastday[0].day.mintemp_c}</h5> 
          <p>o</p>
          <h5 class="card-title fs-3">C</h5>
        </div>
        <h5 class="card-title text-center fw-bolder my-3 fs-6">${x.forecast.forecastday[0].day.condition.text}</h5>
      </div>
  </div>
  </div>`;

  //   for (var i = 0; i < finalResult.length; i++) {

  //     // box = `
  //     // <div class="cards d-flex justify-content-center">
  //     // <div class="card mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
  //     // <div class="cardHeader d-flex justify-content-between ms-2 me-2 my-2">
  //     //     <h5 class="day">day</h5>
  //     //     <h5 class="date">date</h5>
  //     // </div>
  //     // <div class="card-body">
  //     //     <h5 class="card-title">${finalResult[i].location.country}</h5>
  //     //     <p class="card-text">${finalResult[i].current.temp_c}</p>

  //     // </div>
  //     // </div>
  //     // <div class="card today mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
  //     //     <div class="cardHeader text-center my-2">
  //     //         <h5 class="day">day</h5>
  //     //     </div>
  //     //     <div class="card-body">
  //     //         <h5 class="card-title">Special title treatment</h5>
  //     //         <p class="card-text">With supporting text below as a natural lead-in to additional content.
  //     //         </p>
  //     //     </div>
  //     // </div>
  //     // <div class="card mx-2 text-white col-lg-4 col-md-6 p-0 mb-3">
  //     //     <div class="cardHeader text-center my-2">
  //     //         <h5 class="day">day</h5>
  //     //     </div>
  //     //     <div class="card-body">
  //     //         <h5 class="card-title">Special title treatment</h5>
  //     //         <p class="card-text">With supporting text below as a natural lead-in to additional content.
  //     //         </p>
  //     //     </div>
  //     // </div>
  //     // </div>
  //     // `;
  //   }
  //   console.log(finalResult);
  document.getElementById("rowData").innerHTML = box;
}

var SearchForm = document.getElementById("SearchForm");

SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search(searchInput.value);
});

// (element)=>{Function}

async function search(value) {
  if (value.length > 0) {
    apiResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a675922634cc48a3b3090556231211&q=${value}&day=3`
    );
    finalResult = await apiResponse.json();
    display(finalResult);
  }

  // var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a675922634cc48a3b3090556231211&q=${value}&day=3`);
  // finalResult = await apiResponse.json();
  //  display(finalResult)
  // matchedWeather=[];
  // for(var i = 0; i<finalResult.length; i++)
  // {
  //     if(finalResult[i].country.toLowerCase().includes(value.toLowerCase())== true)
  //     {
  //         matchedWeather.push(finalResult[i])
  //     }
  // }
  // display(matchedWeather)
}
