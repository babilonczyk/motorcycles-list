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
            motorcycles: state.motorcycles.filter(motorcycle => motorcycle.id !== action.payload.id)
        };
        case constants.CREATE_MOTORCYCLE:
            console.log("CREATE_MOTORCYCLE");
            let id = 0;

            for (let motorcycle of state.motorcycles) {
                if(motorcycle.id > id) {
                    id = motorcycle.id
                }
            }

            return {
                ...state,
                motorcycles: [
                    ...state.motorcycles,
                    {
                        id: id + 1,
                        name: action.payload.name,
                    }
                ]
        };
        case constants.UPDATE_MOTORCYCLE:
            console.log("UPDATE_MOTORCYCLE");

            const new_payload = state.motorcycles.map((motorcycle) => {

                if (motorcycle.id === action.payload.id) {
                    motorcycle.name = action.payload.name;
                }

                return motorcycle;
            });

            return {
                ...state,
                motorcycles: new_payload
        };
    }
};

