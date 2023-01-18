import React, { useContext, useState, useEffect } from "react";
import { dbContext } from "./../../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import "./SingUp.css";


const SingUp = () => {
  const contextData = useContext(dbContext);
  // console.log(contextData)
  const navigate = useNavigate();

  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const data = { email: contextData.email,
         password: contextData.password ,
         name:contextData.name,
         confrimpassword:contextData.confrimPassWord,
         isAccepted:contextData.isAccepted
        };

    contextData.validate(data,"signup");
  }, [contextData.email, contextData.password,contextData.name,contextData.confrimPassWord,contextData.isAccepted]);

  const onsubmit = (e) => {
    console.log("ok")
    e.preventDefault();

    if (contextData.errorEmail == "" && contextData.erroePassword == "" && contextData.errorName=="" && contextData.errorConfrimPassWord=="" && contextData.errorIsAccepted=="") {
      const clone = JSON.parse(JSON.stringify(contextData.db));
   
      const newUser = {
        id:contextData. db.users.length + 1,
        name:contextData. name,
        email:contextData .email,
       password:contextData.password,
       
       role:"user"
      };
  
      clone.users.push(newUser);
      console.log("newUser",newUser)
    
      contextData.setDb(clone);
      console.log("clone",clone)

       contextData.setEmail("")
      contextData.setPassword("")
      contextData.setName("")
      contextData.setConfrimPassWord("")
    
      navigate("/");
     
     
    
    } else {
      setTouched(true);
     
     
    }
  
   
  };

  const onChangeEmail = (e) => {
 
    contextData.setEmail(e.target.value);
    contextData.setEmailErrore("");
  };

  const onChangePassword = (e) => {
   
    contextData.setPassword(e.target.value);
    contextData.setErrorPassword("");
  };

  const onChangeName=(e)=>{
   
    contextData.setName(e.target.value)
    contextData.setErrorName("")

  }

  const onChangePasswordConfrim=(e)=>{
   
    contextData.setConfrimPassWord(e.target.value)
    contextData.setErrorConfrimPassWord("")

  }
  const onChangeisAccepted=(e)=>{
  
    contextData.setIsAccepted(e.target.checked )
    contextData.setErrorIsAccepted("")

  }

  return (
    <div className="container-form">
      <form className="formContainer" onSubmit={onsubmit}>
        <h2 className="header-from">ورود</h2>
        <div className="formField">
                    <label>نام</label>
                    <input
                        className="formInput"
                        type="text"
                        name="name"
                        value={contextData.name}
                        onChange={onChangeName}
                      
                    />
                    {contextData.errorName && touched && <span>{contextData.errorName}</span>}
                </div>



        <div className="formField">
          <label>ایمیل</label>
          <input
           
            type="text"
            name="email"
            className="formInput"
            // onFocus={focusHanlder}
            value={contextData.email}
            onChange={onChangeEmail}
          />

          {contextData.errorEmail && touched && (
            <span>{contextData.errorEmail}</span>
          )}
        </div>
        <div className="formField">
          <label>پسورد</label>
          <input
       
            className="formInput"
            type="password"
            name="password"
            value={contextData.password}
            onChange={onChangePassword}
          />
          {contextData.erroePassword && touched && (
            <span>{contextData.erroePassword}</span>
          )}
        </div>
        <div className="formField">
          <label> پسورد</label>
          <input
        
            className="formInput"
            type="password"
             name="confirmPassword"
            value={contextData.confrimPassWord}
            onChange={onChangePasswordConfrim}
          />
          {contextData.errorConfrimPassWord && touched && (
            <span>{contextData.errorConfrimPassWord}</span>
          )}
        </div>
        <div className="formField">
                    <div className="checkBoxContainer">
                        <label>تمام قوانین را میپذیرم
                        </label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={contextData.isAccepted}
                            onChange={onChangeisAccepted}
                            />
                    </div>
                    {contextData.errorIsAccepted && touched && <span>{contextData.errorIsAccepted}</span>}
                </div>
       
        <div className="formButtons">
        {/* <a  herf="" className="register">ثبت نام</a> */}
          <button type="submit">ورود</button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
