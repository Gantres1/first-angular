import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QeditComponent } from './components/pages/qedit/qedit.component';
import { QviewComponent } from './components/pages/qview/qview.component';
import { ParsingComponent } from './components/pages/parsing/parsing.component';
import { BankeditComponent } from './components/pages/bankedit/bankedit.component';
import { TestComponent } from './components/pages/test/test.component';


const routes: Routes = [
  {path: 'qedit', component: QeditComponent},
  {path: 'qview', component: QviewComponent},
  {path: 'parsing', component: ParsingComponent},
  {path: 'bankedit', component: BankeditComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
