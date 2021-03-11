import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';
import MenuPage from './pages/MenuPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<>
			<Helmet>
				<title>PRIDE OF GOLF</title>
				<meta name="description" content="해외골프는 프라이드 오브 골프에서" />
			</Helmet>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/menu" component={MenuPage} />
				<Route path="/account" component={AccountPage} />
				<Route path="/calendar" component={CalendarPage} />
				<Route path="/product/:country">
					<ProductPage />
				</Route>
				<Route component={NotFoundPage} />
			</Switch>
		</>
	);
}

export default App;
