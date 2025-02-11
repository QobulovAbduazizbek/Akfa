import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown2 from './Dropdown2';
import Dropdown1 from './Dropdown1';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import Dropdown5 from './Dropdown5';

const Dropdown = () => {
    return (
        <div className='bg-[#f7f7f7]'>
                <ul className='flex justify-between items-center space-x-10 px-5 py-5 font-semibold'>
                    <li>
                        <Dropdown1 />
                    </li>
                    <li>
                        <Dropdown2 />
                    </li>
                    <li>
                        <Dropdown3 />
                    </li>
                    <li>
                        <Dropdown4 />
                    </li>
                    <li>
                        <Dropdown5 />
                    </li>
                    <li className='opacity-70'>
                        <Link to='narxlar'>Прайс-лист</Link>
                    </li>
                    <li className='opacity-70'>
                        <Link to='certifikat'>Сертификаты</Link>
                    </li>
                    <li className='opacity-70'>
                        <Link>Регистрация</Link>
                    </li>
                </ul>
        </div>
    );
};

export default Dropdown;
