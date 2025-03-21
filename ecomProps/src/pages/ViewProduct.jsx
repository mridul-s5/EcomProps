import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ViewProduct = (props) => {
  let location = useLocation();
  // console.log(location)
  let product = location.state.ele;
  let allproducts = location.state.allProducts;
  console.log(product)
  console.log(allproducts)
  let filteredArr = allproducts.filter((obj)=>obj.category===product.category)
  console.log(filteredArr)

  const [selectedImage, setselectedImage] = useState('');
  const handleClick = (url)=>{
    // console.log(url)
    setselectedImage(url)
  }
  return (
    <div>
      <div className='w-full m-auto flex lg:flex-row flex-col lg:gap-2 gap-8 h-[85vh] p-8 '>
        <div className='h-full lg:w-[50%] w-[100%] m-auto'>
          <img src={selectedImage?selectedImage : product.thumbnail} className='w-full min-h-[400px] h-[60%] object-contain object-center' alt="" />
          <div className='flex justify-center gap-3 '>
                {
                  product.images.map((url,i)=>{
                    return <img onClick={()=>handleClick(url)}  className='border-black cursor-pointer border sm:w-[150px] sm:h-[150px] w-[20%] h-[20%]' key={url} src={url} alt="" />
                  })
                }
          </div>
        </div>
        <div className='lg:w-[50%] w-full text-white m-auto bg-[rgb(0,0,0,0.6)] py-4 ps-6 flex flex-col gap-2 h-max'>
          <h1 className='font-semibold text-xl'>{product.title}</h1>
           <p><b>Availability:</b> {product.availabilityStatus}</p>
          <p><b>Brand:</b> {product.brand}</p>
          <p><b>Price:</b> {product.price}</p>
          <p><b>Category:</b> {product.category}</p>
          <p><b>Discount:</b> {product.discountPercentage}%</p>
          
          <button onClick={()=>props.getFromChild(product)} className='bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 w-max cursor-pointer'>Add to Cart</button>

<Accordion sx={{backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">More details</Typography>
        </AccordionSummary>
        <AccordionDetails className='flex flex-col gap-2' sx={{backgroundColor:"black",color:"white"}}>
        <p><b>Rating:</b> {product.rating}</p>
          <p><b>Minimum order quantity:</b> {product.minimumOrderQuantity}</p>
          <p><b>ReturnPolicy:</b> {product.returnPolicy}</p>
          <p><b>Shipping Information:</b> {product.shippingInformation}</p>
         
        </AccordionDetails>
      </Accordion>

<Accordion sx={{backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">More details</Typography>
        </AccordionSummary>
        <AccordionDetails className='flex flex-col gap-2' sx={{backgroundColor:"black",color:"white"}}>
        <p><b>Stock:</b> {product.stock}</p>
          <p><b>Warranty:</b> {product.warrantyInformation}</p>
          <p><b>Weight:</b> {product.weight}</p>
          <p><b>Dimensions:</b> {product.dimensions.width }X{product.dimensions.height}X {product.dimensions.depth}</p>
          <p>{product.description}</p> 
         
        </AccordionDetails>
      </Accordion>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default ViewProduct
