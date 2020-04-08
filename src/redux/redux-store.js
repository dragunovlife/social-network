import {combineReducers, createStore} from 'redux';
import profileReduser from './profile-reducer'
import dialogsReduser from './dialogs-reducer'
import sidebarReduser from './sidebar-reducer'

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser
});

let store = createStore(reducers);

window.store = store;

export default store;