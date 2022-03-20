import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

 const User = () => {
   const history = useHistory();
   const {id} = useParams();
   const [user , setUser] = useState({})

   useEffect(()=> {
     fetch(`http://localhost:9000/api/employee/${id}`,{method : "GET"})
     .then((data)=> data.json())
     .then((usr)=> setUser(usr));
   }, [id])
  return(
    <div className="users container bg-primary shadow mt-5">
     <div className="card" >
     <div className="card-body">
    <h5 className="card-title">Name: {user.name}</h5>
    <p className="card-text">id: {user.id}</p>
    <p>Email: {user.email}</p>
    <p>Phone Number:{user.phoneNumber}</p>
    <p>DOB:{user.dateOfBirth}</p>
    <p>Job Type:{user.jobTypes}</p>
    <button className="btn btn-info" onClick={()=> history.goBack()}>Go Back</button>
  </div>
 </div>
</div>  
  )
}

export default User