const questions = [
    {
        question: "Who's the crush of Kashish ?",
        answers: [
            { text: "Shubman Gill", correct: false },
            { text: "Abhi@9vas", correct: true },
            { text: "Ishan kishan", correct: false },
            { text: "None of these", correct: false },
        ]
    },
    {
        question: "Kashish padhti hai ya nhi ?",
        answers: [
            { text: "Nhi padhti hai.", correct: false },
            { text: "Kam padhti hai.", correct: false },
            { text: "Bahut padhti hai.", correct: false },
            { text: "Khana banate banate padhti hai.", correct: true },
        ]
    },
    {
        question: "Is Kashish crazy or not ?",
        answers: [
            { text: "Absolute crazy.", correct: false },
            { text: "Reverse mind.", correct: false },
            { text: "nothing found.", correct: true },
            { text: "nope", correct: false },
        ]
    },
    {
        question: "How's Kashish looking today ?",
        answers: [
            { text: "Like a chudail.", correct: false },
            { text: "Like a lady finger.", correct:true },
            { text: "like pookie.", correct: false },
            { text: "Bat Man.", correct: false },
        ]
    },
    {
        question: "Is Kashish a Good person Or a Bad person ?",
        answers: [
            { text: "Good.", correct: false },
            { text: "Bad.", correct:false},
            { text: "Good but Bad.", correct: false },
            { text: "Not a Good person and not a Bad person", correct: true },
        ]
    }
]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("Ansbtn")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerButton.appendChild(button)
        if (answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click',selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === 'true';
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");

        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startquiz();
    }
})
startquiz();