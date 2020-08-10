import { FETCH_SLOTS_STARTED, FETCH_SLOTS, UPDATE_SLOT } from '../actions/types';

const initialState = {
    slots: [],
    isLoading: false,
    isError: false,
    errorText: '',
};

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_SLOTS_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_SLOTS:
            return {
                ...state,
                isLoading: false,
                slots: action.payload,
            };
        case UPDATE_SLOT:
            return state;
        case SLOTS_ERROR:
            return {
                ...state,
                isError: true,
                errorText: action.payload
            }
        default:
            break;
    }
}