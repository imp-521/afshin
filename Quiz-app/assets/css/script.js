const questions = [
    {

        question: "which is larget animal in the world ?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "Girrafe", correct: false },
        ]


    },
    {

        question: "which is the smallest continent in the world ?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]


    }, {

        question: "what is color sun ?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Yellow", correct: true },
            { text: "Purple", correct: false },
        ]


    }, {

        question: "which is an animal ?",
        answers: [
            { text: "Shark", correct: true },
            { text: "Bord", correct: false },
            { text: "Desk", correct: false },
            { text: "Mirror", correct: false },
        ]


    }

]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currnetQuestionIndex = 0
let score = 0

function starQuiz() {
    currnetQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()

}

function showQuestion() {
    resetState()
    let currnetQuestion = questions[currnetQuestionIndex]
    let questionNo = currnetQuestionIndex + 1
    questionElement.innerHTML = questionNo + "." + currnetQuestion.question

    currnetQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.Disabled = true
    })
    nextButton.style.display = "block"
}

function showScore(params) {
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
    
}

function handelnextbutton() {
    currnetQuestionIndex++
    if(currnetQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
    
}

nextButton.addEventListener("click",()=>{
    if(currnetQuestionIndex<questions.length){
        handelnextbutton()
    }
    else{
        starQuiz()
    }
})





starQuiz()