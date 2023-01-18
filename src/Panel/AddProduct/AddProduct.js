import React,{useContext} from 'react'

import { useNavigate} from 'react-router-dom'
import { dbContext } from './../../Context/Context';
import  './AddProduct.css'


export default function AddProduct() {

    const contextData=useContext(dbContext)
     const navigate=useNavigate()
   
  return (
    <div className='products-main'>
    <h1 className='products-title'>افزودن محصول جدید</h1>

    <form action="#" className='add-products-form'  onSubmit={contextData.AddProduct}>
        <div className='add-products-form-wrap'>
            <div className='add-products-form-group'>
                <input type="text" placeholder='اسم محصول را بنویسید'  
                 name="name" className='add-products-input' 
                 value={contextData.inputName}
                 onChange={(e)=>contextData.setInputName(e.target.value)}
                 
                 />
            </div>
            <div className='add-products-form-group'>
                <input type="text" placeholder='قیمت محصول را بنویسید'   name="name"
                 className='add-products-input'
                 value={contextData.inputPrice}
                 onChange={(e)=>contextData.setInputPrice(e.target.value)}
                 
                 />
            </div>
           
            <div className='add-products-form-group'>
                <input type="text" placeholder='آدرس عکس محصول را بنویسید' 
                  name="name" className='add-products-input'
                  value={contextData.inputImage}
                  onChange={(e)=>e.target.value}
                  />
            </div>
          
           
           
        </div>
        <button className='add-products-submit'  onClick={()=>{
            navigate(-1)

        }} >ثبت محصول</button>
        {/* <Navigate  to="product"/> */}
    </form>
</div>
 
  )
}
