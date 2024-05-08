import React from 'react';


import Flip from './Flipkart/Flip';
import Navbarr from './Flipkart/Navbarr';
import Footerr from './Flipkart/Footerr';
import Mens_Shirts from './Flipkart/Mens_Shirts';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const App=()=>{
return(
<>



     <Router>
        <Navbarr/>
        <Routes>
          <Route path='/' element={<Flip/>}></Route>
          <Route path='/Mens_Shirts' element={<Mens_Shirts/>}></Route>

        </Routes>
          <Footerr/>
          </Router> 


</>
)
  
}

export default App