import Image from 'next/image';
import img from '../../assets/images/logo.png';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Image src={img} width={200} height={200} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3>Siga-nos:</h3>
          <ul className="social-links">
            <li>
              <a className="colorIcon" href="https://www.facebook.com/">
                <FaFacebookSquare size={30} />
              </a>
            </li>
            <li>
              <a className="colorIcon" href="https://www.instagram.com/">
                <FaInstagramSquare size={30} />
              </a>
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
