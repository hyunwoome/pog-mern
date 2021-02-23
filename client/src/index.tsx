import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style/global';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
