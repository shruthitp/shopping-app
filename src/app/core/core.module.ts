import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../appRouting.module';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeService } from './../recipes/recipe.service';
import { DataStoregeService } from './../shared/dataStorage.service';
import { AuthService } from './../auth/auth.service';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers : [
        ShoppingListService,
        RecipeService,
        DataStoregeService,
        AuthService
        ]
})
export class CoreModule { }
