import * as serviceWorker from './serviceWorker';//Интеграция Service Worker
import store from "./redux/redux-store";
import React from 'react';//Мы подключаем библиотеку React и инициализируем переменную React
import ReactDOM from 'react-dom';//Подключаем модуль ReactDOM. ReactDOM — это пакет, который предоставляет специальные методы DOM, которые можно использовать на верхнем уровне веб-приложения, чтобы обеспечить эффективный способ управления элементами DOM веб-страницы.
import './index.css';//Подключаем файл index.css. //Применяется к index.js.
import App from './App';//Подключаем компоненту App в файл index.js.
import {BrowserRouter} from "react-router-dom";//Подключаем библиотеку react-router.

import {Provider} from "react-redux";

ReactDOM.render(
	<BrowserRouter>
	<Provider store={store}>
	<App />
	</Provider>
	</BrowserRouter>, document.getElementById('root'));

// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();