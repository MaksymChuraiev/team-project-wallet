import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import ProtectedRoute from './Routes/ProtectedRoute';
import HomeTabPage from 'pages/HomeTabPage';

// import { Home } from 'components/Routes/Home';
import { StatisticsPage } from 'pages/StaisticsPage';
import { Currency } from './Currency/Currency';

// import { ToastContainer } from 'react-toastify';

const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
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
