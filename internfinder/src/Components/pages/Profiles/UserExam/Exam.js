import React, { Component } from 'react';
import Axios from 'axios';
import './Exam.css';
import Message from './Message';

class Exam extends Component {
    constructor(){
        super();
        this.state = {
            vacancy:true,
            question:[],
            quiz:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            quiz:[{answer:e.target.value}]
        })
    }

componentDidMount(){
        Axios.get('http://localhost:5000/exams/question')
        .then(res => {
                this.setState({
                    question:res.data.filter(question => question.field === localStorage.getItem("skills")) 
                })
        })    
        .catch(err => {
            console.log(err)
        });
        console.log(this.state.question)
    }


handleSubmit(e){
        e.preventDefault();
        this.setState({
            vacancy:false
        })
        console.log(this.state.question);
}

    render() {
        return (
            <div className="test-wrapper1">
                {this.state.vacancy?
                <div className="quiz-form-wrapper">
                <form className="form1" onSubmit={this.handleSubmit}>
                    {this.state.question.map((question,i)=>(
                        <div key={i} className="quiz">
                            <label htmlFor= "quiz">{question.question}</label>
                            <br/>
                            <div>
                            <input  type="radio"
                                    name="quiz"
                                    value={question.option1}
                                    className="Radio-Style"
                                    checked ={this.state.quiz.push(question.option1)}
                                    onChange={this.handleChange}
                            />
                            {question.option1}
                            <br/>
                            <input  type="radio"
                                    name="quiz"
                                    value={question.option2}
                                    className="Radio-Style"
                                    checked ={this.state.quiz.push(question.option2)}
                                    onChange={this.handleChange}
                            />
                            {question.option2}
                            <br/>
                            <input  type="radio"
                                    name="quiz"
                                    value={question.option3}
                                    className="Radio-Style"
                                    checked ={this.state.quiz.push(question.option3)}
                                    onChange={this.handleChange}
                            />
                            {question.option3}
                            <br/>
                            <input  type="radio"
                                    name="quiz"
                                    value={question.option4}
                                    className="Radio-Style"
                                    checked ={this.state.quiz.push(question.option4)}
                                    onChange={this.handleChange}
                            />
                            {question.option4}
                            </div>
                        </div>
                    ))}
                    <button className="submita" type="submit">Submit</button>
                </form>
            </div>
            :
            <div>
               <Message/>
            </div>
          
                }
            </div>
        );
    }
}

export default Exam;