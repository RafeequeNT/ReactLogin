
import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from "./pages/WelcomePage";
import Login1 from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./App.css";



function App() {

  

  return (
    <div>
      
    <Router>
    
  <Switch>

      <Route exact path="/">
           <Welcome/>
      </Route>
      
     <Route exact path="/login">
           <Login1/>
     </Route>

       <Route exact path="/register">
        <Register/>
      </Route>
      </Switch>
      </Router>
      
    </div>
    
  );
}

export default App;
