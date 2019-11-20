import React,{Component} from 'react';
import './About.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Member1 from '../../../Images/sanjay.jpg';
import Member2 from '../../../Images/binod.jpg';
import Member3 from '../../../Images/dipesh.jpg';
import Member4 from '../../../Images/Dhaal.jpg';

class About extends Component{
    render(){
        return(
            <div className="about-style">
                    <h1>About Us</h1>
                    <div className="question-wrapper">
                        <h1>FAQs</h1>
                        <Paper className="qa">
                            <Typography variant="h4" component="div">
                                What is Intern Finder?
                            </Typography>
                            <Typography component="p">
                                Intern Finder is a platform which allows user to find their dream jobs. 
                                Intern Finder allows specific ones to find internship on their desired field. 
                            </Typography>
                        </Paper>

                        <Paper className="qa">
                            <Typography variant="h4"component="div">
                                Why Intern Finder?
                            </Typography>
                            <Typography component="p">
                                Whenever someone is about to start a new job they are asked for certains years of experience which they can't give. 
                                So, internship is the one way from which freshers can earn the experience. But the problem is they never gets internship on desired fields.
                                This may be caused due to unavailable knowledge about the companies and thier vacancy.so, intern finder allows those users
                                to find the internship on their desired fields.
                            </Typography>
                        </Paper>

                        <Paper className="qa">
                            <Typography variant="h4"component="div">
                                How Intern Finder helps the users?
                                </Typography>
                            <Typography component="p">
                                Intern finder simply provides a platform in which there are vacancies available for the user to work on.
                            </Typography>
                        </Paper>

                        <Paper className="qa">
                            <Typography variant="h4"component="div">
                                What can Company do in this platform?
                            </Typography>
                            <Typography component="p">
                                Companies can publish their vacancies in our sites. Company can give their details so that users can contact them.
                            </Typography>
                        </Paper>

                        <Paper className="qa">
                            <Typography variant="h4"component="div">
                                How users can apply?
                            </Typography>
                            <Typography component="p">
                                Users first need to signup, they register with their information. Then, certain skills are to be added in the profile of user
                                which can be added by giving certain exam in our sites and after passing the exams then users can view the vacancy and can apply to it.
                                Single users can give number of exams of their desired fields.
                            </Typography>
                        </Paper>
                </div>
                <div className="Space"></div>

                <div className="contact-wrapper">
                        <h1>Team Members</h1>
                        <Paper className="member-style">
                            <img src={Member1} alt="member1" />
                                <Typography variant="h7" component="div">
                                Sanjay Rai
                                </Typography>
                                <Typography variant="h7" component="p">
                                Sonjrai@gmail.com
                                </Typography>
                        </Paper>

                        <Paper className="member-style">
                            <img src={Member2} alt="member1" />
                                <Typography variant="h7" component="div">
                                Binod Shakya
                                </Typography>
                                <Typography variant="h7" component="p">
                                binodshakya78@gmail.com
                                </Typography>
                        </Paper>

                        <Paper className="member-style">
                            <img src={Member3} alt="member1" />
                                <Typography variant="h7" component="div">
                                Dipesh Aryal
                                </Typography>
                                <Typography variant="h7" component="p">
                                dipesh.aryal@gmail.com
                                </Typography>
                        </Paper>

                        <Paper className="member-style">
                            <img src={Member4} alt="member1" />
                                <Typography variant="h7" component="div">
                                Nabin Dhakal
                                </Typography>
                                <Typography variant="h7" component="p">
                                dhakal.nabin@gmail.com
                                </Typography>
                        </Paper>
                    </div>
                    <div className="Space"></div>
            </div>  
        );
    }
}

export default About;