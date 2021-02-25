import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Home from './pages/Home';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Route path="/" exact component={Home} />
			</ThemeProvider>
		</>
	);
}

export default App;
