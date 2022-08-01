import { combineReducers } from 'redux';


// Reducers
import productReducer from '../reducers/product';
// Combine Reducers
const reducers = combineReducers({
  productState: productReducer
});
export default reducers;