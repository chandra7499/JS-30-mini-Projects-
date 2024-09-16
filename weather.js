let imageContainer = $('.img');
let WeatherImage = $('.img img');
let searchContainer = $('.search');
let search = $("#search");
let searchBtn = $("#searchbtn");
let celsious = $('.celsious h2');
let country = $(".country h3");
const humidity = $('.humidity .image img');
const humidityRate = $('.humidity .para .mainpara');
const humidityText = $('.humidity .para .mainpara p');
const windSpeed = $('.windspeed .image img');
const windSpeedRate = $('.windspeed .para .mainpara');
const windSpeedText= $('.windspeed .para .mainpara p');


function close()
{
    $(".main").css("display","none");
    $("body").css("height","15vh");
   
}

function expand()
{
  
  $(".main").css("display","flex");
  $("body").height("61.05vh");
  $(".title h1").text("Weather App");
  
  
  
   
}

close();








searchBtn.on("click",()=>{
    const searchVal = search.val().trim().toLowerCase();
    
    function fetchData(city)
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94335e19b455e0d9cc0c8f4f8ca12927`)
        .then(response =>{ 
          if(!response.ok)
          {
            throw new Error("city not found");
          }
          return response.json()})
        .then(data => {
         if(data.name.toLowerCase() === searchVal){
          expand();
         
            
          let tempp = (Math.round(data.main.temp-273.15));
           celsious.text(tempp+'°C');
            windSpeedRate.text(data.wind.speed+'Km/h');
            humidityRate.text(data.main.humidity+'%');
            country.text(data.name+'('+data.sys.country+')');
            let weatherCondition = data.weather[0].main.toLowerCase();
                
            switch (weatherCondition) {
                case 'clouds':
                    WeatherImage.attr("src", "./images/clouds.png");
                    break;
                case 'rain':
                    WeatherImage.attr("src", "./images/rain.png");
                    break;
                case 'drizzle':
                    WeatherImage.attr("src", "./images/drizzle.png");
                    break;
                case 'clear':
                    WeatherImage.attr("src", "./images/clear.png");
                    break;
                default:
                    WeatherImage.attr("src", "./images/clouds.png");
                    break;
            }
          
          }

              else
              {
                  close();
                  $(".title h1").text("Invalid city");
              }
            

              
              
               
             


              

               
                    
           
            

        })
         .catch(err=>{
            console.log("error:"+err);
            close();
            $(".title h1").text("Invalid city");
          
         })

        
        
        
    }

    fetchData(searchVal);
    search.val("");
    
   
    
})

$(document).on("keypress",(e)=>{

    if(e.keyCode===13)
    {
       
        searchBtn.click();
    }

})












