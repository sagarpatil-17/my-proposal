import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProposalService } from '../../services/proposal.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  public switchSection: string = 'default';
  public isLoading: boolean = false;
  reason = new FormControl();

  constructor(private _proposalService: ProposalService, private router: Router) { }

  public onResponse(res: string) {
    const hersResponse = {
      hers_name: 'Sakshi',
      response: 'yes'
    }

    if (res === 'yes') {
      this.isLoading = true;
      this._proposalService.getResponse(hersResponse).subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['']);
      });
      this.switchSection = 'yes';
    } else {
      this.switchSection = 'no';
    }
  }

  public onSendResponse() {
    const hersResponse = {
      hers_name: 'Sakshi',
      response: 'no',
      reason: this.reason.value
    }

    this.isLoading = true;
    this._proposalService.getResponse(hersResponse).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['']);
    });
  }
}
