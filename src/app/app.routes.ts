import { Routes } from "@angular/router";
import { InputDesignComponent } from "./components/input-design/input-design.component";
import { LoginComponent } from "./components/login-page/login-page.component";


export const routes: Routes = [{ path: "", component: InputDesignComponent },
    { path: "login", component: LoginComponent }
    
];

