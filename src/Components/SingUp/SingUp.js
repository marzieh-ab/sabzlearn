import React, { useContext, useState, useEffect } from "react";
import { dbContext } from "./../../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import "./SingUp.css";


const SingUp = () => {

  const [formValue, setFromValue] = useState({
     name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const contextData = useContext(dbContext);


  
 
 
  
  const navigate = useNavigate();

  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const datas= { email: formValue.email,
         password: formValue.password ,
         name:formValue.name,
         confrimpassword:formValue.confirmPassword,
         isAccepted:formValue.isAccepted
        };
       

        setErrors(contextData.validate(datas, "signup"));
   
  }, [formValue,touched]);

  const onsubmit = (e) => {
    console.log("ok")
    e.preventDefault()
  
    // if (!contextData.errors.errorsvalidate ) {

      if (!Object.keys(errors).length){
       const clone = JSON.parse(JSON.stringify(contextData.db));
      console.log("okppp")
   
      const newUser = {
        id:contextData. db.users.length + 1,
        name:formValue.name,
        email:formValue.email,
       password:formValue.password,
       
       role:"user"
      };

    
  
      clone.users.push(newUser);
      console.log(clone,"clone")
    
    
      contextData.setDb(clone);
    
   

      setFromValue("")
    
      navigate("/");
   
     
     
    
    } else {
      setTouched(true);
     
     
    }
  
   
  };

  const changeHandler = event => {
    if (event.target.name === "isAccepted") {
      setFromValue({ ...formValue, [event.target.name]: event.target.checked })
    } else {
      setFromValue({ ...formValue, [event.target.name]: event.target.value })
    }
}

 

  return (
    <div className="container-form">
      <form className="formContainer" >
        <h2 className="header-from">ورود</h2>
        <div className="formField">
                    <label>نام</label>
                    <input
                        className="formInput"
                        type="text"
                        name="name"
                        value={formValue.name}
                        onChange={changeHandler}
                      
                    />
                    {errors.name && touched && <span>{errors.name}1</span>}
                </div>



        <div className="formField">
          <label>ایمیل</label>
          <input
           
            type="text"
            name="email"
            className="formInput"
            // onFocus={focusHanlder}
            value={formValue.email}
            onChange={changeHandler}
          />

          {errors.email && touched && (
            <span>{errors.email}</span>
          )}
        </div>
        <div className="formField">
          <label>پسورد</label>
          <input
       
            className="formInput"
            type="password"
            name="password"
            value={formValue.password}
            onChange={changeHandler}
          />
          {errors.password && touched && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className="formField">
          <label> پسورد</label>
          <input
        
            className="formInput"
            type="password"
             name="confirmPassword"
            value={formValue.confrimPassWord}
            onChange={changeHandler}
          />
          {errors.confrimpassword && touched && (
            <span>{errors.confrimpassword}</span>
          )}
        </div>
        <div className="formField">
                    <div className="checkBoxContainer">
                        <label>تمام قوانین را میپذیرم
                        </label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={formValue.isAccepted}
                            onChange={changeHandler}
                            />
                    </div>
                    {errors.isAccepted && touched && <span>{errors.isAccepted}</span>}
                </div>
       
        <div className="formButtons">
        {/* <a  herf="" className="register">ثبت نام</a> */}
          <button type="submit" onClick={(e)=>onsubmit(e)}>ورود</button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
