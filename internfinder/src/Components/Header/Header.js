import React,{Component} from 'react';
import {Route,Link , withRouter} from 'react-router-dom';
import './Header.css';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import User from '../pages/User/User';
import Company from '../pages/Company/Company';
import UserProfile from '../pages/Profiles/UserProfile';
import CompanyProfile from '../pages/Profiles/CompanyProfile';

class Header extends Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn:false,
      isUserLoggedIn:false
    }
    this.handleUserLogin=this.handleUserLogin.bind(this);
    this.handleCompanyLogin=this.handleCompanyLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }

  handleUserLogin(e){
    e.preventDefault();
    this.setState({
      isLoggedIn:true,
      isUserLoggedIn:true
    })
    console.log(this.state.isLoggedIn);
    this.props.history.push('/user/login');
  }
 
  handleCompanyLogin(e){
    e.preventDefault();
    this.setState({
      isLoggedIn:true,
      isUserLoggedIn:false
    })
    console.log(this.state.isLoggedIn);
    this.props.history.push('/company/login');
  }

  handleLogout(e){
    e.preventDefault();
    this.setState({
      isLoggedIn:false
    })
    console.log(this.state.isLoggedIn);
    this.props.history.push('/');
  }

    render(){
      const LoginLink =(
        <ul>
        <li><Link to="/login" className="link-style" onClick={this.handleUserLogin}>User</Link></li>
        <li><Link to="/company" className="link-style" onClick={this.handleCompanyLogin}>Company</Link></li>
        </ul>
      )

      const UserLink = (
        <ul>
            <li><Link to="/userprofile" className="link-style">Profile</Link></li>
            <li><Link to="/" className="link-style" onClick={this.handleLogout}>Log Out</Link></li>
        </ul>
      )

      const CompanyLink = (
        <ul>
          <li><Link to="/companyprofile" className="link-style">Profile</Link></li>
          <li><Link to="/" className="link-style" onClick={this.handleLogout}>Log Out</Link></li>
        </ul>
      )
        return(
            <div>
                <header className="navbar">
          <nav className="navbar-navigation">
              <Link to ="/" className="title-style">Intern Finder</Link>
              <div className="space"></div>
              <div className="items-style">
                <ul>
                  <li><Link to="/" className="link-style">Home</Link></li>
                  <li><Link to="/about" className="link-style">About</Link></li>
                  {this.state.isLoggedIn ? (this.state.isUserLoggedIn?UserLink:CompanyLink) : LoginLink}
                 
                </ul>
              </div> 
          </nav>
        </header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/user" component={User}></Route>
        <Route path ="/userprofile" component={UserProfile}></Route>
        <Route path ="/companyprofile" component={CompanyProfile}></Route>
        <Route path="/company" component={Company}></Route>
            </div>
        );
    }
}

export default withRouter(Header);