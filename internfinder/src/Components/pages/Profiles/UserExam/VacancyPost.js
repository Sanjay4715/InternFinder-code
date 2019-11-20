import React, { Component } from 'react';
import Axios from 'axios';
import "./vacancyPost.css";

class VacancyPost extends Component {
    constructor(){
        super();
        this.state = {
            vacancy:[]
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/vacancies/profile')
            .then(response =>{
                this.setState({
                    vacancy:response.data.filter(vacancy => vacancy.skills === localStorage.getItem("skills"))
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render() {
        
        
        return (
            <div className="vacancy">
                {this.state.vacancy.map((post,i)=>(
                    <div key={i}>
                        <p><u>Title: {post.post}</u></p>
                        <p>Major skill: {post.skills}</p>
                        <p>Required Number of Candidate: {post.requiredcandidate}</p>
                        <p>Requirements: {post.description}</p>
                        <p>Submission Deadline: {post.deadline}</p>
                        <p>Company E-mail Address: {post.company_email}</p>
                        <a href="http://www.gmail.com"  className="hello" ><button type="submit" className="applyButton">Apply</button></a>
                      <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default VacancyPost;