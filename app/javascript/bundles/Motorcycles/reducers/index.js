import * as actions from '../actions/index';
import * as constants from '../constants'

const initialState = {
    motorcycles: []
};

export const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case constants.DELETE_MOTORCYCLE:

            console.log("DELETE_MOTORCYCLE");

            return {
            ...state,
        };
        case constants.CREATE_MOTORCYCLE:
            console.log("CREATE_MOTORCYCLE");

            return {
            ...state,
        };
        case constants.UPDATE_MOTORCYCLE:
            console.log("UPDATE_MOTORCYCLE");

            return {
            ...state,
        };

        default: return state;
    }
};

