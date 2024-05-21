import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserData } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from '../Layout/Layout.module.css';
import { apiLogoutUser } from '../../redux/auth/operations';

const Navigation = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.link, {
      [css.active]: isActive,
    });

  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/contacts">
        Contacts
      </NavLink>
      <span>Hello, {userData.name}</span>
      <button className={css.link} type="button" onClick={onLogOut}>
        Logout
      </button>
    </>
  );
};

export default Navigation;
