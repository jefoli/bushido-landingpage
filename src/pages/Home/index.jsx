import { About } from '@/pages/About';
import { Address } from '@/Components/Address';
import { Schedule } from '@/Components/Schedule';
import { Navbar } from '@/Components/Navbar';
import { ParallaxComponent } from '@/Components/Paralax';
import { TeacherList } from '@/Components/TeacherList';
import { Footer } from '../Footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <ParallaxComponent />
      <About />
      <TeacherList />
      <Schedule />
      <Address />
      <Footer />
    </>
  );
};
