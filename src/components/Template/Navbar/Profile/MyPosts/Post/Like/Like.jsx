import React from 'react';
import classes from './Like.module.css';

const Like = (props) => {
    return (
        <div>
            <img className={classes.like} src="https://www.svgrepo.com/show/152283/e-commerce-like-heart.svg" />
            <span>like {props.counts}</span>
        </div>
    )
}

export default Like;