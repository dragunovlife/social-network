import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Sidebar />

     <div className="app-wrapper-content">
     <Route path='/profile' component={Profile} />
     <Route path='/dialogs' component={Dialogs} />/* Delete exact */
     <Route path='/news' component={News} />
     <Route path='/music' component={Music} />
     <Route path='/settings' component={Settings} />
     <Route path='/timer' component={Timer} />

   </div>


    </div>
    </BrowserRouter>
  )
}

export default App;
