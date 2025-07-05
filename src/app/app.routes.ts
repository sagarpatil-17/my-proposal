import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { PickupLineComponent } from './components/pickup-line/pickup-line.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'my-proposal', component: ContentComponent },
    { path: 'my-connect', component: PickupLineComponent }
];
