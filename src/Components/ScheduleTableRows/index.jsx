import { scheduleData } from './scheduleData';

export const ScheduleTableRows = () => {
  return (
    <div className="w-full overflow-x-auto flex justify-center">
      <table className="text-2xl p-3 w-full md:w-auto">
        <thead className="text-2xl p-3 w-full h-auto">
          <tr>
            <th className="custom-font custom-text whitespace-no-wrap">Dia da semana</th>
            <th className="custom-font custom-text whitespace-no-wrap">Horário</th>
            <th className="custom-font custom-text whitespace-no-wrap">Turma</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.day}</td>
                <td>{data.time}</td>
                <td>{data.ageGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
