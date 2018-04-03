const initialState = {
  flights: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_FLIGHTS_SUCCESS': {
      return {
        ...state,
        flights: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
