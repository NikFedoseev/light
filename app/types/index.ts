import { Action } from 'redux';

export interface ReduxAction extends Action {
  value: any,
}