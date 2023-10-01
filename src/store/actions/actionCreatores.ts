import { TPizzaCard } from "../../types"
import { ADD_TO_CART, REMOVE_FROM_CART, SET_SIZE, SWITCH_THEME } from "./types"

export const switchTheme = () => ({ type: SWITCH_THEME })

export const setPizzaSize = (payload: string) => ({ type: SET_SIZE, payload })

export const addToCart = (payload: TPizzaCard) => ({ type: ADD_TO_CART, payload })
export const removeFromCart = (payload: { item: TPizzaCard, removeAll?: boolean }) => ({ type: REMOVE_FROM_CART, payload })