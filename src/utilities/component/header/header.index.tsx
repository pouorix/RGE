import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './header.style.scss';
import { Link, NavLink } from 'react-router-dom';
import { RoutePath } from '../../../data';
import HomeiCon from '../../../assets/images/home_icon.png';
const Header: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-header">
            <div className="header-one">
                <div className="my-container">
                    <div className="social">
                        <i className="cfi cfi-twitter" />
                        <i className="cfi cfi-facebook" />
                        <i className="cfi cfi-instagram" />
                        <i className="cfi cfi-linkedin" />
                    </div>
                    <span />
                    <div className="info">
                        <div className="item">
                            <p>{props.configData?.email}</p>
                            <i className="cfi cfi-mail" />
                        </div>
                        <div className="item">
                            <p>{props.configData?.phone}</p>
                            <i className="cfi cfi-phone" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-two">
                <div className="content">
                    <Link to={'/'}>RGE LIGHTING DESIGN</Link>
                    <span />

                    <a className="item" href="/#contact">
                        <h4>تماس با ما</h4>
                    </a>
                    <a className="item" href="/#about">
                        <h4>درباره ما</h4>
                    </a>
                    <NavLink className="item" to={RoutePath.blog} activeClassName="active">
                        <h4>وبلاگ</h4>
                    </NavLink>

                    <a className="item" href="/#award">
                        <h4>جایزه ها</h4>
                    </a>
                    <a className="item" href="/#categories">
                        <h4>پروژه ها</h4>
                    </a>
                    <NavLink className="item home" exact to="/">
                        <img src={HomeiCon} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
    configData: state.configData,
});

const connector = connect(mapStateToProps);
export default connector(Header);
