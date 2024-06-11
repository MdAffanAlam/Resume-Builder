import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.css";
import testi1 from '../assets/images/testi-1.jpg'
import testi2 from '../assets/images/testi-2.jpg'
import testi3 from '../assets/images/testi-3.jpg'
import testi4 from '../assets/images/testi-4.jpg'
import testi5 from '../assets/images/testi-5.jpg'
import testi6 from '../assets/images/testi-6.jpg'
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";

export default function App() {
  return (
    <>
      <h2 className="feedback">Customer Feedback/Reviews</h2>
      <section className="testimonials">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1100}
          className="mySwiper"
        >
          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi1} alt="" />
              <h3 className="name">Smith</h3>
              <h3 className="profession">AI Engineer</h3>
              <FaQuoteLeft />
              <p className="desc">
                This resume builder is amazing! It helped me create a
                professional resume in no time. The templates are modern and
                easy to use.
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi2} alt="" />
              <h3 className="name">Jhon</h3>
              <h3 className="profession">Chef</h3>
              <FaQuoteLeft />
              <p className="desc">
                I was able to land my dream job thanks to this resume builder.
                The process was quick and the results were fantastic!
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi3} alt="" />
              <h3 className="name">Angelika</h3>
              <h3 className="profession">Business Woman</h3>
              <FaQuoteLeft />
              <p className="desc">
                The resume builder is user-friendly and offers a variety of
                customization options. I highly recommend it to anyone looking
                to improve their resume.
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi4} alt="" />
              <h3 className="name">Eliana</h3>
              <h3 className="profession">Architect</h3>
              <FaQuoteLeft />
              <p className="desc">
                Creating a resume has never been easier. This tool provided me
                with the perfect template and helped me highlight my skills
                effectively.
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi5} alt="Images not load" />
              <h3 className="name">Arianna</h3>
              <h3 className="profession">Graphic Designer</h3>
              <FaQuoteLeft />
              <p className="desc">
                As a graphic designer, I needed a visually appealing resume.
                This builder exceeded my expectations and made my resume stand
                out.
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="main-content">
            <div className="data">
              <img src={testi6}alt="" />
              <h3 className="name">Charles</h3>
              <h3 className="profession">Doctor</h3>
              <FaQuoteLeft />
              <p className="desc">
                This resume builder is a lifesaver! I was able to craft a
                professional resume in minutes, which helped me secure a new job
                in my field.
              </p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
