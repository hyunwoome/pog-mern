import { Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
	return (
		<>
			<Route path="/" component={Home} />
		</>
	);
}
