import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ShopCategoriesContainer = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        className="bg-blue-600 h-96"
      >
        <SwiperSlide className="flex items-center justify-center">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopCategoriesContainer;
