import React ,{ useContext} from 'react';
import { dbContext } from '../../Context/Context';
import { useParams } from "react-router-dom";
import  './DetailsUser.css';


const DetailsUser = () => {
    const contextData = useContext(dbContext);
    let params = useParams();
    let index=params.id;

    let user=contextData.db.users.find((user)=>user.id==index)


    return (
        <div>
            <table className="userDetails-table1">
        <thead>
          <tr className="userDetails-table-heading-tr1">
            
            <th>نام</th>
            <th>ایمیل</th>
            <th>تلفن</th>
          
            
          </tr>
        </thead>

        <tbody>

            
                <tr className="userDetails-table-tr1" >
               
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              
    
           
              </tr>
              
          
        </tbody>
      </table>
            
        </div>
    );
}

export default DetailsUser;
