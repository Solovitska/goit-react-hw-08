import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/operations.js';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = formData => {
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default RegisterPage;