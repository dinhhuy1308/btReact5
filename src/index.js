import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// setup redux
// import store from './redux/confixStore';
import { Provider } from 'react-redux'
// import {createStore} from 'redux';
import { store } from './redux/reducers/confixStore';
// import confixStore from './redux/reducers/confixStore'

// const store = createStore(confixStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);

reportWebVitals();
