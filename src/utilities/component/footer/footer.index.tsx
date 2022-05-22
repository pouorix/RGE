import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './footer.style.scss';

const Footer: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-footer">
            <div className="right">
                <div className="items-container">
                    <div className="my-column">
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>نورپردازی نما</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>نورپردازی داخلی</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>نور پردازی محوطه و فضای باز</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>نورپردازی مسکونی</h5>
                        </div>
                    </div>
                    <div className="my-column">
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>درباره ما</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>افتخارات</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>تماس با ما</h5>
                        </div>
                        <div className="items">
                            <span className="material-icons">arrow_back_ios</span>
                            <h5>دانستنی ها</h5>
                        </div>
                    </div>
                </div>
                <div className="warning">
                    <span className="material-icons">error</span>
                    <h3>
                        عکس ها و ویدیو ها و پروژه های شرکت RGE به منظور استفاده تبلیغاتی اشخاص حقیقی و حقوقی در حوزه
                        روشنایی و نورپردازی بدون اجازه کپی از این شرکت پیگرد قانونی خواد داشت.
                    </h3>
                </div>
            </div>
            <div className="left">
                <h2>RGE Lightning Design</h2>
                <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
                <label>Contact Us!</label>
                <h4>Phone : 989123456789</h4>
                <h5>Main : info@rge.ir</h5>
                <div className="social-media">
                    <div className="item">
                        <i className="cfi cfi-twitter" />
                    </div>
                    <div className="item">
                        <i className="cfi cfi-facebook" />
                    </div>
                    <div className="item">
                        <i className="cfi cfi-instagram" />
                    </div>
                    <div className="item">
                        <i className="cfi cfi-linkedin" />
                    </div>
                </div>
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
