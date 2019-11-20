const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());//basically tells the system that you want json to be used
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));//extended=false is a configuration option that tells the parser to use the classic encoding.

const Users = require('./src/routes/UserRoute');
app.use('/users', Users);

const Company = require('./src/routes/CompanyRoute');
app.use('/companies', Company);

const vacancy = require('./src/routes/VacancyRoute');
app.use('/vacancies',vacancy);

const Exam = require('./src/routes/ExamRoute');
app.use('/exams',Exam);

const Skill = require('./src/routes/SkillRoute');
app.use('/skills',Skill);

app.listen(port, () => {
    console.log("Server is running on port " +port)
});