import { SectionContainer } from '@/Components/SectionContainer';
import { ValueDisplay } from '@/Components/ValueDisplay';

export const ValuesPage = () => {
  return (
    <SectionContainer>
      <div className="text-white bg-black max-w-full max-h-min p-10">
        <h2 className="text-4xl font-bold m-5 custom-font custom-text uppercase">Nossos Valores</h2>
        <p className="text-2xl p-3">
          Na Bushido, acreditamos que mais do que apenas praticar um esporte, é fundamental
          desenvolver valores essenciais que possam ser aplicados na vida cotidiana. Por isso, temos
          como base os seguintes valores que são ensinados e incentivados em todas as nossas aulas
        </p>
        <ValueDisplay />
      </div>
    </SectionContainer>
  );
};
