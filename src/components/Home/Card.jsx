import React from 'react'
import "../../styles/CardsItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faCake, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
    <div className='container'>
       <div style={{margin:"1rem"}} className="seven">  <h1>Our Products </h1></div>
            <div class="layout">
      
     <Link to="/pizza-menu"> <div class="card">
  
  
  <div class="icon">
    
    <FontAwesomeIcon style={{color:'white',fontSize:"3rem"}} icon={faPizzaSlice}/>
  </div>
  <p class="title">Frozen Pizza</p>
  <p class="text">Check all our Frozen Pizza in one place.</p>
</div>
</Link>
<Link to="/bakery-menu">
<div class="card">
  <div class="icon">
   
    <FontAwesomeIcon style={{color:'white',fontSize:"3rem"}} icon={faBreadSlice}/>

  </div>
  <p class="title">Bakery</p>
  <p class="text">Check all our Bakery in one place.</p>
</div>
</Link>
<Link to={"/restaurant-menu"}>
<div class="card">
  <div class="icon">
    
    <FontAwesomeIcon style={{color:'white',fontSize:"3rem"}} icon={faUtensils}/>

  </div>
  <p class="title">Restaurant</p>
  <p class="text">Check all our Restaurant in one place.</p>
</div>
</Link>
</div>


    </div>
  )
}
