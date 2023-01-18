import React, {useEffect, useState,useContext} from 'react';
import { Outlet,useNavigate} from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { dbContext } from "./../../Context/Context";

import "./DashbordLayout.css"

const DashbordLayout = () => {

  const [loading, setLoading] = useState(true)
  const contextData = useContext(dbContext);
  const navigate=useNavigate()

  useEffect(() => {
    console.log(contextData.db.currentUser)
   
    // 1) currentuser edxist 2) current user admin bashe
    if(contextData.db.currentUser.id && contextData.db.currentUser.role==="admin" ){
      setLoading(false)
     
    }else{
      navigate('/')
      
    }

    // if true setloading false
    // if false navigate login
  }, [])

  if (loading) return <h1> loading </h1>

    return (

        <>

        <div className='parent'>

        <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <Link to="">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to="products">
            <MdProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="comments">
            <BiCommentDetail className="icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="users">
            <FiUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="orders">
              <BsBagCheck className="icon" />
              سفارشات
          </Link>
        </li>
        <li>
          <Link to="offs">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
   
   <div  className='outlet'>

   <Outlet/>
   </div>
       

       



        </div>


        </>
       
       
      )
    
     
}

export default DashbordLayout;
