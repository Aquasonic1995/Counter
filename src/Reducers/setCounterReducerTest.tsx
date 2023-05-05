import { setCounterReducer} from "./setCounterReducer";

test('check add maxValue and startValue', ()=>{
    const startState = 0
    const endState = setCounterReducer(startState,{
        type: "INPUT_MAX_VALUE",
        count: 5
    })
    expect(endState.count).toBe(5)
})