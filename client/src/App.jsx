import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';

function App() {
	return (
		<>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/calendar" exact component={Calendar} />
		</>
	);
}

export default App;
