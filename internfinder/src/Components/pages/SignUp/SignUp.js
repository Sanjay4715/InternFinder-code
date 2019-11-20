import React,{Component} from 'react';
import './SignUp.css';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
import './SignUp.css';

const emailCheck=RegExp(/^[a-zA-Z0-9.!#$%''*+/=?^_``{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class SignUp extends Component{
    constructor(){
        super();
        this.state={
            data:{
                first_name:"",
                last_name:"",
                address:"",
                phone:"",
                dob:"",
                gender:"",
                qualification:"",
                email:"",
                password:"",
                confirmpassword:""
                },
            firstnameErr:"",
            lastnameErr:"",
            phoneErr:"",
            addressErr:"",
            dobErr:"",
            genderErr:"",
            qualificationErr:"",
            emailErr:"",
            passwordErr:"",
            confirmpassword:""
        };
        this.handlechange=this.handlechange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRadio=this.handleRadio.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }

    handleRadio(e){
        this.setState({
            data:{...this.state.data,gender:e.target.value}
        });
    }

    handleSelect(e){
        this.setState({
          data:{...this.state.data,qualification:e.target.value}
        });
      }

    handlechange=(e)=>{
        this.setState({
            data:{...this.state.data, [e.target.name]:e.target.value}
        });
    }

    validate=()=>{
        let firstnameErr = "";
        let lastnameErr = "";
        let phoneErr = "";
        let addressErr= "";
        let dobErr= "";
        let genderErr= "";
        let qualificationErr= "";
        let emailErr = "";
        let passwordErr = "";
        let confirmpasswordErr="";
    
        if (!this.state.data.first_name) {
          firstnameErr = "name cannot be blank";
        }

        if(!this.state.data.last_name){
            lastnameErr="name cannot be blank";
        }

        if(!this.state.data.phone){
            phoneErr="Field cannot be blank";
        }
        else if(this.state.data.phone.length<7){
            phoneErr="Length of phone number must be of atleast 7 digits";
        }

        if(!this.state.data.email){
            emailErr="Invalid email address";
        }

        if (!emailCheck.test(this.state.data.email)) {
          emailErr = "invalid email address";
        }

        if(!this.state.data.address){
            addressErr="Field cannot be blank";
        }

        if(!this.state.data.dob){
            dobErr="Field cannot be blank";
        }

        if(!this.state.data.gender){
            genderErr="Please select any one";
        }

        if(!this.state.data.qualification){
            qualificationErr="please select any one";
        }

        if(!this.state.data.password){
            passwordErr="Password cannot be blank";
        }
        else if(this.state.data.password.length<7){
            passwordErr="Password should me minimum of 7 characters";
        }

        if(this.state.data.password!==this.state.data.confirmpassword){
            confirmpasswordErr="Password Not matched";
        }

        if (firstnameErr||lastnameErr||addressErr||phoneErr||dobErr||genderErr||qualificationErr||emailErr||passwordErr||confirmpasswordErr) {
          this.setState({ firstnameErr,lastnameErr,addressErr,phoneErr,dobErr,genderErr,qualificationErr,emailErr, passwordErr,confirmpasswordErr});
          return false;
        }
    
        return true;
    };

    handleSubmit=(e)=>{
        const isValid = this.validate();
        e.preventDefault();
       
        if (isValid) {
            console.log(this.state.data);
            Axios.post('http://localhost:5000/users/register',this.state.data)
                    .then(res => {
                        console.log(res.message)
                        alert("SignUp successfull!")
                        this.props.history.push('/user');
                    })
                    .catch(err =>{
                        console.log(err);
                    })
        }
    }


    render(){
        return(
            <div className="Wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="first_name">
                                <label htmlFor="first_name">First Name</label>
                                    <input 
                                        type="text"
                                        name="first_name"
                                        placeholder="Enter first name"
                                        value={this.state.data.first_name}
                                        onChange={this.handlechange} 
                                    />
                                    <div className="errorStyle">
                                        {this.state.firstnameErr}
                                    </div>
                            </div>

                            <div className="last_name">
                                <label htmlFor="last_name">Last Name</label>
                                    <input 
                                        type="text"
                                        name="last_name"
                                        placeholder="Enter last name"
                                        value={this.state.data.last_name}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.lastnameErr}
                                    </div>
                            </div>

                            <div className="address">
                                <label htmlFor="address">Address</label>
                                    <input 
                                        type="text"
                                        name="address"
                                        placeholder="Enter your current address"
                                        value={this.state.data.address}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.addressErr}
                                    </div>
                            </div>

                            <div className="phone">
                                <label htmlFor="phone">Phone Number</label>
                                    <input 
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={this.state.data.phone}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.phoneErr}
                                    </div>
                            </div>

                            <div className="dob">
                                <label htmlFor="dob">Date of Birth</label>
                                    <input 
                                        type="date"
                                        name="dob"
                                        placeholder="Enter your birth date"
                                        value={this.state.data.dob}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.dobErr}
                                    </div>
                            </div>

                            <div className="gender">
                                <label htmlFor="gender">Gender</label>
                                <br/>
                                    <input 
                                        type="radio" 
                                        name="gender" 
                                        value="Male" 
                                        className="Radio-style"
                                        checked={this.state.data.gender === "Male"} 
                                        onChange={this.handleRadio}
                                    /><div className="Radio-text">Male</div>
                                    
                                    <input 
                                        type="radio" 
                                        name="gender" 
                                        value="Female"         
                                        className="Radio-style"
                                        checked={this.state.data.gender === "Female"} 
                                        onChange={this.handleRadio}
                                    /><div className="Radio-text">Female</div>

                                    <input 
                                        type="radio" 
                                        name="gender" 
                                        value="Other" 
                                        className="Radio-style"
                                        checked={this.state.data.gender === "Other"} 
                                        onChange={this.handleRadio}
                                    /><div className="Radio-text">Other</div>

                                     <div className="errorStyle">
                                        {this.state.genderErr}
                                    </div>
                            </div>

                            <div className="qualification">
                                <label htmlFor="qualification">Qualification</label>
                                    <select value={this.state.data.qualification} onChange={this.handleSelect}>
                                        <option value="">Please Choose One</option>
                                        <option value="Secondary Level">Secondary Level</option>
                                        <option value="Higher Secondary Level"> Higher Secondary Level</option>
                                        <option value="Bachelor Degree">Bachelor Degree</option>
                                        <option value="Masters Degree">Masters Degree</option>
                                        <option value="PhD">PhD</option>
                                    </select>
                                     <div className="errorStyle">
                                        {this.state.qualificationErr}
                                    </div>
                            </div>
                
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Enter your desired Email address"
                                        value={this.state.data.email}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.emailErr}
                                    </div>
                            </div>

                            <div className="password" >
                                <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Enter desired password"
                                        value={this.state.data.password}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.passwordErr}
                                    </div>
                            </div>
                            
                            <div className="confirmpassword" >
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input 
                                        type="password"
                                        name="confirmpassword"
                                        placeholder="ReEnter password"
                                        value={this.state.data.confirmpassword}
                                        onChange={this.handlechange} 
                                    />
                                     <div className="errorStyle">
                                        {this.state.confirmpasswordErr}
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

export default withRouter(SignUp);