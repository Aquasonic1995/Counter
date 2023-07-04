export const changeCounterReducer = (state: any, action: any) => {
    switch (action.type){
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: action.newCount
            }
        case 'RESET_COUNT':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}
const increaseCountAC = (newCount: number) => {
    return{
        type: 'INCREASE_COUNT',
        count:newCount
    }
}
const resetCountAC = (newCount:number) => {
    return{
        type: 'INCREASE_COUNT',
        count: newCount
    }
}