import React, { Component } from 'react';
import Axios from 'axios';
import './VacancyProfile.css';

class VacancyProfile extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }    

    componentDidMount() {
        Axios.get('http://localhost:5000/companies/profile')
            .then(res => {
                this.setState({
                    data:res.data.filter(company => company.company_email === localStorage.getItem('company_email'))
                    })
            })    
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div className="vacancyprofile-wrapper">
                 {this.state.data.map((company,i )=>(
                    <div key={i}>
                        <p> Company Name:{company.company_name}</p>
                        <p>Company Address:{company.company_address}</p>
                        <p>Phone Number:{company.company_phone}</p>
                        <p>Company URL:{company.company_url}</p>
                        <p>Company Email:{company.company_email}</p>
                    </div> 
                ))}
            </div>
        );
    }
}

export default VacancyProfile;