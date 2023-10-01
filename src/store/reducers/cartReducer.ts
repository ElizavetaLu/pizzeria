import { TPizzaCard } from "../../types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
    data: []
}

const cartReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
    switch (type) {
        case ADD_TO_CART: {
            const isExist: any = state.data.find((item: TPizzaCard) => item._id === payload._id)

            if (isExist) {
                const newList = state.data.map((item: TPizzaCard) => {
                    if (item._id === isExist._id) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    return item
                })

                return {
                    ...state,
                    data: newList
                };

            } else {
                return {
                    ...state,
                    data: [...state.data, payload]
                };
            }
        }

        case REMOVE_FROM_CART: {

            const product: any = state.data.find((item: TPizzaCard) => item._id === payload.item._id)

            if (product.qty > 1 && !payload.removeAll) {

                const newList = state.data.map((item: TPizzaCard) => {
                    if (item._id === product._id) {
                        return { ...item, qty: item.qty - 1 }
                    }
                    return item
                })

                return {
                    ...state,
                    data: newList
                };

            } else {

                const newList = state.data.filter((item: TPizzaCard) => item._id !== payload.item._id)

                return {
                    ...state,
                    data: newList
                };
            }
        }

        default:
            return state;
    }
}

export default cartReducer