import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext';


const Home = () => {

    let ctx = useContext(CartContext);
    console.log(ctx);

    const [Allproducts, setAllproducts] = useState([]);

    const getData=async()=>{
        let res = await fetch('https://www.dummyjson.com/products?limit=0');
            let data = await res.json();
            console.log(data.products)
            setAllproducts(data.products)
    }


    const [currenPage, setcurrenPage] = useState(1);
    console.log(currenPage)
    const itemPerPage = 8;
    const lastIndex = itemPerPage * currenPage;
    const firstIndex = lastIndex - itemPerPage;
    let noOfBtn = Math.ceil(Allproducts.length / itemPerPage);
    console.log(noOfBtn) //20

    let slicedArr = Allproducts.slice(firstIndex, lastIndex);
    console.log(slicedArr)

    // let btnArr = [];

    // for(let i = 1; i<=noOfBtn; i++){
    //     btnArr.push(i)
    // }

    // console.log(btnArr)

    const handleNext = ()=>{
        if(currenPage < noOfBtn){
            setcurrenPage(currenPage+1)
      
    }
}

const handlePrev = ()=>{
    if(currenPage > 1){
        setcurrenPage(currenPage - 1)
    }
}

    useEffect(()=>{
        getData()
    },[])
  return (

    <div className=' pb-4'>
          
{/* <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' /> */}
 <div className='p-6  grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
    {
        slicedArr.map((ele,i)=>{
            return <div key={ele.id} className='flex shadow-xl shadow-black  bg-white gap-2 rounded-md p-3 flex-col justify-between items-center'>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
                <button  onClick={()=>ctx.AddtoCart(ele)} className='bg-green-500 px-3 py-2 rounded-md text-white'>Add to Cart</button>
            </div>
        })
    }  
    </div>

<div className='flex justify-center mt-4'>

{/*  ['', '', '', '', '', '','', '', '','','',''] */}

{/* 25 --> no of btn */}


<button onClick={()=>setcurrenPage(1)} className='bg-black text-white rounded-md p-1  mx-1'>&larr;</button>
<button onClick={handlePrev} className='bg-black text-white rounded-md p-1  mx-1'>Prev</button>
{
    Array(noOfBtn).fill('').map((ele,i)=>{
        //    4 >=1  && 4 < 6
        return i+1>=currenPage && i+1<currenPage+5 && <button style={{margin:'1px'}} key={i+1} onClick={()=>setcurrenPage(i+1)} className={`${currenPage===i+1?'bg-green-400':'bg-white'} text-black rounded-md p-1 w-10`}>{i+1}</button>
    })


}
{ currenPage < noOfBtn-4 && <button className=' text-white font-semibold rounded-md p-1 px-3 mx-1 '>...</button>}
<button onClick={handleNext} className='bg-black text-white rounded-md p-1 mx-1 '>Next</button>
<button onClick={()=>setcurrenPage(noOfBtn)} className='bg-black text-white rounded-md p-1 mx-1 '>&rarr;</button>
</div>
    </div>
   
  )
}

export default Home
