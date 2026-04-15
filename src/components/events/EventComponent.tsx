import EventImg from '../../assets/images/news_slide_1.jpg'

const EventComponent = () => {
    return (
        <section className={'event'}>
            <h2 className={'event__title'}>Успішний початок наших учнів!</h2>
            <div className={'event__content'}>
                <img src={EventImg} alt="TeamComponent"/>
                <p className="event__content-info">
                    Наш перший виїзд на змагання — і одразу результат!<br/>
                    Лише 3 місяці тренувань — і маємо<br/>
                    🏆 6 других місць<br/>
                    🥉 1 третє місце<br/>

                    Це дуже гідний старт, і ми впевнено можемо сказати — це тільки початок! 💪🔥<br/>

                    Щира подяка нашому тренеру — Лежнюк Віталій Вікторович.<br/>
                    Дякуємо за знання, терпіння, підтримку та віру в нас. Без Вас цього результату не було б! 🙏<br/>

                    Окрема подяка засновнику клубу 13 DOJO — Петрусів Дмитро Ігорович.<br/>
                    Дякуємо за підтримку, турботу та можливість розвиватися. Разом — тільки більше! 🚀<br/>

                    І, звичайно, дякуємо нашим батькам 🤍<br/>
                    Ваша віра і підтримка — це наша сила.<br/>
                </p>
            </div>
            <h3 className={'event__title'}>Фото зі змагань🔥</h3>
            <div className="event__gallery">
                <img src={EventImg} alt="img"/>
                <img src={EventImg} alt="img"/>
                <img src={EventImg} alt="img"/>
                <img className={'wide'} src={EventImg} alt="img"/>
            </div>
            <hr className={'accent__line'}/>
        </section>
    );
};

export default EventComponent;