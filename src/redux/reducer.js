import { ADD_NEWS } from './actions';
import initialState from './initialState'




const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEWS:
            return state.concat([action.payload]);

        default:
            return state;
    }
}
export default Reducer;