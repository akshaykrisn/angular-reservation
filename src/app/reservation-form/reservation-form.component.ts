import { Component } from '@angular/core';
// Required for Form validation (Reactive)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

  reservationForm: FormGroup = new FormGroup({})

  onSubmit() {
    
  }
}
