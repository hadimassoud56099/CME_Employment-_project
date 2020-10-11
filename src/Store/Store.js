import {createStore} from 'redux'
const reducers= (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                counter:state.counter+1
            }

            case 'DECREMENT':
            return{
                counter:state.counter-1
            }
            default :
            return state;
    }
}

const initialState={
    counter:2
}
export default createStore(reducers,initialState)
