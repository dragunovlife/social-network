import React from 'react';
import classes from "./Music.module.css";
 
const Mmm = () => {
  alert('Ретроспектива');
  alert('Препарирование');
  alert('Процесс трансформации становится тем действием, которое мы осознаём только в ретроспективе.');
}

const Music = (props) => {
	return (
		<div className={classes.content}>
			<h1 onClick={Mmm}>Music</h1>  
		</div>
	)
}

export default Music;

