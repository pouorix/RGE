import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReduxState } from '../interface';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../utilities/component/header/header.index';
import Landing from './landing/landing.index';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import Footer from '../utilities/component/footer/footer.index';
import { RoutePath } from '../data';
import ProjectList from './projectList/projectList.index';
const Rge: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={RoutePath.projectList(':id')}>
                    <ProjectList />
                </Route>
                <Route path="*">
                    <Landing />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Rge);
