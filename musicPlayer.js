let arrowback,threebar,thumbnail,songname,range,backward,play,forward,scroll,artist,start,end,sidebar,cancle,list,ullist,songs,volume,volumeRange,range2;
arrowback = $(".arrowback");
threebar = $(".threebar");
thumbnail = $(".thumbnail");
songname = $(".songname");
range = $(".range");
backward = $(".backward");
play = $(".play");
forward = $(".forward");
scroll = $(".scroll");
artist = $(".artistname");
start = $(".start");
end = $(".end");
sidebar = $(".sidebar");
cancle = $(".cancle");
list = $(".list");
ullist = $(".ullist");
volume = $(".volume2");
volumeRange = $(".volumeRange");
range2 = $(".range2");

let currentAudio = null;
let index=0;


const thumbnails = [
    {
        
        image:"https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1647840552.JPG",
        title:"Toofan (From 'KGF Chapter 2')",
        artist:" Ravi Basrur, Santhosh Venky, Sachin Basrur, Puneeth Rudranag, Varsha Acharya, Mohan Krishna)",
        audio:"../music player day-10/audiofolder/[iSongs.info] 01 - Toofan.mp3"

        
    },

    {
        image:"https://www.koimoi.com/wp-content/new-galleries/2023/05/ntr-jr-is-raw-intense-and-tough-in-the-first-look-of-devara-001.jpg",
        title:"Fear Song (From devara part-1)",
        artist:"Anirudh ravi chandra,ramajogayya Sastry",
        audio:"../music player day-10/audiofolder/[iSongs.info] 02 - Fear Song.mp3"
       

    },

    {
        image:" https://i.ytimg.com/vi/kt8tIZQvX-E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEvFam7OwkCcIWOSlSipFSGzXYAQ",
        title:"Daavudi (From 'Devara part 1')",
        artist:"Akasa,anirudh ravi chandra,nakash Aziz",
        audio:"../music player day-10/audiofolder/[iSongs.info] 04 - Daavudi.mp3"
    },

    {
        image:"https://c.saavncdn.com/981/Coolie-Disco-From-Coolie-Tamil-2024-20240509170935-500x500.jpg",
        title:"Coolie Disco (From 'Coolie')",
        artist:"anirudh ravi chandra",
        audio:"../music player day-10/audiofolder/Coolie-Disco-From-Coolie-Anirudh-Ravichander-Rajinikanth.mp3"
    },
    {
        image:"https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg",
        title:"Ammayi (From 'ANIMAL')",
        artist:"Raghav chaitanya,Anantha Sreeram,Pritam",
        audio:"../music player day-10/audiofolder/[iSongs.info] 01 - Ammayi.mp3"
    },
    {
        image:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2024/05/01/1399275-pushpa-pushpa-song.png?im=Resize=(1280,720)",
        title:"Pushpa (From 'Pushpa 2 The Rule')",
        artist:"Nakash Aziz,Deepak Blue,Devi Sri prasad",
        audio:"../music player day-10/audiofolder/[iSongs.info] 01 - Pushpa Pushpaa.mp3"
    },
    {
         image:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/07/27/e7r6hduvoaijzis9286321.jpg?w=777&crop=0,10,777px,437px",
         title:"Dosti (From 'RRR')",
         artist:"Amit Trivedi,M.M.Keeravaani,Riya MUkherajee",
         audio:"../music player day-10/audiofolder/Dosti - RRR 320 Kbps.mp3"
    },
    {
        image:"https://pbs.twimg.com/media/GFBBKnzbgAAQWJr.jpg:large",
        title:"Poolamme Pilla (From 'Hanuman')",
        artist:"Gowra Hari,kasaria Shyam",
        audio:"../music player day-10/audiofolder/[iSongs.info] 06 - Poolamme Pilla.mp3"
    }
  

]
    




