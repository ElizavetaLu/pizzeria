import { combineReducers } from "redux"
import selectedPizzaReducer from "./selectedPizzaReducer"
import switchThemeReducer from "./switchThemeReducer"
import cartReducer from "./cartReducer"


const rootReducer = combineReducers({
    theme: switchThemeReducer,
    selectedPizza: selectedPizzaReducer,
    cart: cartReducer,
})

export default rootReducer