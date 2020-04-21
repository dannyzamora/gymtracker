import React from 'react';
import { Route } from 'react-router-dom';

const ContextRoute = ({ contextComponent, component,value, ...rest }) => {
  const { Provider } = contextComponent;
  const Component = component;

  return (
    <Route {...rest}>
      <Provider value = {{...value}}>
        <Component />
      </Provider>
    </Route>
  );
};

export default ContextRoute;