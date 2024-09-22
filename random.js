let genBtn = $(".generate");
var password = $(".password");
let copy = $(".copy");
let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let alphaS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numa  = [0,1,2,3,4,5,6,7,8,9];
let speacial = ['!','@','#','$','%','^','&','*','(',')','~','?','/','>','<','|'];
let newPassKey = [];



    genBtn.on("click",function(){
       
        newPassKey = [];
        password.val("");
        generationAlpha();
        password.val( arrayShuffle(newPassKey));
    

});

copy.on("click",function(){
    password.select();
    navigator.clipboard.writeText(password.val());
    
});







function generationAlpha(){

for(let i=0; i<3; i++){
    let random = Math.round(Math.random()*25);
    const ranLockAlpha = alpha[random];
    let push =  newPassKey.push(ranLockAlpha);
   
   
}
  generationAlpha2();
};

function generationAlpha2(){
    for(let i=0; i<5; i++){
        let random = Math.round(Math.random()*25);
        const ranLockAlpha2 = alphaS[random];
        let push2 =  newPassKey.push(ranLockAlpha2);
       
       
    }
    generationNuma();
}

function generationNuma()
{
    for(let i=0; i<3; i++){
        let random = Math.round(Math.random()*9);
        const Numa = numa[random];
        let push3 =  newPassKey.push(Numa);
        
       
    }

    generationSpecial();

}

function generationSpecial()
{
    for(let i=0; i<5; i++){
        let random = Math.round(Math.random()*15);
        const special = speacial[random];
        let push4 =  newPassKey.push(special);
        
      
    }
}



function  arrayShuffle(newPassKey){

    for(let i = newPassKey.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newPassKey[i], newPassKey[j]] = [newPassKey[j], newPassKey[i]];
       

    }
    return newPassKey.join("");
}
