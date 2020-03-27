import React from 'react';
import classes from "./Settings.module.css"

const Settings = (props) => {
	return (
		<div className={classes.content}>
			<p className={classes.p}>Settings</p>
			<h1>Tools</h1>

			<p>Sublime Text 3</p>
			<p>Взять тему Sweat из KDE</p>
			<a href="https://nicothin.pro/sublime-text/sublime-text-3-hotkeys.html">Шпаргалка ниндзя Sublime Text 3</a>


			<p>Emmet</p>
			<a href="https://webdesign-master.ru/blog/html-css/2.html">Справочник EMMET сокращений для ускорения верстки</a>



		</div>
	)
}

export default Settings;

