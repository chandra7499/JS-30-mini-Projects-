let searchBox = $(".searchBox");
let container = $(".remainder");
let main = $(".container");
let remainder=$(".remainder");
const addBtn = $(".btn");
const search = $("#search");

let newHeight;
let element7 ;
let taskCount;
let count=0;




function createElements(value) {
    let taskContainer = $("<li></li>").addClass("task-container").css({"display":"flex"});

    let element = $("<span></span>").attr("class", "checkBox");
    let element2 = $("<input>").attr({ "type": "checkbox", "class": "check" }).css("background-color","orange");
    let element3 = $("<span></span>").attr("class", "para")
    let element4 = $("<p></p>").attr("class", "work").text(value);
    let element5 = $("<span></span>");
    let element6 = $("<span></span>").attr("id", "delete");
     element7 = $("<i></i>").attr({ "class": "fas fa-minus-circle", "style": "font-size:30px" });

    element.append(element2);
    element3.append(element4);
    element6.append(element7);
    element5.append(element6);

    taskContainer.append(element);
    taskContainer.append(element3);
    taskContainer.append(element5);

    element7.on("click", function () {
        taskContainer.hide("slow", function() {
            taskContainer.remove();

                                 
        });

        

    
    });

  

    return taskContainer;
   
    
}






function updateContainerHeight() {
    taskCount = $(".task-container").length;
    count++;
 
   
    newHeight = 10+(taskCount*10);
    if(newHeight<80)
    {
    const mHeight = main.height(10+newHeight+"vh");
    const cHeight = container.height(newHeight + "vh");
    }

    else{
        newHeight=80;
        const mHeight = main.height(newHeight+"vh");
        const cHeight = container.height(newHeight + "vh");
        remainder.css({"overflow-y":"auto","height":"auto"});
    }

   element7.on("click",function(e) {
     e.preventDefault();
     count = count-1;
   
    
    if(count<=6){
     newHeight = newHeight-7;
     const mHeight = main.height(newHeight+"vh");
     const cHeight = container.height(newHeight + "vh");
     if(count===0){
        window.location.reload(false);
     }
    
    
    }else{
        newheight=1;
    }
  
     

   })

   
   
}

function addTask() {
   
        let value = search.val();
        if (value.length > 1) {
            let taskElement = createElements(value);
            container.append(taskElement);
            search.val(""); // Clear the input field after adding the task
            taskElement.css("display", "flex");
        }
        saveCompleteTaskPara()
    


}

function completeTaskByCheckBox(){
    container.on("click",".check", function () {
        let checkBox = $(this).prop("checked");
       if(!checkBox)
       {
        $(this).closest(".task-container").find(".work").css("text-decoration","none");
       }
       else
       {
          $(this).closest(".task-container").find(".work").css("text-decoration","line-through");
       }
    });
    saveCompleteTaskPara()
}



function completeTaskPara() {
   container.on("click",".para", function () {
    let checkBox = $(this).siblings(".checkBox").find(".check");
    let isCheck = checkBox.prop("checked");
    checkBox.prop("checked",!isCheck);
    if(!isCheck)
    {
        $(this).find(".work").css("text-decoration","line-through");
        checkBox.prop("checked",true);
        
    }
    else
    {
        
        $(this).find(".work").css("text-decoration","none");
        checkBox.prop("checked",false);
      
    }

 })

    saveCompleteTaskPara();
}


function saveCompleteTaskPara() {
    const task = [];
    $(".task-container").each(function(){
        const taskText = $(this).find(".work").text();
        const check  = $(this).find(".check");
        const isChecked = $(this).find(".check").prop("checked");
        task.push({"task":taskText, "check":check,"isChecked":isChecked});


    })

 

}



addBtn.on("click", function(){
    addTask();
    updateContainerHeight();
   
    
});

$(document).on("keydown",function(e){
      if(e.key==="Enter"){
        addTask();
        updateContainerHeight();
      }
})









completeTaskPara();
completeTaskByCheckBox();



