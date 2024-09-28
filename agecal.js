let month = $("#month");
let btn = $(".button");
let message = $(".message");
const year = $(".year");
const months = $(".months");
const day = $(".day");
let capacityOfMonth="";


btn.on("click",function()
{
    calculate();
    visible();
    
});

function visible()
{
        message.css("display","inline");
        year.css("display","inline");
        months.css("display","inline");
        day.css("display","inline");
}

function calculate ()
{
    let user = new Date(month.val());
    const currentDate = new Date();
    let yearDifference = currentDate.getFullYear()-user.getFullYear();
    let monthsDifference = currentDate.getMonth()-user.getMonth();
    let daysDifference = currentDate.getDate()-user.getDate();
    
        if(yearDifference < 0 )
        {
            alert("Hey Why are you so Hurry that's your future Just wait,utill to reach Their ok...");
        
        }else
        {
            getProperOutPut(monthsDifference,daysDifference,yearDifference,currentDate);
        }
}


function getNumOfDaysInMonth(year,month)
{
   capacityOfMonth =  new Date(year,month+1,0).getDate();
   return capacityOfMonth
}


function getProperOutPut(monthsDifference, daysDifference, yearDifference, currentDate) {
    if (monthsDifference < 0) {
                                               // Adjust for negative months
        monthsDifference += 12;
        yearDifference -= 1;
    }

    if (daysDifference < 0) {
                                              // Adjust for negative days
        monthsDifference -= 1;
        daysDifference += getNumOfDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);
    }

    
    year.text(`${yearDifference} years`);
    months.text(`${monthsDifference} months`);
    day.text(`${daysDifference} days`);
}


$(document).on('keypress',function(e)
{
        if(e.which===13)
        {
            calculate();
            visible();
            
        }

        else
        {
            return false;
        }
});
