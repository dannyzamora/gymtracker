import React, { useReducer,useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import {WorkoutsContext} from './context/workouts-context';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import json from './api/workouts.json';
import workoutsReducer from './reducers/workouts';



const App = () => {
  const [workouts, dispatch] = useReducer(workoutsReducer, [])
    useEffect(()=>{
        
        dispatch({type:'POPULATE_WORKOUTS',workouts:json})
    },[])

  return (
    <React.StrictMode>
      <Header/>
      <WorkoutsContext.Provider value = {{workouts,dispatch}}>
        <Dashboard/>
      </WorkoutsContext.Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
