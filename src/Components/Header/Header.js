import React, { useContext } from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import { dbContext } from "./../../Context/Context";
import Basket from '../../Components/Basket/Basket';

const Header = () => {
  const contextData = useContext(dbContext);
  const navigate = useNavigate();
  const logoutUser = () => {
    console.log("ok");
    contextData.db.currentUser = {
      id: null,
    };
    navigate('/')

    console.log(contextData.db.currentUser);
  };
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="container row">
            <div className="nav">
              <ul className="nav-header">
                <li>
                  <a href="">اموزشHTML</a>
                </li>
                <li>
                  <a href="">اموزش CSS</a>
                </li>
                <li>
                  <a href="">اموزش جاوااسکریپت</a>
                </li>
                <li>
                  <a href="">اموزش بوت استرپ</a>
                </li>
                <li>
                  <a href="">اموزش پایتون</a>
                </li>
                <li>
                  <a href="">اموزش ریکت</a>
                </li>
              </ul>
            </div>
            <div className="logo">
              <div>
                <span>sabzlearn@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-botton">
          <div className="container row">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li className="main-header">
                  <Link to="frontend">
                    <a href="" className="submenunav">
                      فرانت اند
                      <FaChevronDown className="rfc" />
                    </a>
                  </Link>

                  <ul className="drop-down">
                    <li>
                      <a href="">اموزشHtml</a>
                    </li>
                    <li>
                      <a href="">اموزشCss</a>
                    </li>
                    <li>
                      <a href="">اموزشFlexBox</a>
                    </li>
                    <li>
                      <a href="">اموزش بوت استرپ</a>
                    </li>
                  </ul>
                </li>

                <li className="main-header">
                  <a href="" className="submenunav">
                    امنیت
                    <FaChevronDown className="rfc" />
                  </a>

                  <ul className="drop-down">
                    <li>
                      <a href="">اموزشHtml</a>
                    </li>
                    <li>
                      <a href="">اموزشCss</a>
                    </li>
                    <li>
                      <a href="">اموزشFlexBox</a>
                    </li>
                    <li>
                      <a href="">اموزش بوت استرپ</a>
                    </li>
                  </ul>
                </li>

                <li className="main-header">
                  <a href="">مقالات</a>
                </li>
                <li className="main-header">
                  <a href="">پاییتون</a>
                </li>
                <li className="main-header">
                  <a href="">مهارت های نرم</a>
                </li>
                <li className="main-header">
                  <a href="">فروشگاه</a>
                </li>
              </ul>
            </div>
           
           
            <div className="user">

            {contextData.db.currentUser.role==="admin" ?
                 <span id="panel-admin" onClick={()=>navigate('/dashboard')}>پنل </span>:
                 null

            }
              {contextData.db.currentUser.id ? (
                <>
                  <span>{contextData.db.currentUser.name} </span>
                  <sapn onClick={()=>logoutUser()} className="logout">
                    خروج
                  </sapn>
                </>
              ) : (
                <Link to="login">
                  <span>ورود/ثبت نام</span>
                </Link>
              )}

            

              <a href="#" className="basket"    onClick={() => {
              contextData.setIsShowCart(false);
              navigate('/cart')

            }}>
                <span  className="basket-image">
                  <img src="/images/bag.svg" alt="" />
                  {contextData.userCart.length?<span id="countbasket">{contextData.userCart.length}</span>:""}
              
                

                  {contextData.isShowCart &&<Basket/>}

                </span>
               
              
              </a>

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
