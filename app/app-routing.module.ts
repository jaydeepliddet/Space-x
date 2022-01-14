import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacexComponent } from './spacex/spacex.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
{
  path:'spacex',
  component:SpacexComponent
},
{
  path:'test',
  component:TestComponent
},
{
  path:'menu',
  component:MenuComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
