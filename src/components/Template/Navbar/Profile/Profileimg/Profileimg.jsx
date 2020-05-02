import React from 'react';
import classes from './Profileimg.module.css';

const Profileimg = (props) => {

    return (
        <div>
            <img className={classes.profileimg} src="http://www.habitante.it/wp-content/uploads/2018/06/backpacker-web-version-1200x580.jpg" />
        </div>
    )
}

export default Profileimg;