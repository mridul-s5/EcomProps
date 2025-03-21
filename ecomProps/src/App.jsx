
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ViewProduct from './pages/ViewProduct'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const [cartItem, setcartItem] = useState([]); //[{cooking oil}, {juice}]

  const getFromChild=(ans)=>{
    console.log(ans) //{juice}
    ans.quantity = 1

    let find = cartItem.find((items)=>items.id===ans.id)

    if(find){
      return toast.warning('item already added',{position:"top-center"})
    }
    else{
      let copyArr = [...cartItem,ans]   //  
      setcartItem(copyArr)
      toast.success('item added successfully', {position:'top-center'})
    }
  }

  return (
    <>
     <BrowserRouter>
    <div className='h-[67px]'>
    <Navbar cartItem={cartItem}/>
    </div>
        <Routes>
            <Route path='/' element={<Home getFromChild={getFromChild} />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/view' element={<ViewProduct getFromChild = {getFromChild} />}/>
            <Route path='/cart' element={<Cart setcartItem={setcartItem} cartItem={cartItem}/>}/>
        </Routes>
        <ToastContainer/>
     </BrowserRouter>
    </>
  )
}

export default App
