import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./MoviesCard.css"; // move swiper-related styles here

const MoviesCard = ({ movies }) => {
  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={4}
        speed={600}
        slidesPerView={"auto"}
        preventClicks={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
        className="swiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID} className="swiper-slide">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.Title}
            />
            <div className="title">
              <span>{movie.Title}</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default MoviesCard;
