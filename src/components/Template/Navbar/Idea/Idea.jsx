import React from 'react';
import classes from "./Idea.module.css"
import Card from '@material-ui/core/Card';

const Idea = (props) => {
	return (
		<div className={classes.content}>
			<p className={classes.p}>Idea</p>
			<h1>Idea</h1>
			<p>Взять тему Sweat из KDE</p>
			<p>Сделать хронологию событий истории и научных достижений до н.э и после</p>
			<Card />			
		</div>
	)
}

export default Idea;

