const questions = [

    {
        question: "When is our anniversary?",
        answers: [
            "3 may 2026",
            "may 3 2026",
            "3rd may 2026",
            "03/05/2026",
            "3/5/26",
            "3/5/2026"
        ]
    },

    {
        question: "Who's the laziest bum ever?",
        answers: [
            "me",
            "Me"
        ]
    },

    {
        question: "What is the most obvious thing about you that makes me fold?",
        answers: [
            "My eyes",
            "My smile",
            "my eyes",
            "my smile",
            "the way i look at you",
            "The way i look at you",
        ]
    },

    {
        question: "What's a nickname that you gave me even before we started dating?",
        answers: [
            "monkey",
            "Monkey",
            "My monkey",
            "my monkey",
            "My Monkey"
        ]
    },

    {
        question: "One last question...\nWhat's one thing I always want you to remember?",
        answers: [
            "you love me",
            "that you love me",
            "i am loved",
            "i deserve to live",
            "that i deserve to live",
            "im perfect just the way i am"
            
        ]
    }

];

const correctMessages = [

    "Oh, so you haven't forgotten huh? ❤️",

    "At least you know 😝❤️",

    "Still works on me till this day ❤️",

    "Monkeyyy 🐵❤️",

    "Thats right babe, I love you just the way you are you know? ❤️"

];

let currentQuestion = 0;

function showQuiz() {

    document
        .getElementById("landing")
        .classList
        .add("hidden");

    document
        .getElementById("quiz")
        .classList
        .remove("hidden");

    loadQuestion();
}

function loadQuestion() {

    document
        .getElementById("questionNumber")
        .innerText =
        `Question ${currentQuestion + 1}/${questions.length} ❤️`;

    document
        .getElementById("questionText")
        .innerText =
        questions[currentQuestion].question;

    document
        .getElementById("answer")
        .value = "";

}

function nextQuestion() {

    const answer =

        document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    if (

        questions[currentQuestion]
        .answers
        .includes(answer)

    ) {

        alert(
            correctMessages[currentQuestion]
        );

        currentQuestion++;

        if (

            currentQuestion >= questions.length

        ) {

            document
                .getElementById("quiz")
                .classList
                .add("hidden");

            document
                .getElementById("success")
                .classList
                .remove("hidden");

        }

        else {

            loadQuestion();

        }

    }

    else {

        alert(
            "You sure? 🤨❤️"
        );

    }

}

function showGift() {

    document
        .getElementById("success")
        .classList
        .add("hidden");

    document
        .getElementById("gift")
        .classList
        .remove("hidden");

}
