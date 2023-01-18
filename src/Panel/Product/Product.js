import React,{useContext} from 'react'
import { dbContext } from '../../Context/Context';
import { Link} from 'react-router-dom';
import ErrorBox from "../Errorbox/Errorbox"

import "./Product.css"

export default function Product() {

  const contextData = useContext(dbContext);
  // console.log(contextData)
  
 
 


  return (
    // <ErrorBox  msg="هیچ محصولی یافت نشد"/>

    <>
    <table className="products-table">
      <thead>
        <tr className="products-table-heading-tr">
          <th>عکس</th>
          <th>عنوان</th>
          <th>قیمت</th>
         
        </tr>
      </thead>

   

<tbody>
  { contextData.db.products.map((product)=>{
   
   
   return(
    <tr className="products-table-tr"  key={product.id}>
    <td>
      <img
        src={product.image}
        alt=""
        className="products-table-img"
      />
    </td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    
    <td>

      <Link to={`detailsPro/${product.id}`}>
      <button className="products-table-btn"> جزییات </button>
      
      </Link>
    

      <button  className="products-table-btn" onClick={()=>contextData.deleteProduct(product.id)} > حذف </button>
      <Link to={`edit/${product.id}`}>
      <button className="products-table-btn">ویرایش</button>
      
      </Link>
    
    </td>
  </tr>

   )

  })}

</tbody>

   
    </table>

    <div  className='addnewproduct'>

      <Link to="add">
      
      <button  className="products-table-btn">اضافه کردن  دوره جدید</button></Link>
    
    </div>
   
    
  </>


   
  )
}
