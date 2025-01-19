import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
    if (this.password.value?.toLowerCase() === 'xyz') {
      this.router.navigate(['/my-proposal'])
    } else {

    }
  }

}
