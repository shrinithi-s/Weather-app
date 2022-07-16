const temperature=document.getElementById("temperature")
const description=document.getElementById("description")
const icon=document.getElementById("icon")
const heading=document.getElementById("city")

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    reset()
    const searchTerm = form.elements.city.value;
    const ApiKey="Your api key";
    try {
        const config = { params: { q: searchTerm,appid:ApiKey,units:"metric" } }
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, config);
        create(weatherData.data)
      } catch (e) {
        console.log("Invalid City Name :(");
        description.innerText=`Invalid City Name :(`
      }
    form.elements.city.value = '';
})

const create = (result) => {
    const myImg=result.weather[0].icon
    const temp=result.main.temp
    const des=result.weather[0].description
    const imgSrc=`http://openweathermap.org/img/wn/${myImg}@2x.png`
    heading.innerText=`${result.name}`
    temperature.innerText=`${temp} degree celcius`
    description.innerText=`${des}`
    icon.setAttribute('src',imgSrc)
}

const reset=()=>{
    heading.innerText=""
    temperature.innerText=""
    description.innerText=""
    icon.setAttribute('src',"") 
}

