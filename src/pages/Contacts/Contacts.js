import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div>
                <div className="contacts__header">
                    <div className='contacts__header-relativ'>Контакты</div>
                    <div className="contacts__header-absolute">
                        Контакты
                    </div>
                </div>


            <div className="contacts__items">
                <div className="contacts__item">
                    <div className="contacts__icon">
                        <div className='icon'>
                            <svg width="53" height="30" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.9805 17.2029C43.1236 16.1529 43.3688 15.6857 43.9805 14.7471C43.9915 14.7364 51.0651 5.25214 51.7938 2.03571L51.7982 2.03357C52.1604 0.861428 51.7983 0 50.047 0H44.2521C42.7769 0 42.0967 0.739286 41.7323 1.56643C41.7323 1.56643 38.7819 8.41928 34.608 12.8614C33.2609 14.145 32.6381 14.5564 31.9027 14.5564C31.5405 14.5564 30.9774 14.145 30.9774 12.9729V2.03357C30.9774 0.627857 30.5644 0 29.3431 0H20.2312C19.3059 0 18.756 0.655714 18.756 1.26643C18.756 2.59929 20.843 2.90571 21.0594 6.65571V14.7921C21.0594 16.575 20.7259 16.9029 19.9861 16.9029C18.0162 16.9029 13.235 10.0221 10.4016 2.14714C9.82963 0.619285 9.2709 0.0021427 7.78464 0.0021427H1.98757C0.33347 0.0021427 0 0.741428 0 1.56857C0 3.03 1.9699 10.2964 9.16048 19.8964C13.9527 26.4493 20.7016 30 26.841 30C30.5313 30 30.9818 29.2114 30.9818 27.855C30.9818 21.5936 30.6483 21.0021 32.4967 21.0021C33.3536 21.0021 34.8288 21.4136 38.2739 24.5743C42.2115 28.3221 42.8586 30 45.0626 30H50.8575C52.5094 30 53.3463 29.2114 52.8649 27.6557C51.7629 24.3836 44.3162 17.6529 43.9805 17.2029Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="contact__text-item">
                        <div>В контакте</div>
                        <a target={'_blank'} rel={'nofollow noopener noreferrer'}
                            href="https://vk.com/gilevser">gilevser</a>
                    </div>
                </div>

                <div className="contacts__item">
                    <div className="contacts__icon">
                        <div className='icon'>
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.7472 34.7884C45.5023 34.7884 42.3162 34.2809 39.2971 33.2832C37.8176 32.7786 35.9989 33.2415 35.096 34.1688L29.1367 38.6675C22.2256 34.9783 17.9685 30.7226 14.3297 23.8634L18.696 18.0593C19.8304 16.9265 20.2373 15.2716 19.7498 13.7189C18.7477 10.6838 18.2387 7.49922 18.2387 4.25297C18.2389 1.90786 16.331 0 13.986 0H4.25282C1.90786 0 0 1.90786 0 4.25284C0 31.1324 21.8677 53 48.7472 53C51.0921 53 53 51.0921 53 48.7472V39.0411C52.9999 36.6963 51.092 34.7884 48.7472 34.7884Z" fill="white"/>
                            </svg>

                        </div>
                    </div>
                    <div className="contact__text-item">
                        <div>Телефон</div>
                        <a target={'_blank'} rel={'nofollow noopener noreferrer'}
                           href="tel:+7(912)6967647">+7(912)6967647</a>
                    </div>
                </div>
                <div className="contacts__item">
                    <div className="contacts__icon">
                        <div className='icon'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.4655 0H13.5345C6.07147 0 0 6.07147 0 13.5345V36.4658C0 43.9285 6.07147 50 13.5345 50H36.4658C43.9285 50 50 43.9285 50 36.4658V13.5345C50 6.07147 43.9285 0 36.4655 0ZM25 38.6715C17.4614 38.6715 11.3285 32.5386 11.3285 25C11.3285 17.4614 17.4614 11.3285 25 11.3285C32.5386 11.3285 38.6715 17.4614 38.6715 25C38.6715 32.5386 32.5386 38.6715 25 38.6715ZM38.9984 14.5527C36.7706 14.5527 34.9586 12.7407 34.9586 10.5129C34.9586 8.28514 36.7706 6.47278 38.9984 6.47278C41.2262 6.47278 43.0386 8.28514 43.0386 10.5129C43.0386 12.7407 41.2262 14.5527 38.9984 14.5527Z" fill="white"/>
                                <path d="M25 14.2597C19.0781 14.2597 14.2597 19.0777 14.2597 25C14.2597 30.9219 19.0781 35.7403 25 35.7403C30.9223 35.7403 35.7403 30.9219 35.7403 25C35.7403 19.0777 30.9223 14.2597 25 14.2597Z" fill="white"/>
                                <path d="M38.9984 9.40437C38.3873 9.40437 37.8899 9.90181 37.8899 10.5129C37.8899 11.124 38.3873 11.6215 38.9984 11.6215C39.6099 11.6215 40.1073 11.1244 40.1073 10.5129C40.1073 9.90143 39.6099 9.40437 38.9984 9.40437Z" fill="white"/>
                            </svg>

                        </div>
                    </div>
                    <div className="contact__text-item">
                        <div>Инстаграмм</div>
                        <a target={'_blank'} rel={'nofollow noopener noreferrer'}
                           href="https://www.instagram.com/gilevser/">gilevser</a>
                    </div>
                </div>
                <div className="contacts__item">
                    <div className="contacts__icon">
                        <div className='icon'>
                            <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.4463 25.516C25.974 25.8205 25.4427 25.9423 24.9705 25.9423C24.4982 25.9423 23.9669 25.8205 23.4947 25.516L0 10.7179V30.3878C0 34.5897 3.30579 38 7.37898 38H42.621C46.6942 38 50 34.5897 50 30.3878V10.7179L26.4463 25.516Z" fill="white"/>
                                <path d="M42.621 0H7.37898C3.8961 0 0.94451 2.55769 0.236128 5.96795L25.0295 21.5577L49.7639 5.96795C49.0555 2.55769 46.1039 0 42.621 0Z" fill="white"/>
                            </svg>

                        </div>
                    </div>
                    <div className="contact__text-item">
                        <div>Почта</div>
                        <a target={'_blank'} rel={'nofollow noopener noreferrer'}
                           href="mailto:gilevser@gmail.com">gilevser@gmail.com</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contacts;