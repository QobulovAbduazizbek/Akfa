import React from 'react';
import { Link } from 'react-router-dom';
import standart from "../Img/standart.webp";
import delyuks from "../Img/Delyuks.webp";
import komfort from "../Img/komfort.webp";
import biznes from "../Img/Biznes.webp";



const Narxlarjadvali = () => {
  return (
    <div className='w-full max-w-[1450px] mx-auto px-5 pb-32 pt-20'>
      <h2 className='mb-5 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная  / </Link>Прайс-лист
      </h2>
      <h1 className='font-bold text-5xl mb-16'>Прайс-лист</h1>
      <div className="w-full">
        <ul className='grid grid-cols-4 gap-8'>
          <li className='space-y-5 flex flex-col relative'>
            <img src={standart} alt="акция 1" />
            <h3 className='font-bold text-3xl opacity-50'>Стандарт</h3>
            <div className="opacity-50 space-y-3">
              <p className='text-lg'>Отличный вариант для путешествия. Простой и функциональный номер.</p>
              <ul className='w-full ml-5'>
                <li className='list-disc'>Одноместные номера</li>
                <li className='list-disc'>Площадь - 24 кв. м</li>
              </ul>
              <div className=' flex flex-col py-5'>
                <span>Стоимость за сутки:</span>
                <span className='inline-block text-4xl font-bold'> от 2 300 р.</span>
              </div>
            </div>
            <button className='absolute bottom-20 text-white bg-[#4285f4] w-full py-4 rounded-lg'>Забронировать</button>
            <button className='absolute bottom-0 text-xl opacity-65 bg-[#d9e7fc] w-full py-4 rounded-lg'>Подробнее</button>
          </li>
          <li className='space-y-5 flex flex-col'>
            <img src={komfort} alt="акция 1" />
            <h3 className='font-bold text-3xl opacity-50'>Комфорт</h3>
            <div className="opacity-50 space-y-3">
              <p className='text-lg'>Удобные и уютные номера идеально подойдут как для отдыха, так и для деловых поездок.</p>
              <ul className='w-full ml-5'>
                <li className='list-disc'>Одноместные номера</li>
                <li className='list-disc'>Площадь - 38 кв. м</li>
              </ul>
              <div className=' flex flex-col py-5'>
                <span>Стоимость за сутки:</span>
                <span className='inline-block text-4xl font-bold'>
                2 700 р.</span>
              </div>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg'>Забронировать</button>
            <button className=' text-xl opacity-65 bg-[#d9e7fc] w-full py-4 rounded-lg'>Подробнее</button>
          </li>
          <li className='space-y-5 flex flex-col'>
            <img src={biznes} alt="biznes" />
            <h3 className='font-bold text-3xl opacity-50'>Бизнес</h3>
            <div className="opacity-50 space-y-3">
              <p className='text-lg'>Номер в гостинице обеспечит каждому гостю высокое качество сервиса по разумной цене.</p>
              <ul className='w-full ml-5'>
                <li className='list-disc'>Двухместные номера</li>
                <li className='list-disc'>Площадь - 46 кв. м</li>
              </ul>
              <div className=' flex flex-col py-5'>
                <span>Стоимость за сутки:</span>
                <span className='inline-block text-4xl font-bold'>
                2 900 р.</span>
              </div>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg'>Забронировать</button>
            <button className=' text-xl opacity-65 bg-[#d9e7fc] w-full py-4 rounded-lg'>Подробнее</button>
          </li>
          <li className='space-y-5 flex flex-col'>
            <img src={delyuks} alt="deluks" />
            <h3 className='font-bold text-3xl opacity-50'>Делюкс</h3>
            <div className="opacity-50 space-y-3">
              <p className='text-lg'>Номер позволит ощутить себя как дома. Подходит для приятного отдыха двух гостей.</p>
              <ul className='w-full ml-5'>
                <li className='list-disc'>Двухместные номера</li>
                <li className='list-disc'>Площадь - 46 кв. м</li>
              </ul>
              <div className=' flex flex-col py-5'>
                <span>Стоимость за сутки:</span>
                <span className='inline-block text-4xl font-bold'> от 2 300 р.</span>
              </div>
            </div>
            <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg'>Забронировать</button>
            <button className=' text-xl opacity-65 bg-[#d9e7fc] w-full py-4 rounded-lg'>Подробнее</button>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Narxlarjadvali;
