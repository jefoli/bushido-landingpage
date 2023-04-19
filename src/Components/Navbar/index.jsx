import Image from 'next/image';
import imgName from '../../../public/assets/images/name.png';

export const Navbar = () => {
  return (
    <header>
      <Image src={imgName} width={180} height={180} />
      <nav className="navigation">
        <a
          className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white no-underline"
          href="#"
        >
          Home
        </a>
        <a
          className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white no-underline"
          href="#"
        >
          Nossa História
        </a>
        <a
          className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white	no-underline"
          href="#"
        >
          Serviços
        </a>
        <a
          className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white no-underline"
          href="#"
        >
          Horários
        </a>
        <a
          className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white
        no-underline"
          href="#"
        >
          Contato
        </a>
      </nav>
    </header>
  );
};
