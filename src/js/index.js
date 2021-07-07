import React from "react";
import ReactDOM from "react-dom";
import App from './App';

import { Provider } from "react-redux";
import createStore from "./createStore";

const store = createStore();

const app = document.getElementById("root");


ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>
,app);

