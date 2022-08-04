import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import ProtectedRoute from './Routes/ProtectedRoute';
import HomeTabPage from 'pages/HomeTabPage';

import Loader from '../components/Loader/Loader';

import { ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { Home } from 'components/Routes/Home';
import { StatisticsPage } from 'pages/StaisticsPage';

import { authOperations } from 'redux/auth';

import { Currency } from './Currency/Currency';

const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          >
            <Route
              path="home-tab"
              element={
                <ProtectedRoute>
                  <HomeTabPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="statistics"
              element={
                <ProtectedRoute>
                  <StatisticsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="banktable"
              element={
                <ProtectedRoute>
                  <Currency />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>

    // <Suspense fallback={<p>Loading...</p>}>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="registration" element={<RegisterPage />} />
    //       <Route path="login" element={<LoginPage />} />

    //       <Route */}
    //         path="dashboard"
    //         element={
    //           <ProtectedRoute>
    //             <DashboardPage />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route
    //         path="home-tab"
    //         element={
    //           <ProtectedRoute>
    //             <HomeTabPage />
    //           </ProtectedRoute>
    //         }
    //       >
    //         <Route index element={<Home />} />
    //         <Route path="home" index element={<Home />} />
    //         <Route path="statistics" element={<Statistics />} />
    //         <Route path="banktable" element={<Statistics />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </Suspense>
  );
};
