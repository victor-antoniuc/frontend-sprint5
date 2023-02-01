import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  data = [
    {
      'firstName' : 'Ivan',
      'lastName' : 'Petrov',
      'isStudent' : true
    },

    {
      'firstName' : 'Denis',
      'lastName' : 'Sidorov',
      'isStudent' : false
    },

    {
      'firstName' : 'Vasilii',
      'lastName' : 'Ceban',
      'isStudent' : true
    }
  ];
}
