import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import { SocialIcons } from '@/Components/SocialIcons';
import { Address } from '@/Components/Address';

function Footer() {
  return (
    <footer className="footer bg-white p-10 pb-1" id="footer">
      <Address />

      <div className="footer-container">
        <div className="footer-logo">
          <Image src={img} width={200} height={200} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3 className=" text-2xl custom-font custom-text p-2">Siga-nos</h3>
          <SocialIcons />
          <h3 className="text-2xl custom-font custom-text p-2">Contato</h3>
          <ul className="contact-info list-style: none">
            <li className="text-xl p-2">15 - 99672-7437</li>
            <li className="text-xl p-2">academiadeartesmarciaisbushido@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center border-t-2 p-4">
        © 2023 - Bushido | Desenvolvido por: Jeferson de Oliveira
      </div>
    </footer>
  );
}

export default Footer;
