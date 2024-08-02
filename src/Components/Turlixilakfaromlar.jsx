import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import akfa1 from "../Img/oqakfa.webp";
import akfa2 from "../Img/jigarrangakfa.webp";
import akfa3 from "../Img/seriyakfa.webp";
import { Link } from 'react-router-dom';

const Turlixilakfaromlar = () => {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Animatsiya davomiyligi
    }, []);

    return (
        <div className='w-full max-w-[1450px] mx-auto px-5'>
            <div className='mb-8' data-aos="fade-up">
                <h1 className='font-extrabold text-5xl mb-4'>Выберите один из профилей Rehau</h1>
                <p className='font-medium text-xl opacity-70'>Дизайн и теплоизоляция, окна премиум-класса по цене эконом</p>
            </div>

            <div>
                <ul className="grid grid-cols-3 gap-8">
                    {[
                        {
                            img: akfa1,
                            title: "Rehau Thermo",
                            description: "При традиционной глубине 60 мм окна обладают повышенной энергоэффективностью благодаря 4-камерному профилю",
                            profile: "REHAU Thermo 60, 4-х камерный",
                            glazing: "2-х камерный, 32мм",
                            seal: "Rehau Raucell: черный, серый, белый",
                            fittings: "Roto NT класс – Премиум",
                            price: "6 450",
                        },
                        {
                            img: akfa2,
                            title: "Rehau Grazio",
                            description: "Всё еще недорогой вариант, но с повышенной тепло- и звукоизоляцией",
                            profile: "REHAU Grazio 70, пятикамерный",
                            glazing: "2-х камерный, 32мм",
                            seal: "Rehau Raucell: черный, серый, белый",
                            fittings: "Roto NT класс – Премиум",
                            price: "7 300",
                        },
                        {
                            img: akfa3,
                            title: "Rehau Delight",
                            description: "С окнами Rehau Delight в помещение будет проникать на 10% больше света – это возможно благодаря уменьшению высоты профиля",
                            profile: "REHAU Delight 60, 5-и камерный",
                            glazing: "2-х камерный, 32мм",
                            seal: "Rehau Raucell: черный, серый, белый",
                            fittings: "Roto NT класс – Премиум",
                            price: "8 250",
                        },
                    ].map((item, index) => (
                        <li key={index} className='flex flex-col border-2 rounded-lg p-6 space-y-4'>
                            <img className='w-40 h-50' src={item.img} alt={item.title} />
                            <Link>
                                <h2 className='font-bold text-3xl mb-4'>{item.title}</h2>
                                <p>{item.description}</p>
                            </Link>
                            <ProfileDetail label="Профиль" value={item.profile} />
                            <ProfileDetail label="Стеклопакет" value={item.glazing} />
                            <ProfileDetail label="Уплотнитель" value={item.seal} />
                            <ProfileDetail label="Фурнитура" value={item.fittings} />
                            <p>
                                <span className='opacity-60'>oт</span>
                                <span className='text-black opacity-100 font-semibold text-3xl mx-2'>{item.price}</span>
                                <span className='opacity-60'>руб./м²</span>
                            </p>
                            <p className='grow border-b-2 w-[50%] border-black pb-2'>подробнее о профиле</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ProfileDetail = ({ label, value }) => (
    <>
        <p className='flex justify-between'>
            <span className='opacity-50'>{label}</span>
            <span>{value}</span>
        </p>
        <hr />
    </>
);

export default Turlixilakfaromlar;
