import './SectionOne.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SectionOne() {
    const responsive: any = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div className="sectionOne">
            <p className='saludo'>Bienvenido/a a mi sitio web!</p>
            <Carousel className='carousel' responsive={responsive}>
            <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+1" alt="Imagen 1" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+6" alt="Imagen 256" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+2" alt="Imagen 2" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+3" alt="Imagen 3" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+4" alt="Imagen 4" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300.png?text=Imagen+5" alt="Imagen 5" />
                </div>
            </Carousel>
        </div>
    );
}