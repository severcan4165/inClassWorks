// const initialState = {
//     counter : 0,
// }



// const reducer = ( state = initialState, action) => { // action ın içinde type ve payload vardır aslında {type, payload} 
//     // da yazabilirsin action yerine
//     switch (action.type) {
//         case "INCREMENT":
//             return {counter: state.counter + 1}

//         case "DECREMENT":        
//             return {counter : state.counter -1};

//         case "CLEAR":    
//             return initialState;
//        default:
//             return state;
//     }
// }

// export default reducer;

import {legacy_createStore as createStore, combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({counterReducer, todoReducer}) //keyi farklı olacaksa normal obje 
//formatında yazarsın, burda key value aynı isimde

export const store = createStore(rootReducer)