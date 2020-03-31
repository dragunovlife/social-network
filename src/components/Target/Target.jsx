import React from 'react';
import classes from "./Target.module.css";
import React1 from "../Target/Progresscard/Progresscard";

//https://github.com/kevinsqi/react-circular-progressbar/tree/3f64e7bdaf878cf6d96e5e9bba7cefde62d74116
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const percentage = 1.91;

const progressbar1 = <CircularProgressbar
	value={percentage}
    text={`${percentage}%`}
    styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgb(74,0,224, ${percentage / 10})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;

const T1 = (props) => {
	return (
		<div>
			<img src ='https://i.vimeocdn.com/portrait/28620516_640x640' />
			<div className={classes.progressbar1}>
			{ progressbar1 }
			</div>
			<h3>Всего 191</h3>
			<h3>Осталось 190</h3>

			<h3>ЧАСТЬ 1</h3>
			<h3>Язык программирования JavaScript</h3>
			<p className={classes.p}>1.1 Введение в JavaScript V</p>
		</div>	
		)
}

const Target = (props) => {
	return (
		<div className={classes.content}>
			<h1>Target</h1>
			<div className={classes.wrapper}>
			<div className={classes.t1}>
			<T1 />
			</div>	

			<div className={classes.t1}>
			<React1 />
			</div>	

			<div className={classes.t1}>

			</div>	

			</div>	
			<img src="https://smartprogress.do/uploadImages/001154083_l_crop.jpg" />
			<img src="https://www.nastol.com.ua/download.php?img=201306/1920x1200/nastol.com.ua-51620.jpg" />
			<img src="https://im0-tub-ru.yandex.net/i?id=8264400c83bb992e519787a0e4fccd28&n=13&exp=1" />
		</div>
	)
}

export default Target;




