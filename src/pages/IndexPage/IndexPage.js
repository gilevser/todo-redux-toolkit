import React from 'react';
import './IndexPage.css'

const IndexPage = () => {
    return (
       <>
           <div >
               <div className="contacts__header">
                   <div className='contacts__header-relativ'>Обо мне.</div>
                   <div className="contacts__header-absolute">
                       Обо мне.
                   </div>
               </div>
           </div>


           <div className="about_me">
               <div className="about_me__text">
                   <h4>Гилев Сергей</h4>
                   <p>Добрый день! <br/>
                   Меня зовут Сергей и это мой сайт</p>
               </div>
               <div className="about-img">
                   <img src="https://fv9-2.failiem.lv/thumb_show.php?i=scuhc7bkd&view" alt="I"/>

               </div>
           </div>
       </>
        
    );
};

export default IndexPage;