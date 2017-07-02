import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';

export class NavItem {
    name: string;
    link: string;
}
export class RegItem {
    name: string;
    link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, OnInit {
  isLoginFormShown: boolean = false;
  isSingInFormShown: ElementRef;
  isSingUpFormShown: ElementRef;
  title = 'Consafety';
  navItems: NavItem[] = [
        { name: "Home", link: "Home" },
        { name: "Catalog", link: "Catalog" },
        { name: "Contact Us", link: "Contact-Us" }
    ]
  RegItems: RegItem[] = [
        { name: "Sing Up", link: "Sing-Up" },
        { name: "Sing In", link: "Sing-In" },
       
    ]
    constructor(
        private eltRef: ElementRef
    ) {
        this.isSingInFormShown = this.eltRef;
        this.isSingUpFormShown = this.eltRef;
    }
    showLoginForm(e: Event) {
        e.stopPropagation();
        this.isSingInFormShown.nativeElement = e.target;
        this.isLoginFormShown = true;
    }

    ngAfterViewChecked() {
        this.isSingUpFormShown.nativeElement = document.querySelector(".login-form");
        console.log(this.isSingUpFormShown.nativeElement);
    }

    ngOnInit() {
        document.addEventListener("click", (e: Event) => {
            if((e.target !== this.isSingInFormShown.nativeElement || e.target !== this.isSingUpFormShown.nativeElement) && this.isLoginFormShown === true) {
                this.isLoginFormShown = false;
            }
        })
    }
}
