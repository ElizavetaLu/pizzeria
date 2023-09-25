import { TPizzaCard } from "../../types";

const initialState = {
    data: []
}

const cartReducer = (state = initialState, { type, payload }: { type: string, payload: TPizzaCard }) => {
    switch (type) {
        case 'value':

            return {
                ...state,
                data: []
            };

        default:
            return state;
    }
}

export default cartReducer