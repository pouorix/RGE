import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReduxState } from '../interface';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../utilities/component/header/header.index';

const Rge: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="*">
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
