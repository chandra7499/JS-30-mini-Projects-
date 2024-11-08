// Element selections
let equal = $(".equal");
let input = $(".input");
let result = $(".result");
let btnAc = $(".btnAc");
let btnDe = $(".btnDe");
let layer = $(".layer");
let AdvanceCalucations = $(".AdvanceCalucations");
let secBtn = $(".secBtn");
let btn = $(".btn");
let calculatorContainer = $(".calculatorContainer");
let calciOperation = $(".calculatorOperation");

// Regular expressions for functions
const logExp = /log\((\d+)\)/g;
const sinExp = /sin\((\d+)\)/g;
const cosExp = /cos\((\d+)\)/g;
const tanExp = /tan\((\d+)\)/g;
const lnExp = /ln\((\d+)\)/g;
const factExp = /(\d+)\!/g;
const sqrtExp = /sqrt\((\d+)\)/g;

secBtn.addClass("scale-[0.75]");

let flag = false;

// Toggle visibility for advanced calculations panel
const layer2 = () => {
    if (!flag) {
        AdvanceCalucations.removeClass("w-[0%] xl:w-0 sm:w-0 h-[0] bg-slate-500 py-5");
        AdvanceCalucations.addClass("w-[50%] sm:w-[50%] h-auto sm:h-[300px] lg:relative lg:w-[100%] lg:h-[100%] px-3 xl:relative xl:w-[100%] xl:scale-[1.05] xl:h-[100%] lg:bg-transparent bg-slate-500");
        calculatorContainer.addClass("xl:w-[700px] lg:w-[700px]");
        calciOperation.removeClass("w-[100%]").addClass("lg:w-[100%] lg:scale-[1.3] xl:w-[100%]");
        flag = true;
    } else {
        AdvanceCalucations.addClass("w-[0%] xl:w-0 sm:w-0 h-[0] bg-slate-500").removeClass("w-[50%] sm:w-[50%] h-auto sm:h-[300px] lg:relative lg:w-[100%] lg:h-[100%] px-3 xl:relative xl:w-[100%] xl:scale-[1.05] xl:h-[100%]");
        calculatorContainer.removeClass("xl:w-[700px] lg:w-[700px]");
        calciOperation.addClass("w-[100%]").removeClass("lg:w-[100%] lg:scale-[1.3] xl:w-[100%]");
        flag = false;
    }
};

layer.on("click", layer2);

// Clear and delete buttons
btnAc.on("click", function() {
    input.val("");
    result.text("");
    result.removeClass("mb-2");
});

btnDe.on("click", function() {
    input.val(input.val().slice(0, -1));
    if (input.val().length <= 0) {
        result.text("");
        result.removeClass("mb-2");
    }
});

// Advanced calculations handler
function Advancecalci() {
    let expression = input.val();

    // Replace each function pattern with its calculated result
    expression = expression.replace(logExp, (_, num) => logorthim(num));
    expression = expression.replace(lnExp, (_, num) => lnOperation(num));
    expression = expression.replace(sinExp, (_, num) => sinOperation(num));
    expression = expression.replace(cosExp, (_, num) => cosOperation(num));
    expression = expression.replace(tanExp, (_, num) => tanOperation(num));
    expression = expression.replace(factExp, (_, num) => factorial(parseInt(num)));
    expression = expression.replace(sqrtExp, (_, num) => sqrt(parseInt(num)));

    try {
        result.text(eval(expression));
    } catch (e) {
        result.text("Error"); // Error handling for invalid expressions
    }
}

// Main calculation handler for "equal" button
equal.on("click", function() {
    if (
        input.val().match(logExp) || 
        input.val().match(lnExp) || 
        input.val().match(sinExp) || 
        input.val().match(cosExp) || 
        input.val().match(tanExp) || 
        input.val().match(factExp) || 
        input.val().match(sqrtExp)
    ) {
        Advancecalci();
    } else {
        try {
            let resultValue = eval(input.val());
            result.text(resultValue);
        } catch (e) {
            result.text("Error");
        }
    }
});

// Helper functions for calculations
function factorial(number) {
    if (number <= 1) return 1;
    return number * factorial(number - 1);
}

function sqrt(number) {
    return Math.sqrt(number);
}

function logorthim(number) {
    return Math.log10(Number(number));
}

function lnOperation(number) {
    return Math.log(Number(number));
}

function sinOperation(number) {
    return Math.sin(number * (Math.PI / 180)); 
}

function cosOperation(number) {
    
    let value =  Math.cos(Number(number) * (Math.PI / 180));
    if(value === 6.123233995736766e-17){
        return 0;
    }else{
        return value;
    }

}

function tanOperation(number) {
   let  value =  Math.tan(number * (Math.PI / 180));             
if(number === "45"){
  return 1;
}else if(number === "90"){
    return Infinity;
}else{
    return value;
}
}


btn.on("click",function(){
    var input = $('input[name = "input"]');
    input[0].scrollLeft = input[0].scrollWidth;
});



