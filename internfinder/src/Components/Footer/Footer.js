import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer-style"> 
                    <div className="container">
                        <Link to="/" className="title-logo-footer">Intern Finder</Link>
                           <div className="text-footer">
                            Copyright &copy; {(new Date()).getFullYear()} All Rights Reserved.
                        </div>
                        <div className="space"></div>
                        <div className="logo-style">
                        <ul>
                            <li className="iconfb"><FacebookIcon/></li>
                            <li className="iconins"><InstagramIcon/></li>
                            <li className="icontwi"><TwitterIcon/></li>
                            <li className="iconpin"><PinterestIcon/></li>
                            <li className="iconlink"><LinkedInIcon/></li>
                        </ul>
                        </div>
                    </div>
                </footer>    
            </div>
        );
    }
}

export default Footer;  