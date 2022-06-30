import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-table',
  templateUrl: './check-table.component.html',
  styleUrls: ['./check-table.component.css']
})
export class CheckTableComponent implements OnInit {

  tableRows = [...Array(17).keys()]
  tableCols = [...Array(11).keys()]
  tableHead = [...Array(10).keys()].reverse()

  selectedValues : string[] = JSON.parse(localStorage.getItem('selection') || '[]')

  saveSelection = () => {
    localStorage.setItem('selection', JSON.stringify(this.selectedValues))
  }

  ngOnInit(): void {
  }

}
