import { combineReducers } from "redux"
import switchThemeReducer from "./switchThemeReducer"

const rootReducer = combineReducers({
    theme: switchThemeReducer
})

export default rootReducer