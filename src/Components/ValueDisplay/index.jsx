import {
  FaHandshake,
  FaRegCalendarCheck,
  FaRunning,
  FaTrophy,
  FaUserFriends,
} from 'react-icons/fa';

import { GiHeartBeats } from 'react-icons/gi';

export const ValueDisplay = () => {
  return (
    <div>
      <div>
        <div className=" flex  professores">
          <div className="text-center p-8">
            <FaTrophy className="text-6xl  mx-auto mb-4 custom-font custom-text" />
            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">
              Excelência
            </h3>
            <p className="text-center text-2xl ">
              Nosso objetivo é ajudar cada aluno a alcançar seu potencial máximo, fornecendo
              treinamento de qualidade e feedback individualizado.
            </p>
          </div>
          <div className="text-center p-8">
            <FaHandshake className="text-6xl  mx-auto mb-4 custom-font custom-text" />
            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">Respeito</h3>
            <p className="text-center text-2xl">
              Valorizamos o respeito pelos outros e pela si próprio, promovendo uma cultura de
              harmonia e paz.
            </p>
          </div>
          <div className="text-center p-8">
            <FaRegCalendarCheck className="text-6xl  mx-auto mb-4 custom-font custom-text" />
            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">
              disciplina
            </h3>
            <p className="text-center text-2xl">
              Ajudamos nossos alunos a desenvolverem a disciplina necessária para alcançar seus
              objetivos.
            </p>
          </div>

          <div className="text-center p-8">
            <FaRunning className="text-6xl  mx-auto mb-4 custom-font custom-text" />
            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">Dedicação</h3>
            <p className="text-center text-2xl">
              Acreditamos que a dedicação é a chave para o sucesso, e incentivamos nossos alunos a
              se dedicarem em suas jornadas pessoais e profissionais.
            </p>
          </div>

          <div className="text-center p-8">
            <GiHeartBeats className="text-6xl  mx-auto mb-4 custom-font custom-text" />

            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">Saúde</h3>
            <p className="text-center text-2xl">
              Promovemos a saúde física e mental dos nossos alunos, incentivando a prática do judo
              como um estilo de vida saudável.
            </p>
          </div>

          <div className="text-center p-8">
            <FaUserFriends className="text-6xl  mx-auto mb-4 custom-font custom-text" />

            <h3 className="uppercase custom-font text-3xl font-bold mb-2 custom-text">
              Comunidade
            </h3>
            <p className="text-center text-2xl">
              Promovemos a saúde física e mental dos nossos alunos, incentivando a prática do judo
              como um estilo de vida saudável.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
