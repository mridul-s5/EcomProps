import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FeaturedItem from '../components/FeaturedItem';


const Home = (props) => {

  const [allProducts, setallProducts] = useState([]); 
  console.log(allProducts)
  const getData = async()=>{
    let res = await fetch('https://www.dummyjson.com/products?limit=0');
    let data = await res.json();
    // console.log(data.products)
    setallProducts(data.products)
  }
  useEffect(()=>{

    getData()
  },[])

  const handleAdd = (obj ,index)=>{
    // console.log(obj)
    // console.log(index)
    props.getFromChild(obj)
  }

  let smartPhones = allProducts.filter((item)=>item.category==='smartphones')
  console.log(smartPhones)
  let Watches = allProducts.filter((item)=>item.category==='watches')
  console.log(Watches)

  return (
    <div>
        <div className='w-[80%] mx-auto my-6 bg-[rgb(0,0,0)] p-3 text-white'>
            <FeaturedItem smartPhones={smartPhones}/>
        </div>
        <div className='w-[80%] mx-auto my-6 bg-[rgb(0,0,0)] p-3 text-white'>
            <FeaturedItem Watches={watches}/>
        </div>
      <div className='grid w-[90%] bg-transparent my-5 m-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
        {
          allProducts.map((ele,i)=>{
            return <div className=' card1 shadow-xl flex flex-col text-white bg-[rgb(0,0,0,0.2)] items-center gap-2 p-3 shadow-black'>
              <img src={ele.thumbnail} alt="" />
              <p className='md:text-xl font-semibold sm:text-lg text-md '>{ele.title}</p>
              <Link to={'/view'} state={{ele,allProducts}}  className='bg-green-700 text-center text-white px-4 py-2 rounded-md w-[80%] hover:bg-green-600  cursor-pointer'>View </Link>
              <button onClick={()=>handleAdd(ele,i)} className='bg-blue-700 text-white px-4 py-2 rounded-md w-[80%] hover:bg-blue-600  cursor-pointer'>Add to Cart </button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Home
