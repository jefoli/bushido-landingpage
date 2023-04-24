import Image from 'next/image';
import imgName from '../../../public/assets/images/name.png';
import { MenuLink } from '../MenuLink';
import { useState } from 'react';
// import { IoCloseSharp } from 'react-icons/io5';
import { SocialIcons } from '../SocialIcons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <button
        className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
        open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(true)}
      >
        {visibleMobileMenu ? <IoCloseSharp /> : <IoCloseSharp />}
      </button> */}
      <header className="text-center">
        <div className="flex content-center	items-center justify-around">
          <Image src={imgName} width={180} height={180} />
          <nav
            className={`navigation `}
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="#about">Sobre</MenuLink>
            <MenuLink href="#team">Equipe</MenuLink>
            <MenuLink href="#schedule">Horários</MenuLink>
            <MenuLink href="#footer">Contato</MenuLink>
          </nav>
          <SocialIcons />
        </div>
      </header>
    </>
  );
};
