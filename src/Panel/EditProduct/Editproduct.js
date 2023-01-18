import React,{useContext,useState,useEffect} from 'react'
import { dbContext } from './../../Context/Context';
import { useParams,useNavigate } from 'react-router-dom'

import "./EditProduct.css"

export default function Editproduct() {
    const contextData = useContext(dbContext);
    // console.log(contextData)
    let params = useParams()
    let index=params.id
    const navigate=useNavigate()

   

    

    const[inputName,setInputName]=useState("")
    const[inputPrice,setInputPrice]=useState("")
    const [inputImage,setInputImage]=useState("")

       useEffect(() => {
     
       const selectProduct= contextData.db.products.find(product=>product.id==index)
       setInputName(selectProduct.name)
       setInputPrice(selectProduct.price)


       
    }, []);

    const onSubmit = (e,id) => {
        
        e.preventDefault();
     
     const data={name:inputName,price:inputPrice,image:"/images/youtuber.png"}
     contextData.editProduct(id,data)
      

      
       
       
      };

   
      
  return (
    
        <div className='products-main'>
            <h1 className='products-title'>افزودن محصول جدید</h1>
            {/* onSubmit={(e)=>contextData.editProduct(e,index)} */}
  
            <form action="#" className='add-products-form' onSubmit={(e)=>onSubmit(e,index)} >
                <div className='add-products-form-wrap'>
                    <div className='add-products-form-group'>
                        <input type="text" placeholder='اسم محصول را بنویسید'
                       value={inputName}
                       onChange={(e)=>setInputName(e.target.value)}
                        
                        name="name" className='add-products-input'/>
                    </div>
                    <div className='add-products-form-group'>
                        <input type="text" placeholder='قیمت محصول را بنویسید' 
                          value={inputPrice}
                          onChange={(e)=>setInputPrice(e.target.value)}
                        
                          name="name" className='add-products-input'/>
                    </div>
                   
                    <div className='add-products-form-group'>
                        <input type="text" placeholder='آدرس عکس محصول را بنویسید'   name="name" className='add-products-input'/>
                    </div>
                  
                   
                   
                </div>
                <button className='add-products-submit' 
                onClick={()=>{
                    navigate(-1)

                }}
                
                
                >ثبت محصول</button>

            </form>
        </div>
    
   
  )
}
