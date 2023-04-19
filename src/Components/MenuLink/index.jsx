import Link from 'next/link';
import P from 'prop-types';

export const MenuLink = ({ href, children }) => {
  return (
    <Link
      className="active py-1.5 px-5 rounded-md mx-2.5 font-semibold text-white
    no-underline container"
      href={href}
    >
      {children}
    </Link>
  );
};

MenuLink.propTypes = {
  href: P.string.isRequired,
  children: P.node.isRequired,
};
