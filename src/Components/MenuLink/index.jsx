import Link from 'next/link';
import P from 'prop-types';

export const MenuLink = ({ href, children, as }) => {
  return (
    <Link
      className="container py-1.5 rounded-md mx-2.5 font-semibold text-white hover:text-[#dfd389]
    no-underline tracking-widest custom-font hover:scale-110"
      href={href}
      as={as}
    >
      {children}
    </Link>
  );
};

MenuLink.propTypes = {
  href: P.string.isRequired,
  children: P.node.isRequired,
  as: P.any,
};
