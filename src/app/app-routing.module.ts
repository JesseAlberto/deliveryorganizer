import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveriesListComponent } from './components/main-layout/deliveries-list/deliveries-list.component';
import { DeliveriesCreateComponent } from './components/main-layout/deliveries-create/deliveries-create.component';
import { DeliveriesPrintComponent } from './components/main-layout/deliveries-print/deliveries-print.component';
import { DeliveriesViewComponent } from './components/main-layout/deliveries-view/deliveries-view.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'app', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: DeliveriesViewComponent },
      { path: 'create', component: DeliveriesCreateComponent, data: { mode: 'create'}},
      { path: 'edit/:id', component: DeliveriesCreateComponent, data: { mode: 'edit'}},
      { path: 'print/:day', component: DeliveriesPrintComponent},
      { path: 'list', component: DeliveriesListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
