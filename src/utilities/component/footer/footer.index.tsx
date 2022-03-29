import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './footer.style.scss';

const Footer: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-footer">
            <div className="top-footer">
                <div className="my-column">
                    <h4>لورم ایپسوم</h4>
                    <li>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                    </li>
                </div>
                <div className="my-column">
                    <h4>لورم ایپسوم</h4>
                    <li>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                    </li>
                </div>
                <div className="my-column">
                    <h4>لورم ایپسوم</h4>
                    <li>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                        <ul>لورم ایپسوم متن</ul>
                    </li>
                </div>
            </div>
            <div className="button-footer">
                <h5>© Copyright XavierDesigns. All Rights Reserved</h5>
                <h6>Designed by Xavier B.</h6>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Footer);
