import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../store';
// import { Test } from './types';
import { RootState } from './rootReducer';

interface Test {
    text: string,
}

const initialState: Test = {
    text: 'initial text',
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

export const { updateText } = testSlice.actions;

export const selectText = (state: RootState) => state.test.text;

export default testSlice.reducer;