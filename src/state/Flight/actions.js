import Flights from '../../api/flights';

this.objFlights = new Flights();

const getFlights = () => {
  return dispatch => {
    this.objFlights
      .getFlights()
      .then(response => {
        dispatch({
          type: 'GET_FLIGHTS_SUCCESS',
          data: response.data,
        });
      })
      .catch();
  };
};

export { getFlights };
