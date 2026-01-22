import React from 'react'

function Cart({ cart, setCart }) {
 


  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
            <p>Total Items: {cart.length}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart