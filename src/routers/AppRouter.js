import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import WorkoutPage from '../components/WorkoutPage';
import Dashboard from '../components/Dashboard';

const withHeader = (PassedComponent) => {
    return () => (
        <>
            <Header />
            <PassedComponent />

        </>
    )
}
class AppRouter extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>

                    <Route path='/' exact={true} component={withHeader(Dashboard)} />
                    <Route path='/WorkoutList' exact={true} component={withHeader(WorkoutPage)} />
                    <Route component={NotFound} />

                </Switch>

            </BrowserRouter>


        )
    }


};

export { AppRouter as default }