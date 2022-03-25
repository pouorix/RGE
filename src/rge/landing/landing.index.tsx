import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './landing.style.scss';
import imageOne from '../../assets/images/1.jpg';
import imageTwo from '../../assets/images/2.jpg';
import imageThree from '../../assets/images/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow } from 'swiper';
const Landing: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-landing">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                loop
                slidesPerView={1}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <div className="my-slider">
                        <img src={imageOne} alt="imageOne" />
                        <div className="text">
                            <h2>لورم ایپسوم متن</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-slider">
                        <img src={imageTwo} alt="imageOne" />
                        <div className="text">
                            <h2>لورم ایپسوم متن</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="my-slider">
                        <img src={imageThree} alt="imageOne" />
                        <div className="text">
                            <h2>لورم ایپسوم متن</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="categories">
                <div className="item">
                    <img src={imageOne} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </div>
                <div className="item">
                    <img src={imageTwo} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </div>
                <div className="item">
                    <img src={imageThree} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </div>
                <div className="item">
                    <img src={imageOne} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </div>
            </div>
            <div id="award" className="awards">
                <div className="title">
                    <h2>جایزه ها</h2>
                    <h4>جایزه ها</h4>
                </div>
                <div className="award-slider">
                    <Swiper
                        className="swiper-main"
                        loop={true}
                        spaceBetween={16}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 100,
                            depth: 500,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            575.98: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src={imageOne} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageTwo} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageThree} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageOne} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageTwo} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageThree} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageOne} alt="award" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imageTwo} alt="award" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div id="projects" className="projects">
                <div className="title">
                    <h2>پروژه های اخیر</h2>
                    <h4>پروژه های اخیر</h4>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <div className="container">
                    <div className="my-row">
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                    </div>
                    <div className="my-row">
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                        <div className="item">
                            <img src={imageOne} alt="projects" />
                            <h4>مجتمع تجاری کوروش</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="credentials">
                <h2>آمار و اطلاعات</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <div className="container">
                    <div className="item">
                        <h3>16</h3>
                        <h5>جایزه ها و افتخارات</h5>
                    </div>
                    <div className="item">
                        <h3>950</h3>
                        <h5>پروژه ها</h5>
                    </div>
                    <div className="item">
                        <h3>8</h3>
                        <h5>کشور</h5>
                    </div>
                    <div className="item">
                        <h3>24</h3>
                        <h5>سابقه کار</h5>
                    </div>
                </div>
                <div className="history">
                    <h2>تاریخچه شرکت</h2>
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
export default connector(Landing);
