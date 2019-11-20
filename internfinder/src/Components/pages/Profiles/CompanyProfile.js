import React, {Component} from 'react';
import './CompanyProfile.css';
import Vacancy from './Vacancy/AddVacancy/Vacancy';
import VacancyProfile from './Vacancy/ProfileVacancy/VacancyProfile';
import {Route,Link} from 'react-router-dom';
import VacancyPrevPost from './Vacancy/ViewVacancy/VacancyPrevPost';

class CompanyProfile extends Component{
    constructor(){
        super();
        this.state={
            openvacancyform:false,
            openprofile:false,
            openPreviousPost:false
        }
        this.handleClickVacancy=this.handleClickVacancy.bind(this);
        this.handleClickProfile=this.handleClickProfile.bind(this);
        this.handleClickPrevPost = this.handleClickPrevPost.bind(this);
    }

    handleClickVacancy(e){
        this.setState({
            openvacancyform:true,
            openprofile:false,
            openPreviousPost:false
        })
    }

    handleClickPrevPost(e){
        this.setState({
            openPreviousPost:true,
            openprofile:false,
            openvacancyform:false
        })
    }

    handleClickProfile(e){
        this.setState({
            openprofile:true,
            openvacancyform:false,
            openPreviousPost:false
        })
    }

    render(){
        return(
            <div className="companyProfile">
            <div className="profile-style">
                <div className="profile-wrapper">
                    <div className = "company-profile-navbar">
                        <ul>
                            <li><Link to="/companyprofile/vacancy" onClick={this.handleClickVacancy} className="Link-style">Add New Vacancy</Link></li>
                            <li><Link to="/companyprofile/vacancypost" onClick={this.handleClickPrevPost} className="Link-style">My Previous Post</Link></li>
                            <li><Link to="/companyprofile/vacancyprofile" onClick={this.handleClickProfile} className="Link-style">My Profile</Link></li>
                        </ul>
                    </div>
                </div>
                    <div>
                        {this.state.openvacancyform && <Vacancy/>}
                        {this.state.openPreviousPost && <VacancyPrevPost/>}
                        {this.state.openprofile && <VacancyProfile/>}
                    </div>
              
                <div>
                    <Route exact path="/companyprofile/vacancy" componenet={Vacancy}></Route>
                    <Route exact path="/companyprofile/vacancypost" componenet={VacancyPrevPost}></Route>
                    <Route exact path="/companyprofile/vacancyprofile" componenet={VacancyProfile}></Route>
                </div>
            </div>
            </div>
        );
        }
}

export default CompanyProfile;