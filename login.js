import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
class login extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <h3>Username</h3>
                    <input type="text" name="user" placeholder="Enter your username"></input>
                    <h3>Password</h3>
                    <input type="text" name="pass" placeholder="Enter your password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<login/>,document.getElementById('root'));