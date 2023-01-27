class Question {
    text;
    answer;
    points;
    category;
    options;

    constructor(text, answer, points, category, options) {
        this.text = text;
        this.answer = answer;
        this.points = points;
        this.category = category;
        this.options = options;
    }
}

let questions = [
    new Question('Pitanje 1', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 2', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 3', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 4', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 5', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 6', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
    new Question('Pitanje 7', 'odgovor 1', 5, 'movies', ['odgovor 1', 'odgovor 2', 'odgovor 3', 'odgovor 4', ]),
];