import { About } from '@/pages/About';
import { Address } from '@/Components/Address';
import { Navbar } from '@/Components/Navbar';
import { ParallaxComponent } from '@/Components/Paralax';
import { Team } from '@/pages/Team';
import { Footer } from '../Footer';
import { Schedule } from '../SchedulePage';

export const Home = () => {
  return (
    <>
      <Navbar />
      <ParallaxComponent />
      <About />
      <Team />
      <Schedule />
      <Address />
      <Footer />
    </>
  );
};
