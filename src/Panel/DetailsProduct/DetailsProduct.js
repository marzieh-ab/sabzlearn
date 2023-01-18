import React,{useContext} from "react";
import { dbContext } from '../../Context/Context';

import { useParams } from "react-router-dom";
import "./DetailsProduct.css";

const DetailsProduct = () => {

    const contextData = useContext(dbContext);
    let params = useParams();
    let index=params.id;
   
    let product=contextData.db.products.find((product)=>product.id==index)
 

  return (
    // <ErrorBox  msg="هیچ محصولی یافت نشد"/>

    <>
      <table className="products-table1">
        <thead>
          <tr className="products-table-heading-tr1">
            <th>عکس</th>
            <th>عنوان</th>
            <th>قیمت</th>
          </tr>
        </thead>

        <tbody>

            
                <tr className="products-table-tr1" key={product.id}>
                <td>
                  <img src={product.image} alt="" className="products-table-img1" />
                </td>
                <td>{product.name}</td>
                <td classNmae="price">{product.price}</td>
    
           
              </tr>
              
          
        </tbody>
      </table>
    </>
  );
};

export default DetailsProduct;
