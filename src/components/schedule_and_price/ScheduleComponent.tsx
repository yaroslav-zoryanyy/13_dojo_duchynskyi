// import slide_1 from "../../assets/images/schedule/pruszków_zal_1.jpg";

import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

import slide_1 from "../../assets/images/schedule/pruszków_zal_1.jpg";
import slide_2 from "../../assets/images/schedule/pruszków_zal_2.jpg";
import slide_3 from "../../assets/images/schedule/pruszków_zal_3.jpg";
import slide_4 from "../../assets/images/schedule/pruszków_zal_4.jpg";
import slide_5 from "../../assets/images/schedule/pruszków_zal_5.jpg";
import slide_6 from "../../assets/images/schedule/pruszków_zal_6.jpg";
import slide_7 from "../../assets/images/schedule/pruszków_zal_7.jpg";
import slide_8 from "../../assets/images/schedule/pruszków_zal_8.jpg";

const ScheduleComponent = () => {
    return (
        <div className={'schedule'}>
            <h4 className={'schedule_and_price__title'}>
                Графік та Локації
            </h4>
            <div className="schedule__info">
                <p>Запрошуємо до нашого сучасного спортивного залу в <span>Pruszków (ul. Polna 33)</span>, де панує дружня атмосфера та справжній бойовий дух!</p>
                <p>Відкрито набір у групи: <span>вівторок 19:30 та субота 16:30.</span></p>
                <p>Не втрачайте шанс приєднатися до команди та розпочати свій шлях у карате вже зараз!</p>
            </div>
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{delay: 2400}}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img alt={'#'} src={slide_1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_7}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_8}/>
                </SwiperSlide>
            </Swiper>
            <hr className="accent__line"/>
            //
            <div className="schedule__info">
                <p>Запрошуємо до нашого сучасного спортивного залу в <span>Pruszków (ul. Polna 33)</span>, де панує дружня атмосфера та справжній бойовий дух!</p>
                <p>Відкрито набір у групи: <span>вівторок 19:30 та субота 16:30.</span></p>
                <p>Не втрачайте шанс приєднатися до команди та розпочати свій шлях у карате вже зараз!</p>
            </div>
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{delay: 2400}}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img alt={'#'} src={slide_1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_7}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_8}/>
                </SwiperSlide>
            </Swiper>
            <hr className="accent__line"/>
            //
            <div className="schedule__info">
                <p>Запрошуємо до нашого сучасного спортивного залу в <span>Pruszków (ul. Polna 33)</span>, де панує дружня атмосфера та справжній бойовий дух!</p>
                <p>Відкрито набір у групи: <span>вівторок 19:30 та субота 16:30.</span></p>
                <p>Не втрачайте шанс приєднатися до команди та розпочати свій шлях у карате вже зараз!</p>
            </div>
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{delay: 2400}}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img alt={'#'} src={slide_1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_7}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'#'} src={slide_8}/>
                </SwiperSlide>
            </Swiper>
            <hr className="accent__line"/>
        </div>
    );
};

export default ScheduleComponent;