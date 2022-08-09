import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';
import HomeTabPage from 'pages/HomeTabPage';

import Loader from '../components/Loader/Loader';

import { ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Home } from 'components/Routes/Home';
import { StatisticsPage } from 'pages/StaisticsPage';

import { authOperations } from 'redux/auth';
import authSelectors from '../redux/auth/auth-selectors'

import BankTablePage from 'pages/BankTablePage';


const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));

export const App = () => {
	const isRefreshing = useSelector(authSelectors.getIsFetching);

	// console.log("Refreshing", isRefreshing);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(authOperations.currentUser());
	}, [dispatch]);

	return (
		<Suspense
			fallback={<Loader />}
		>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Layout />}>

					{!isRefreshing &&
						<>
							<Route index element={
								<PublicRoute restricted>
									<LoginPage />
								</PublicRoute>
							} />
							<Route path="registration" element={
								<PublicRoute restricted>
									<RegisterPage />
								</PublicRoute>}
							/>
							<Route path="login" element={
								<PublicRoute restricted>
									<LoginPage />
								</PublicRoute>
							} />

							<Route
								path="/"
								element={
									// <ProtectedRoute>
									<DashboardPage />
									// </ProtectedRoute>
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
											<BankTablePage />
										</ProtectedRoute>
									}
								/>
							</Route>
							<Route path="*" element={<NotFoundPage />} />
						</>


					}
				</Route>
			</Routes>
		</Suspense>
  );
};


