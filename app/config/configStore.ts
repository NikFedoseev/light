import { createStore } from 'redux';
import initialStore from './initialStore';
import reducer from '../reducers';


const store = createStore(reducer, initialStore)

export default store