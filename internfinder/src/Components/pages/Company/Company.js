import React,{Component} from 'react';
import './Company.css';
import CompanySignUp from './Company_signUp/CompanySignUp';
import {Link,Route} from 'react-router-dom';
import CompanysignIn from './Company_signIn/Company_signIn';

class Company extends Component{
    constructor(){
        super();
        this.state={
            isSignin:true,
            isSignUp:false
        };
        this.handleSignin=this.handleSignin.bind(this);
        this.handleSignup=this.handleSignup.bind(this);
    }

    handleSignin=()=>(
        this.setState({
            isSignin:true,
            isSignUp:false
        })
    )

    handleSignup=()=>(
        this.setState({
            isSignin:false,
            isSignUp:true
        })
    )

    render(){
        return(
            <div className="company">
                 <div className="company-wrapper">
                <div className="company-navbar">
                    <ul>
                        <li><Link to="/company/login" onClick={this.handleSignin} className="LinkStyle">SignIn</Link></li>OR
                        <li><Link to="/company/register" onClick={this.handleSignup} className="LinkStyle">SignUp</Link></li>
                    </ul>
                </div>
                </div>
                {this.state.isSignin && <CompanysignIn/>}
                {this.state.isSignUp && <CompanySignUp/>}
                <Route path="/company/login" componenet={CompanysignIn}></Route>
                <Route path="/company/register" componenet={CompanySignUp}></Route>
            </div>
        );
    }
   
}

export default Company;