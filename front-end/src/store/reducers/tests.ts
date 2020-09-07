const initialState: string = 'i am initial state';

interface ActionType {
    type: string;
    text: string;
}

export default function tests(state: string = initialState, action: ActionType) {
    switch (action.type) {
        case 'TEST_STRING':
            return state + action.text;
        default:
            return state;
    }
}