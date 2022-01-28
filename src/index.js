import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Routines } from './components';
import { callApi } from './api';

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allRoutines = await callApi({ url: '/routines' });
      setRoutines(allRoutines);
    };

    fetchData();
  }, []);

  return (
    <div className="appPage">
      <div className="home-left">
        <h1>Hello</h1>
      </div>
      <div className="home-right">
        <Routines 
          routines={routines}
        />

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));