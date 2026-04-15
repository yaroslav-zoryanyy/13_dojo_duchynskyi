import {NavLink} from "react-router-dom";
import images from '../../assets/images/trainer.png'

const HomeTrainer = () => {
    return (
        <section className={'trainer'}>
            <div className="container">
                <div className={'trainer__wrapper'}>
                    <h3 className={'trainer__title'}>ТРЕНЕРСЬКИЙ СКЛАД</h3>
                    <div className={'trainer__content'}>
                        <div className={'trainer__content-left'}>
                            <p className={'trainer__subtext'}>В нашому клубі справжнє закрите спортивне комюніті. Тут Ви знайдете для себе близького по духу тренера та
                                команду однодумців.</p>
                            <p className={'trainer__subtext'}>Всі наші тренери мають високі спортивні досягнення (кандидати та майстри спорту), знають як знайти підхід до
                                кожного: дитини та дорослого, новачка та профі.</p>
                            <p className={'trainer__subtext'}>Приходь на тренування та переконайся у цьому!</p>
                            <NavLink className={'trainer__button'} to={'/team'}>Познайомитись з тренерами</NavLink>
                        </div>
                        <div className={'trainer__content-right'}>
                            <img src={images} alt="trainers"/>
                        </div>
                    </div>
                </div>
                <hr className={'accent__line'}/>
            </div>
        </section>
    );
};

export default HomeTrainer;