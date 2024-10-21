let blurr, TimeContainer, elements, Time, controls, start, reset,hours,minutes,seconds;
blurr = $(".blurr");
TimeContainer = $(".TimeContainer");
elements = $(".elements");
Time = $(".Time");
controls = $(".controls");
reset = $(".reset ion-icon");
start = $(".start");
hours = $(".hours");
minutes = $(".minutes");
seconds = $(".seconds");


let start2 = $(".start ion-icon");
let currentSecond = 0;
let intervalID = 0;
let IntervalId2 = 0;
let reverseSecond,reverseMinute,reverseHour;
let audio = new Audio("../StopWatch day-11/audio/clock-alarm-8761.mp3");
let reversed = false;

function getBack()
{
window.$(document).on("dblclick",function(){
    $(".popUpTimeRequest").animate({"width":"360px","height":"0px","opacity":"0"},1000);
});
}
 
function stopWatch()
{
    start.on("click",function(){
        if(start2.attr("name")==="play-outline")
        {;
        start2.attr("name","pause-outline");
        reset.removeClass("hidden");
        controls.addClass("gap-7");
        intervalID = setInterval(function(){
            currentSecond = currentSecond + 1;
           if(currentSecond === 60)
           {
                currentSecond = 0;
                minutes.text((parseInt(minutes.text())+1).toString().padStart(2,"0"));
            } 
             seconds.text(currentSecond.toString().padStart(2,"0"));

            if(parseInt(minutes.text()) === 60)
            {
                minutes.text("00");
                hours.text((parseInt(hours.text())+1).toString().padStart(2,"0"));
            }

    },1000);
    
}

    else
    {
        start2.attr("name","play-outline");
    if(intervalID)
    {
        clearInterval(intervalID);
    }
       

    };          
       
 });
reSet();
 
}

function reSet()
{
    reset.on("click",function()
    {
        currentSecond = 0;
        controls.removeClass("gap-7");
        reset.addClass("hidden");
        
        seconds.text("00");
        minutes.text("00");
        hours.text("00");
        start2.attr("name","play-outline");
        clearInterval(intervalID);
    })
}

function hovereffect()
{


    TimeContainer.on("mouseover",function()
    {
        blurr.addClass("-translate-x-7 -translate-y-7");
    })
    TimeContainer.on("mouseleave",function()
    {
        blurr.removeClass("-translate-x-7 -translate-y-7");
    });
}

function popUp()
{
    $(".settime").on("click",function()
    {
        setTimer();
        reversePause();
    });


    $(".setTimer").on("click",function()
    {
        $(".popUpTimeRequest").animate({"width":"360px","height":"260px","opacity":"1"},"slow");
        getBack();
        
        
     });
    

};


function setTimer()
{
    $(".popUpTimeRequest").animate({"width":"360px","height":"0px","opacity":"0"},1000);
    $(".blurhour").text($("#hours").val());
    $(".blurminute").text($("#minutes").val());
    $(".blursec").text($("#seconds").val());

    $(".blurr3").addClass("md:scale-[0.78] lg:scale-[1] scale-[0.69]");
    $(".blurr2").addClass("md:translate-x-80 md:scale-[0.78] lg:scale-[1] translate-y-40 scale-[0.69]");
    $(".blurr").addClass("md:-translate-x-80 md:scale-[0.78] lg:scale-[1] -translate-y-40 scale-[0.69]");
    TimeContainer.remove();
    $(".setTimmer").addClass("gap-6");
    $(".resett").removeClass("hidden");
    reverseSecond = parseInt($("#minutes").val());
    reverseHour = parseInt($("#hours").val());
    reverseMinute = parseInt($("#seconds").val());
    if(reverseSecond>60 || (reverseMinute>60 || reverseHour<24) || reverseHour>24)
    {
        limitation();
    }
    else
    {
        reverseInterval();
    }
   
    

  
    


}

function limitation()
{
     if(reverseSecond>60 && reverseMinute>60)
     {
         // updating of hours
        reverseHour = Math.floor(reverseMinute/60);
        reverseMinute = reverseSecond%60 + Math.floor(reverseSecond/60); // updating of minutes 
        reverseSecond = reverseSecond % 60 + Math.floor(reverseSecond/60);
    
        // updating of seconds
        reverseInterval();
     }
  else if(reverseMinute>60)
  {
    reverseHour = Math.floor(reverseMinute/60);
    if(reverseHour>24)
    {
          alert("Not allowed your exceed the 24 hours limit please check");
          resetTimerDisplay();

    }else{
        reverseHour = Math.floor(reverseMinute/60);
        reverseMinute = reverseMinute % 60; // exceeding of 60 minutes
        reverseSecond = reverseMinute % 60;
        reverseInterval();

    }
        


    }else if(reverseSecond>60)
    {
        reverseMinute = Math.floor(reverseSecond/60); // exceeding of 60 seconds
        if(reverseMinute>60)
        {
            reverseHour = Math.floor(reverseMinute/60);
            reverseMinute= reverseMinute % 60;
            reverseSecond = reverseMinute % 60;
            reverseInterval();
        }else
        {
        reverseSecond=reverseSecond%60;
        reverseInterval();
       }
        

    }
    else
    {
        reverseInterval();
    }
}



        function reverseInterval()
        {
            IntervalId2 = setInterval(function(){
                if(reverseHour === 0 && reverseMinute === 0 && reverseSecond === 0)
                {
                    clearInterval(IntervalId2);
                    audio.play();
                    alert("Time is up");
                    resetTimerDisplay();
                    
                };
                 reverseSecond=reverseSecond-1;
               
                if(reverseSecond === -1)
                {
                    reverseSecond += 60;
                    reverseMinute-=1;
                   
                }
              
                
                if(reverseMinute === -1)
                {
                        reverseMinute = 59;
                        reverseHour-=1;
                        

                }

                $(".blurminute").text((reverseSecond).toString().padStart(2,"0"));
                $(".blursec").text(reverseMinute.toString().padStart(2,"0"));
                $(".blurhour").text(reverseHour.toString().padStart(2,"0"));
                
                 
        

          
        
            },1000);

            }
            
            
     
            
 function resetTimerDisplay()
 {
    $(".blurminute").text("00");
    $(".blursec").text("00");
    $(".blurhour").text("00");

    $(".blurr3").removeClass("md:scale-[1] lg:scale-[1] scale-[0.69] xl:scale-[2]");
    $(".blurr2").removeClass("md:translate-x-80 md:scale-[1] translate-y-40 scale-[0.69]");
    $(".blurr").removeClass("md:-translate-x-80 md:scale-[1] -translate-y-40 scale-[0.69]");

    window.location.reload(true);
 }           

    
function reversePause()
{
    $(".setTimer").text("Back");
    $(".setTimer").on("click",resetTimerDisplay);
   $(".resett").on("click",function(){
       if(!reversed)
       {
           clearInterval(IntervalId2);
           $(".resett").text("Resume");
           
           reversed = true;
       }else
       {
           reverseInterval();
           $(".resett").text("Pause");
           reversed = false;
       }
   })


}

popUp();
stopWatch();
hovereffect();
