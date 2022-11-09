import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BionicFilesComponent } from './bionic-files/bionic-files.component';
import { ConverterComponent } from './converter/converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {path: 'converter',component: ConverterComponent,},
    {path: 'files',component: BionicFilesComponent,},
    {path: 'dashboard',component: DashboardComponent,},
    {path: 'counter',component: CounterComponent,}
  ],
  
},
// {
//   path: 'create-letter',
//   component: DocumentCreateDialogComponent,
// },
 { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
