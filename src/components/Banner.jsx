
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
       <div className='py-10'>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4500, 
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true, 
            }}
            navigation={true} 
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ width: '100%', height: '400px', }}
        >
            <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/Kq5Ptjd/Untitled-design-2.png"
                    alt="Slide 1"
                    className='object-cover h-full w-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/55ytxDG/Untitled-design-3.png"
                    alt="Slide 2"
                     className='object-cover w-full'
                    
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/7YrzV0t/1.png"
                    alt="Slide 3"
                     className='object-cover w-full'
                />
            </SwiperSlide>
        </Swiper>
       </div>
    );
};

export default Banner;
