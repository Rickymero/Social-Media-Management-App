import logo from './logo.svg';
import './App.css';
import Poststatus from './Poststatus';
import Login from './Login';
import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


//declare variables
var useState;
var axios;
var post = "Random Quotes";
var post_value;


const CreatePost =() =>{
  const {msg, setMessage} = useState("");


  //use Effect Function
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then(res => {
      const result = res.data;
      console.log(result.content);
      setMessage(result.content);
    });

    },[]);

    const postMessage = () => {
      const url = 'https://graph.facebook.com/565077415510303/feed?';
      axios
          .post(url,{
          message: post,
          access_token: 
            "EAAIB71afQR8BAEp8RLPJmHt8sRgX6cbAd689dbAZCHeTnLaRiVKruFIuNMDceF5NZCkcdshfhmkDoaZBNNXDnCaIXICkEfZBpX4mwFZB97ZCLXzG8EDBS3zYl3jnfuy6lD57A454UK30MzKuHKZAg0bFQBq3hxIapMCNrC4f4HOW75kawnUdm1r"

        })

        .then(
          res => {
            const result = res.data;
            console.log(result);
            alert("success");
          },
          error => {
            console.log("errors");
            alert("failed!");
          }
        );
    };
    
  };



//Post status function

function App() {
  return (
    <div className="App">
      
      <header>
        <nav>
            <img src="logo192.png" id="logo" alt="Logo"></img>
            <h1>   
                <li>
                    <ul><a href="">&nbsp;PUBLISH</a></ul>
                    <ul><a href="">&nbsp;MANAGE ACC</a></ul>
                    <ul><a href="">&nbsp;SCHEDULE</a></ul>
                    <ul><a href="">CONTACT US</a></ul>
                </li>
            </h1>
        </nav>
      </header>
      <br /><br /><br /><br /><br /><br />
      
     <Poststatus /><br /><br />
     <Login />
     
      
    </div>

    
  );
  
}

export default App;

