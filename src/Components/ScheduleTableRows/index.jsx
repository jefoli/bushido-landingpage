import { scheduleData } from './scheduleData';

export const ScheduleTableRows = () => {
  return (
    <table className="text-2xl p-3">
      <thead>
        <tr>
          <th className="custom-font custom-text">Dia da semana</th>
          <th className="custom-font custom-text">Horário</th>
          <th className="custom-font custom-text">Turma</th>
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
  );
};
