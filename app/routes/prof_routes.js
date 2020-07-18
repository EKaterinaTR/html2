module.exports = function (app) {
    app.get('/prof', (request, response) => {
        var result = {
            "last name":"Tsareva",
            "name": "Ekaterina",
            "otchestvo":"Romanovna",
            "education": [
                {
                    "place":"Завершен первый курс в ITIS",
                    "date":"2020"

                }],
            "prog_language":[
                {
                    "language":"Java",
                    "level":""
                },
                {
                    "language":"PascalABC",
                    "level":""
                },
                {
                    "language":"Python(3)",
                    "level":"beginning"
                }
                ],
            "experience": [
                {
                    "place":"место учебы",
                    "content":"Работа в команде(3 человека)Создания простого андройд приложения в android studio",
                    "date":"2019"
                },
                {
                    "place":"место учебы",
                    "content":"Работа в команде(5 человек)Верстка сайта(HTML, CSS, библиотека BOOTSTRAP)",
                    "date":"2020"
                }
            ]


        };
        response.send(JSON.stringify(result));
    });
};
