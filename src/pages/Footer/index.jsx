import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link';
export const Footer = () => {
  return (
    <footer className="footer bg-zinc-100" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Image src={img} width={200} height={200} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3>Siga-nos:</h3>
          <ul className="social-links">
            <li>
              <Link
                className="colorIcon"
                href="https://www.facebook.com/bushidojudoejiujitsu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size={30} />
              </Link>
            </li>
            <li>
              <Link
                className="colorIcon"
                href="https://www.instagram.com/bushido.academia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare size={30} />
              </Link>
            </li>
          </ul>
          <h3>Contato:</h3>
          <ul className="contact-info">
            <li>Telefone: 123-456-7890</li>
            <li>Email: exemplo@exemplo.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
