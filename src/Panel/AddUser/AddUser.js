import React,{useContext} from 'react'

import { useNavigate} from 'react-router-dom'
import { dbContext } from './../../Context/Context';
import  './AddUser.css'


export default function AddUser() {

    const contextData=useContext(dbContext)
    // console.log(contextData)
    
     const navigate=useNavigate()
   
  return (
    <div className='products-main'>
    <h1 className='products-title'>افزودن کاربر جدید</h1>

    <form action="#" className='add-products-form'  onSubmit={contextData.addUser} >
        <div className='add-products-form-wrap'>
            <div className='add-products-form-group'>
                <input type="text" placeholder='اسم کاربر را بنویسید'  
                 name="name" className='add-products-input' 
                 onChange={(e)=>contextData.setUsername(e.target.value)}
               
                 
                 />
            </div>
            <div className='add-products-form-group'>
                <input type="text" placeholder='تلفن کاربر را بنویسید'   name="name"
                 className='add-products-input'
                 onChange={(e)=>contextData.setUserphone(e.target.value)}
              
                 
                 />
            </div>
           
            <div className='add-products-form-group'>
                <input type="text" placeholder=' ایمیل کاربر را بنویسید' 
                  name="name" className='add-products-input'
                  onChange={(e)=>contextData.setUseremail(e.target.value)}
               
                  />
            </div>
          
           
           
        </div>
        <button className='add-products-submit'  onClick={()=>{
            navigate(-1)

        }}>ثبت کاربر</button> 
       
        {/* <Navigate  to="product"/> */}
    </form>
</div>
 
  )
}
