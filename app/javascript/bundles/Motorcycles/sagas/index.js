import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants'
import * as Requests from '../services/requests'

function* deleteMotorcycleSaga(action) {
    try {
        yield call(Requests.deleteRequest, action);

    } catch(error) {
        console.log(error)
    }
}

function* addMotorcycleSaga(action) {
    try {
        yield call(Requests.createRequest, action);

    } catch(error) {
        console.log(error)
    }
}

function* updateMotorcycleSaga(action) {
    try {
        yield call(Requests.updateRequest, action);

    } catch(error) {
        console.log(error)
    }
}

function* watchDelete() {
    yield takeEvery(constants.DELETE_MOTORCYCLE, deleteMotorcycleSaga)
}

function* watchCreate() {
    yield takeEvery(constants.CREATE_MOTORCYCLE, addMotorcycleSaga)
}

function* watchUpdate() {
    yield takeEvery(constants.UPDATE_MOTORCYCLE, updateMotorcycleSaga)
}


export default function* root() {
    yield all([
        watchCreate(),
        watchDelete(),
        watchUpdate()
    ]);
}