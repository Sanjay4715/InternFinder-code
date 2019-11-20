import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';

const emailCheck=RegExp(/^[a-zA-Z0-9.!#$%''*+/=?^_``{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class Company_singIn extends Component{
    constructor(){
        super();
        this.state={
            data:{
                company_email:"",
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

        if(!this.state.data.company_email){
            emailErr="Invalid email";
        }
        else if(!emailCheck.test(this.state.data.company_email)){
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
            localStorage.setItem('company_email',this.state.data.company_email);
            Axios.post('http://localhost:5000/companies/login',this.state.data)
                    .then(res =>{
                        if(res.data.error){
                            alert(res.data.error + "Try Again");
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
                            alert("Login Succesfull!");
                            this.props.history.push("/companyprofile");
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
                <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h1>LOGIN</h1>
                    <div className="email">
                        <label htmlFor="company_email">Email</label>
                        <input 
                            type="email" 
                            name="company_email"
                            placeholder="Enter your Email address"
                            value={this.state.data.company_email}
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

export default withRouter(Company_singIn);