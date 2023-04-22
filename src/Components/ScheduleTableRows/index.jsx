import P from 'prop-types';
import { scheduleData } from './scheduleData';

export const ScheduleTableRows = () => {
  return (
    <table className="text-2xl p-3">
      <thead>
        <tr>
          <th>Dia da semana</th>
          <th>Horário</th>
          <th>Turma</th>
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

ScheduleTableRows.propTypes = {
  day: P.string.isRequired,
  time: P.string.isRequired,
  ageGroup: P.string.isRequired,
};
