let notegroup = $(".notegroup");
let createBtn = $(".Createbutton");
let container = $(".container");
let noteContainer =$(".box");
const remove = $(".delete");
 

createBtn.on("click",function()
{  
      createDiv();
       erase();
       noteContainer.scrollTop(noteContainer[0].scrollHeight);
       

});


function createDiv(content=''){
   
    let noteGroupHtml = `
    
    <div class="notegroup bg-light fs-5 px-1 border border-secondary mt-5 ml-3 rounded-3 d-flex justify-content-center mb-4 w-25">
        <textarea name="note" id="write" class="d-flex border border-light" cols="34" rows="6" placeholder="write here.."></textarea>
        <div class="deleteicon d-flex justify-content-center align-items-end" title="delete">
        <i class="bi bi-trash3 fs-3 delete mt-25"></i>
           
        </div>
    </div>`

noteContainer.append(noteGroupHtml);
noteContainer.height("500px").addClass("rounded-3")



}

function erase()
{
    container.on("click",".delete",function(){
        $(this).closest(".notegroup").remove();
     
    });
}



