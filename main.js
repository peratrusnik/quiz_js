let mainH1 = document.querySelector('h1');
let options = document.querySelectorAll('.option');
let mainP = document.querySelector('p');

startQuiz();

function startQuiz() {
    let currentQuestion = quiz.getCurrentQuestion();
    mainH1.innerHTML = currentQuestion.text;
    mainP.innerHTML = `Pitanje ${quiz.questionIndex + 1} od ${quiz.questions.length}`;
    options.forEach((option, index) => {
        option.innerHTML = currentQuestion.options[index];
        option.onclick = checkAnswer;
    });
}

function checkAnswer() {
    let answer = this.innerHTML;
    quiz.verify(answer);
    (!quiz.isEnd()) ? startQuiz(): displayResults();
}

function displayResults() {
    options.forEach(option => {
        option.onclick = null;
    })
    mainP.innerHTML = "Ukupan score je: " + quiz.score;
}