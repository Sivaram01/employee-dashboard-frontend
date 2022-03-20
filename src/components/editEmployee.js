import { useState  , useEffect} from 'react';
import { useParams , useHistory } from "react-router-dom";


export default function EditUser (){

  const history = useHistory();
   const {id} = useParams();
   const [user , setUser] = useState({
     name : "",
     email : "",
     phoneNumber:"",
     dateOfBirth: "",
     jobTypes: ['Full-Time', 'Part-Time', 'consultant']
    });
    const {name , email , phoneNumber, dateOfBirth, jobTypes} =user

   useEffect(()=> {
    fetch(`http://localhost:9000/api/edit/employee/${id}`,{method : "GET"})
    .then((data)=> data.json())
    .then((usr)=> setUser(usr));
   }, [id]);

   const onInputChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    fetch(`http://localhost:9000/api/edit/employee/${id}`,
  {
    method : "PUT",
    body : JSON.stringify(user),
    headers: {'Content-Type': 'application/json'},
  }).then(()=> history.push("/"));
} 


  return(
    <div className="conatiner">
    <div className="w-75 mx-auto my-5 shadow p-5">
      <h2 className="mb-4 text-center">Edit Employee</h2>
      <form onSubmit={event => onSubmit(event)}>
      <div className="input-group flex-nowrap my-3">
      <input type="text" className="form-control" name="name" value={name}
       onChange={event =>onInputChange(event)} placeholder="Username"  
      aria-label="Username" aria-describedby="addon-wrapping" required/>
     </div>
      <div className="input-group flex-nowrap my-3">
      <input type="email" className="form-control" name="email" value={email} 
       onChange={event =>onInputChange(event)} placeholder="Email" 
       aria-label="Email" aria-describedby="addon-wrapping" required/>
     </div>
      <div className="input-group flex-nowrap my-3">
      <input type="text" className="form-control" name= "phoneNumber" value={phoneNumber} 
       onChange={event =>onInputChange(event)} placeholder=" phoneNumber" 
       aria-label=" phoneNumber" aria-describedby="addon-wrapping" required/>
     </div>
      <div className="input-group flex-nowrap my-3">
      <input type="date" className="form-control" name= "dateOfBirth" value={dateOfBirth} 
       onChange={event =>onInputChange(event)} placeholder="dd-mm-yyyy" 
       aria-label=" phoneNumber" aria-describedby="addon-wrapping" required/>
     </div>

     <div className="input-group flex-nowrap my-3">
          <select required className="form-control" name="jobTypes" placeholder="Job Type"
           onChange={event =>onInputChange(event)}>
              <option value="">Select</option>
              <option value={jobTypes[0]}>{user.jobTypes[0]}</option>
              <option value={jobTypes[1]}>{user.jobTypes[1]}</option>
              <option value={jobTypes[2]}>{user.jobTypes[2]}</option>
            </select>
      </div>
     
     <button type="sumbit" className="btn btn-primary w-100">Update Employee</button>
     <button className="btn btn-outline-info mt-4" onClick={()=> history.push("/")}>Go Back</button>
      </form>
    </div>
  </div>
  )
}

