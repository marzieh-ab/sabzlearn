import React,{useContext} from "react";
import { dbContext } from '../../Context/Context';
import { Link} from 'react-router-dom';
import ErrorBox from "../Errorbox/Errorbox";
import "./Users.css"

const User = () => {

    const contextData = useContext(dbContext);

  return (
    //    <ErrorBox  msg="هیچ کاربری یافت نشد"/>
    <>
      <table className="users-table">
        <thead>
          <tr className="users-table-heading-tr">
           
           <th>اسم</th>
           <th>ایمیل</th>
           <th>تلفن</th>
           
          </tr>
        </thead>

        <tbody>
          {contextData.db.users.map((user) => {
            return (
              <tr className="users-table-tr" key={user.id}>
              
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
               

                <td>
                
                    <Link to={`detailsUser/${user.id}`}>
                    <button className="users-table-btn"> جزییات </button>
                    </Link>
                   
                 

                  <button
                    className="users-table-btn"
                    onClick={()=>contextData.deleteUser(user.id)} 
                  >
                    
                    حذف
                  </button>
                  <Link to={`editUser/${user.id}`}>
                  
                  <button className="users-table-btn">ویرایش</button>
                  </Link>
                 
                
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="addnewproduct">
        <Link to="add">
        
        <button className="users-table-btn">اضافه کردن کاربر جدید</button>
        </Link>
     
        
       
      </div>
    </>
  );
};

export default User;
