import AxiosInstance from './instance';

class Flights {
  getFlights() {
    return AxiosInstance.get('/AircraftList.json');
  }
}

export default Flights;
