import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

interface CrIdState {
    idArray: Array<string>,
    fetchError: boolean,
    recipient: string,
    recipientData: Array<string>
};

const initialState: CrIdState = {
    idArray: [],
    fetchError: false,
    recipient: "N/A",
    recipientData: [],
};

const crSlice = createSlice({
    name: 'careRecipient',
    initialState,
    reducers: {
        setidArray: (state, action: PayloadAction<Array<string>>) => {
            state.idArray.push(...action.payload);
        },
        updatefetchError: (state,  action: PayloadAction<boolean>) => {
            state.fetchError = action.payload;
        },
        setRecipient: (state, action: PayloadAction<string>) => {
            state.recipient = action.payload;
        },
        setRecipientData: (state, action: PayloadAction<Array<string>>) => {
            state.recipientData = action.payload;
        }
    }
});

export const { setidArray, updatefetchError, setRecipient, setRecipientData } = crSlice.actions;

export const getidArray = () => async (dispatch: (arg0: { payload: Array<string> | boolean; type: string; }) => any) => {
    try {
        fetch('/cr_id', {
            mode: 'cors',
            method: 'get',
        })
        .then(response => {
          if (response.status === 200) {
            response.json()
            .then(data => dispatch(setidArray(data)))
          } else if (response.status === 404) {
              dispatch(updatefetchError(true))
          }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchData = (id: string) => (dispatch: (arg0: { payload: Array<string>; type: string; }) => any) => {
    try {
        fetch(`/cr/${id}`, {
            mode: 'cors',
            method: 'get'
        })
        .then(response => {
            if (response.status === 200) {
                response.json()
                .then(data => dispatch(setRecipientData(data)))
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const selectId = (state: RootState) => state.careRecipient.idArray;

export const selectRecipientData = (state: RootState) => state.careRecipient.recipientData;

export default crSlice.reducer;
