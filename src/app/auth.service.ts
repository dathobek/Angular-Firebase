import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth,private router:Router) {
    this.user = afAuth.authState;
   }

   //Coding to Trigger login
   login(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
     .then(value=>{
      this.router.navigateByUrl('/profile')
     })
     .catch(err=>{
      console.log('Something went wrong ', err.message)
     })
  }


}
