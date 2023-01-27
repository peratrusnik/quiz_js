class Quiz {
    score = 0;
    questions;
    questionIndex = 0;
    constructor(questions) {
        this.questions = questions;
    }

    getCurrentQuestion() {
        let current = this.questions[this.questionIndex];
        current.options = Utils.randomize(current.options);
        return current;
    }
    verify(answer) {

        let currentQuestion = this.getCurrentQuestion();
        if (answer === currentQuestion.answer) {
            this.score += currentQuestion.points;
        }
        this.questionIndex++;
    }

    isEnd() {
        return this.questionIndex === this.questions.length;
    }
}

let quiz = new Quiz(questions);