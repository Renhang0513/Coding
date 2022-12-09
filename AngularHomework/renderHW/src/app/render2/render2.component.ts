import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render2',
  templateUrl: './render2.component.html',
  styleUrls: ['./render2.component.css']
})
export class Render2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus: Menu[] = [
    {
      name: 'Item 1',
      child: [
        {
          name: 'Item 1.1',
          child: [
            { name: 'Item 1.1.1', child: [] },
            { name: 'Item 1.1.2', child: [] },
            {
              name: 'Item 1.1.3',
              child: [{ name: 'Item 1.1.3.1', child: [] }],
            },
            {
              name: 'Item 1.1.4',
              child: [
                { name: 'Item 1.1.4.1', child: [] },
                { name: 'Item 1.1.4.2', child: [] },
              ],
            },
          ],
        },
        {
          name: 'Item 1.2',
          child: [
            { name: 'Item 1.2.1', child: [] },
            {
              name: 'Item 1.2.2',
              child: [{ name: 'Item 1.2.2.1', child: [] }],
            },
            {
              name: 'Item 1.2.3',
              child: [
                { name: 'Item 1.2.3.1', child: [] },
                {
                  name: 'Item 1.2.3.2',
                  child: [{ name: 'Item 1.2.3.2.1', child: [] }],
                },
                { name: 'Item 1.2.3.3', child: [] },
              ],
            },
          ],
        },
      ],
    },
  ];

}

export interface Menu {
  name:string;
  child: Menu[];
}