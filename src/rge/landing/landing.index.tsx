import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Award, CategoryList, Config, RecentProject, ReduxState, TopBanner } from '../../interface';
import './landing.style.scss';
import imageOne from '../../assets/images/1.jpg';
import imageTwo from '../../assets/images/2.jpg';
import imageThree from '../../assets/images/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import { Link } from 'react-router-dom';
import { API, RoutePath } from '../../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BallTriangle, Bars } from 'react-loader-spinner';
import { get, responseValidator } from '../../scripts/api';
import { toast } from 'react-toastify';
const Landing: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    AOS.init();
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
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

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Config>();
    const [topBanner, setTopBanner] = useState<TopBanner[]>();
    const [categoryList, setCategoryList] = useState<CategoryList[]>();
    const [award, setAward] = useState<Award[]>();
    const [recentProject, setRecentProject] = useState<RecentProject[]>();
    useEffect(() => {
        const temp = [
            get<any>(API.landing.config),
            get<any>(API.landing.topBanner),
            get<any>(API.landing.categoryList),
            get<any>(API.landing.award),
            get<any>(API.landing.recentProject),
        ];
        Promise.all(temp).then((res) => {
            if (
                responseValidator(res[0].status) &&
                responseValidator(res[1].status) &&
                responseValidator(res[2].status) &&
                responseValidator(res[3].status) &&
                responseValidator(res[4].status)
            ) {
                if (res[0].data) setData(res[0].data);
                if (res[1].data) setTopBanner(res[1].data);
                if (res[2].data) setCategoryList(res[2].data);
                if (res[3].data) setAward(res[3].data);
                if (res[4].data) setRecentProject(res[4].data);
                console.log(res);
                setLoading(false);
            }
        });
    }, []);
    return loading ? (
        <div className="rge-landing-loading">
            <Bars color="gold" height={100} width={100} />
        </div>
    ) : (
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
                {topBanner?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="my-slider">
                            <img src={item.imageurl} alt="imageOne" />
                            <div className="text">
                                <h2>{item.firstTxt}</h2>
                                <p>{item.secondTxt}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="categories">
                {categoryList?.map((item, index) => (
                    <Link key={index} data-aos="fade" to={RoutePath.projectList(1)} className="item">
                        <img src={item.imageurl} alt="دسته بندی" />
                        <div className="text">
                            <h6>{item.title}</h6>
                            {/*<h6>لورم ایپسوم متن ساختگی با</h6>*/}
                        </div>
                    </Link>
                ))}
            </div>
            <div data-aos="fade" id="award" className="awards">
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
                        {award?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.imageurl} alt="award" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {recentProject &&
                recentProject[0] &&
                recentProject[1] &&
                recentProject[2] &&
                recentProject[3] &&
                recentProject[4] &&
                recentProject[5] && (
                    <div id="projects" className="projects">
                        <div data-aos="fade" className="title">
                            <h2>پروژه های اخیر</h2>
                            <h4>پروژه های اخیر</h4>
                        </div>
                        <p data-aos="fade">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        <div className="container">
                            <div className="my-row">
                                <Link
                                    to={RoutePath.projectDetail(recentProject[0].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[0].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[0].title}</h4>
                                </Link>
                                <Link
                                    to={RoutePath.projectDetail(recentProject[1].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[1].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[1].title}</h4>
                                </Link>
                                <Link
                                    to={RoutePath.projectDetail(recentProject[2].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[2].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[2].title}</h4>
                                </Link>
                            </div>
                            <div className="my-row">
                                <Link
                                    to={RoutePath.projectDetail(recentProject[3].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[3].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[3].title}</h4>
                                </Link>
                                <Link
                                    to={RoutePath.projectDetail(recentProject[4].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[4].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[4].title}</h4>
                                </Link>
                                <Link
                                    to={RoutePath.projectDetail(recentProject[5].id)}
                                    data-aos="fade"
                                    className="item"
                                >
                                    <img src={recentProject[5].thumbnailimg} alt="projects" />
                                    <h4>{recentProject[5].title}</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            <div className="credentials">
                <h2 data-aos="fade">آمار و اطلاعات</h2>
                <p data-aos="fade">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <div className="container">
                    <div data-aos="fade" className="item">
                        <h3>16</h3>
                        <h5>جایزه ها و افتخارات</h5>
                    </div>
                    <div data-aos="fade" className="item">
                        <h3>950</h3>
                        <h5>پروژه ها</h5>
                    </div>
                    <div data-aos="fade" className="item">
                        <h3>8</h3>
                        <h5>کشور</h5>
                    </div>
                    <div data-aos="fade" className="item">
                        <h3>24</h3>
                        <h5>سابقه کار</h5>
                    </div>
                </div>
            </div>
            <div className="history">
                <h2 data-aos="fade">تاریخچه شرکت</h2>
                <div className="history-content">
                    <div className="list">
                        <img data-aos="fade" src={imageOne} alt="history" />
                        <img data-aos="fade" src={imageTwo} alt="history" />
                        <img data-aos="fade" src={imageThree} alt="history" />
                    </div>
                    <div className="my-content">
                        <img data-aos="fade" src={imageOne} alt="history" />
                        <div className="text">
                            <h4 data-aos="fade">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </h4>
                            <p data-aos="fade">
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
                <h2 data-aos="fade">بلاگ</h2>
                <div className="my-container">
                    <div className="my-column">
                        <div data-aos="fade" className="item">
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
                        <div data-aos="fade" className="item">
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
                        <div data-aos="fade" className="item">
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
                        <div data-aos="fade" className="item">
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
                <h4 data-aos="fade">درباره ما</h4>
                <p data-aos="fade">
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
                <div data-aos="fade" className="title">
                    <h2>تماس با ما</h2>
                    <h4>تماس با ما</h4>
                </div>
                <p data-aos="fade">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

                <div className="my-box">
                    <div data-aos="fade" className="item">
                        <div className="icon">
                            <span className="material-icons">call</span>
                        </div>
                        <h3>تماس با ما</h3>
                        <p>09123456789</p>
                    </div>
                    <div data-aos="fade" className="item">
                        <div className="icon">
                            <span className="material-icons">email</span>
                        </div>
                        <h3>ایمیل</h3>
                        <p>info@rge.ir</p>
                    </div>
                    <div data-aos="fade" className="item">
                        <div className="icon">
                            <span className="material-icons">place</span>
                        </div>
                        <h3>آدرس</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div data-aos="fade" className="map-form">
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
                        {/*<Mapir*/}
                        {/*    Map={Map}*/}
                        {/*    apiKey={*/}
                        {/*        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1OTc2Yzg0NzNmYjFlYWM3YTBhODc1NTcyMWU0YzI2NDVkZDUzM2RmY2YzZGM5ODE5ZTk4YWFjY2JkNGNhZWIzNWQ1YjE3ZWIxZjAwNmU5In0.eyJhdWQiOiIxNzQ4MSIsImp0aSI6IjQ1OTc2Yzg0NzNmYjFlYWM3YTBhODc1NTcyMWU0YzI2NDVkZDUzM2RmY2YzZGM5ODE5ZTk4YWFjY2JkNGNhZWIzNWQ1YjE3ZWIxZjAwNmU5IiwiaWF0IjoxNjQ4NTExNTg4LCJuYmYiOjE2NDg1MTE1ODgsImV4cCI6MTY1MTEwMzU4OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.fFsWZc_N88PR1MwK_VUXJWVUDLNP_7VVwXgKUMbWXVqMn-BH4j-MDMoh8jZ201_288OsQSy5yTfGEFOJlyYe6jTGcWpyK1go76MrxyAPDPCwpeSBzfOGNtaMBdq8N3b9bnX58usb3OwI0s3G1kPwwqWBnH6WAPDxcFFoQnawoqvsYIMWEQirXnqgvClEk7besIwtvwb2mNYTYR-2gZTzSCAVA-u5wT0OcNQPm5LjfYAWMaW3-dePKQGNoNbBDTvlKdiCmld3kWcUqEFz93lXN4yOircrfVV_Z3WnK11yLsez1rfY-iZmeT_t_j7SViSQrhL6txhAr6HrGk-uUou9cA'*/}
                        {/*    }*/}
                        {/*/>*/}
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
