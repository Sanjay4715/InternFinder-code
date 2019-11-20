import React, { Component } from 'react';
import Exam from './Exam';
import Axios from 'axios';

class ExamEnter extends Component {
    constructor(){
        super();
        this.state = {
            data:{
                skills:"",
                email:localStorage.getItem('email')
            },
            skillsErr:"",
            skillpage:true
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            data:{skills:e.target.value}
        })
    }

    handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("skills",this.state.data.skills);
        Axios.post('http://localhost:5000/skills/register',this.state.data)
                .then(respond =>{
                    if(respond.data.error)
                        alert(respond.data.error);
                    else{
                        alert(respond.data.message);
                        this.setState({
                            skillpage:false
                        })
                    }
                })
                .catch(error =>{
                    console.log(error)
                });
    }

    render() {
        return (
            <div>
                {this.state.skillpage?
                <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="skills">
                        <label htmlFor="skills">Select any one of the following for which you want to take test</label>
                        <br/>
                                <input 
                                    type="radio" 
                                    name="skills" 
                                    value="Java" 
                                    className="Radio-style"
                                    checked={this.state.data.skills === "Java"} 
                                    onChange={this.handleChange}
                                /><div className="Radio-text">Java</div>
                                
                                <input 
                                    type="radio" 
                                    name="skills" 
                                    value="Python"         
                                    className="Radio-style"
                                    checked={this.state.data.skills === "Python"} 
                                    onChange={this.handleChange}
                                /><div className="Radio-text">Python</div>

                                <input 
                                    type="radio" 
                                    name="skills" 
                                    value="C++" 
                                    className="Radio-style"
                                    checked={this.state.data.skills === "C++"} 
                                    onChange={this.handleChange}
                                /><div className="Radio-text">C++</div>
                    </div>
                    <div className="errorStyle">
                        {this.state.skillsErr}
                    </div>
                    <div className="button-style">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
                :
                <div>
                <Exam/>
                </div>    
            }
                
            </div>
        );
    }
}

export default ExamEnter;