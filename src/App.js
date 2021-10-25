
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Todo/Home";
import Header from "./Todo/Header";
import Login from "./Todo/Login";
import AddTask from "./Todo/AddTask";

import ProtectedRoutes from './ProtectedRoutes'
import { useSelector } from "react-redux";


function App() {

// const todoTask = useSelector((state)=>state.todo)
// debugger;
  return <div className="App">

    <Router>
      <div>
      <Header/>   

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/todo' component={AddTask} /> */}
          {/* <Route exact path='/todo' render={props =><> <AddTask/>  </> } /> */}

          <ProtectedRoutes path="/todo" component={AddTask}    />
         
         

        </Switch>

      </div>
    </Router>

  </div>;
}

export default App;
