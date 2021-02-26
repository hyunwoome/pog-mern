import { Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Route path="/" exact component={Home} />
		</>
	);
}

export default App;
