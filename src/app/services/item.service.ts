// src/app/item.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private orders = [
    { id: 1, name: 'Order 1', date: '2024-06-28' },
    { id: 2, name: 'Order 2', date: '2024-06-29' }
  ];

  private products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ];

  private customers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' }
  ];

  private reservations = [
    { id: 1, name: 'Reservation 1', time: '12:00 PM' },
    { id: 2, name: 'Reservation 2', time: '01:00 PM' }
  ];

  private wods = [
    { id: 1, name: 'Reservation 1', type:'challenge/wod/acessories', 
      isBenchMark: false, duration: '180',
      executionType:'EMOM/for-time/AMRAP/TABATA',
      content: [
        {
          movement:'squat', movementDuration:'',movementRepetition:5, 
          distance:100, calories:10, weight:'', 
          machine:'rower, barbell, dumbell, kettlebell, bikeErg, ball', 
          movementType:'buyIn-buyOut'
        }
      ]
     }
  ];


  getOrders() {
    return this.orders;
  }

  getProducts() {
    return this.products;
  }

  getCustomers() {
    return this.customers;
  }

  getReservations() {
    return this.reservations;
  }
}
