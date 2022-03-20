import { useState } from "react";
import { useHistory } from "react-router-dom";

// Add New employees to the database
  const AddEmployee = () =>{
    const history = useHistory();
    const [user , setUser] = useState({
      name : "",
      email : "",
      phoneNumber:"",
      dateOfBirth: "",
      jobTypes: ['Full-Time', 'Part-Time', 'consultant'],
      formData: ""
    });
    // const {name , email , phoneNumber} =user
    const onInputChange = event => {
      // console.log(event.target.value);
      setUser({...user, [event.target.name]: event.target.value})
    }
    //onSumbit save the user in db
    const onSubmit = (event) =>{
      event.preventDefault();
      console.log(JSON.stringify(user));
      fetch(`http://localhost:9000/api/add/employee`,
    {
      method : "POST",
      body : JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
    }).then(()=> history.push("/"));
  }

  return(
   <div className="conatiner">
     <div className="w-75 mx-auto my-5 shadow p-5">
       <h2 className="mb-4 text-center">Add Employee</h2>
       <form onSubmit={event => onSubmit(event)}>
       <div className="input-group flex-nowrap my-3">
       <input type="text" className="form-control" name="name" 
        onChange={event =>onInputChange(event)} placeholder="Username"  
       aria-label="Username" aria-describedby="addon-wrapping" required/>
      </div>
       <div className="input-group flex-nowrap my-3">
       <input type="email" className="form-control" name="email" 
        onChange={event =>onInputChange(event)} placeholder="Email" 
        aria-label="Email" aria-describedby="addon-wrapping" required/>
      </div>
       <div className="input-group flex-nowrap my-3">
       <input type="number" className="form-control" name= "phoneNumber"  
        onChange={event =>onInputChange(event)} placeholder=" phoneNumber" 
        aria-label=" PhoneNumber" aria-describedby="addon-wrapping" required/>
      </div>
       <div className="input-group flex-nowrap my-3">
       <input type="date" className="form-control" name= "dateOfBirth"  
        onChange={event =>onInputChange(event)} placeholder="mm-dd-yy" 
        aria-label=" dateOfBirth" aria-describedby="addon-wrapping" required/>
      </div>

       <div className="input-group flex-nowrap my-3">
          <select required className="form-control" name="jobTypes" placeholder="Job Type"
           onChange={event =>onInputChange(event)}>
              <option value="">Select</option>
              <option value="Full-Time">{user.jobTypes[0]}</option>
              <option value="Part-Time">{user.jobTypes[1]}</option>
              <option value="consultant">{user.jobTypes[2]}</option>
            </select>
      </div>
      <span>Post photo</span>
      <div className="form-group mb-2">
        <label className="btn btn-success mb-2 w-100">
          <input
            onChange={event =>onInputChange(event)}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>

      
      <button type="sumbit" className="btn btn-primary w-100">Add Employee</button>
      <button className="btn btn-outline-info mt-4" onClick={()=> history.push("/")}>Go Back</button>
       </form>
     </div>
   </div>
  )
}

export default AddEmployee;