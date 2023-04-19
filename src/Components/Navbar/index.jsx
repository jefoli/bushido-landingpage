import Image from 'next/image';
import imgName from '../../../public/assets/images/name.png';
import { MenuLink } from '../MenuLink';

export const Navbar = () => {
  return (
    <header className="container">
      <Image src={imgName} width={180} height={180} />
      <nav className="navigation">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/">Sobre</MenuLink>
        <MenuLink href="/">Serviços</MenuLink>
        <MenuLink href="/">Horários</MenuLink>
        <MenuLink href="/">Contato</MenuLink>
      </nav>
    </header>
  );
};
