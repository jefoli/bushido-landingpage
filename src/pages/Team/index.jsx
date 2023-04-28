import { SectionContainer } from '@/Components/SectionContainer';
import { TeacherCard } from '@/Components/TeacherCard';

function Team() {
  return (
    <SectionContainer>
      <section className="sec2  p-10  text-black bg-white w-full min-h-min" id="team">
        <h2 className="text-4xl font-bold m-5 custom-font custom-text uppercase">
          Conheça Nossos Professores
        </h2>
        <h2 className="text-2xl p-3">
          Nossa equipe de professores é formada por profissionais experientes e dedicados, que
          possuem ampla formação e conhecimento técnico em judô. Conheça um pouco mais sobre cada um
          deles:
        </h2>
        <div className="professores custom-font">
          <TeacherCard />
        </div>
      </section>
    </SectionContainer>
  );
}

export default Team;
