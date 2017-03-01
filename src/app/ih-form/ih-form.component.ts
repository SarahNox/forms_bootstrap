import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ih-form',
  templateUrl: './ih-form.component.html',
  styleUrls: ['./ih-form.component.css']
})
export class IhFormComponent implements OnInit {
  account: Account;
  placeholder: Account = new Account('Leonardo', 'DaVinci');
  type: "password";
  show: false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.account = new Account;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
