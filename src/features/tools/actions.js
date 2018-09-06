import { DATA_LOADED } from 'features/tools/constants'
import { fetchData } from  'data/mockAPI'

export function loadUnitData() {
  return function(dispatch, getState) {
    fetchData()
      .then(data => {
        dispatch({ type: DATA_LOADED, payload: data })
    })
  }
}
