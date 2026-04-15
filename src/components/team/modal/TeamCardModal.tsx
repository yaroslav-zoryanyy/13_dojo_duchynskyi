import images from '../../../assets/images/kiyoshi-yamazaki.png'
import { FaFacebookSquare, FaTelegram  } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {Link} from "react-router-dom";
const TeamCardModal = () => {
    return (
        <div className={'team__card'}>
            <img className={'team__card-images'} src={images} alt="Роман"/>
            <h3 className={'team__card-title'}>Роман Зінчук</h3>
            <p className={'team__card-subtitle'}>Головний тренер клубу
                Чемпіон світу з Комбат Джиу-Джитцу, Чемпіон Європи з ММА, Чемпіон України із Бойового самбо. Майстер Спорту Міжнародного класу Комбат Джиу-Джитцу, Майстер
                спорту із ММА та Бойового самбо.🤼‍♀️</p>
            <p className={'team__card-subtitle'}>
                Підготував більше 60 переможців Чемпіонату Польщі, Європи, Світу з ММА та Комбат Джиу-Джитцу.
            </p>
            <div className="team__card-social">
               <Link className="team__card-social-link" to={'#'}>
                   <FaInstagram/>
               </Link>
                <Link className="team__card-social-link" to={'#'}>
                    <FaFacebookSquare/>
                </Link>
                <Link className="team__card-social-link" to={'#'}>
                    <FaTelegram/>
                </Link>
            </div>
        </div>
    );
};

export default TeamCardModal;