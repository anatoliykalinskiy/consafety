// Базовые модулю для маршрутизации
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
// Компоненты для маршрутизации в навигации (NavMenu)
import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SingUp } from "./sing-up/sing-up.component";
import { SingIn } from "./sing-in/sing-in.component";
// Указываем маршруты
const ROUTES: Routes = [
    // { path: "имя пути", component: "Имя компонента к которому привязываем путь" }
    { path: "", redirectTo: "Home", pathMatch: "full" },
    // Добавляем маршрут главного компонента (Home)
    { path: "Home", component: HomeComponent },
    // Добавляем маршруты компонентов (Catalog, Contact-Us, Registration)
    { path: "Catalog", component: CatalogComponent },
    { path: "Contact-Us", component: ContactUsComponent },
    { path: "Sing-Up", component: SingUp },
    { path: "Sing-In", component: SingIn },
    // Не соответствующий путь ( ** ) должен быть в конце, после всех маршрутов
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class RoutingModule { }