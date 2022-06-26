import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vertical-text',
  templateUrl: './vertical-text.component.html',
  styleUrls: ['./vertical-text.component.css']
})
export class VerticalTextComponent implements OnInit {

  @Input() text = ''

  constructor() { }

  ngOnInit(): void {
  }

}
