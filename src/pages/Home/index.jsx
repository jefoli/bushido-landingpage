import { About } from '@/pages/About';
import { Navbar } from '@/Components/Navbar';
import { ParallaxComponent } from '@/Components/Paralax';
import { Team } from '@/pages/Team';
import { Footer } from '../Footer';
import { Schedule } from '../SchedulePage';
import { ValuesPage } from '../ValuesPage';

export const Home = () => {
  return (
    <>
      <Navbar />
      <ParallaxComponent />
      <About />
      <ValuesPage />
      <Team />
      <Schedule />
      <Footer />
    </>
  );
};
