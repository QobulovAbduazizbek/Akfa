import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import opaxon from "../Img/Opaxon.webp";
import ayiqcha from "../Img/Ayiqcha.webp";
import arrow from "../Img/arrowr.png";
import { Link } from 'react-router-dom';

const HomeHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animatsiya davomiyligi
  }, []);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const CustomNextArrow = (props) => (
    <div
      className="w-12 h-12 bg-white rounded-full absolute top-1/2 right-[-70px] flex items-center justify-center opacity-0 group-hover:right-[40px] group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-[#63b700]"
      onClick={props.onClick}
    >
      <img className="w-5 h-5" src={arrow} alt="Next" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="w-12 h-12 bg-white rounded-full absolute top-1/2 left-[-70px] flex items-center justify-center opacity-0 group-hover:left-[40px] group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-[#63b700]"
      onClick={props.onClick}
    >
      <img className="w-5 h-5 rotate-180" src={arrow} alt="Prev" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    adaptiveHeight: true,
    beforeChange: handleBeforeChange,
    dots: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: currentSlide === i ? "#79c701" : "white",
          border: "1px white solid",
          borderRadius: "50%",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div className="py-12 px-5 flex justify-between items-center">
      <div className="w-full mx-auto px-5">
        <div className="bg-white">
          <div className="w-full max-w-[1050px] mx-auto px-5 group">
            <Slider {...settings}>
              <div className="relative">
                <img
                  className="w-[1170px] h-[500px] object-cover rounded-2xl"
                  src={opaxon}
                  alt="Opaxon"
                />
                <div data-aos="fade-up" className="absolute inset-0 flex flex-col ml-10 justify-center text-white text-center px-4">
                  <h3 className="text-start text-[42px] font-extrabold leading-[46px] break-words">
                    Остекление балконов со<br /> скидкой 30%
                  </h3>
                  <p className="flex text-lg leading-[25px] font-medium">
                    При заказе комплексной услуги под ключ
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  className="w-[1170px] h-[500px] object-cover rounded-2xl"
                  src={ayiqcha}
                  alt="Ayiqcha"
                />
                <div data-aos="fade-up" className="absolute inset-0 flex flex-col ml-10 items-start justify-center text-white text-center px-4">
                  <h3 className="text-[42px] font-extrabold leading-[46px] break-words">
                    <span>Сделаем всё под ключ:</span>
                  </h3>
                  <p className="text-lg leading-[25px] font-medium">
                    <span>от производства до установки за 5 дней</span>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-[#63b700] p-10 rounded-lg space-y-2">
        <h3 className="text-3xl font-bold text-white">Хотите записаться на замер?</h3>
        <p className="text-white/70 text-[19px]">Оставьте заявку и мы перезвоним Вам в течении 10 минут</p>
        <form className="space-y-5" action="#">
          <input className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5" type="text" placeholder="Ваше имя" />
          <input className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5" type="tel" placeholder="+7 (000) 090-99-99" />
        </form>
        <div className="flex justify-between items-start space-x-4">
          <input type="checkbox" className="form-checkbox h-12 w-12 bg-black border-gray-300 rounded focus:ring-0 cursor-pointer" />
          <p className="text-white">Я согласен(а) с обработкой персональных данных и
            <Link to="/nvknk"><u>политикой конфиденциальности</u></Link>
          </p>
        </div>
        <button className="py-6 px-10 text-black font-semibold bg-white rounded-lg hover:text-white hover:border-white border-2 hover:bg-[#63b700] transition-colors duration-300">
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
