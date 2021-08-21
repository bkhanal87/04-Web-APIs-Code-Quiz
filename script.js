window.onload = function() {
    show(0);
}

let questions = [
    {
        id: 1,
        question:  "Commonly used data types DO NOT include:",
        answer: "alerts",
        options: [
	        "1. strings",
	        "2. booleans",
	        "3. alerts",
	        "4. numbers"
        ]
    },
    {
        id: 2,
        question:  "The condition in an if/else statement is enclosed within:",
        answer: "parentheses",
        options: [
            "1. quotes",
            "2. curly brackets",
            "3. parantheses",
            "4. square brackets"
        ]
    },
    {
        id:3,
        question:  "Arrays in Javascript can be used to store",
        answer: "4. all of the above",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ]
    },
    {
        id: 4,
        question: "String values must be enclosed within _____when being assigned to variables",
        answer: "quotes",
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. paranthesis"
        ]
    },
    {
        id: 5,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "console.log",
        options: [
            "1. Javascript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"
        ]
    },
];

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;

    sessionStorage.setItem("name", name);

    location.href = "index.html";
}

let question_count = 0;
let score = 0;

function next() {
    if(question_count == questions.length - 1) {
        location.href = "end.html";
        return;
    }

    let user_answer = document.querySelector("li.option.active").innerHTML;
    
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }
    question_count++;
    show(question_count);
}
    

function show(count) {

    let question = document.getElementById("questions");

    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option-group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>

    `;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for(let i=0; i< option.length; i++) {
        option[i].onclick = function() {
            for(let j=0; j< option.length; j++) {
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
                option[i].classList.add("active");
            }
        }
    }
}
