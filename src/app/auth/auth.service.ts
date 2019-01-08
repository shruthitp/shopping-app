import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log('Sign Up success', data);
            })
            .catch((err) => {
                console.log('Error', err);
            });
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then(token => this.token = token);
            })
            .catch(err => console.log('err', err));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(token => this.token = token);

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
