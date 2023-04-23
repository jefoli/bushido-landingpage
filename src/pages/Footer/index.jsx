import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import { SocialIcons } from '@/Components/SocialIcons';
import { Address } from '@/Components/Address';
export const Footer = () => {
  return (
    <footer className="footer bg-white p-10 pb-1" id="footer">
      <Address />

      <div className="footer-container">
        <div className="footer-logo">
          <Image src={img} width={200} height={200} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3 className="custom-font custom-text">Siga-nos:</h3>
          <SocialIcons />
          <h3>Contato:</h3>
          <ul className="contact-info list-style: none">
            <li>Telefone: 123-456-7890</li>
            <li>Email: exemplo@exemplo.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center border-t-2 p-4">
        © 2023 - Bushido | Desenvolvido por: Jeferson de Oliveira
      </div>
    </footer>
  );
};
