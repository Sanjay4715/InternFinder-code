import React, { Component } from 'react';
import VacancyPost from './VacancyPost';
import "./messages.css";

class Message extends Component {
    constructor(){
        super();
        this.state = {
            isSuccess:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            isSuccess:false
        })
    }

    render() {
        return (
            <div>
                {this.state.isSuccess?
                    <div >
                          {/* <h2>Marks obtained: 3</h2><br/>
                       <h3>Sorry You have have failed the exam try again later</h3> */}
                        <h2>Marks obtained: 8</h2><br/>
                       <h3>Congratulation!!, You have successfully passed the exam.Now you will be able to see the vacancies available.
                        Click the following button to view the vacancies.</h3>
                        <button type="submit" onClick={this.handleSubmit} className="mess">See vacancies</button>
                    </div>
                    :
                    <div>
                        <VacancyPost/>
                    </div>
                }
            </div>
        );
    }
}

export default Message;