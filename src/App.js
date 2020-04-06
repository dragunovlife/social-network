import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Target from './components/Target/Target';
import News from './components/News/News';
import Event from './components/Event/Event';
import Music from './components/Music/Music';
import Test from './components/Test/Test';
import Notebook from './components/Notebook/Notebook';
import Tools from './components/Tools/Tools';
import Settings from './components/Settings/Settings';
import Questions from './components/Questions/Questions';
import Idea from './components/Idea/Idea';
import Timer from './components/Timer/Timer';
import T1 from './components/Target/Target';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
    <div className='app-wrapper'>

        <Header />
        <Navbar />
        <Sidebar /> 

       <div className="app-wrapper-content">
       <Route path='/profile' 
              render={ () => <Profile store={props.store} /> } />
       

       <Route path='/dialogs' 
              render={ () => <DialogsContainer store={props.store} /> } /> 
       <Route path='/target' render={ () => <Target /> } />
       <Route path='/target' render={ () => <T1 /> } />
       <Route path='/news' render={ () => <News /> } />
       <Route path='/event' render={ () => <Event /> } />
       <Route path='/music' render={ () => <Music /> } />
       <Route path='/test' render={ () => <Test /> } />
       <Route path='/notebook' render={ () => <Notebook /> } />
       <Route path='/tools' render={ () => <Tools /> } />
       <Route path='/timer' render={ () => <Timer /> } />
       <Route path='/questions' render={ () => <Questions /> } />
       <Route path='/idea' render={ () => <Idea /> } />
       <Route path='/settings' render={ () => <Settings /> } />

    {/*<Route path='/idea' component={Idea} />
       <Route path='/settings' component={Settings} />*/}

      </div>
    </div>
   
  )
}

export default App;
   
