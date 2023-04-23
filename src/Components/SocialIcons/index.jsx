import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';

export const SocialIcons = () => {
  return (
    <ul className="social-links flex">
      <li>
        <Link
          className="colorIcon"
          href="https://www.facebook.com/bushidojudoejiujitsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare
            size={30}
            className="text-white hover:text-[#ccb312] hover:scale-110 mx-1"
          />
        </Link>
      </li>
      <li>
        <Link
          className="colorIcon "
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-white hover:text-[#ccb312] hover:scale-110 mx-1" />
        </Link>
      </li>

      <li>
        <Link
          className="colorIcon"
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiYoutube size={30} className="text-white hover:text-[#ccb312] hover:scale-110 mx-1" />
        </Link>
      </li>
      <li>
        <Link
          className="colorIcon"
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-white hover:text-[#ccb312] hover:scale-110 mx-1" />
        </Link>
      </li>

      <li>
        <Link
          className="colorIcon"
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail
            size={30}
            className="text-white hover:text-[#ccb312] hover:scale-110 mx-1"
          />
        </Link>
      </li>
    </ul>
  );
};
