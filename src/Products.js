import React from 'react';
import coffeemug from './images/coffee-mug.jpg';
import tumblrcup from './images/tumblrcup.jpeg';
function Products() {
    
    return (
        <section id='products'>
            <div class="container text-center">
                <br />
                <br />
                <h2 class="text-center" style={{marginBottom : '0px'}}>Products:</h2>
                <div class="row justify-content-start">
                    <div class="col-3">
    <div class="card" style={{width : '18rem', marginTop : '10px', marginLeft : '10px'}}>
        <img src={coffeemug} class="card-img-top" alt="picture of a coffee mug"></img>
            <div class="card-body">
                <p class="card-text">Item: Coffee Mug</p>
                <p class="card-text">Price: $20.00</p>
                <p class="card-text">Description: Ready to go customizable coffee mug!</p>
                <button type="button" class="btn  btn-info">Add To Cart</button>
                </div>
  </div>
  </div>
  <div class="col-3">
  <div class="card" style={{width : '18rem', marginTop : '10px', marginLeft : '10px'}}>
        <img src={tumblrcup} class="card-img-top" alt="picture of a tumblr cup"></img>
            <div class="card-body">
                <p class="card-text">Item: Tumblr Cup</p>
                <p class="card-text">Price: $30.00</p>
                <p class="card-text">Description: Ready to go customizable tumblr cup!</p>
                <button type="button" class="btn  btn-info">Add To Cart</button>
                </div>
  </div>
  </div>
  <div class="col-3">
  <div class="card" style={{width : '18rem', marginTop : '10px', marginLeft : '10px'}}>
        <img src={tumblrcup} class="card-img-top" alt="picture of a tumblr cup"></img>
            <div class="card-body">
                <p class="card-text">Item: Tumblr Cup</p>
                <p class="card-text">Price: $30.00</p>
                <p class="card-text">Description: Ready to go customizable tumblr cup!</p>
                <button type="button" class="btn  btn-info">Add To Cart</button>
                </div>
  </div>
  </div>
  <div class="col-3">
  <div class="card" style={{width : '18rem', marginTop : '10px', marginLeft : '10px'}}>
        <img src={tumblrcup} class="card-img-top" alt="picture of other item"></img>
            <div class="card-body">
                <p class="card-text">Item: Tumblr Cup</p>
                <p class="card-text">Price: $30.00</p>
                <p class="card-text">Description: Ready to go customizable tumblr cup!</p>
                <button type="button" class="btn  btn-info">Add To Cart</button>
                </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  )
}

export default Products;