function changethumbila(){
            thumbnail.attr("src",thumbnails[index].image);
            songname.text(thumbnails[index].title);
            artist.text(thumbnails[index].artist);
            if(currentAudio){
                currentAudio.pause();
                currentAudio.currentTime = 0;
               
            }
            currentAudio = new Audio(thumbnails[index].audio);
            $(".play ion-icon").attr("name","pause-outline"); 
            currentAudio.onloadedmetadata = function(){
               
                end.text(Math.floor((currentAudio.duration)/60).toString().padStart(`2`,"0")+":"+Math.floor((currentAudio.duration)/60*60%60).toString().padStart(2,"0"));
                range.attr("max",currentAudio.duration);
               
            
            };

            currentAudio.ontimeupdate = function(){
                range.val(currentAudio.currentTime);
                start.text(Math.floor((currentAudio.currentTime)/60).toString().padStart(2, "0")+":"+Math.floor((currentAudio.currentTime)/60*60%60).toString().padStart(2,"0"));
                
    
            };
           
           
          currentAudio.onended = function(){
           changethumbila();
           index = (index+1)%thumbnails.length;
         

             
             
             
          };
          
          setTimeout(function(){
            currentAudio.play();
          },1000);
          
          
      
       
         



  
};

function playNext(){
    thumbnail.on("click",function(){
        changethumbila();
        index = (index+1+thumbnails.length)%thumbnails.length;
       
      
 });
 
};

function playPrevious(){
    arrowback.on("dblclick",function(){
        index = (index-1+thumbnails.length)%thumbnails.length;
        changethumbila();
       
      
 });
};


playPrevious(); 


 






let debounce = false;

function controlers(debounce){
    

    $(".play ion-icon").on("click",function(){
        if(debounce){return};
        debounce = true;
         
        setTimeout(function(){
            debounce = false;
        },300);

         let currentIcon = $(this).attr("name");
         if(currentIcon === "play-outline"){
             $(this).attr("name","pause-outline");
            if(currentAudio){currentAudio.play()};
         }else{
            $(this).attr("name","play-outline");
            
            if(currentAudio){currentAudio.pause()};
         }
    });
    
}


function updatetime(){
    range.on("input",function(){
        if(currentAudio){currentAudio.currentTime = range.val()};
      
    })


    forward.on("click",function(){
        if(currentAudio){currentAudio.currentTime = currentAudio.currentTime+5};
    });
    backward.on("click",function(){
        if(currentAudio){currentAudio.currentTime = currentAudio.currentTime-5};
    })
}


function sideBar(){
    threebar.on("click",function(){
          sidebar.addClass("w-[49%]");
});

    cancle.on("click",function(){
        sidebar.removeClass("w-[49%]");
    

    });

   thumbnails.forEach(function(value){
         ullist.append(`<li class="list mb-3 flex flex-row "><img src="${value.image}" class="listImage w-[65px] h-[65px] object-fit mr-2" style="border-radius: 50%"><div class="songname text-lg text-gray-500 text-center w-full text-nowrap mb-5"><marquee direction="left" scrollamount="3" >${value.title}</marquee></div></li>`)
        ullist.children().each(function(i){
        $(this).on("click",function(){
              index =i;
             changethumbila();
        });
       
        });
      
   });
    
   
}

function volumeAdjust(){

           volume.on('click', rangeVisible);

           function rangeVisible(event){
          
                range2.toggle("hidden");
               
           }  

           
            
          
        
        // if(currentAudio.volume===1){volume.attr("name","volume-mute-outline");
        // currentAudio.volume = 0;}
        // else {volume.attr("name","volume-high-outline");
        // currentAudio.volume = 1;}
};


    range2.on("input",function(){
        if(currentAudio)
        {currentAudio.volume = range2.val()/100;
           
           if(currentAudio.volume===0){
               volume.attr("name","volume-mute-outline");
           }else if(currentAudio.volume>0 && currentAudio.volume<=0.25){
               volume.attr("name","volume-low-outline");
           }else if(currentAudio.volume>0.25 && currentAudio.volume<=0.75){
               volume.attr("name","volume-medium-outline");
           }else{
               volume.attr("name","volume-high-outline");
           }

        }
    })










controlers();
volumeAdjust();
updatetime();
playNext();
sideBar();


