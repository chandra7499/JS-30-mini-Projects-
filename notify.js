let btn1,btn2,btn3;
let successToast,para,background;
successToast=$(".successtoast");
background=$(".toast-container");
para = $(".para");
btn1 = $(".btn1");
btn2 = $(".btn2");
btn3 = $(".btn3");

btn1.on("click", function(){
    successNote();
});

btn2.on("click", function(){
    warningNote();
});

btn3.on("click", function(){
    errorNote();
});


function animate(toast){
    let progressBar = toast.find(".prograss");
    let width = 100;
    
    let left = 80;

   let setLeft =  setInterval(() => {
        left--;
        toast.addClass("left-"+left);
        if(left<=0){
            clearInterval(setLeft);
            interval;

        }
    },);

    const interval = setInterval(()=>{
        width--;
      progressBar.width(width+"%");
     
      if(width<=-7){
           
            clearInterval(interval);
            toast.remove();
          
     
     
    
    }
    },90.5);
   


  

}





function successNote(){
      
      let toast= $('<div class="successtoast w-[100%] scale-75 bg-white h-14 rounded-[3.4px] flex flex-col  flex-shrink-0 justify-center left-full relative  transition-all ease-linear duration-500 md:w-[auto] lg-w-[auto]  xl:w-[auto]"><span class="font-serif h-[100%]  w-full text-green-600 text-3xl flex justify-center pl-5 "><ion-icon class="absolute left-0  bottom-4 animate-bounce" name="checkmark-done-circle"></ion-icon>Success</span><div class="prograss  w-full h-3 bg-green-500 transition-all ease-linear duration-700   rounded-full"></div></div>');
      animate(toast);
     background.append(toast);
     
     
      
     
   
        
        
}

function warningNote(){
   
        let toast= $('<div class="successtoast w-[auto] bg-white scale-75 h-14 rounded-[3.4px] flex flex-col  flex-shrink-0 justify-between left-full relative  md:w-[auto] transistion-all ease-linear duration-500 lg-w-[auto] xl:w-[auto]"><span class="font-serif  h-[100%] w-full text-yellow-600  text-2xl flex  justify-center items-center pl-8"><ion-icon class="absolute left-0 bottom-5   animate-ping" name="alert-circle"></ion-icon>Warning</span><div class="prograss transition-all ease-linear duration-700 w-full h-3 bg-yellow-500 rounded-full"></div></div>');
        background.append(toast);
        animate(toast);
     
     
    
}

function errorNote(){
  
    let toast= $('<div class="successtoast w-[100%] bg-white scale-75 h-14 left-full rounded-[3.4px] flex flex-col  flex-shrink-0 justify-center relative  transition-all ease-linear  duration-500 md:w-[auto] lg-w-[auto] xl:w-[auto]"><span class="font-serif h-[100%] w-full text-red-600 text-3xl flex justify-center "><ion-icon class="absolute left-0 bottom-5 animate-pulse" name="bug"></ion-icon>Error</span><div class="prograss transition-all ease-linear duration-700 w-full h-3 bg-red-500 rounded-full"></div></div>');
    background.append(toast);
    animate(toast);
    
}