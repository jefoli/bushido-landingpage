import { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import imgBackground from '../../../public/assets/images/background.jpg';
import { SectionContainer } from '../SectionContainer';
import golpe from '../../../public/assets/images/golpe.png';

export const ParallaxComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1300) {
        setValue(window.scrollY);
      } else {
        setValue(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionContainer>
      <div className="flex justify-center	h-screen relative object-cover">
        <div style={{ marginTop: value * 0.5 + 'px' }}>
          <Image
            className=" t-0	l-0 r-0 b-0 	w-full pointer-events-none opacity-20 object-cover"
            src={imgBackground}
            width={3000}
            height={3000}
          />
        </div>
        <div className="text-center mb-72 absolute" style={{ bottom: value * -0.9 + 'px' }}>
          <h1 className="mt-18 custom-font custom-text text-5xl">
            ACADEMIA DE ARTES MARCIAIS BUSHIDO
          </h1>
          <h2 className="mt-10 custom-font text-white text-3xl">
            Na Academia de Judô Bushido, você é desafiado a superar seus limites e medos para
            alcançar a excelência, tanto dentro quanto fora do tatame
          </h2>
        </div>
        <div className="mt-16 absolute " style={{ top: value * 1.0 + 'px' }}>
          <Image
            className="relative mt-8	l-0 w-full pointer-events-none	"
            src={img}
            width={300}
            height={300}
            style={{ width: 300 + value * 0.1 + 'px' }}
          />
        </div>

        <div className="-ml-28 -bottom-10	 absolute " style={{ left: value * 0.1 + 'px' }}>
          <Image
            className="relative mt-12	l-0 w-full pointer-events-none  filter grayscale invert"
            src={golpe}
            width={600}
            height={600}
            style={({ transform: `rotate(${value * 0.4}deg)` }, { width: value * 0.6 + 'px' })}
          />
        </div>
        <div
          className="-mr-10 -bottom-10 absolute -scale-x-100"
          style={{ right: value * 0.1 + 'px' }}
        >
          <Image
            className="relative mt-12 l-0 w-full pointer-events-none filter grayscale invert"
            src={golpe}
            width={600}
            height={600}
            style={({ transform: `rotate(${value * 0.4}deg)` }, { width: value * 0.6 + 'px' })}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
