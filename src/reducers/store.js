import { createStore } from 'redux';
import combineReducers from './index';

const state = {
  books: [
    {
      id: Math.random(),
      title: 'Biology Conceptions',
      category: 'Learning',
    },

    {
      id: Math.random(),
      title: 'Microverse Instructions',
      category: 'Learning',
    },
    {
      id: Math.random(),
      title: 'Microverse Instructions',
      category: 'Learning',
    },
  ],
};

const store = createStore(combineReducers, state);
export default store;
