import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            ctx.cartArr.map((ele,i)=>{
              return <tr>
                <td>{i+1}</td>
                <td><img src={ele.thumbnail} className='w-[70px] h-[70px]' alt="" /></td>
                <td>{ele.title}</td>
                <td>
                  <button className='bg-green-700 p-2 rounded-md'>+</button>
                  {ele.quantity}
                  <button className='bg-green-700 p-2 rounded-md'>-</button>
                  </td>
                  <td>{ele.price}</td>
                 
                  <td> <button className='bg-red-700 p-2 rounded-md'>delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart
