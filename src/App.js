import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Target from './components/Target/Target';
import News from './components/News/News';
import Event from './components/Event/Event';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import Idea from './components/Idea/Idea';
import Timer from './components/Timer/Timer';

function App(props) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Sidebar />

     <div className="app-wrapper-content">
     <Route path='/profile' render={ () => <Profile posts={props.posts} /> } />
     <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> } /> {/* Delete exact */}
     <Route path='/target' render={ () => <Target /> } />
     <Route path='/news' render={ () => <News /> } />
     <Route path='/event' render={ () => <Event /> } />
     <Route path='/music' render={ () => <Music /> } />
     <Route path='/timer' render={ () => <Timer /> } />
     <Route path='/settings' render={ () => <Settings /> } />

    {/*<Route path='/idea' component={Idea} />
     <Route path='/settings' component={Settings} />*/}

    </div>


    </div>
    </BrowserRouter>
  )
}

export default App;

