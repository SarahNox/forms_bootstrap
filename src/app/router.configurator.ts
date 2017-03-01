import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { IhFormComponent } from './ih-form/ih-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'login', component: IhFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouterConfigurator {}
