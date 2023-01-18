import React,{useContext,useState} from 'react'
import { dbContext } from '../../Context/Context';
import { BsSearch } from "react-icons/bs"
 import { useNavigate, Link } from 'react-router-dom'

import './Home.css'


export default function Home() {
  const[input,setInput]=useState("")
  const contextData=useContext(dbContext)
  const navigate=useNavigate()

  const onSubmit=(e)=>{
    e.preventDefault();
     navigate("/searchcourse/"+ input)


  }
  
  return (
    <>
     <div className="landing">
      <h1>ما به هر قیمتی دوره آموزشی تولید نمی کنیم !</h1>
      <p>با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</p>

      <form className="landing-search"  onSubmit={(e)=>onSubmit(e)}>
        <input type="text"   placeholder='دوست داری چی یادبگیری؟....'   onChange={(e)=>setInput(e.target.value)}
         value={input} />
        <button>
          <BsSearch  className='icon-search'/>

        </button>
      </form>

      <div className="landing-count">
        <div  className="landing-count-item">
          <span>31,320</span>
          <p>کاربر توی سبزلرن ثبت نام کردن</p>
        </div>
        <div className="landing-count-item">
        <span>40</span>
        <p>دوره آموزشی داریم</p>
        </div>
        <div className="landing-count-item">
        <span>31,320</span>
        <p>دقیقه آموزش تولید کردیم</p>
        </div>



      </div>
            
        </div>
        <div className="courses">
          <div className="container">
            <div className="courses-content">

              {contextData.db.products.map(product=>{
               
                return(
                  <Link to={`/detailCourse/${product.id}`} className="link-route">
                     <div className="courses-content-item" key={product.id}>
                  <img src={product.image} alt="" />
                  <p  className="category"> اموزش برنامه نویسی {product.category}</p>
                  <p className='title'>{product.name} </p>
                  <p className='price'>{product.price} هزار تومان</p>
                  </div>
                  </Link>

               
  
             
                )
              })}
             

             



            </div>
          </div>
        </div>
    
    </>
   
  )
}
