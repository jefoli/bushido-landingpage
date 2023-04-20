import { SectionContainer } from '../SectionContainer';
import { TeacherCard } from '../TeacherCard';

export const TeacherList = () => {
  return (
    <SectionContainer>
      <section className="sec2  text-white bg-black w-full h-full" id="team">
        <h2 className="custom-font custom-text">Conheça Nossos Professores</h2>
        <p className="text-2xl p-3">
          Nossa equipe de professores é formada por profissionais experientes e dedicados, que
          possuem ampla formação e conhecimento técnico em judô. Conheça um pouco mais sobre cada um
          deles:
        </p>
        <div className="professores custom-font">
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
          <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        </div>
      </section>
    </SectionContainer>
  );
};
