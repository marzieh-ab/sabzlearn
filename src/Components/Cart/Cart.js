import React,{useContext,useState,useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai"

// AiOutlineCloseCircle

import { dbContext } from "./../../Context/Context";
import './Cart.css';

const Cart = () => {
    const contextData = useContext(dbContext);
 
    // console.log(contextData.userCart)
    const[price,setPrice]=useState(0)

    const totalPrice=()=>{
      let totalSum = 0;
     contextData .userCart.map((item) => (totalSum += item.count * item.price));
     setPrice( totalSum);
  
  
    }

    useEffect(()=>{
     totalPrice()
   

    })

  

    const deleteCartItem=(id)=>{
       let filterBasket = contextData.userCart.filter((cart)=>cart.id !== id)
      contextData.setUserCart(filterBasket)

       

    }
    if(contextData.userCart.length ==0){
        return(
            <div className="empty-basket" >سبد خرید شما خالی است</div>
        )
    }

  

    const handelChangeNumber=(id,x)=>{
      contextData.incrementCart(id,x)


    }

    
    return (
      <>
 <div className="baskets-cart">
        <>

        
        {contextData.userCart.map((course)=>{
        
          return(
            <div className="basket-cart-item">
            <img src={course.image} alt="" />
  
            <p className="title">{course.name}</p>
            <p className="price">{course.price}</p>

            <div className="select-count">

            <p className="increse"  onClick={()=>handelChangeNumber(course,"+")}>+</p>
            <p className="count">تعداد:{course.count}
            <p className="decrise"  onClick={()=>handelChangeNumber(course,"-")} >-</p>
        
           
            </p>

            </div>
            <p className="total-price">قیمت:{course.count*course.price}</p>
           
           
            < AiOutlineClose  className="close-icon"  onClick={()=>deleteCartItem(course.id)}/>

          </div>
  
          )
        })}
         
        </>
      </div>
      <div  className="final-price">

      <button  className="final">{price}:قیمت نهایی</button>
      </div>

      

      
      </>

    
     
    );
  };
  
export default Cart;
