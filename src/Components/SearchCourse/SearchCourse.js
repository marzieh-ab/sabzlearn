import React, { useContext, useState } from "react";
import { dbContext } from "../../Context/Context";

import { useParams,Link } from "react-router-dom";
import "./SearchCourse.css";

export default function SearchCourse() {
  const contextData = useContext(dbContext);
  console.log(contextData);
  const params = useParams().search;
  // const searchCourse = contextData.db.products.find(
  //   (course) => course.nameCourse == params
  // );
  const searchCourse = contextData.db.products.filter(
      (course) => course.nameCourse == params
    );


  console.log(searchCourse);
  
  if (searchCourse.length==0) {
    return (
      <div className="not-found">
        <h1>محصول مورد نظر یافت نشد</h1>
      </div>
    );
  }
  // return

  return (
    <div className="courses">
      <div className="container">
        <Link  to={`/detailCourse/${searchCourse.id}`}>
        <div className="courses-content">
        {searchCourse.map((course)=>{
          return (
            <div className="courses-content-item">
            <img src={course.image} alt="" />
            <p className="category">
              {" "}
              اموزش برنامه نویسی {course.category}
            </p>
            <p className="title">{course.name} </p>
            <p className="price">{course.price} هزار تومان</p>
          </div>
          )

        })}
        </div>
        
        </Link>
       
      </div>
    </div>
  );
}
