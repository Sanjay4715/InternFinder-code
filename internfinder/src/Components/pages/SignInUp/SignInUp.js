import React, {Component} from 'react';
import './SignInUp.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import {Route,Link} from 'react-router-dom';

class SignInUp extends Component{
    constructor(){
        super();
        this.state={
            isSigninOpen:true,
            isSignupOpen:false
        }
        this.handleSignin=this.handleSignin.bind(this);
        this.handleSignup=this.handleSignup.bind(this);
    }

    handleSignin(){
        this.setState({
            isSigninOpen:true,
            isSignupOpen:false
        });
    }

    handleSignup(){
        this.setState({
            isSigninOpen:false,
            isSignupOpen:true
        });
    }

    render(){
        return(
            <div className="signinup">
                <div className="FormLeft">
                    <div className="TextStyle">
                        <h1>Register an account</h1>
                        <h1>Feel free to surf</h1>
                    </div>
                </div>
                <div className="FormRight">
                    <div>
                        <Link to="/user/login" onClick={this.handleSignin} className="LinkStyle">SignIn</Link>
                        OR
                        <Link to="/user/register" onClick={this.handleSignup} className="LinkStyle">SignUp</Link>
                    </div>
                    {this.state.isSigninOpen && <SignIn/>}
                    {this.state.isSignupOpen && <SignUp/>}
                </div>
                <div>
                    <Route exact path="/user/login" componenet={SignIn}></Route>
                    <Route exact path="/user/register" componenet={SignUp}></Route>
                </div>
               
            </div>
        );
        }
}

export default SignInUp;