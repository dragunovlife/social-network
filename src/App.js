import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Template/Header/Header';
import Navbar from './components/Template/Navbar/Navbar';
import Sidebar from './components//Template/Sidebar/Sidebar';

import Profile from './components/Template/Navbar/Profile/Profile';
import Dialogs from './components/Template/Navbar/Dialogs/Dialogs';
import DialogsContainer from './components/Template/Navbar/Dialogs/DialogsContainer';
import UsersContainer from "./components/Template/Navbar/Users/UsersContainer";
import Target from './components/Template/Navbar/Target/Target';
import News from './components/Template/Navbar/News/News';
import Event from './components/Template/Navbar/Event/Event';

import Music from './components/Template/Navbar/Music/Music';
import Test from './components/Template/Navbar/Test/Test';
import Notebook from './components/Template/Navbar/Notebook/Notebook';
import Tools from './components/Template/Navbar/Tools/Tools';

import Settings from './components/Template/Navbar/Settings/Settings';
import Questions from './components/Template/Navbar/Questions/Questions';
import Idea from './components/Template/Navbar/Idea/Idea';

import AppsHeader from './components/Template/Navbar/Apps/TemplateApps/AppsHeader/AppsHeader';
import AppsPage from './components/Template/Navbar/Apps/TemplateApps/AppsPage/AppsPage';
import Timer from './components/Template/Navbar/Apps/Timer/Timer';
import TestX from './components/Template/Navbar/Apps/TestX/TestX';
import Apps12 from './components/Template/Navbar/Apps/TodoPro/Apps/TodoPro';

function App() {

  return (
    <div className='app-wrapper'>

      <Header />
      <Navbar />
      <Sidebar />

      <div className="app-wrapper-content">

        <Route path='/profile'
          render={() => <Profile />} />

        <Route path='/users'
          render={ () => <UsersContainer /> }/>


        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/target' render={() => <Target />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/event' render={() => <Event />} />
        <Route path='/todolist' render={() => <Apps12 />} />
        <Route path='/testx' render={() => <TestX />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/test' render={() => <Test />} />
        <Route path='/notebook' render={() => <Notebook />} />
        <Route path='/tools' render={() => <Tools />} />
        <Route path='/timer' render={() => <Timer />} />
        <Route path='/questions' render={() => <Questions />} />
        <Route path='/idea' render={() => <Idea />} />
        <Route path='/appspage' render={() => <AppsPage />} />  
        <Route path='/settings' render={() => <Settings />} />

        {/*<Route path='/idea' component={Idea} />
       <Route path='/settings' component={Settings} />*/}

      </div>
    </div>

  )
}

export default App;