import PremisesImg from '../assets/images/zal.jpg'
import TrenerImg from '../assets/images/trener.jpg'

const CooperationPage = () => {
    return (
        <div className={'container'}>
            <section className="cooperation">
                <img src={PremisesImg} alt="Premises"/>
                <div className="cooperation__content">
                    <h3 className={'cooperation__content-title'}>Приміщення</h3>
                    <p className={'cooperation__content-subtitle'}>Ми розглядаємо пропозиції щодо оренди приміщень для проведення тренувань з карате. Цікавлять просторі зали
                        з безпечним покриттям, хорошим освітленням та зручним розташуванням. Готові до довгострокової співпраці. Будемо раді вашим пропозиціям!</p>
                    <button className={'cooperation__content-button'}>Подати заявку</button>
                </div>
            </section>
            <hr className={'accent__line'}/>
            <div className="cooperation">
                <div className="cooperation__content">
                    <h3 className={'cooperation__content-title'}>Хочеш стати тренером</h3>
                    <p className={'cooperation__content-subtitle'}>Ми розглядаємо усі ваші пропозиції щодо співпраці. Запрошуємо досвідчених і відповідальних
                        спеціалістів для проведення тренувань у нашому клубі. Гарантуємо комфортні умови, дружню атмосферу та можливість розвитку у найкращій команді!</p>
                    <button className={'cooperation__content-button'}>Подати заявку</button>
                </div>
                <img src={TrenerImg} alt="Trener"/>
            </div>
        </div>
    );
};

export default CooperationPage;