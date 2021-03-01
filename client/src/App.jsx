import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Menu from './pages/Menu';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import BottomNav from './components/common/BottomNav';
import Footer from './components/sections/Footer';

function App() {
	return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/menu" component={Menu} />
				<Route path="/account" component={Account} />
				<Route path="/calendar" component={Calendar} />
				<Route component={NotFound} />
			</Switch>
			<BottomNav />
			<Footer />
		</>
	);
}

export default App;
