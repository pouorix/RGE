import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './landing.style.scss';
import imageOne from '../../assets/images/1.jpg';
import imageTwo from '../../assets/images/2.jpg';
import imageThree from '../../assets/images/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
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
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(Landing);
