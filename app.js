const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('game started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
    

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Which is the biggest passenger Jet flying today ?',
        answers: [
            { text: 'Airbus A380', correct: true},
            { text: 'Boeing 747-8', correct: false},
            { text: 'Boeing 787 dreamliner', correct: false},
            { text: 'Gulfstream G650', correct: false}
        ]
    },
    {
        question: 'Who took delivery of the First Airbus A380 ?',
        answers: [
            { text: 'ANA', correct: false},
            { text: 'Singapore Airlines', correct: true},
            { text: 'Emirates', correct: false},
            { text: 'Virgin Atlantic', correct: false}
        ]
    },
    {
        question: 'Which commercial jet has the biggest engines ever fitted on a jet ?',
        answers: [
            { text: 'Boeing 747-400', correct: false},
            { text: 'Airbus A380', correct: false},
            { text: 'Airbus A350', correct: false},
            { text: 'Boeing 777X', correct: true}
        ]
    },
    {
        question: 'Which airline has the best business class ?',
        answers: [
            { text: 'Qatar Airways', correct: true},
            { text: 'Kenya Airways', correct: false},
            { text: 'Delta', correct: false},
            { text: 'Ryan Air', correct: false}
        ]
    },
    {
        question: 'Which of these airlines does not own an A380 ?',
        answers: [
            { text: 'Emirates', correct: false},
            { text: 'British Airways', correct: false},
            { text: 'Rwanda Air', correct: true},
            { text: 'Lufthansa', correct: false}
        ]
    },
    {
        question: 'Which of these is not a wide-body jet ?',
        answers: [
            { text: 'Boeing 747', correct: false},
            { text: 'Airbus Beluga', correct: false},
            { text: 'Embrae E-150', correct: true},
            { text: 'Airbus A350', correct: false}
        ]
    }
]