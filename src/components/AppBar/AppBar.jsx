import { useSelector } from 'react-redux';
import { selectUserIsSignedIn } from '../../redux/auth/selectors.js';
import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';

const AppBar = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <>
      {isSignedIn ? (
        <>
          <Navigation />
        </>
      ) : (
        <>
          <AuthNav />
        </>
      )}
    </>
  );
};

export default AppBar;