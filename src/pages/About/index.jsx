import { SectionContainer } from '../../Components/SectionContainer';

export const About = () => {
  return (
    <SectionContainer id="about">
      <div className=" relative p-10 w-full max-h-max bg-white">
        <h2 className="text-4xl font-bold m-5 custom-font custom-text uppercase">
          {' '}
          Nossa História{' '}
        </h2>
        <p className="text-2xl p-3">
          No ano de 2021, um grupo de amigos apaixonados por Judô decidiu fundar uma nova academia
          na cidade de Tatuí. Inspirados pelos valores do esporte, como respeito, disciplina e
          superação pessoal, eles montaram uma estrutura completa para receber alunos de todas as
          idades e níveis de habilidade. A academia, batizada de Bushido, iniciou suas atividades em
          um pequeno espaço, oferecendo aulas duas vezes por semana para crianças e jovens.
        </p>
        <p className="text-2xl p-3">
          Com a dedicação e comprometimento dos professores, a Judô Tatuí logo ganhou destaque na
          cidade, atraindo um número crescente de alunos e expandindo sua capacidade de atendimento.
        </p>
        <p className="text-2xl p-3">
          Hoje, a academia conta com uma equipe de professores experientes e dedicados, que buscam
          constantemente aprimorar suas técnicas e metodologias de ensino.
        </p>
        <p className="text-2xl p-3">
          A Bushido é reconhecida por seus alunos como uma escola de excelência, que valoriza tanto
          o aprendizado técnico quanto o desenvolvimento pessoal. Além das aulas regulares, a
          academia oferece aulas especiais de preparação para competições, treinamentos específicos
          para graduação de faixa e atividades complementares para aprimorar a preparação física e
          mental dos alunos.
        </p>
        <p className="text-2xl p-3">
          Com uma filosofia de trabalho centrada nos valores do Judô, a Judô Tatuí segue
          contribuindo para a formação de cidadãos comprometidos com a saúde, a educação e o
          bem-estar social. Se você busca um ambiente acolhedor, professores experientes e a
          possibilidade de desenvolver habilidades físicas e mentais, venha conhecer a Judô Tatuí.
        </p>
      </div>
    </SectionContainer>
  );
};
