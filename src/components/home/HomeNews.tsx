import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import HomeNewsModal from "./modal/HomeNewsModal.tsx";
import foto from '../../assets/images/news_slide_1.jpg'


const HomeNews = () => {

    return (
        <section className={'slider slider__news'}>
            <div className="container">
                <h2 className={'news__title'}> Последние новости </h2>
                <span className={'news__line'}/>

                <Swiper
                    modules={[A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{delay: 1700}}
                >
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeNewsModal
                            alt={'Kids'}
                            img={foto}
                            title={'Дивовижний Успіх'}
                            date={'Січень 28, 2026'}
                            address={'Україна, Полтава'}
                            subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aperiam architecto atque consequatur dolorum excepturi hic ipsum iste nam'}
                            link={'#'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HomeNews;