import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
