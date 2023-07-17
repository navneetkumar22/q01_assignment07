//question set
const Questions = [{
    q: "What is the value of 5! ?",
    a: [{ text: "140", isCorrect: false },
    { text: "160", isCorrect: false },
    { text: "120", isCorrect: true },
    { text: "20", isCorrect: false }
    ]

},
{
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]

},
{
    q: "What is the capital of Gujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
}
]


let currQuestion = 0
let score = 0

const loadQuestions = () => {
    const question = document.getElementById("ques")
    const opt = document.getElementById("answer")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        //
    }
}

loadQuestions();

const getScore = () => {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


const nextQuestion = () => {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        // document.getElementById("opt").remove()
        // document.getElementById("ques").remove()
        // document.getElementById("btn").remove()
        // getScore();
    }
}

const checkAns = () => {
    //
}
