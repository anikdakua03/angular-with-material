import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        title: "Home",
        component: AppComponent
    },
    {
        path: "material",
        title: "Material",
        component: MaterialComponent
    },
    {
        path: "**",
        title: "Not Found",
        component: PageNotFoundComponent
    }
];
