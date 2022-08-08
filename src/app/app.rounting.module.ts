
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PublicRoutes } from './public/public.routing';



const routes: Routes = [
  {path:'**', component:NopagefoundComponent},
  {path:'', redirectTo:'/', pathMatch:'full'},
];

@NgModule({
	imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    PublicRoutes,
    
	],
	exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }