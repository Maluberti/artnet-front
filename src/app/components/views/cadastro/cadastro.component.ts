import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgIf, 
    MatButtonModule, 
    MatStepperModule,
    MatSelectModule,
    MatIconModule
  ],
})
export class CadastroComponent {

  constructor(private router: Router, private _formBuilder: FormBuilder) {}
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);
  divVisivel1: boolean = false;
  divVisivel2: boolean = false;
  divVisivel3: boolean = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (this.senha.hasError('required')) {
      return 'Campo obrigatório';
    }
    

    return this.email.hasError('email') ? 'E-mail inválido ' : '';
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }


  mostrarDiv(event: any) {
    const selectedOptions = event.value;
  
    this.divVisivel1 = selectedOptions && selectedOptions.lenght >0 ;
    this.divVisivel2 = selectedOptions && selectedOptions[1] ;
    this.divVisivel3 = selectedOptions && selectedOptions[0] && selectedOptions[1];
  }

}
