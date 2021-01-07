import { Component } from '@angular/core';

@Component({
    selector: 'app-welcomePage', 
    templateUrl: './welcomePage.component.html', 
    styleUrls: ['./welcomePage.component.css']
})
export class WelcomePageComponent {
    name = '';
    

    resetName() {
        this.name = '';
    }
    
    isNameEmpty() {
        return this.name.length == 0;
    }
}