import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
import './SignIn.css';

const emailCheck=RegExp(/^[a-zA-Z0-9.!#$%''*+/=?^_``{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class SignIn extends Component{
    constructor(){
        super();
        this.state={
            data:{
                email:"",
                password:""
            },
            emailErr:"",
            passwordErr:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validate=this.validate.bind(this);
    }

    handleChange=(e)=>
    (
        this.setState({
            data:{...this.state.data, 
            [e.target.name]:e.target.value}
        })
    );

    validate=()=>{
        let emailErr="";
        let passwordErr="";

        if(!this.state.data.email){
            emailErr="Invalid email";
        }
        else if(!emailCheck.test(this.state.data.email)){
            emailErr="Invalid email";
        }
        
        if(!this.state.data.password){
            passwordErr="Password cannot be blank";
        }

        else if(this.state.data.password.length<7){
            passwordErr="Length of password must be minimum of 7 characters";
        }

        if(emailErr||passwordErr){
            this.setState({emailErr,passwordErr});
            return false;
        }
        return true;
    };

    handleSubmit=(e)=>
    {
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
           Axios.post('http://localhost:5000/users/login',this.state.data)
                .then(respond =>{
                    if(respond.data.error){
                        alert(respond.data.error + "Try Again");
                        this.setState({
                            data:{
                                email:"",
                                password:""
                            },
                            emailErr:"",
                            passwordErr:""
                        })
                    }
                    else{
                        localStorage.setItem('email',this.state.data.email);
                        alert("Login Succesfull!");
                        this.props.history.push("/userprofile");
                    }
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    }

    render(){
        return(
            <div className="Wrapper">
                <div className="form-Wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h1>Enter your account details</h1>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Enter your Email address"
                            value={this.state.data.email}
                            onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.emailErr}
                        </div>
                    </div>
                    
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Enter your password"
                            value={this.state.data.password}
                            onChange={this.handleChange}
                        />
                        <div className="errorStyle">
                            {this.state.passwordErr}
                        </div>
                    </div>
                    <div className="createAccount">
                                <button type="submit">Submit</button>
                        </div>
                </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);