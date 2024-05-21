import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from '../Layout/Layout.module.css';

const AuthNav = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.link, {
      [css.active]: isActive,
    });
  return (
    <>
      <NavLink className={getNavLinkClassNames} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login">
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;