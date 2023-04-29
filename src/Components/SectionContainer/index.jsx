import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return (
    <section className="min-w-full max-w-screen-xl min-h-screen container">{children}</section>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
