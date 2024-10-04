let Qr = $(".QrContainer");
let userInput = $(".input");
let btn = $(".btn");
const container = $(".sub-container"); 
const qrContainer = $(".QrContainer");
const qrr = $(".qrr");
qrr.removeClass("h-[25vh]");


btn.on("click",function()
{
    if(userInput.val()===""){
        alert("Please Enter Text or URL");
    } else
    {
       Api();
    };
     
     
     
});

async function Api()
{
     try{
          const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.val()}`;
          await qrr.attr("src",qrLink).on("load",function(){
              $(".loading").text("Loading...");
              
              setTimeout(()=>{
               $(".loading").addClass("hidden");
               $(".qrr").addClass("h-[25vh]");
               $(".qrr").removeClass("hidden");
              },2000);
             
          });

          qrr.on("error",function()
          {
               console.log("Error loading image");
          })
          
     }catch(error)
     {
          console.log(error.message);
     }

      
}