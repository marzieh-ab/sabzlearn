import React,{useContext,useState,useEffect} from 'react'

import { useNavigate,useParams} from 'react-router-dom'
import { dbContext } from './../../Context/Context';
import  './EditUser.css'



export default function EditUser() {

    const contextData=useContext(dbContext)
    console.log(contextData)
    let params = useParams()
    let index=params.id
     const navigate=useNavigate()

    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [phone,setPhone]=useState("")

   
     useEffect(()=>{
        const selectUser=contextData.db.users.find((user)=>user.id==index)
        console.log(selectUser)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setPhone(selectUser.phone)


     },[])

     const onSubmit=(e,id)=>{
        e.preventDefault()
        const data={name,phone,email}
        contextData.EditUser(data,index)


     }
   
  return (
    <div className='products-main'>
    <h1 className='products-title'>ویرایش کاربر </h1>

    <form action="#" className='add-products-form'  onSubmit={(e)=>onSubmit(e,index)} >
        <div className='add-products-form-wrap'>
            <div className='add-products-form-group'>
                <input type="text" placeholder='اسم کاربر را بنویسید'  
                 name="name" className='add-products-input' 
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
               
                 
                 />
            </div>
            <div className='add-products-form-group'>
                <input type="text" placeholder='تلفن کاربر را بنویسید'   name="name"
                 className='add-products-input'
                 onChange={(e)=>setPhone(e.target.value)}
                 value={phone}
              
                 
                 />
            </div>
           
            <div className='add-products-form-group'>
                <input type="text" placeholder=' ایمیل کاربر را بنویسید' 
                  name="name" className='add-products-input'
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
               
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
