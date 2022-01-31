import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
  useParams
} from "react-router-dom";
import { Routines, NavMenu, AccountLogin, Register, SingleRoutine } from './components';
import { callApi } from './api';

const App = () => {

  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})

  const fetchUserData = async (token) => {
    const data = await callApi({
      url: '/users/me',
      token,
    });
    console.log(data)
    return data;
  };

  
 

  useEffect(() => {

    
    const fetchData = async () => {

      
      const allRoutines = await callApi({ url: '/routines' });
      setRoutines(allRoutines);
      const allActivities = await callApi({ url: '/activities' });
      setActivities(allActivities);

      if (!token) {
        setToken(localStorage.getItem('token'));
        return;
      }
      const data = await fetchUserData(token);
      if (data) {
        setUserData(data);
      }

    };

    fetchData();
  }, [token]);




  return (
    <div className="appPage">
      <BrowserRouter>
        <div className="home-left">
          <h1>Fitness Trackr</h1>
          <h3>Hello {userData.username}</h3>
          <NavMenu 
            token={token}
          />
        </div>
        <div className="home-right">
          <Switch>
            <Route exact path="/routines">
              <Routines 
                routines={routines}
              />
            <Route exact path="/routines/:routineId">
              <SingleRoutine 
                // action={action}
                token={token}
                routines={routines}
                userData={userData}
              />
            </Route>
            </Route>
            <Route exact path="/signIn">
              <AccountLogin 
               setToken={setToken}
               setUserData={setUserData}
              />
            </Route>
            <Route exact path="/register">
              <Register 
                setToken={setToken}
                setUserData={setUserData}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));