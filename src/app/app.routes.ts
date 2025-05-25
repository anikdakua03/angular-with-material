import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        title: "Home",
        loadComponent: () => import("../app/components/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: "material",
        title: "Material",
        loadComponent: () => import("../app/components/material/material.component").then(c => c.MaterialComponent)
    },
    {
        path: "payment",
        title: "Payment",
        loadComponent: () => import("../app/components/payment/payment.component").then(c => c.PaymentComponent)
    },
    {
        path: "**",
        title: "Not Found",
        loadComponent: () => import("../app/components/page-not-found/page-not-found.component").then(c => c.PageNotFoundComponent)
    }
];
