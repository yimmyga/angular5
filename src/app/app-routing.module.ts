/**
 * Created by Yimmy Sipion on 26/02/2018.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Componente2Component} from './componente2/componente2.component';
import { Componente3Component} from './componente3/componente3.component';
import { Componente4Component} from './componente4/componente4.component';
import { Componente8Component} from './componente8/componente8.component';

import { Componente5Component} from './componente5/componente5.component';
import { Componente6Component} from './componente6/componente6.component';

const routes: Routes = [
    { path: 'componente2' , component: Componente2Component },
    { path: 'componente3' , component: Componente3Component },
    { path: 'componente4' , component: Componente4Component },
    { path: 'componente8' , component: Componente8Component },
    { path: 'componente5' , component: Componente5Component },
    { path: 'componente6' , component: Componente6Component },

    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: AppComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                useHash : true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRouterModule { }