import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import c from "../Img/cberbank.svg";
import m from "../Img/mir.svg";
import n from "../Img/n.svg";
import q from "../Img/q.svg";
import a from "../Img/a.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animatsiya davomiyligi
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-[#f7f7f7]' data-aos="fade-up">
      <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
        <h2 className='text-2xl font-semibold'>Kontakt ma'lumotlari</h2>
        <p className='opacity-70'>Biz bilan qulay usulda bog'laning</p>

        <div className="grid grid-cols-3 gap-6 mt-20 mb-10 text-lg">
          <ul>
            <li className='opacity-65'>Ish vaqti:</li>
            <li>Du-Ju: 09:00 dan 17:00 gacha</li>
            <li>Shanba: 11:00 dan 15:00 gacha</li>
          </ul>
          <ul>
            <li className='opacity-65'>Bepul qo'ng'iroq:</li>
            <li className='text-2xl'>8 (800) 888-88-88</li>
            <li className='opacity-65'>WhatsApp, Telegram</li>
          </ul>
          <div>
            <p className='opacity-65'>Ijtimoiy tarmoqlarda obuna bo'ling:</p>
            <ul className='flex space-x-4'>
              <li className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                  <path d="..." fill="#818181" />
                </svg>
              </li>
              <li className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                  <path d="..." fill="#818181" />
                </svg>
              </li>
              <li className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                  <path d="..." fill="#818181" />
                </svg>
              </li>
            </ul>
          </div>
          <ul>
            <li className='opacity-65'>Biz manzilimiz:</li>
            <li>g. Moskva, Leninskiy prospekt, bino, qurilish, xona raqami</li>
          </ul>
          <ul>
            <li className='opacity-65'>Xatlar va takliflar uchun:</li>
            <li>
              <a className='text-green-600 font-medium' href="mailto:test@example.com">test@example.com</a>
            </li>
          </ul>
          <ul>
            <li className='opacity-65'>Saytda joylashgan barcha materiallar qonun bilan himoyalangan.</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className='w-full max-w-[1450px] mx-auto px-5 my-8 flex justify-between items-center'>
        <div>
          <p className='opacity-65 mb-5'>To'lovlarni qulay qiling:</p>
          <ul className='flex items-center space-x-8'>
            <li><img className='w-8 h-8' src={c} alt="cberbank" /></li>
            <li><img className='w-8 h-8' src={m} alt="mir" /></li>
            <li><img className='w-8 h-8' src={a} alt="a" /></li>
            <li><img className='w-8 h-8' src={q} alt="q" /></li>
            <li><img className='w-8 h-8' src={n} alt="n" /></li>
          </ul>
        </div>
        <button
          className='border-2 w-16 h-16 rounded-full hover:bg-[#63b700] flex justify-center items-center'
          onClick={scrollToTop}
        >
          <svg className='opacity-60' xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 26 32.969">
            <path d="M12.565.069a1.2 1.2 0 0 1 .865 0 213.326 213.326 0 0 0 .291.151l11.775 9.7a1.264 1.264 0 0 1 .272 1.746 1.216 1.216 0 0 1-1.719.276l-9.821-8.254v28.028a1.231 1.231 0 1 1-2.462 0V3.688l-9.821 8.254a1.216 1.216 0 0 1-1.719-.276A1.264 1.264 0 0 1 .498 9.92L12.273.22a1.194 1.194 0 0 1 .156-.081 1.16 1.16 0 0 1 .136-.07z" fillRule="evenodd" />
          </svg>
        </button>
      </div>
      <hr />
      <div className='w-full max-w-[1450px] mx-auto px-5 my-8 flex justify-between items-center'>
        <p>Copyright © 2022 - 2024 Kompaniya nomi</p>
        <p>Yordam.<u>Saytlar yaratish</u> Megagroup tomonidan.</p>
      </div>
    </div>
  );
};

export default Footer;
