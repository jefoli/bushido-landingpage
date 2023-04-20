import Image from 'next/image';
import imgName from '../../../public/assets/images/name.png';
import { MenuLink } from '../MenuLink';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <header className="">
      {' '}
      <Image src={imgName} width={180} height={180} />
      <nav className={`navigation`} open={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="#about">Sobre</MenuLink>
        <MenuLink href="#team">Equipe</MenuLink>
        <MenuLink href="#schedule">Horários</MenuLink>
        <MenuLink href="#footer">Contato</MenuLink>
      </nav>
      <button
        className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
        open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      >
        {' '}
      </button>
      <div className="sm:hidden">
        <IoCloseSharp className="h-6 w-6" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-5 sm:max-w-sm lg:ring-1 lg:ring-gray-900/10">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Close menu</span>
            <IoCloseSharp className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};
