import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book !== action.book);
    default:
      return state;
  }
};

export default bookReducer;
