import React, { Component } from 'react';
import './CompanySignUp.css';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

const emailCheck=RegExp(/^[a-zA-Z0-9.!#$%''*+/=?^_``{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class CompanySignUp extends Component {
    constructor(){
        super();
        this.state={
            data:{
                company_name:"",
                company_address:"",
                company_email:"",
                company_url:"",
                company_phone:"",
                password:"",
                confirmpassword:""
                },
            company_name_Err:"",
            company_address_Err:"",
            company_email_Err:"",
            company_url_Err:"",
            company_phone_Err:"",
            password_Err:"",
            confirmpassword_Err:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange=(e)=>
    (
        this.setState({
                data:{...this.state.data, [e.target.name]:e.target.value}
        })
    );

    validate=()=>{
        let company_name_Err="";
        let company_address_Err="";
        let company_phone_Err="";
        let company_email_Err="";
        let company_url_Err="";
        let password_Err="";
        let confirmpassword_Err="";

        if(!this.state.data.company_name){
            company_name_Err="Field must be filled";
        }

        if(!this.state.data.company_email){
            company_email_Err="Field must be filled";
        }
        else if(!emailCheck.test(this.state.data.company_email)){
            company_email_Err="Invalid email";
        }
        
        if(!this.state.data.company_url){
            company_url_Err="Field must be filled";
        }
        

        if(!this.state.data.company_address){
            company_address_Err="Field must be filled";
        }
        
        if(!this.state.data.company_phone){
            company_phone_Err="Field must be filled";
        }
        else if(this.state.data.company_phone.length<7){
            company_phone_Err="Length must be minimum of 7 characters";
        }

        if(!this.state.data.password){
            password_Err="Field must be filled";
        }
        else if(this.state.data.password.length<7){
            password_Err="Length must be minimum of 7 characters";
        }
        if(this.state.data.password!==this.state.data.confirmpassword){
            confirmpassword_Err="Password Not matched";
        }

        if(company_name_Err||company_email_Err||company_url_Err||company_phone_Err||company_address_Err||password_Err||confirmpassword_Err){
            this.setState({company_name_Err,company_email_Err,company_url_Err,company_phone_Err,company_address_Err,password_Err,confirmpassword_Err});
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
            Axios.post('http://localhost:5000/companies/register',this.state.data)
                    .then(res =>{
                        if(res.data.error){
                            alert(res.data.error);
                        }
                        else{
                            alert(res.data.message + 'Go to login section');
                            this.setState({
                                data:{
                                    company_name:"",
                                    company_address:"",
                                    company_email:"",
                                    company_url:"",
                                    company_phone:"",
                                    password:"",
                                    confirmpassword:""
                                    },
                                company_name_Err:"",
                                company_address_Err:"",
                                company_email_Err:"",
                                company_url_Err:"",
                                company_phone_Err:"",
                                password_Err:"",
                                confirmpassword_Err:""
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
        }
    }

    render(){
        return(
            <div className="company-style">
                <div className="Company_Wrapper">
                    <form className="form_wrapper" onSubmit={this.handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="company_name">
                            <label htmlFor="company_name">Company Name</label>
                            <input 
                                type="text" 
                                name="company_name" 
                                placeholder="Enter name of the company" 
                                value={this.state.data.company_name}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.company_name_Err}
                            </div>
                        </div>

                        <div className="company_address">
                            <label htmlFor="company_address">Company Address</label>
                            <input 
                                type="text" 
                                name="company_address" 
                                placeholder="Enter address of the company" 
                                value={this.state.data.company_address}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.company_address_Err}
                            </div>
                        </div>

                        <div className="company_phone">
                            <label htmlFor="company_phone">Company Phone</label>
                            <input 
                                type="tel" 
                                name="company_phone" 
                                placeholder="Enter phone number of the company" 
                                value={this.state.data.company_phone}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.company_phone_Err}
                            </div>
                        </div>

                        <div className="company_url">
                            <label htmlFor="company_url">Company URL</label>
                            <input 
                                type="text" 
                                name="company_url" 
                                placeholder="Enter url for the website of the company" 
                                value={this.state.data.company_url}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.company_url_Err}
                            </div>
                        </div>

                        <div className="company_email">
                            <label htmlFor="company_email">Company Email</label>
                            <input 
                                type="email" 
                                name="company_email" 
                                placeholder="Enter email address of the company" 
                                value={this.state.data.company_email}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.company_email_Err}
                            </div>
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter desired password" 
                                value={this.state.data.password}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.password_Err}
                            </div>
                        </div>

                        <div className="confirmpassword">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmpassword" 
                                placeholder="ReEnter password" 
                                value={this.state.data.confirmpassword}
                                onChange={this.handleChange}
                            />
                            <div className="error-style">
                                {this.state.confirmpassword_Err}
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

export default withRouter(CompanySignUp);