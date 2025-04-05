'use client';

import Image from 'next/image';
import Logo from '../public/img/Logo.png';
import Style from './style.module.css';

export default function Header() {
  return (
    <header className="container-fluid bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image className={Style.logo} src={Logo} alt="Logo" width={40} height={40} />
      </div>
      
    </header>
  );
}
