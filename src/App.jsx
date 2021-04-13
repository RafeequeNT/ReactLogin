
import React from 'react';
import {Router,Switch,Route} from 'react-router-dom';
import Welcome from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./App.css";
import { useSelector } from 'react-redux';
 import  {history} from './_helpers/history';






function App() {
  const alert = useSelector(state => state.alert);
    
return (
    <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2"></div>
    {alert.message &&
      <div>{alert.message}</div>
  }
    <Router history={history}>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>
     
      {/* <Redirect from="*" to="/" /> */}
   </Switch>
      </Router>
      </div>
      </div>
    
  );
}

export default App;
