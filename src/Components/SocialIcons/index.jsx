import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';

export const SocialIcons = () => {
  return (
    <ul className="social-links flex justify-end">
      <li>
        <Link
          href="https://www.facebook.com/bushidojudoejiujitsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare
            size={30}
            className="text-[#ccb312] hover:text-white hover:scale-110 mx-1"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/academiabushido_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-[#ccb312] hover:text-white hover:scale-110 mx-1" />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiYoutube size={30} className="text-[#ccb312] hover:text-white hover:scale-110 mx-1" />
        </Link>
      </li>
      <li>
        <Link
          href="https://api.whatsapp.com/send/?phone=5515996727437&text=Ol%C3%A1%2C+Academia+Bushido+ao+seu+dispor!&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-[#ccb312] hover:text-white hover:scale-110 mx-1" />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/bushido.academia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail
            size={30}
            className="text-[#ccb312] hover:text-white hover:scale-110 mx-1"
          />
        </Link>
      </li>
    </ul>
  );
};
