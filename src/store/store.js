import { combineReducers, createStore} from "redux";
import { cardReducer } from './cardReducer';



const rootReducer = {   
    cardReducer, 
};

export const store = createStore(combineReducers(rootReducer));

