import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
	return (
		<>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
		</>
	);
}

export default App;
