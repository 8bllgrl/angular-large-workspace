import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { AppComponent } from './app.component';
import { ComponentHolderComponent } from './components/component-holder/component-holder.component';

const routes: Routes = [
  { path: ':username', component: ComponentHolderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
