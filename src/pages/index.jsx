import { ContentDefault } from '@/Components/Content';
import { Navbar } from '@/Components/Navbar';
import { ParallaxComponent } from '@/Components/Paralax';
import { Footer } from './Footer';
import { Treinadores } from '@/Components/Treinadores';
import { Horarios } from '@/Components/Horarios';
import { Endereco } from '@/Components/Endereco';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <ParallaxComponent />
      <ContentDefault />
      <Treinadores />
      <Horarios />
      <Endereco />
      <Footer />
    </div>
  );
}
