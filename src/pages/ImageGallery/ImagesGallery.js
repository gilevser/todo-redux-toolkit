import React from 'react';
import styles from './ImagesGallery.module.css'
import HandleForm from "../../components/HandleForm/HandleForm";


const baseURL = 'https://pixabay.com/api/';
const APIKey = '21784981-d13d311b92e9193e9bcd05db0';

const ImagesGallery = (text) => {

    const [images, setImages] = React.useState([])

    const getImages = async (query = 'cat') => {
        const url = `${baseURL}?key=${APIKey}&q=${query}&per_page=21`


        const response = await fetch(url)


        if (response.ok) {
            const result = await response.json()
            setImages(result.hits)

        }
    }

    React.useEffect(()=> {
        getImages()
    },[])

    return (
        <>
            <div className="contacts__header">
                <div className='contacts__header-relativ'>Картинки ...</div>
                <div className="contacts__header-absolute">
                    Картинки по запросу ...
                </div>
            </div>

            <div className={styles.gallery}>
                <HandleForm onClick={getImages} text='NEw'/>
                <div className={styles.gallery__content}>
                    {images.map(image =>
                            <img alt='Изображения с pixiby' src={image.webformatURL}/>

                    )}
                </div>
            </div>
        </>
    );
};

export default ImagesGallery;