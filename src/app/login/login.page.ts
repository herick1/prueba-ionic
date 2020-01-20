import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from  "@angular/router";
import { AuthService } from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  focus:any;
  focus1:any;
  prueba:any;
  constructor( public menuCtrl: MenuController, private http:HttpClient, private  authService:  AuthService, private  router:  Router) { }
  
  ngOnInit() {
   this.authService.storage.get("ACCESS_TOKEN").then(data=>{this.prueba=data})

  }
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  login(correo, clave){
    let userss={"email":correo , "password":clave, id:0, name:""}
    this.authService.login(userss).toPromise().then((res)=>{
      this.router.navigateByUrl('/');
    }
    ).catch(
      (err)=>{
        console.log("ERR"+ err.status)
      }
    );
  }

}
