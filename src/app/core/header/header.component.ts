import { Component } from '@angular/core';
import { DataStoregeService } from '../../shared/dataStorage.service';

import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private dataStorage: DataStoregeService,
        private authService: AuthService,
        private router: Router) { }

    saveDate() {
        this.dataStorage.storeRecipes()
            .subscribe((response: Response) => console.log(response));

    }

    fetchData() {
        this.dataStorage.getRecipes();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}

