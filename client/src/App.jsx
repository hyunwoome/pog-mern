import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Menu from './pages/Menu';
import Account from './pages/Account';
import BottomTabs from './components/common/BottomTabs';

function App() {
	return (
		<>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/menu" exact component={Menu} />
			<Route path="/account" exact component={Account} />
			<Route path="/calendar" exact component={Calendar} />
			<BottomTabs />
		</>
	);
}

export default App;
