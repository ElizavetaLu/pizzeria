import { SWITCH_THEME } from "../actions/types"

const initialState = {
    isDark: false
}

const switchThemeReducer = (state = initialState, { type }: { type: string }) => {

    switch (type) {
        case SWITCH_THEME:
            return { ...state, isDark: !state.isDark };

        default:
            return state;
    }
}

export default switchThemeReducer