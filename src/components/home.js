
import { useState  , useEffect} from 'react';
import { Link } from "react-router-dom";

export default function Home(){

  //get all user data from the backend
  const getUser= ()=> {
    fetch(`http://localhost:9000/api/employee`)
    .then((data)=> data.json())
    .then((usr)=> setUser(usr))
  }
    useEffect(getUser, []);
    
    //delete the user based on his id
   const deleteUser = (id)=> {
     fetch(`http://localhost:9000/api/employee/${id}`,{method : "DELETE"})
    .then(()=> getUser());
   }
     
     // store all the data in the useState hooks
    const [users , setUser] = useState([]);

  return(
    <div className='home-page'>
    <h1 className='m-4'>Employee DashBoard</h1>
    <table className="table table-striped table-hover shadow">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Nummber</th>
      <th scope="col">DOB</th>
      <th scope="col">Job Type</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {/* loop through all the user data and render  */}
    {users.map((user , index)=> (
     <tr key={index}>
     <th scope="row">{index + 1}</th>
     <td>{user.name}</td>
     <td>{user.email}</td>
     <td>{user.phoneNumber}</td>
     <td>{user.dateOfBirth}</td>
     <td>{user.jobTypes}</td>
     <td>
       {/* view specified user profile */}
       <Link to={`/employee/${user.id}`} className="btn btn-primary ms-3"><i className="fas fa-user-circle me-2"></i> 
        View User</Link>
        {/* edit user profile */}
       <Link to={`/employee/edit/${user.id}`} className="btn btn-outline-warning ms-3"><i className="far fa-edit"></i> Edit</Link>
       {/* delete user */}
       <Link to={'/'} onClick={()=> deleteUser(user.id)} className="btn btn-outline-danger ms-3">
         <i className="far fa-trash-alt"></i> Delete</Link>
     </td>
   </tr>
    ))} 
  </tbody>
</table>
    </div>
  )
}