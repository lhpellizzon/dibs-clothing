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
            slidesPerView: 1,
            spaceBetween: 20,
          },

          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 12,
            spaceBetween: 40,
          },
        }}
        className="bg-blue-600 h-96"
      >
        {items.map((item) => (
          <SwiperSlide className="flex items-center justify-center">
            <ShopCategoryItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopCategoryItem;
