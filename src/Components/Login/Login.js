import React, { useContext, useState, useEffect } from "react";
import { dbContext } from "./../../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const contextData = useContext(dbContext);

  const navigate = useNavigate();
  const [touch, setTouch] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [formValue, setFromValue] = useState({
    // name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    // isAccepted: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const datas = {
      email: formValue.email,
      password: formValue.password,
    };
    setErrors(contextData.validate(datas, "login"));
  }, [formValue, touch]);

  const onsubmit = (e) => {
  

    e.preventDefault();

    setIsSubmit(true);

    console.log(errors);

    console.log(Object.keys(errors).length);
    if (!Object.keys(errors).length) {
      console.log("error 0");
      const currentUser = contextData.db.users.find(
        (user) => user.email == formValue.email
      );
      if (currentUser) {
        console.log(currentUser);
        const findCurentuser = contextData.db.users.find(
          (user) => user.password == formValue.password
        );
        console.log(findCurentuser);

        if (findCurentuser) {
          contextData.db.currentUser = {
            id: findCurentuser.id,
            name: findCurentuser.name,
            role: findCurentuser.role,
          };

          setFromValue("");

          navigate("/");
        } else {
          alert("ایمیل یا رمز عبور اشتباه است");
        }
      } else {
        alert("کاربری با این مشخصات ثبت نشده");
      }
    } else {
      setTouch(true);
    }
  };

  const changeHandler = (event) => {
    setFromValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container-form">
      <div className="formContainer">
        <h2 className="header-from">ورود</h2>
        <div className="formField">
          <label>ایمیل</label>
          <input
            type="text"
            name="email"
            className="formInput"
            value={formValue.email}
            onChange={changeHandler}
          />

          {errors.email && touch && <span>{errors.email}</span>}
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
          {errors.password && touch && <span>{errors.password}</span>}
        </div>
        <div className="formButtons">
          <Link to="/singup" className="register">
            ثبت نام
          </Link>
          <button type="submit" onClick={(e) => onsubmit(e)}>
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
