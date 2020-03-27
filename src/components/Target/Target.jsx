import React from 'react';
import classes from "./Target.module.css"

const Target = (props) => {
	return (
		<div className={classes.content}>
			<h1>Target</h1>
			<img src="https://smartprogress.do/uploadImages/001154083_l_crop.jpg" />
			<img src="https://www.nastol.com.ua/download.php?img=201306/1920x1200/nastol.com.ua-51620.jpg" />
			<img src="https://im0-tub-ru.yandex.net/i?id=8264400c83bb992e519787a0e4fccd28&n=13&exp=1" />
		</div>
	)
}

export default Target;