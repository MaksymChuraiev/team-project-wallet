import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
};
