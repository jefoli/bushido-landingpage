import { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../public/assets/images/logo.png';
import imgBackground from '../../../public/assets/images/background.jpg';

export const ParallaxComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setValue(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center	h-screen relative object-cover">
        <div style={{ marginTop: value * 0.5 + 'px' }}>
          <Image
            className=" t-0	l-0 r-0 b-0 h-fit	 w-full pointer-events-none opacity-20	z-50 "
            src={imgBackground}
            width={1340}
            height={1340}
          />
        </div>
        <div className="text mt-16 absolute " style={{ marginTop: value * 1.5 + 'px' }}>
          <Image
            className="relative t-0	l-0 w-full pointer-events-none	"
            src={img}
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};
