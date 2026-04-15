import type {FC} from "react";
import 'animate.css';

export interface HomeSliderModalProps {
    title: string,
    subtitle: string,
}

const HomeBannerModal:FC<HomeSliderModalProps> = ({title,subtitle}) => {
    return (
        <div className={'swiper__wrap'}>
            <div className={'container'}>
                <div className="slider__modal">
                    <h2 className={'slider__modal-text animate__animated animate__lightSpeedInLeft'}>
                        {title}
                    </h2>
                    <hr className={'slider__modal-line animate__animated animate__jackInTheBox animate__delay-1s '} />
                    <p className={'slider__modal-subtext animate__animated animate__flipInX animate__delay-2s animate__faster'}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeBannerModal;