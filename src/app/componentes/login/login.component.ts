import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from '../../services/autenticathion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = null;
  password: string = null;
  admin: String = "../";

  constructor(private authenticationService: AutenticathionService) { }

  ngOnInit() {
  }

  login(){
    this.authenticationService.loginWithEmail(this.email, this.password).then(
    (data) =>{
      console.log(this.email);
      console.log(this.password);
      
     window.location.href='/Administrador';
    }).catch((error) => {
      //aqui haremos cosas para trara el error
    });
  }
}
