import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <div className="container-fluid">
            <header>
                <Navbar></Navbar>
            </header>
            <div class="container">
                    <Jumbotron></Jumbotron>
                
                <div className="row">
                    <div class="col-3"><Card></Card></div>
                    <div class="col-3"><Card></Card></div>
                    <div class="col-3"><Card></Card></div>
                    <div class="col-3"><Card></Card></div>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default App;
