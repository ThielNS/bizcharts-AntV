import { put, all, take} from 'redux-saga/effects';

export function* addTodo(items) {
  yield put({ type: 'ADD_TODO', items })
}

export function* watchAddTodo() {
  yield take('*', addTodo);
}

export default function* rootSaga(){
  yield all([
    watchAddTodo()
  ])
}
