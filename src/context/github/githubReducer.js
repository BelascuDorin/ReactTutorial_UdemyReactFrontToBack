import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const Reducer = (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                loading:false
            };
        case CLEAR_USERS:
            return{
                ...state,
                users: [],
                loading:false
            };
        
        case SET_LOADING: 
            return{
                ...state, // copy what`s in the current state
                loading:true
            };

        case GET_REPOS:
            return{
                ...state,
                repos: action.payload,
                loading: false
            }

        default: 
            return state;
    }
};

export default Reducer;