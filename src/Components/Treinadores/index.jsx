export const Treinadores = () => {
  return (
    <section className=" relative text-white p-24	">
      <h2>Conheça Nossos Professores</h2>
      <p className="text-2xl p-3">
        Nossa equipe de professores é formada por profissionais experientes e dedicados, que possuem
        ampla formação e conhecimento técnico em judô. Conheça um pouco mais sobre cada um deles:
      </p>
      <div className="professores">
        <div className="professor">
          <img
            src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
            alt="Foto do professor 1"
          />
          <h3>Nome do professor 1</h3>
          <p>Graduação em Judô</p>
        </div>
        <div className="professor">
          <img
            src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
            alt="Foto do professor 2"
          />
          <h3>Nome do professor 2</h3>
          <p className="text-2xl p-3">Graduação em Judô</p>
        </div>
        <div className="professor">
          <img
            src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2022/11/judo-destaque.png"
            alt="Foto do professor 3"
          />
          <h3>Nome do professor 3</h3>
          <p className="text-2xl p-3">Graduação em Judô</p>
        </div>
      </div>
    </section>
  );
};
