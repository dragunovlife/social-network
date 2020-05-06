import React from 'react';
import classes from "./Progresscard.module.css"

//https://github.com/kevinsqi/react-circular-progressbar/tree/3f64e7bdaf878cf6d96e5e9bba7cefde62d74116
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

let percentage = 54;
let addPost = () => {
  percentage++;
  alert(percentage);
}

let progressbar = <CircularProgressbar 
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

const React1 = (props) => {
  return (
    <div className={classes.progressbar}> 
    <h1 onClick={addPost}>React</h1>
    <h6>Курс "React JS - путь самурая 1.0</h6>
    { progressbar } 
    <h3>Выполнено 54%</h3>
    <p>Отследить прогрес</p>
    <h3>Осталось 46%</h3>
    <p>Отследить остаток</p>
    
    <p className={classes.p}>01. ReactJS - Путь Самурая - Как смотреть данный курс?</p>
    <p className={classes.p}>02. Уроки React JS (Зачем NodeJS на фронте)</p> 
    <p className={classes.p}>03. Уроки React JS (Установка NodeJS)</p> 
    <p className={classes.p}>04. Уроки React JS (create-react-app)</p> 
    </div>
    )
}

export default React1;