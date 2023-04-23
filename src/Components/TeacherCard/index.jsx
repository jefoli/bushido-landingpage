import { teacherData } from './teacherData';
export const TeacherCard = () => {
  return (
    <>
      {teacherData.map((data, index) => {
        return (
          <div
            className="professores custom-font ease-in-out duration-200	md:ease-in hover:scale-105"
            key={index}
          >
            <div className="text-center text-slate-800 bg-gradient-teste rounded-xl">
              <img
                className="mb-2.5"
                src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
                alt="Foto do professor 1"
                width={700}
                height={700}
              />
              <h3 className="text-2xl font-bold	m-0">{data.name}</h3>
              <p className="text-lg m-0 p-2.5	translate-y-full ease-in-out duration-300	opacity-0	text-black hover:translate-y-0	hover:opacity-100	hover:text-white">
                {data.rank}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
