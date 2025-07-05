import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProposalService } from '../../services/proposal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pickup-line',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './pickup-line.component.html',
  styleUrl: './pickup-line.component.scss'
})
export class PickupLineComponent {
  public isLoading: boolean = false;
  public isLoading2: boolean = false;
  response = new FormControl();
  public content: any;

  constructor(private _proposalService: ProposalService, private router: Router) { }

  ngOnInit() {
    this.getPickupLines();
    if (!this.isLoading2) {
      this.content = ["I’ve run out of pickup lines... so here’s my heart instead. 🫀", "You're the plot twist my life was missing."];
    }
  }

  private getPickupLines() {
    this.isLoading2 = true;
    this._proposalService.getPickupLines().subscribe((res: any) => {
      this.content = res['content'];
      this.isLoading2 = false;
    }, (err) => {
      this.isLoading2 = false;
    })
  }

  public onResponse() { 
    const data = {
      pickup_line: [...this.content],
      response: this.response.value,
      created_by: localStorage.getItem('userName')
    };
  
    this.isLoading = true;
    this._proposalService.pickupLine_res(data).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['']);
      localStorage.clear();
    }, (err) => {
      console.error('Submission failed:', err);
      this.isLoading = false;
    });
  }
  

}
