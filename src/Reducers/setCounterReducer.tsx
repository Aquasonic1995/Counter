
type InputMaxValueAT = {
    type: "INPUT_MAX_VALUE"
    count: number
}
type InputStartValueAT = {
    type: "INPUT_START_VALUE"
    count: number
}
type SetInputValueAT = {
    type: "SET_INPUT_VALUE"
    count: number
}
type setCounterReducerAT = InputMaxValueAT | InputStartValueAT | SetInputValueAT
export const setCounterReducer = (state: any, action: setCounterReducerAT) => {
    switch (action.type) {
        case "INPUT_MAX_VALUE" :
            return {...state, count: action.count}
        case "INPUT_START_VALUE" :
            return {...state, count: action.count}
        default:
            return state
    }
}
export const inputMaxValueAC = (newCount: number):InputMaxValueAT => {
    return {
        type: "INPUT_MAX_VALUE",
        count: newCount
    }
}
export const inputStartValueAC = (newCount: number):InputStartValueAT  => {
    return {
        type: "INPUT_START_VALUE",
        count: newCount
    }
}