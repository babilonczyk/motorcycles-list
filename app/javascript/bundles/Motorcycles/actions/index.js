import * as constants from '../constants'

export function deleteMotorcycle( id ) {
    return {
        type: constants.DELETE_MOTORCYCLE,
        info: 'deleteMotorcycle',
        payload: {
            id
        }
    }
}

export function createMotorcycle( event ) {
    const data = new FormData(event.target);

    return {
        type: constants.CREATE_MOTORCYCLE,
        info: 'createMotorcycle',
        payload: {
            data
        }
    }
}

export function updateMotorcycle( event, id ) {

    const data = new FormData(event.target);

    return {
        type: constants.UPDATE_MOTORCYCLE,
        info: 'updateMotorcycle',
        payload: {
            id,
            data
        }
    }
}