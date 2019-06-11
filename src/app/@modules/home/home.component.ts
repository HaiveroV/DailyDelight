import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {

    /**
     *
     */
    constructor(
        private renderer: Renderer2
    ) {
        
    }
    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background-color', '#fff');
      }
}