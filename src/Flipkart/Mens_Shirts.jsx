import React,{ useEffect, useState } from "react";
import './App.css'

const Mens_Shirts = () => {
    const[ data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(data=>setData(data.products))
    }
    )
  return (    <div className="container" >
    <div className="row" id="row">

    {
        data.map((item) => 
<>
  
            <div className="col-sm-3 "  id="hover">
              
                   
                      <div id="sha" className="border border-info rounded-1 ps-3">
                <img src={item.thumbnail} width="270px;" height="200px;" id="img"/>
                <h5>{item.brand} {item.category}</h5>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <h6>Rs.{item.price}.</h6> 
                <h6 id="float">Discount: <span id="green">{item.discountPercentage}%</span></h6><br/>
                <h6>Rating: {item.rating}</h6>
                <h6>Stock:  Only {item.stock} Items Left</h6>
                </div>
                </div>
         

        
    
    </>
  )
}
</div>
         </div>

  )
}

export default Mens_Shirts