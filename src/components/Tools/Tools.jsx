import React from 'react';
import classes from "./Tools.module.css"

const Tools = (props) => {
	return (
		<div className={classes.content}>
			<h1>Tools</h1>

			<h2>Sublime Text 3</h2>
			<a href="https://nicothin.pro/sublime-text/sublime-text-3-hotkeys.html" target='blank'>Шпаргалка ниндзя Sublime Text 3</a>
			
			<h2>Giphy</h2>
			<a href='https://giphy.com' target='blank'>https://giphy.com</a>

			<h2>Emmet</h2>
			<a href="https://webdesign-master.ru/blog/html-css/2.html" target='blank'>Справочник EMMET сокращений для ускорения верстки</a>

			<h2>Flexbox</h2>
			<a href='http://flexbox.help/' target='blank'>http://flexbox.help/</a>

			<h2>Все способы вертикального выравнивания в CSS</h2>
			<a href='https://habr.com/ru/company/netcracker/blog/277433/' target='blank'>https://habr.com/ru/company/netcracker/blog/277433/</a>

		</div>
	)
}

export default Tools;

