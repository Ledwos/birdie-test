import { combineReducers } from 'redux';
import tests from './tests';

export type RootState = Readonly<{ tests: object }>;

export const rootReducer = combineReducers<RootState>({ tests });