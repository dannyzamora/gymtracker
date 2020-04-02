import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import WorkoutsContext from './context/workouts-context';
import workoutsReducer from './reducers/workouts';


const App = () => {
  const [workouts, dispatch] = useReducer(workoutsReducer, []);

  return(
    <React.StrictMode>
      <WorkoutsContext.Provider value={{workouts, dispatch}}>
        <AppRouter />
        </WorkoutsContext.Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
