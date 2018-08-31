export function createReducer(initialState, handlerMap) {
    return function generatedReducer(state = initialState, action) {
        const { type, payload } = action 
        const handler = handlerMap[type]
        return handler ? handler(state, payload): state
    }
}

export function reduceReducers(...reducers) {
    return function composeReducers (previous, current) {
        return reducers.reduce((p, r) => r(p, current), previous)
    }
}
