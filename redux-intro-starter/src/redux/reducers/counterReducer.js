import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

const initialState = {
    counter : 0,
}



const reducer = ( state = initialState, action) => { // action ın içinde type ve payload vardır aslında {type, payload} 
    // da yazabilirsin action yerine
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1}

        case DECREMENT:        
            return {counter : state.counter -1};

        case CLEAR:    
            return initialState;
       default:
            return state;
    }
}

export default reducer;