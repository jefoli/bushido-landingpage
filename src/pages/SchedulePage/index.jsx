import { ScheduleTableRows } from '@/Components/ScheduleTableRows';
import { SectionContainer } from '@/Components/SectionContainer';

export const Schedule = () => {
  return (
    <SectionContainer>
      <div className="w-full h-full bg-black flex	justify-center p-10" id="schedule">
        <div className="table-column-group items-center max-w-7xl my-12">
          <h2 className="text-3xl font-bold m-4 my-8 custom-font custom-text uppercase">
            Horários de Aula
          </h2>
          <p className="text-2xl p-3 text-white">
            Os horários de aula da escola Judô Bushido são pensados para atender a todos os alunos,
            desde crianças até adultos. As aulas de Judo Kids acontecem às segundas e
            quartas-feiras, das 19h30 às 20h30, enquanto as aulas de Judo Adulto ocorrem às terças e
            quintas-feiras, das 19h às 20h. Também oferecemos aulas na sexta-feira, das 19h às 20h,
            e no sábado, das 10h às 11h. Venha treinar conosco e aprimorar suas habilidades em uma
            modalidade que traz muitos benefícios para a saúde e o bem-estar físico e mental!
          </p>
          <ScheduleTableRows />
        </div>
      </div>
    </SectionContainer>
  );
};
