import React, { Component } from 'react';
import Axios from 'axios';
import './ProfileRecord.css';

class ProfileRecord extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }


    componentDidMount() {
        Axios.get('http://localhost:5000/users/profile')
            .then(res => {
                    this.setState({
                        data:res.data.filter(user => user.email === localStorage.getItem('email'))
                    })
            })    
            .catch(err => {
                console.log(err)
            });
    }
    
    render() {
        return (
            <div className="wrapper">
                <div>
                {this.state.data.map((user,i) =>(
                    <div key={i}>
                        <p> First Name:{user.first_name}</p>
                        <p>Last Name:{user.last_name}</p>
                        <p>Address:{user.address}</p>
                        <p> Phone Number:{user.phone}</p>
                        <p>Date of Birth:{user.dob}</p>
                        <p>Gender:{user.gender}</p>
                        <p>Qualification:{user.qualification}</p>
                        <p>Email:{user.email}</p>
                    </div> 
                ))}
                </div>
            </div>
        );
    }
}

export default ProfileRecord;