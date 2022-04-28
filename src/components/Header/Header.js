import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>
                <Link to={'/'} className={'link'}>Сайт визитка</Link>
            </h1>
            <div className={'header__links'}>
                <Link className={'link header__link'} to="/todo">Задачи</Link>
                <Link className={'link header__link'} to="/image-gallery">Галерея</Link>
                <Link className={'link header__link'} to="/Contacts">Контакты</Link>
                {/*<Link className={'link header__link'} to="/snake">Snake</Link>*/}
            </div>
        </header>
    );
};

export default Header;