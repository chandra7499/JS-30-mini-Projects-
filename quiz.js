let questioncount = $(".questioncount");
let count2 = $(".count2");
let question = $(".question");
const container = $(".container");
let optionsCol = $(".optionscol"); 
let op = $(".op");
let option1 = $(".op1");
let option2 = $(".op2");
let option3 = $(".op3");
let option4 = $(".op4");
const points = $(".score");
let nextBtn = $("#nextbtn");
const finalScore=$(".answer");
const queryBlock = $(".queryblock");

const query = $("#query");






const questions = [{
    question:"who is our prime-minister",
    answer:[{text:"ramnadh kovind",correct:false},
            {text:"Narendra modi",correct:true},
            {text:"chandra babu naidu ",correct:false},
            {text:"pawan kalyan",correct:false}
                                                  ]
},

{ question:"who is our cm",
    answer:[{text:"ramnadh kovind",correct:false},
            {text:"chandra babu naidu",correct:true},
            {text:"Narendra modi ",correct:false},
            {text:"pawan kalyan",correct:false}
           ]
},

{ question:"who is our deputy cm",
    answer:[{text:"ramnadh kovind",correct:false},
            {text:"Narendra modi",correct:false},
            {text:"chandra babu naidu ",correct:false},
            {text:"pawan kalyan",correct:true}
           ]
},

{ question:"who is our past president",
    answer:[{text:"pawan Kalyan",correct:false},
            {text:"Narendra modi",correct:false},
            {text:"chandra babu naidu ",correct:false},
            {text:"ramnadh kovind",correct:true}
           ]
}


];

let currentQuestionIndex = 0;
var totalScore=0;


function presentScore()
{
    op.empty();
    optionsCol.addClass("placeholder-wave bg-dark");
   
    question.addClass("placeholder-glow");
   
}




function startQuiz()
{
    currentQuestionIndex = 0;
    totalScore=0;
    score=1;
    op.show();
    
    showQuestion();
    
    $(nextBtn).text("Next").off("click");
    
    
   
    
   
}

function showQuestion()
{
    let currentQuestion = questions[currentQuestionIndex];
    let questionno = currentQuestionIndex+1;
    questioncount.text(questionno);
    query.text(currentQuestion.question);
    currentQuestion.answer.forEach((answer) =>{
        option1.text(currentQuestion.answer[0].text).off("click").on("click", () => checkAnswer(0));
        option2.text(currentQuestion.answer[1].text).off("click").on("click", () => checkAnswer(1));
        option3.text(currentQuestion.answer[2].text).off("click").on("click", () => checkAnswer(2));
        option4.text(currentQuestion.answer[3].text).off("click").on("click", () => checkAnswer(3));
    })

        $(".op").removeClass("border-success border-danger");
        op.on("click");
        op.css("cursor","pointer");
         
   
        function checkAnswer(selectedIndex) {
        let currentQuestion = questions[currentQuestionIndex];
        let selectedAnswer = currentQuestion.answer[selectedIndex];
        
        if(currentQuestion!==true){
           
            $(nextBtn).on("click",nextQuestion);
           
           
           
           
            
            
        };
        
        
    
        $(".op").removeClass("border-success border-danger");
      
    
        if (selectedAnswer.correct) {
            $(`.op${selectedIndex + 1}`).addClass("border-success");
            totalScore=score++;
            points.text(totalScore);
            op.css("cursor","not-allowed");
            op.off("click");
           
           
            


        } else {
            $(`.op${selectedIndex + 1}`).addClass("border-danger");
            op.css("cursor","not-allowed");
            op.off("click");
            
           
            
            
            
        }

       

       
    }
         
   
    }


    function nextQuestion() {
        $(nextBtn).off("click");
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert("Your quiz is completed successfully Now,move on to final result");
             finalResult();
            
           
            
            
            
            
        }
    }

    function finalResult()
    {
        $(".questionn").text(`correct:${totalScore}`);
        $(".incorrectQuestion").text( `Incorrect Question:${questions.length-totalScore}`);
        questioncount.remove();
        question.addClass("fw-light");
        container.height("30%");
        optionsCol.remove();
        nextBtn.addClass("m-0");
        queryBlock.remove();
        count2.remove();
        nextBtn.text("start Again").off("click").on("click",function () {
             location.reload();
        });
       
      
      

        
       
    }

  
  
   
function clickMe()
{
    $(nextBtn).off("click").on("click",startQuiz);
    $(nextBtn).css("opacity","1");

   
   

}








clickMe();
presentScore();









