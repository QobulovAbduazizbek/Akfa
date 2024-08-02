import React from 'react';
import { Link } from 'react-router-dom';
import aksiya1 from "../Img/aksiya1.webp";
import aksiya2 from "../Img/aksiya2.webp";
import aksiya3 from "../Img/aksiya3.webp";

const Aksiya = () => {
  return (
    <div className='w-full max-w-[1450px] mx-auto px-5 py-20'>
      <h2 className='mb-5 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная/</Link> Акции
      </h2>
      <h1 className='font-bold text-5xl mb-16'>Акции</h1>
      <div className="w-full">
        <ul className='grid grid-cols-3 gap-8'>
          <li className='space-y-5 flex flex-col'>
            <img src={aksiya1} alt="акция 1" />
            <div className="opacity-60 space-y-3">
              <p>с 26 ноября по 9 декабря</p>
              <h3 className='font-bold text-3xl'>Бесплатный подарок с покупкой</h3>
              <p className='text-lg'>Получите бесплатный подарок при покупке товара или при достижении определенной суммы заказа</p>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg'>Подробнее</button>
          </li>

          <li className='space-y-5 relative'>
            <img src={aksiya2} alt="акция 2" />
            <div className="opacity-60 space-y-3">
              <p>с 26 ноября по 9 декабря</p>
              <h3 className='font-bold text-3xl'>Скидка на сезонные товары</h3>
              <p className='text-lg'>Предлагаем скидки на товары, связанные с текущим сезоном, скидки на летние товары в летний период</p>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg absolute bottom-0 left-0'>Подробнее</button>
          </li>

          <li className='space-y-5 relative'>
            <img src={aksiya3} alt="акция 3" />
            <div className="opacity-60 space-y-3">
              <p>с 26 ноября по 9 декабря</p>
              <h3 className='font-bold text-4xl'>Получи второй со скидкой</h3>
              <p className='text-lg'>Получите бесплатный подарок при покупке товара или при достижении определенной суммы заказа</p>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg absolute bottom-0 left-0'>Подробнее</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aksiya;
