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
let question_count = 0;
function next() {
    question_count++;
    console.log(question_count);
}
