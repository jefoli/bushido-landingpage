import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <section className="min-w-full max-w-screen-xl h-auto container">{children}</section>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
