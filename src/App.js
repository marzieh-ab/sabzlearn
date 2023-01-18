import React from "react";
import Header from "./Components/Header/Header";
import WebLayout from "./Components/WebLayOut/WebLayOut";
import Productweb from "./Components/Product/Product";
import Homeweb from "./Components/Home/Home";
import Usersweb from "./Components/Users/User";
import FrontEnd from './Components/FrontEnd/FrontEnd'
import DetailCourse from './Components/DetailCourse/DetailCourse';
import SeachCourse from './Components/SearchCourse/SearchCourse'
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp'
import Cart from './Components/Cart/Cart'


import Home from "./Panel/Home/Home";
import Products from "./Panel/Product/Product";
import Users from "./Panel/Users/User";
import AddUser from './Panel/AddUser/AddUser';
import DashboardLayout from "./Panel/DashbordLayout/DashbordLayout";
import Orders from "./Panel/Order/Order";
import Comments from "./Panel/Comments/Comment";
import DetailsProduct from './Panel/DetailsProduct/DetailsProduct'
import EditProduct from "./Panel/EditProduct/Editproduct"
import AddProduct from "./Panel/AddProduct/AddProduct"
import DetailsUser from './Panel/DetailsUser/DetailsUser';
import EditUser from './Panel/EditUser/EditUser'
import Offs from "./Panel/Offs/off";

import Context from "./Context/Context";

import { Routes, Route } from "react-router-dom";

// import "./App.css"

export default function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route path="" element={<Homeweb />} />
          <Route path="products" element={<Productweb />} />
          <Route path="users" element={<Usersweb />} />
          <Route path="frontend" element={<FrontEnd />} />
          <Route   path="detailCourse/:id" element={<DetailCourse />} />
          <Route path="searchcourse/:search"  element={<SeachCourse/>}/>
          <Route  path="login"  element={<Login/>}/>
          <Route  path="singup"  element={<SingUp/>}/>
          <Route  path="cart"  element={<Cart/>}/>


        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Home />} />
         
          <Route path="products" element={<Products />} />
          <Route   path="products/detailsPro/:id" element={<DetailsProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="comments" element={<Comments />} />
          <Route path="offs" element={<Offs />} />
          <Route path="users" element={<Users />} />
          <Route   path="users/detailsUser/:id" element={<DetailsUser />} />
          <Route   path="users/add" element={<AddUser />} />
          <Route   path="users/editUser/:id" element={<EditUser />} />

        
         
        </Route>
      </Routes>
    </Context>
  );
}
