import React from 'react';
import classes from './Like.module.css';

const Like = (props) => {
    return (
        <div>
            <span>like {props.counts}</span>

        </div>
    )
}

export default Like;