import React from 'react'

function Product({ product, setCart }) {

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <button onClick={() => setCart(prevCart => [...prevCart, product])}>Add to Cart</button>
    </div>
  )
}

export default Product