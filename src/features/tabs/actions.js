import { TAB_SELECTED } from './constants'

export function selectTab(tabName) {
    return {
        type: TAB_SELECTED,
        payload: { tabName }
    }
}
