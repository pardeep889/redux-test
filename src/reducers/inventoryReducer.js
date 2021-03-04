export default function(state={}, action){
    switch(action.type){
        case 'GET_INVENTORY':
            return {...state, data: action.payload}
        default:
            return state;
    }
}