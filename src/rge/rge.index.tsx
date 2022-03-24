import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthStatus, ReduxState } from '../interface';
import { connect, ConnectedProps } from 'react-redux';

const Rge: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    // useEffect(() => {
    //     RgeInit(props.dispatch);
    // }, []);
    return (
        <Router>
            <Switch>
                <Route path="*">
                    <h1>Hello world!</h1>
                    <h1>سلام دنیا</h1>
                </Route>
            </Switch>
        </Router>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Rge);
