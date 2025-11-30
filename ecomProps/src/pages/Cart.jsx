// import React, { useMemo } from 'react'
import { IoBagOutline } from "react-icons/io5";

const Cart = (props) => {
    console.log(props.cartItem) //[{}, {}, {}]


      let sum = 0;

      for(let val of props.cartItem){
          sum = sum+ val.price
      }


    const handleDelete = (obj, i)=>{
      console.log(obj)
      console.log(i)
      let copyArr = [...props.cartItem]
        copyArr.splice(i , 1);
      props.setcartItem(copyArr)
      // props.cartItem.splice(i,1)
    }


    const handleIncrement = (obj,i)=>{
        // console.log(obj)
        console.log(i)

        obj.price = obj.price + (obj.price/obj.quantity)
        obj.quantity = obj.quantity+1

        console.log(obj)
        let copyArr = [...props.cartItem]
        copyArr[i] = obj
        props.setcartItem(copyArr)
    }

    const handleDecrement = (obj, i )=>{
      if(obj.quantity>1){
  console.log(obj)
      console.log(i)
      obj.price = obj.price - (obj.price/obj.quantity)
      obj.quantity = obj.quantity-1
      let copyArr = [...props.cartItem]
      copyArr[i] = obj

      props.setcartItem(copyArr)
      }
      else{
        handleDelete(obj , i)
      }
    
    }
  return (
    <div>
{props.cartItem.length >0 ? <div className="relative  bg-transparent overflow-x-auto">
  <table className="w-full  bg-[hsl(0,0%,100%)] text-center text-black text-sm  rtl:text-right">
    <thead className="text-xs">
      <tr>
        <th scope="col" className="px-6 py-3">
          Sno
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
      
        </th>
      </tr>
    </thead>
    <tbody>
     {
      props.cartItem.map((ele,i)=>{
        return  <tr className="bg-w border-b border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
          {i+1}
        </th>
        <td className="px-6 py-4">
          <img src={ele.thumbnail} className='w-[100px] m-auto h-[100px]' alt="" />
        </td>
        <td className="px-6 py-4">
          {ele.title}
        </td>
        <td className="px-6 py-4">
          ${ele.price.toFixed(2)}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=>handleIncrement(ele,i)} className='bg-blue-700 rounded-md px-3 py-2 text-white mx-1'>+</button>
           {ele.quantity} 
          <button onClick={()=>handleDecrement(ele,i)} className='bg-green-700 rounded-md px-3 py-2 text-white mx-1'>-</button> 
        </td>
        <td>
          <button onClick={()=>handleDelete(ele,i)} className='bg-red-700 text-white hover:bg-red-600 px-3 py-2 rounded-md'>Delete</button>
        </td>
      </tr>
      })
     }
   
    </tbody>
  </table>
  <h1 className='text-center py-2 text-xl bg-white'>Total = ${sum.toFixed()}</h1>
</div> : <h1 className='text-center mt-[150px] text-3xl font-bold  flex justify-center items-center gap-2'><IoBagOutline/> Cart is empty</h1>}


    </div>
  )
}

export default Cart
