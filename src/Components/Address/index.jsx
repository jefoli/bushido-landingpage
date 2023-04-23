import { FaMapMarkerAlt } from 'react-icons/fa';

export const Address = () => {
  return (
    <div className="w-full bg-white h-max">
      <div className="address">
        <h1 className="text-4xl font-bold m-5 custom-font custom-font custom-text uppercase ">
          Venha nos visitar
        </h1>
        <p className="text-2xl p-3">
          Nossa academia está pronta para receber alunos de todas as idades e níveis de habilidade.
          Não importa se você é um iniciante ou um judoca experiente, temos o programa de
          treinamento certo para você.
        </p>
        <p className="text-2xl p-3">
          Use o mapa abaixo para nos encontrar e agende uma aula experimental hoje mesmo!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <FaMapMarkerAlt />
        <h2 className="text-2xl p-3">
          Rua Doutor Prudente de Morais | n 1330 | Centro | Tatuí-SP | CEP: 18275-110
        </h2>
      </div>

      <div className="mt-5	w-full">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14651.782868905397!2d-47.8577079!3d-23.3539811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d92381277649%3A0x467d423ae062683c!2sJudo%20Bushido!5e0!3m2!1spt-BR!2sbr!4v1681875555194!5m2!1spt-BR!2sbr"
          width="900"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};
