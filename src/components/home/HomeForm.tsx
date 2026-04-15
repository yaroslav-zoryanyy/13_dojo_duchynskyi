const HomeForm = () => {
    return (
        <section className={'form'}>
            <div className="container">
                <div className="form__wrapper">
                    <form action="#">
                        <input type="text"/>
                        <input type="tel"/>
                        <button>Вислати заявку</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeForm;