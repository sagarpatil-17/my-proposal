import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProposalService } from './services/proposal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private _proposalService: ProposalService) { }

  ngOnInit() {
    this._proposalService.testApi().subscribe(() => { });
  }
}
