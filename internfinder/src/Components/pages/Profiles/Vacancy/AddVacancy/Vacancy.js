import React, { Component } from 'react';
import './Vacancy.css';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

class Vacancy extends Component {
    constructor(){
        super();
        this.state = {
            data:{
                post: "",
                skills: "",
                requiredcandidate: "",
                description: "",
                deadline: "",
                company_email:localStorage.getItem('company_email')
            },
            postErr:"",
            skillsErr:"",
            requiredcandidateErr:"",
            descriptionErr:"",
            deadlineErr:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            data:{...this.state.data,
            [e.target.name]:e.target.value}
        });
    }

    
    validate=()=>{
        let postErr = "";
        let skillsErr = "";
        let requiredcandidateErr = "";
        let descriptionErr = "";
        let deadlineErr = "";
        if(!this.state.data.post){
            postErr="Field must be filled";
        }
        if(!this.state.data.skills){
            skillsErr="Field must be filled";
        }
        if(!this.state.data.requiredcandidate){
            requiredcandidateErr="Field must be filled";
        }
        if(!this.state.data.description){
            descriptionErr="Field must be filled";
        }
        if(!this.state.data.deadline){
            deadlineErr="Field must be filled";
        }
        
        if(postErr||skillsErr||requiredcandidateErr||descriptionErr||deadlineErr){
            this.setState({postErr,skillsErr,requiredcandidateErr,descriptionErr,deadlineErr});
            return false;
        }
        return true;
    };

    handleSubmit(e){
        e.preventDefault(e);
        const isValid = this.validate();
        if(isValid){
            Axios.post('http://localhost:5000/vacancies/register',this.state.data)
                    .then(respond =>{
                        alert("Your vacancy is registered!");
                        this.props.history.push('/companyprofile');
                    })
                    .catch(err =>{
                        console.log(err)
                    });
        }
    }


    render() {
        return (
            <div className="addvacancy-wrapper">
                <div className="profileform-wrapper">
                    <form onSubmit={this.handleSubmit}>
                    <h1>Enter the vacancy details</h1>
                    <div className="post">
                    <label htmlFor="post">Post Title</label>
                        <input type="text"
                                name="post"
                                placeholder="Enter the title for the vacancy"
                                value={this.state.data.post}
                                onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.postErr}
                        </div>
                    </div>
                    <div className="skills">
                    <label htmlFor="skills">Skill</label>
                        <input type="text"
                                name="skills"
                                placeholder="Enter major skill required for the vacancy"
                                value={this.state.data.skills}
                                onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.skillsErr}
                        </div>
                    </div>
                    <div className="requiredcandidate">
                    <label htmlFor="requiredcandidate">Required Number of Candidate</label>
                        <input type="number"
                                name="requiredcandidate"
                                placeholder="Enter number of candidate required for the post"
                                value={this.state.data.requiredcandidate}
                                onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.requiredcandidateErr}
                        </div>
                    </div>
                    <div className="description">
                    <label htmlFor="description">Description</label>
                        <input type="textarea"
                                name="description"
                                placeholder="Enter details about the vacancy along with other minor skills."
                                value={this.state.data.description}
                                onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.descriptionErr}
                        </div>
                    </div>
                    <div className="deadline">
                    <label htmlFor="deadline">Deadline</label>
                        <input type="date"
                                name="deadline"
                                value={this.state.data.deadline}
                                onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.deadlineErr}
                        </div>
                    </div>
                    <div className="vacancy-submit">
                        <button type="submit">Add vacancy</button>
                    </div>
                    </form>
                    </div>
                </div>
        );
    }
}

export default withRouter(Vacancy);