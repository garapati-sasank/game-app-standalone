import { Routes } from '@angular/router';
import { BadmintonComponent } from './badminton/badminton.component';
import { TennisComponent } from './tennis/tennis.component';
import { HomeComponent } from './home/home.component';
import { BallComponent } from './soccer/ball/ball.component';
import { SockComponent } from './soccer/sock/sock.component';
import { ShoeComponent } from './soccer/shoe/shoe.component';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'badminton', component: BadmintonComponent },
  { path: 'tennis', component: TennisComponent },
  {
    path: 'soccer', loadComponent: () => import('./soccer/soccer.component').then((x) => x.SoccerComponent),
    children: [
      { path: 'ball', component: BallComponent },
      { path: 'sock', component: SockComponent },
      { path: 'shoe', component: ShoeComponent }
    ]
  },
  { path: 'rugby', loadComponent: () => import('./rugby/rugby.component').then((y) => y.RugbyComponent) },
  { path: 'counter', component: CounterComponent },
];