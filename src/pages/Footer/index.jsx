import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import { SocialIcons } from '@/Components/SocialIcons';
import { Address } from '@/Components/Address';

function Footer() {
  return (
    <footer className="bg-white p-10 pb-1 text-center" id="footer">
      <Address />
      <div className="flex flex-col-reverse sm:flex-row justify-between w-auto m-auto align-center items-center">
        <Image src={img} width={200} height={200} alt="Logo" className="h-auto flex-shrink-0" />

        <div className="w-full sm:w-auto text-right color-text">
          <h3 className="text-2xl custom-font custom-text p-2">Contato</h3>
          <p className="text-xl p-2">15 - 99672-7437</p>
          <p className="text-xl p-2">academiabushido@gmail.com</p>
          <SocialIcons className="text-orange-700" />
        </div>
      </div>

      <div className="flex justify-center border-t-2 p-4 color-text">
        © 2023 - Bushido | Desenvolvido por: Jeferson de Oliveira
      </div>
    </footer>
  );
}

export default Footer;
