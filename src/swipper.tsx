import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { renderToString } from "react-dom/server";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import one from "./assets/banners/image-1.png";
import two from "./assets/banners/image-2.png";
import three from "./assets/banners/image-3.png";

const banners = [one, two, three];

function Banner({ image }: { image: string }) {
  const getRandomPhotos = () => {
    const random = Math.floor(Math.random() * 1000) + 1000;
    return `https://picsum.photos/${random}/500`;
  };
  return (
    <div className="w-full flex items-center justify-center">
      <img
        src={image ?? getRandomPhotos()}
        alt="pic"
        className="object-contain w-full"
      />
    </div>
  );
}

export function Swipu() {
  return (
    <div className="w-screen h-screen swipu">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<div class="${className} mb-40 banner-dot"></div>`;
          },
        }}
        autoplay={{ delay: 2000 }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner image={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
