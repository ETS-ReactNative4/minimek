import { TAB_SELECTED } from 'features/tabs/constants'

export function selectTab(tabName) {
    return {
        type: TAB_SELECTED,
        payload: { tabName }
    }
}
