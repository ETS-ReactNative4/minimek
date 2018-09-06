import { combineReducers } from 'redux'

import tabs from "features/tabs/reducer";
import unitInfo from 'features/unit-info/unitInfoReducer'

const rootReducer = combineReducers({
    tabs,
    unitInfo
})

export default rootReducer