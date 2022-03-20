
import './App.css';
import { BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Home from './components/home.js' 
import About from './components/about.js'
import Navbar from './components/navbar.js'
import AddEmployee from './components/addEmployee.js';
import EditEmployee from './components/editEmployee.js';
import Employee from './components/employee';



const App = () =>{
  return (
    <Router>
    <div className="app">
       <Navbar/>
       <Switch>
         <Route exact path="/">
             <Home/>
           </Route>
         <Route exact path="/about">
             <About/>
           </Route>
         <Route exact path="/employee/add">
             <AddEmployee/>
           </Route>
         <Route exact path="/employee/edit/:id">
             <EditEmployee/>
           </Route>
         <Route exact path="/employee">
             <Employee/>
           </Route>
         </Switch>
     </div>
    </Router>
  );
}


export default App;




