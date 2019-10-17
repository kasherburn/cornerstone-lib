import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clib-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

    @Input() color: string = "default";
    @Input() borderstyle: string = "solid";
    @Input() width: string = "medium";
    @Input() margin: string = "";
    public message = "My Button";
    constructor() { }

    ngOnInit() {
        console.log(this.color);
    }

}
