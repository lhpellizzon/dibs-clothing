import ShopCategoryItems from "./ShopCategoryItems";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ShopCategoryItem = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  return (
    <div>
      <h1 className="text-align">{title}</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 320px
          200: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },

          420: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4.5,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 6.5,
            spaceBetween: 0,
          },
        }}
        className="bg-blue-600"
      >
        {items.map((item) => (
          <SwiperSlide className="flex items-center justify-center p-4">
            <ShopCategoryItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopCategoryItem;
