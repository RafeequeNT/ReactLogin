
import React,{useEffect} from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./App.css";
import  {history} from './_helpers/history';
import { PrivateRoute } from './components/PrivateRouter';
import { alertActions } from './_actions/alert.actions';
import { useDispatch, useSelector } from 'react-redux';




function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}, []);
 
    
  
    
return (
    <div className="jumbotron">
            <div className="container">
            {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
  

    <Router history={history}>
    <Switch>
    <PrivateRoute exact path="/" component={WelcomePage} />
      <Route path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>
     <Redirect from="*" to="/" />
   </Switch>
      </Router>
      </div>
      </div>
    
  );
}

export default App;
