import React, { Component } from 'react';
import './VacancyPrevPost.css';
import Axios from 'axios';

class VacancyPrevPost extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

componentDidMount() {
    Axios.get('http://localhost:5000/vacancies/profile')
        .then(res => {
            this.setState({
                data:res.data.filter(vacancy => vacancy.company_email === localStorage.getItem('company_email'))
            })
        })    
        .catch(err => {
                console.log(err)
        });
}


    render() {
        return (
            <div className="postwrapper">
                {this.state.data===""?
                    <h1>No post to see</h1>:
                this.state.data.map((vacancy,i) => (
                    <div key={i} >
                        <p><u>Vacancy Post Title: {vacancy.post}</u></p>
                        <p>Skills Required: {vacancy.skills}</p>
                        <p>Required Number of Candidate: {vacancy.requiredcandidate}</p>
                        <p>Deadline for the vacancy: {vacancy.deadline}</p>
                        <p>Description about the vacancy: {vacancy.description}</p>
                        <hr/>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default VacancyPrevPost;