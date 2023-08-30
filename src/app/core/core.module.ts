import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { GamesComponent } from './components/games/games.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SponsorsComponent,
    GamesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
