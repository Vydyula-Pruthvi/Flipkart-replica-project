import React,{useEffect,useState} from "react";

const Brand = () =>{
    const [data,setData]=useState([]);
        useEffect(()=>{
            fetch('https://dummyapi.online/api/movies')
            .then(response=>response.json())
            .then(data=>setData(data.meals))
        })
        return(
          <div>
            {
                data.map((item)=>
                <>
                <h6>Blini Pancakes</h6>
                
                </>
                )
            }
          </div>
        
        )

}
export default Brand