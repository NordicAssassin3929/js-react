import { observable, decorate,} from 'mobx';

class AppState {
    id = ''; 
    bookings = []; 
    flights = [];  
    flight = []; 
    userId = ''; 
    user = []; 
    fullName = ''; 
    email = ''; 
    imageUrl = ''; 
  }
  
  // making properties observables
  decorate(AppState, {
    imageUrl: observable,
    id: observable,
    bookings: observable,
    userId: observable,
    flight: observable,
    fullName: observable,
    user: observable,
    email: observable,
    flights: observable,
  });
  
  export const appState = new AppState();
