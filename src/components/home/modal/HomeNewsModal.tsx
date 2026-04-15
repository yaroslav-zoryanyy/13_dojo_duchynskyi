import type {FC} from "react";

import {NavLink} from "react-router-dom";

export interface HomeNewsModalProps {
    alt: string;
    img: string;
    date: string,
    address: string,
    title: string,
    subtitle: string,
    link: string,
}

const HomeNewsModal:FC<HomeNewsModalProps> = ({alt,img,date,address,title,subtitle,link}) => {
    return (
        <div className="news__slide">
            <img alt={alt} src={img}/>
            <div className={'news__slide-info'}>
                <div className={'news__slide-info-header'}>
                    <NavLink to={link} className={'news__text'}>
                        {date}
                    </NavLink>
                    <NavLink to={link} className={'news__text'}>
                        {address}
                    </NavLink>
                </div>
                <NavLink to={link} className={'news__slide-info-title'}>{title}</NavLink>
                <p className={'news__slide-info-subtitle'}>{subtitle}</p>
            </div>
        </div>
    );
};

export default HomeNewsModal;