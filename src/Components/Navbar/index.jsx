import Image from 'next/image';
import imgName from '../../../public/assets/images/name.png';
import { MenuLink } from '../MenuLink';
import { SocialIcons } from '../SocialIcons';
import { IoReorderThreeSharp } from 'react-icons/io5';
import { useState } from 'react';

export default function Navbar() {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  return (
    <>
      <header className="text-center">
        <div className="flex content-center	mx-auto items-center justify-around">
          <Image src={imgName} width={180} height={180} className="flex-shrink-0" />
          <nav className="flex items-center">
            <div className=" hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <MenuLink
                  href="/"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </MenuLink>
                <MenuLink
                  href="#about"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sobre
                </MenuLink>
                <MenuLink
                  href="#team"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Equipe
                </MenuLink>
                <MenuLink
                  href="#schedule"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Horários
                </MenuLink>
                <MenuLink
                  href="#footer"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contato
                </MenuLink>
                <MenuLink
                  href="/"
                  className="flex hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gokyo
                </MenuLink>
              </div>
            </div>
          </nav>
          <SocialIcons />
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Menu"
              aria-expanded="false"
              onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
            >
              <IoReorderThreeSharp />
            </button>
          </div>
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 sm:px-3 bg-zinc-200 ${visibleMobileMenu ? '' : 'hidden'}`}
            >
              <MenuLink
                href="/"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </MenuLink>
              <MenuLink
                href="#about"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sobre
              </MenuLink>
              <MenuLink
                href="#team"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Equipe
              </MenuLink>
              <MenuLink
                href="#schedule"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Horários
              </MenuLink>
              <MenuLink
                href="#footer"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contato
              </MenuLink>
              <SocialIcons />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
