bodyParser = require('body-parser').json();
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

        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(result));
    });

    app.post('/a', bodyParser, (request, response) => {
        let body = request.body;
        //console.log(request);
        const {Client} = require('pg');

        const db = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'Applications',
            password: 'pos3ril10',
            port: 5432
        });
        let sql = 'Insert into apps (text) VALUES (\''+body["textOfApplication"] +'\')';

        db.connect();

        db.query(sql, (err,result) => {
            if (err)
                throw new Error(err);
            //console.log(err);
            //идея - если нет ошибки что то делать на странице-нужен лисеер какой нибудь?
            db.end();
        });
        console.log("end");
        response.send('успешно отправленно');
    });
    app.get('/a', (request, response) => {
        let res = "";
        const {Client} = require('pg');

        const db = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'Applications',
            password: 'pos3ril10',
            port: 5432
        });
        let sql = 'select * from apps';

        db.connect();

        db.query(sql, (err,result,) => {
            if (err)
                throw new Error(err);
             res = result.rows;
             //console.log(res)
             db.end();
             response.setHeader("Content-Type", "application/json");
             response.send(JSON.stringify(res));

        });

        //console.log("nnnnnnnnnooooooo");
        //response.setHeader("Content-Type", "application/json");
        //response.send(JSON.stringify(res));
    })
    


};
