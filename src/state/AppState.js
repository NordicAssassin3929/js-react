import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
    items = [];
    id = '';
    flights = [];
    fullName = '';
    email = '';
    token = '';
    isLoaded = false;
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
    items: observable,
    id: observable,
    fullName: observable,
    email: observable,
    flights: observable,
    flightFilter: observable,
    token: observable,
    isLoaded: observable,
    filteredFlights: computed,
  });
  
  export const appState = new AppState();
  
  autorun(() => {
    localStorage.setItem('flightFilter', appState.flightFilter);
  });