import React from 'react'
import Cards from './Cards'
import {JwelleryCart} from './index'

const Jwellery = () => {
  return (
    <div className="other-pages">
    <div className="card-container">
      <div className="card-main-text">New in</div>

      <Cards imgUrl={'https://asimjofa.com/cdn/shop/files/Bracelet.jpg?v=1724828727&width=200'} text={"Bangles"}/>
      <Cards imgUrl={'https://asimjofa.com/cdn/shop/files/Ring.jpg?v=1724828727&width=200'} text={"Bangles"}/>
      <Cards imgUrl={'https://asimjofa.com/cdn/shop/files/Earring.jpg?v=1724828727&width=200'} text={"Bangles"}/>
      <Cards imgUrl={'https://asimjofa.com/cdn/shop/files/Set_7a852750-0808-409a-bdfc-78bbe3521e82.jpg?v=1724828727&width=200'} text={"Bangles"}/>
      
      
    </div>
    
       <JwelleryCart/>
        

    
    </div>
  )
}

export default Jwellery
