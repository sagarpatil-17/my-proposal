import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  password = new FormControl();

  constructor(private router: Router) { }

  public onUnlock() {
    if (this.password.value?.toLowerCase() === 'sakshi2405') {
      this.router.navigate(['/my-proposal'])
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Wrong password! 😜',
        text: 'Try again, cutie.',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

}
