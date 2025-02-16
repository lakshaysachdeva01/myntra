import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SwiperBanner = ({
  images,
  className = "w-full",
  imgClassName = "w-full",
  hoverPlay = false, // Controls autoplay behavior
}) => {
  const swiperRef = useRef(null);

  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div
      className={className}
      onMouseEnter={() => {
        if (hoverPlay && swiperRef.current) {
          swiperRef.current.autoplay.start(); // Start autoplay
          swiperRef.current.params.autoplay.delay = 1000; // Fast autoplay
          swiperRef.current.slideNext(); // Ensure instant swipe
          swiperRef.current.update(); // Apply changes
        }
      }}
      onMouseLeave={() => {
        if (hoverPlay && swiperRef.current) {
          swiperRef.current.autoplay.stop(); 
        }
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={hoverPlay ? false : { delay: 2000, disableOnInteraction: false }} // Default autoplay if hoverPlay is false
        loop={true} // Always loops
        slidesPerView={1}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
      >
        {images.map((img, index) => (
          <SwiperSlide key={`${img}-${index}`}>
            <img className={imgClassName} src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
