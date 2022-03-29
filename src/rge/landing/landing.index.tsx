import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './landing.style.scss';
import imageOne from '../../assets/images/1.jpg';
import imageTwo from '../../assets/images/2.jpg';
import imageThree from '../../assets/images/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../data';
const Landing: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const Map = Mapir.setToken({
        transformRequest: (url: string) => {
            return {
                url: url,
                headers: {
                    'x-api-key':
                        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1OTc2Yzg0NzNmYjFlYWM3YTBhODc1NTcyMWU0YzI2NDVkZDUzM2RmY2YzZGM5ODE5ZTk4YWFjY2JkNGNhZWIzNWQ1YjE3ZWIxZjAwNmU5In0.eyJhdWQiOiIxNzQ4MSIsImp0aSI6IjQ1OTc2Yzg0NzNmYjFlYWM3YTBhODc1NTcyMWU0YzI2NDVkZDUzM2RmY2YzZGM5ODE5ZTk4YWFjY2JkNGNhZWIzNWQ1YjE3ZWIxZjAwNmU5IiwiaWF0IjoxNjQ4NTExNTg4LCJuYmYiOjE2NDg1MTE1ODgsImV4cCI6MTY1MTEwMzU4OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.fFsWZc_N88PR1MwK_VUXJWVUDLNP_7VVwXgKUMbWXVqMn-BH4j-MDMoh8jZ201_288OsQSy5yTfGEFOJlyYe6jTGcWpyK1go76MrxyAPDPCwpeSBzfOGNtaMBdq8N3b9bnX58usb3OwI0s3G1kPwwqWBnH6WAPDxcFFoQnawoqvsYIMWEQirXnqgvClEk7besIwtvwb2mNYTYR-2gZTzSCAVA-u5wT0OcNQPm5LjfYAWMaW3-dePKQGNoNbBDTvlKdiCmld3kWcUqEFz93lXN4yOircrfVV_Z3WnK11yLsez1rfY-iZmeT_t_j7SViSQrhL6txhAr6HrGk-uUou9cA', //Mapir api key
                    'Mapir-SDK': 'reactjs',
                },
            };
        },
    });
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
                <Link to={RoutePath.projectList(1)} className="item">
                    <img src={imageOne} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </Link>
                <Link to={RoutePath.projectList(2)} className="item">
                    <img src={imageTwo} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </Link>
                <Link to={RoutePath.projectList(3)} className="item">
                    <img src={imageThree} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </Link>
                <Link to={RoutePath.projectList(4)} className="item">
                    <img src={imageOne} alt="دسته بندی" />
                    <div className="text">
                        <h4>پروژه نورپردازی نما</h4>
                        <h6>لورم ایپسوم متن ساختگی با</h6>
                    </div>
                </Link>
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
            <div
                // style={{ backgroundImage: 'http://79.175.134.143:2000/static/homea/img/port5.jpg' }}
                className="credentials"
            >
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
            </div>
            <div className="history">
                <h2>تاریخچه شرکت</h2>
                <div className="history-content">
                    <div className="list">
                        <img src={imageOne} alt="history" />
                        <img src={imageTwo} alt="history" />
                        <img src={imageThree} alt="history" />
                    </div>
                    <div className="my-content">
                        <img src={imageOne} alt="history" />
                        <div className="text">
                            <h4>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </h4>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                                دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                گیرد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog">
                <h2>بلاگ</h2>
                <div className="my-container">
                    <div className="my-column">
                        <div className="item">
                            <div className="text">
                                <h4>لورم ایپسوم</h4>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله د، تا با نرم افزارها شناخت بیشتری را
                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <button className="my-btn">توضیحات بیشتر</button>
                        </div>
                        <div className="item">
                            <div className="text">
                                <h4>لورم ایپسوم</h4>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                    صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                                    ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                    خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                    و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                                    شامل حروفچینی دستاوردهای بردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و بردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و بردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <button className="my-btn">توضیحات بیشتر</button>
                        </div>
                    </div>
                    <div className="my-column">
                        <div className="item">
                            <div className="text">
                                <h4>لورم ایپسوم</h4>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                    صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                                    ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                                    متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                                    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                    خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید در ارائه
                                    راهکارها، و شرایط سخت تایپ به پایان رسد و بردی می باشد، کتابهای زیادی در شصت و سه
                                    درصد گذشتهاری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و اصلی، و
                                    جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <button className="my-btn">توضیحات بیشتر</button>
                        </div>
                        <div className="item">
                            <div className="text">
                                <h4>لورم ایپسوم</h4>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوی را برای طراحان رایانه ای علی الخصوص
                                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                                    که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و اصلی، و
                                    جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <button className="my-btn">توضیحات بیشتر</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <h4>درباره ما</h4>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                    گیرد.
                </p>
            </div>
            <div className="contact">
                <div className="title">
                    <h2>تماس با ما</h2>
                    <h4>تماس با ما</h4>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

                <div className="my-box">
                    <div className="item">
                        <div className="icon">
                            <span className="material-icons">call</span>
                        </div>
                        <h3>تماس با ما</h3>
                        <p>09123456789</p>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <span className="material-icons">email</span>
                        </div>
                        <h3>ایمیل</h3>
                        <p>info@rge.ir</p>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <span className="material-icons">place</span>
                        </div>
                        <h3>آدرس</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="map-form">
                    <div className="form">
                        <div className="my-row">
                            <input placeholder="نام" />
                            <input placeholder="ایمیل" />
                        </div>
                        <input placeholder="موضوع" />
                        <textarea placeholder="متن" />
                        <button className="my-btn">ارسال</button>
                    </div>
                    {/*<span />*/}
                    <div className="map">
                        <Mapir Map={Map} apiKey={'Your_API_KEY'} />
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
export default connector(Landing);
