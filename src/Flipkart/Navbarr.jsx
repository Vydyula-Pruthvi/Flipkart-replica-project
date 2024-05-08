import React from 'react'
import './App.css'

import {Link} from 'react-router-dom'

const Navbarr = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>

            <div className='col-sm-2'>

  <Link to ="/">

            <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg' width="150px;" height="60px;"/>
           
           </Link>
            </div>

            <div className='col-sm-4'>
                            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                <input class="form-control bg-body-tertiary me-5" type="search" placeholder="Search for Products,Brands and More" aria-label="Search"/>
                
                </form>
            </div>
            </nav>
           </div>

            <div className='col-sm-2 p-2'>
              <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg'/>
              <button type="button" class="btn btn-tertiary" id='hoverr'>User</button>
            </div>

            
            <div className='col-sm-2 p-2'>
              <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'/>
              <button type="button" class="btn btn-tertiary" id='hoverr'>Cart</button>
            </div>

            
            <div className='col-sm-2 p-2'>
              <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg'/>
              <button type="button" class="btn btn-tertiary" id='hoverr'><i class="fa-solid fa-user"></i> Become a Seller</button>
            </div>

           </div>
           </div>
           
<div className='container-fluid'>
        <div className='row' id='image'>
 
    <div className='col-sm-1'>

    <img src='https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100'/>
    <a class="link" href='Flip.jsx'><h6>Grocery</h6></a>
</div>

<div className='col-sm-1'>
<img src='https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100'/>
<a class="link" href='Flip.jsx'><h6>Mobiles</h6></a>
    </div>


    <div className='col-sm-1'>
      

<img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100'/>
<a class="link" href='Mens_shirts.jsx'><h6>Fashion</h6></a>
</div>

<div className='col-sm-1'>
<img src='https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100'/>
<a class="link" href='Flip.jsx'><h6>Electronics</h6></a>
    </div>


<div className='col-sm-1'>
<img src='https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100'/>
<a class="link" href='Flip.jsx'><h6>Home&Furniture</h6></a>
    </div>



<div className='col-sm-1' id='pro'>

  <Link to ="/Mens_Shirts">

<img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100'/>
<a class="link" href=''><h6 className='text-dark'>Products</h6></a>

</Link>
    </div>



<div className='col-sm-1'>
<img src='https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100'/>
<a class="link" href='Flip.jsx'><h6>Travel</h6></a>
    </div>

<div className='col-sm-1'>
<img src='https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100'/>
<a class="link" href='Flip.jsx'><h6>Beauty,Toys&More</h6></a>
    </div>

<div className='col-sm-2' id='bike'>
<img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100'/>
<a class="link" href='Flip.jsx'><h6>Two Wheeler</h6></a>
    </div>







    </div>
    </div>


   
    <div className='container-fluid'>
        <div className='row'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b583df18eb57c13e.jpeg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7258d330df72ecde.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/977fcd33f4fd525f.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div></div><br/>
</>
  )
}
export default Navbarr