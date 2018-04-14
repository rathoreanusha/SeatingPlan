import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss']
})
export class NewPlanComponent implements OnInit {

  newPlanForm = new FormGroup({
      capacity: new FormControl,
      category: new FormControl,
      students: new FormControl
  })

  loginForm = new FormGroup({
      email: new FormControl,
      pwd: new FormControl
  })

  isLoginForm = true;
  showLayout = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreatePlan() {
    this.router.navigate(['/']);
  }

  onLogin() {
    this.isLoginForm = false;
  }

  showLayouts() {
    this.showLayout = false;
  }
}
