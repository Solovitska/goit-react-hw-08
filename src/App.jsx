import './App.css';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from './redux/auth/operations.js';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const Register = lazy(() => import('./pages/RegisterPage.jsx'));
const Contacts = lazy(() => import('./pages/ContactsPage.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;