
import React from 'react'
import Cart from './Cart'

const Chamkeeli = () => {
  return (
    <div className='cart-container'>
      <Cart imgUrl1={'https://asimjofa.com/cdn/shop/files/AJKK-18_5.jpg?v=1721648954&width=900'} 
      imgUrl2={'https://asimjofa.com/cdn/shop/files/AJKK-18_10.jpg?v=1721648954&width=600'}/>
      <Cart imgUrl1={'https://asimjofa.com/cdn/shop/files/AJKK-13_1.jpg?v=1721646430&width=600'}
      imgUrl2={'https://asimjofa.com/cdn/shop/files/AJKK-13_5.jpg?v=1721646430&width=600'}
      />
      <Cart imgUrl1={'https://asimjofa.com/cdn/shop/files/AJKK-15_1.jpg?v=1721648085&width=600'}
      imgUrl2={'https://asimjofa.com/cdn/shop/files/AJKK-15_2.jpg?v=1721648084&width=600'}
      />
      <Cart imgUrl1={'https://asimjofa.com/cdn/shop/files/AJKK-6_5.jpg?v=1721643225&width=600'}
      imgUrl2={'https://asimjofa.com/cdn/shop/files/AJKK-6_3.jpg?v=1721643226&width=600'}/>
    </div>
  )
}

export default Chamkeeli
