import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { LoginFormComponent } from './components/views/login-form/login-form.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      }

    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
