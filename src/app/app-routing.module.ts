import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimedComponent } from './timed/timed.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// define routes so as to navigate between components
// path: '' is the default route to HomeComponent
// path: 'home' is the route to HomeComponent
// path: 'time-series/:symbol' is the route to TimedComponent
// path: 'wishlist' is the route to WishlistComponent
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'time-series/:symbol', component: TimedComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
