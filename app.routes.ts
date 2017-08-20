import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MakePaymentComponent} from './payments/make-payment/make-payment.component';


export const router:Routes=[
    {path:'',redirectTo:'payment',pathMatch:'full'},
    {path:'payment',component:MakePaymentComponent}
   
]

export const routes:ModuleWithProviders=RouterModule.forRoot(router);