import { Component, OnInit } from '@angular/core';
import {NavbarService} from './navbar.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title$:BehaviorSubject<string> = this.navbarService.title;

  constructor(private navbarService:NavbarService, public router:Router) {

  }

  ngOnInit(): void {
  }

}
