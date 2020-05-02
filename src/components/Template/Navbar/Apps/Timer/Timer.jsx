import React from 'react';
import classes from "./Timer.scss";
import AppsHeader from '../TemplateApps/AppsHeader/AppsHeader';

const Timer = (props) => {
	return (
		<div className={classes.timer}>
    <div className='timer'>
      <AppsHeader />
			<Pomodoro/>
    </div>
		</div>

	)
}

//https://codepen.io/frozenfroggie/pen/egxrpE
const Break = (props) => {
  const breakTime = props.getBreakTime;
  return (
    <div id="break">
      <p>Break length:</p>
      <div className="setTime"><button onClick={()=>props.getDecrement("break")}>-</button><div>{breakTime}</div><button onClick={()=>props.getIncrement("break")}>+</button></div>
    </div>
  );
};

const Session = (props) => {
  const sessionTime = props.getSessionTime;
  return (
    <div id="session">
      <p>Session length:</p>
      <div className="setTime"><button onClick={()=>props.getDecrement("session")}>-</button><div>{sessionTime}</div><button onClick={()=>props.getIncrement("session")}>+</button></div>
    </div>
  );
};

var interval;

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 1500,
      sessionDisplay: 1500,
      break: 300,
      breakDisplay: 300,
      isSession: true,
      counting: false
    }
  }
  increment = (props) => {
    if (props == "session" && !this.state.counting) {
      this.setState({
        session: this.state.session + 60,
        sessionDisplay: this.state.session + 60
      });
    } else if (props == "break" && !this.state.counting) {
      this.setState({
        break: this.state.break + 60,
        breakDisplay: this.state.break + 60
      });
    }
  };
  decrement = (prop) => {
    if (prop == "session" && !this.state.counting) {
      this.setState({
        session: this.state.session - 60,
        sessionDisplay: this.state.session - 60
      });
    } else if (prop == "break"  && !this.state.counting) {
      this.setState({
        break: this.state.break - 60,
        breakDisplay: this.state.break - 60
      });
    }
  };
  count = () => {
    if (!this.state.counting) {
      interval = setInterval(() => {
        if(this.state.isSession){
          this.setState({
            breakDisplay: this.state.break,
            sessionDisplay: this.state.sessionDisplay - 1,
            counting: true,
            isSession: this.state.sessionDisplay > 0 ? true : false
          });
          if(this.state.sessionDisplay == 0) {
            var audio = new Audio('http://myinstants.com/media/sounds/inceptionbutton.mp3');
      audio.play();
          }
        } else {
          this.setState({
            sessionDisplay: this.state.session,
            breakDisplay: this.state.breakDisplay - 1,
            counting: true,
            isSession: this.state.breakDisplay > 0 ? false : true
          });
          if(this.state.breakDisplay == 0) {
            var audio = new Audio('http://myinstants.com/media/sounds/inceptionbutton.mp3');
      audio.play();
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
      this.setState({
        counting: false
      });
    }
  };
  render() {
    const sessionDisplay = secToMin(this.state.sessionDisplay);
    const breakDisplay = secToMin(this.state.breakDisplay);
    const sessionTime = secToMin(this.state.session);
    const breakTime = secToMin(this.state.break);
    const isSession = this.state.isSession;
    return (
      <div> 
        <div id="break_session">
          <Break getBreakTime={breakTime} getIncrement={(prop)=>this.increment(prop)} getDecrement={(prop)=>this.decrement(prop)}/>
          <Session getSessionTime={sessionTime} getIncrement={(prop)=>this.increment(prop)} getDecrement={(prop)=>this.decrement(prop)}/>
        </div>
        <div id="timerContainer">
          <div id="colorCircle"></div>
          <button id="timer" onClick={this.count}> {isSession ? "Session" : "Break!"} <br/> <span>{isSession ? sessionDisplay : breakDisplay}</span> </button></div>
      </div>
    );
  }
};


function secToMin(sec){
  const min = Math.floor(sec / 60);
  const seconds = sec - min * 60;
  if(sec >= 60){
    if(seconds >= 10) {
      return min + ":" + seconds;
    }
    if(seconds < 10) {
      return min + ":0" + seconds; 
    }
  } else if(sec < 60 && sec >= 10){
    return "0:" + sec;
  } else if(sec < 10){
    return "0:0" + sec;
  }
};

export default Timer;