import P from 'prop-types';

export const TeacherCard = ({ name, rank }) => {
  return (
    <div className="text-center">
      <img
        className="mb-2.5	max-w-xs rounded-xl ease-in-out duration-300	md:ease-in hover:scale-125"
        src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
        alt="Foto do professor 1"
        width={300}
        height={300}
      />
      <h3 className="text-2xl font-bold	m-0">{name}</h3>
      <p className="text-lg m-0 p-2.5	translate-y-full ease-in-out duration-300	opacity-0	text-black hover:translate-y-0	hover:opacity-100	hover:text-white">
        {rank}
      </p>
    </div>
  );
};

TeacherCard.propTypes = {
  name: P.string.isRequired,
  rank: P.string.isRequired,
};
