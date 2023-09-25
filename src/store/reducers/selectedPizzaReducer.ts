import { SET_SIZE } from "../actions/types";

const initialState = {
    size: 's'
}

const selectedPizzaReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
    switch (type) {
        case SET_SIZE:
            return { ...state, size: payload };

        default:
            return state;
    }
}

export default selectedPizzaReducer