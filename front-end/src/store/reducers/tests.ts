const initialState: string = 'i am initial state';

export default function tests(state: string = initialState, action: void) {
    switch (action.type) {
        case 'TEST_STRING':
            return state + action.text
        default:
            return state
    }
};