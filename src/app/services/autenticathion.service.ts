import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticathionService {

  constructor(private angularFireAuth: AngularFireAuth){}

    loginWithEmail(email: string, password: string){
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    getStatus(){
        return this.angularFireAuth.authState;
    }

    logOut(){
        return this.angularFireAuth.auth.signOut()
    }
}

