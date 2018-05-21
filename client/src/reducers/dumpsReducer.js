const defaultState = [];

// summaryReducer
const summaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE': // update
      return (
      	[...state,
      	action.payload]
      );
    case 'CLEAR':
      return ([]);
    default:
      return state;
  }
};

export default summaryReducer;
