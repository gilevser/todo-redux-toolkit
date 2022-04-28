import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className={'footer'}>
                <div className={'footer__links'}>
                    <Link className={'link footer__link'} to="/todo">Задачи</Link>
                    <Link className={'link footer__link'} to="/image-gallery">Галерея</Link>
                    <Link className={'link footer__link'} to="/contacts">Контакты</Link>
                    <a href={'https://gitlab.com/gilevser/gilev_sergey_pcs_frontend_21_09_homeworks/-/tree/TODO/TODO_diplom/todo-diplom'}
                       target={'_blank'} rel={'nofollow noopener noreferrer'}
                       className={'link footer__link'}>gitlab.com</a>
                </div>
            </footer>
            <div className={'footer__copyright'}>© Gilev Segey, 2021</div>
        </>
    );
};

export default Footer;