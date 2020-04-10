import { combineReducers } from 'redux';
import connection from './connection';
import hostFiles from './hostFiles';
import clientFiles from './clientFiles';

const combined = combineReducers({ connection, hostFiles, clientFiles });

declare global {
  type ReduxStore = ReturnType<typeof combined>;
}

export default combined;
