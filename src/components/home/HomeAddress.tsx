import {NavLink} from "react-router-dom";
import {SiGooglemaps} from "react-icons/si";

const HomeAddress = () => {
    return (
        <section className='address'>
            <div className="container">
                <hr className={'accent__line'}/>
                <div className={'address__wrapper'}>
                    <NavLink to={'https://share.google/O3nfv44J9sBClrrSR'} className={'address__link'}>
                        <SiGooglemaps className={'address__link-img'}/>
                        <h2 className={'address__link-title'}>Błonie</h2>
                        <p className={'address__link-subtitle'}>ul. Towarowa 23</p>
                    </NavLink>
                    <NavLink to={'https://share.google/k5lsB7bqspxc9h9rQ'} className={'address__link'}>
                        <SiGooglemaps className={'address__link-img'}/>
                        <h2 className={'address__link-title'}>Pruszków</h2>
                        <p className={'address__link-subtitle'}>ul. Polna 33</p>
                    </NavLink>
                    <NavLink to={'https://share.google/O3nfv44J9sBClrrSR'} className={'address__link'}>
                        <SiGooglemaps className={'address__link-img'}/>
                        <h2 className={'address__link-title'}>Warszawa</h2>
                        <p className={'address__link-subtitle'}>ul. Towarowa 23</p>
                    </NavLink>
                </div>
                <hr className={'accent__line'}/>
            </div>
        </section>
    );
};

export default HomeAddress;