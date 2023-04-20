import { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import imgBackground from '../../../public/assets/images/background.jpg';
import { SectionContainer } from '../SectionContainer';

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
        <div className="text-center mt-16 absolute" style={{ bottom: value * 1.5 + 'px' }}>
          <h1 className="mt-18 font-mono text-white text-5xl">
            ACADEMIA DE ARTES MARCIAIS BUSHIDO
          </h1>
          <h2 className="mt-10 font-mono text-white text-3xl">
            Na Academia de Judô Bushido, você é desafiado a superar seus limites e medos para
            alcançar a excelência, tanto dentro quanto fora do tatame
          </h2>
        </div>
        <div className="mt-16 absolute " style={{ top: value * 1.0 + 'px' }}>
          <Image
            className="relative mt-12	l-0 w-full pointer-events-none	"
            src={img}
            width={600}
            height={600}
            // style={({ width: value * 0.6 + 'px' }, { height: value * 0.6 + 'px' })}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
