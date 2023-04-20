import { SectionContainer } from '../SectionContainer';

export const Schedule = () => {
  return (
    <SectionContainer id="schedule">
      <div className="absolute w-full h-full bg-white flex	justify-center	">
        <div className="table-column-group items-center max-w-7xl my-12">
          <h className="text-3xl font-bold m-4 my-8	custom-font ">Horários de Aula</h>
          <p className="text-2xl p-3">
            Os horários de aula da escola Judo Bushido são pensados para atender a todos os alunos,
            desde crianças até adultos. As aulas de Judo Kids acontecem às segundas e
            quartas-feiras, das 19h30 às 20h30, enquanto as aulas de Judo Adulto ocorrem às terças e
            quintas-feiras, das 19h às 20h. Também oferecemos aulas na sexta-feira, das 19h às 20h,
            e no sábado, das 10h às 11h. Venha treinar conosco e aprimorar suas habilidades em uma
            modalidade que traz muitos benefícios para a saúde e o bem-estar físico e mental!
          </p>
          <table className="text-2xl p-3">
            <thead>
              <tr>
                <th>Dia da semana</th>
                <th>Horário</th>
                <th>Turma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda-feira</td>
                <td>19:30 - 20:30</td>
                <td>Judo Kids</td>
              </tr>
              <tr>
                <td>Terça-feira</td>
                <td>19:30 - 21:30</td>
                <td>Adulto</td>
              </tr>
              <tr>
                <td>Quarta-feira</td>
                <td>19:30 - 20:30</td>
                <td>Judo Kids</td>
              </tr>
              <tr>
                <td>Quinta-feira</td>
                <td>19:30 - 21:30</td>
                <td>Adulto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SectionContainer>
  );
};
