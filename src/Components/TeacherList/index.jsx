import { TeacherCard } from '../TeacherCard';

export const TeacherList = () => {
  return (
    <section className="sec2 relative text-white bg-black" id="team">
      <h2>Conheça Nossos Professores</h2>
      <p>
        Nossa equipe de professores é formada por profissionais experientes e dedicados, que possuem
        ampla formação e conhecimento técnico em judô. Conheça um pouco mais sobre cada um deles:
      </p>
      <div className="professores">
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
        <TeacherCard name="Jeferson de Oliveira" rank="Faixa Branca" />
      </div>
    </section>
  );
};
