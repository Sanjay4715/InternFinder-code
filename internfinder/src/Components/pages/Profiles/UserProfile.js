import React, {Component} from 'react';
import './UserProfile.css';
import Exam from './UserExam/Exam';
import ProfileRecord from './UserExam/ProfileRecord';
import {Route,Link} from 'react-router-dom';
import ExamEnter from './UserExam/ExamEnter';

class UserProfile extends Component{
    constructor(){
        super();
        this.state={
            openExamForm:false,
            openProfile:false
        }
        this.handleExamForm=this.handleExamForm.bind(this);
        this.handleProfile=this.handleProfile.bind(this);
    }

    handleExamForm(e){
        this.setState({
            openExamForm:true,
            openprofile:false
        })
    }

    handleProfile(e){
        this.setState({
            openprofile:true,
            openExamForm:false
        })
    }

    render(){
        return(
            <div className="user-profile-style">
                <div className="navbar-wrapper">
                    <div className = "item-style">
                        <ul>
                            <li><Link to="/userprofile/exam" onClick={this.handleExamForm} className="UserLink">Add New Skill</Link></li>
                            <li><Link to="/userprofile/profilerecord" onClick={this.handleProfile} className="UserLink">My Profile</Link></li>
                        </ul>
                    </div>
                </div>
                        {this.state.openExamForm && <ExamEnter/>}
                        {this.state.openprofile && <ProfileRecord/>}
                <div>
                    <Route exact path="/userprofile/exam" componenet={Exam}></Route>
                    <Route exact path="/userprofile/profilerecord" componenet={ProfileRecord}></Route>
                </div>
            </div>
        );
        }
}

export default UserProfile;