import React,{useContext} from "react";
import "./Basket.css";
import { dbContext } from "./../../Context/Context";

const Basket = () => {
  const contextData = useContext(dbContext);
  console.log(contextData.userCart)
  return (
    <div className="baskets">
      <>
      {contextData.userCart.map((course)=>{
        return(
          <div className="basket-item">
          <img src={course.image} alt="" />

          <p className="title">{course.name}</p>
          <p className="price">{course.price}</p>
          <p className="count">تعداد:{course.count}</p>
        </div>

        )
      })}
       
      </>
    </div>
  );
};

export default Basket;
