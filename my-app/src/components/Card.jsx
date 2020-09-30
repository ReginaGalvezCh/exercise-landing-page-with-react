import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
<div class="card" style={{width: "18rem;"}}>
  <img src="https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_1280.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      );
}

export default Card;