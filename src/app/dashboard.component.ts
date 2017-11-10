import { Component, OnInit } from '@angular/core';
import { Policy } from './policy';
import { PolicyService } from './policy.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  policies: Policy[] = [];

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.policyService.getPolicies()
      .then(policies => this.policies = policies.slice(0, 1));
  }
}