import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './header.style.scss';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../../data';
const Header: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-header">
            <div className="content">
                <h1>RGE LIGHTING DESIGN</h1>
                <span />
                <NavLink exact to="/" activeClassName="active">
                    <h4>خانه</h4>
                </NavLink>
                <a href="/#about">
                    <h4>درباره ما</h4>
                </a>
                <a href="/#projects">
                    <h4>پروژه ها</h4>
                </a>
                <a href="/#award">
                    <h4>جایزه ها</h4>
                </a>
                <NavLink to={RoutePath.blog} activeClassName="active">
                    <h4>بلاگ</h4>
                </NavLink>
                <a href="/#contact">
                    <h4>تماس با ما</h4>
                </a>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Header);
