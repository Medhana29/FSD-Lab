const quiz = [
    {
        question: "Which language is used for web page interactivity?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "JavaScript"
    },

    {
        question: "Which method is used to select an HTML element by its ID?",
        options: [
            "getElementById()",
            "getElementByClass()",
            "querySelector()",
            "selectElement()"
        ],
        answer: "getElementById()"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", "!="],
        answer: "="
    },

    {
        question: "Which function is used to print something in the browser console?",
        options: [
            "console.log()",
            "print()",
            "display()",
            "write()"
        ],
        answer: "console.log()"
    }
];

quiz.sort(() => Math.random() - 0.5);

let index = 0;
let score = 0;
let time = 15;
let timerInterval;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const timer = document.getElementById("timer");
const nextButton = document.querySelector("button");

function loadQuestion() {

    question.innerHTML = quiz[index].question;
    options.innerHTML = "";
    time = 15;
    timer.innerHTML = "Time: " + time;

    let shuffledOptions = [...quiz[index].options];
    shuffledOptions.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(function(option) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "ans";
        radio.value = option;
        options.appendChild(radio);
        options.appendChild(document.createTextNode(" " + option));
        options.appendChild(document.createElement("br"));
    });
}

function nextQuestion() {
    const selected = document.querySelector(
        'input[name="ans"]:checked'
    );
    if (selected && selected.value === quiz[index].answer) {
        score++;
    }
    index++;
    if (index < quiz.length) {
        loadQuestion();
    } else {
        result.innerHTML =
            "Your score: " + score + "/" + quiz.length;

        question.innerHTML = "";
        options.innerHTML = "";

        timer.style.display = "none";
        nextButton.style.display = "none";

        clearInterval(timerInterval);
    }
}
loadQuestion();

timerInterval = setInterval(function() {
    time--;
    timer.innerHTML = "Time: " + time;
    if (time === 0) {
        nextQuestion();
    }
}, 1000);