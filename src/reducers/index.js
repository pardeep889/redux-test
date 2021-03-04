import { combineReducers} from 'redux';
import order from './orderReducer';
import inventory from "./inventoryReducer"

const rootReducer = combineReducers({
    order,
    inventory
});
export default rootReducer;