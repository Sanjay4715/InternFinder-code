import React,{Component} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
