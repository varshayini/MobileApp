import { createStore } from 'redux';

const initialState = {
  clickCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        clickCount: state.clickCount + 1,
      };
    default:
      return state;
  }
};

export const incrementCount = () => ({
  type: 'INCREMENT_COUNT',
});

export const store = createStore(reducer);