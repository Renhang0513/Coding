import { Component, OnInit } from '@angular/core';
import { Menu } from '../interface/menus.interface';
@Component({
  selector: 'app-render-page',
  templateUrl: './render-page.component.html',
  styleUrls: ['./render-page.component.css'],
})
export class RenderPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public list = [
    {
      title: 'childless',
      children: [],
    },
    {
      title: 'great grandparent',
      children: [
        {
          title: 'childless grandsibiling',
          children: [],
        },
        {
          title: 'grandparent',
          children: [
            {
              title: 'childless sibiling',
              children: [],
            },
            {
              title: 'another childless sibiling',
              children: [],
            },
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: [],
                },
                {
                  title: 'another child',
                  children: [],
                },
              ],
            },
            {
              title: 'another parent',
              children: [
                {
                  title: 'child',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: 'another grandparent',
          children: [
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: [],
                },
                {
                  title: 'another child',
                  children: [],
                },
                {
                  title: 'a third child',
                  children: [],
                },
                {
                  title: 'teen mother',
                  children: [
                    {
                      title: 'accident',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  
}
