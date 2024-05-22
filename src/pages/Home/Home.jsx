import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      <p className={css.text}>
      Hello! This app keeps your important contacts organized and always at your fingertips. 
      Ditch the bulky notebook—just use your phone to find any number instantly. Enjoy!
      </p>
      {!isLoggedIn && (
        <p className={css.textLast}>
          If you want to see a your phone numbers, please to{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </div>
  );
};

export default Home;
