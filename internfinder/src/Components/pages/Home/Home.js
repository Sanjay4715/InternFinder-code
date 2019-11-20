import React ,{Component} from 'react';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
               <div className="home-style">
                    <h1>Intern Finder</h1>
                    <h2>Want to pursue your dreams?</h2>
                    <h2>Didn't find the appropriate job?</h2>
                    <h2>Didn't find the right platform?</h2>
                </div>
            </div>
        );
    }
}

export default Home;