import { teacherData } from './teacherData';
export const TeacherCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {teacherData.map((data, index) => {
        return (
          <div
            className="custom-font ease-in-out duration-200	md:ease-in hover:scale-105 "
            key={index}
          >
            <div className="text-center text-zinc-800 bg-gradient-teste rounded-xl">
              <img
                className="mb-2.5 rounded-t-xl w-full h-auto"
                src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
                alt="Foto do professor 1"
              />
              <h3 className="text-2xl m-0 container">{data.name}</h3>
              <p className="text-lg m-0 p-2.5	translate-y-full ease-in-out duration-300	opacity-0	text-black hover:translate-y-0	hover:opacity-100	hover:text-white container">
                {data.rank}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
