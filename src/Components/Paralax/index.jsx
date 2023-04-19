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
    <div className="flex justify-center	items-center h-screen relative ">
      <div style={{ marginTop: value * 1.0 + 'px' }}>
        <Image className="relative t-0	l-0 r-0 b-0 w-full pointer-events-none	" src={imgBackground} />
      </div>
      <div className="text mt-16 absolute " style={{ top: value * 1.0 + 'px' }}>
        <Image
          className="relative t-0	l-0 w-full pointer-events-none	"
          src={img}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
