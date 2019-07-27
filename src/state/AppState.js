import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
    id = '';
    bookings = [];
    token = '';
    isLoaded = false;
    flights = [];
    flight = [];
    userId = '';
    user = [];
    fullName = '';
    email = '';
    imageUrl = '';
    flightFilter = localStorage.getItem('flightFilter') || '';
    // computed value - updated automatically when relevant data is modified
    get filteredFlights() {
      return this.flights.filter((flight) =>
        flight.name.toLowerCase().includes(this.flightFilter.toLowerCase()),
      );
    }
  }
  
  // making properties observables
  decorate(AppState, {
    imageUrl: observable,
    id: observable,
    bookings: observable,
    userId: observable,
    token: observable,
    isLoaded: observable,
    flight: observable,
    fullName: observable,
    user: observable,
    email: observable,
    flights: observable,
    flightFilter: observable,
    filteredFlights: computed,
  });
  
  export const appState = new AppState();
  
  autorun(() => {
    localStorage.setItem('flightFilter', appState.flightFilter);
  });