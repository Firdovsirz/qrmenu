import "./SliderSection.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function SliderSection() {
    return (
        <section className="slider-section">
            <Swiper
                slidesPerView={3}
                // centeredSlides={true}
                spaceBetween={10}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Bütün</SwiperSlide>
                <SwiperSlide>Səhər yeməyi</SwiperSlide>
                <SwiperSlide>Günorta yeməyi</SwiperSlide>
                <SwiperSlide>Axşam yeməyi</SwiperSlide>
                <SwiperSlide>İçkilər</SwiperSlide>
                <SwiperSlide>Setlər</SwiperSlide>
            </Swiper>
        </section>
    )
}
