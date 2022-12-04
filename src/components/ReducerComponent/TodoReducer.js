import { Actions } from "./action"
export let initialVlaues = {
    data:[]
}

export function TodoReducer(state,action){
    switch(action.type){
        case Actions.ADD: 
            var newData = [...state.data]
            newData.push({
                name:action.payload,
                completed:false
            })
            return {...state,data:newData}
        case Actions.CHANGE: 
            var newData = [...state.data]
            newData[action.payload.index].completed=action.payload.completed
            return {...state,data:newData}
        case Actions.CLEAR:
            return initialVlaues
    }
}