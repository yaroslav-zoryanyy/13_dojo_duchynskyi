import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, EffectFade} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import slide_1 from '../../assets/images/swiper_slider_1.jpg'
import slide_2 from '../../assets/images/swiper_slider_2.jpg'
import slide_3 from '../../assets/images/swiper_slider_3.jpg'
import slide_4 from '../../assets/images/swiper_slider_4.jpg'
import HomeBannerModal from "./modal/HomeBannerModal.tsx";

import {useState} from "react";


const HomeBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="slider">
            <Swiper
                modules={[A11y, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{delay: 3200}}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={'slider__slide'}>
                    <img alt={'karate_men'} src={slide_1}/>
                    <HomeBannerModal
                        key={activeIndex}
                        title={'Hachi-o-kai Kan Ryu контактное карате и кобудо'}
                        subtitle={'Международная Федерация Хачи-о-кай Кан Рю Карате-до здесь рождается характер победителя'}
                    />
                </SwiperSlide>
                <SwiperSlide className={'slider__slide'}>
                    <img alt={'karate_child'} src={slide_2}/>
                    <HomeBannerModal
                        key={activeIndex}
                        title={'Набор в группы по карате детей от 7 лет '}
                        subtitle={'Мы научим ваших детей самообороне и дисциплине укрепим дух и тело,' +
                            ' направим энергию ребенка на развитие привьем этику и уважение' +
                            ' здесь они найдут поддержку и надежных друзей.'}
                    />
                </SwiperSlide>
                <SwiperSlide className={'slider__slide'}>
                    <img alt={'karate_men'} src={slide_3}/>
                    <HomeBannerModal
                        key={activeIndex}
                        title={'ИТ технологии в карате '}
                        subtitle={'Электронные будо паспорта,' +
                            'система мотивации спортсменов,' +
                            'ИИ в судействе и в мероприятиях'}
                    />
                </SwiperSlide>
                <SwiperSlide className={'slider__slide'}>
                    <img alt={'kimono'} src={slide_4}/>
                    <HomeBannerModal
                        key={activeIndex}
                        title={'Чтим японские традиции'}
                        subtitle={'Передовые методики японских мастеров, авторские индивидуальные программы'}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HomeBanner;