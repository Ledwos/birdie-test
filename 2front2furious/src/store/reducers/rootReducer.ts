import { combineReducers } from '@reduxjs/toolkit';
import test from './testSlice';
import careRecipient from './crSlice';

const rootReducer = combineReducers({
    test: test,
    careRecipient: careRecipient
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;