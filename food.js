import React from 'react';
import './App.css';
import logo from './restaurant_24px.svg';
import image from './burger.jpeg';
import image1 from './fries.jpeg';
import image2 from './coke.jpeg';
import image3 from './pepsi.jpeg';
class food extends React.component{
    render(){
    return
        <div className="food"> 
        <header class="app-header">
             <img src={logo} className="App-logo" alt="logo"/>
      <h3>Food Restaurant</h3>
      
        </header>
        <div className="container">
        <div className="card">
            <img src={image} alt="image"></img>
            <button>+</button><button></button>
            </div>
            <div className="card">
            <img src={image1} alt="image"></img>
            <button>+</button><button></button>
            </div>
            <div className="card">
            <img src={image2} alt="image"></img>
            <button>+</button><button></button>
            </div>
            <div className="card">
            <img src={image3} alt="image"></img>
            <button>+</button><button></button>
            </div>
        
        </div>
</div>
    }
} 