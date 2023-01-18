import React, { useContext,useState } from "react";
import { dbContext } from "./../../Context/Context";
import { Link} from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

import "./FrontEnd.css";

const FrontEnd = () => {
  const contextData = useContext(dbContext);

  // console.log( contextData)

//   const productFrontend = contextData.db.products.filter(
//     (item) => item.category == "فرانت اند"
//   );

 const productFrontend =contextData.db.products.map(item=>item).filter(item2=> item2.category == "فرانت اند")
 console.log(productFrontend)

 console.log( contextData.db.products)

//  return



  return (
    <>
      <div className="frontend">
        <div className="container">
          <div className="frontend-top">
            <div className="frontend-top-right">
              <div className="icon">1</div>
              <div className="icon">2</div>
              <div className="selection">
                <select
                  value={contextData.brand}
                  onChange={contextData.filterSelect}
                >
                  <option value="">مرتب سازی پیش فرض</option>
                  <option value="محبوبیت">مرتب سازی براساس محبوبیت</option>
                  <option value="امتیاز">مرتب سازی بر اساس امتیاز</option>
                  <option value="گران ترین">مرتب سازی بر اساس گران ترین</option>
                  <option value="ارزان ترین">
                    مرتب سازی بر اساس ارزان ترین
                  </option>
                </select>

              </div>
            </div>
            <div className="frontend-top-left">
              <form action="">
                <input type="text" placeholder="جستوجوی محصول" />
                <BsSearch className="search-icon" />
              </form>
            </div>
          </div>
        </div>

        <div className="frontend-content">
          <div className="container">
            <div className="frontend-courses">
              {productFrontend.map((product) => {
                return (

                    <>
                     
                       
                     <Link to={`/detailCourse/${product.id}`} className="link-route">
                    
                       <div className="frontend-course">
                      
                                           <img src={product.image} alt="" />
                                           <p className="category">
                                           {" "}
                                           اموزش برنامه نویسی {product.category}
                                           </p>
                                           <p className="title">{product.name}</p>
                                           <p className="price">{product.price}هزار تومان</p>
                                          
                                       
                                       </div>
                                       </Link>
                               
                               
                    
                    </>
                  
            
                
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
