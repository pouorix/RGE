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
import ProjectDetail from './projectDetail/projectDetail.index';
import BlogList from './blogList/blogList.index';
import BlogDetail from './blogDetail/blogDetail.index';
import ScrollToTopLocal from './scrollToTop';
import ScrollToTop from 'react-scroll-to-top';
const Rge: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <Router>
            <ScrollToTop
                width="20"
                height="20"
                smooth
                color="white"
                style={{ backgroundColor: '#2c2c2c', padding: '10px' }}
            />
            <ScrollToTopLocal>
                <Header />
                <Switch>
                    <Route path={RoutePath.projectList(':id')}>
                        <ProjectList />
                    </Route>
                    <Route path={RoutePath.projectDetail(':id')}>
                        <ProjectDetail />
                    </Route>
                    <Route exact path={RoutePath.blogDetail(':id')}>
                        <BlogDetail />
                    </Route>
                    <Route path={RoutePath.blog}>
                        <BlogList />
                    </Route>
                    <Route path="*">
                        <Landing />
                    </Route>
                </Switch>
                <Footer />
            </ScrollToTopLocal>
        </Router>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Rge);
