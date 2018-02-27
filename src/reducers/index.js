import { combineReducers } from 'redux';

export const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO');
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user
});

export default rootReducer;