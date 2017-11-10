import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Policy } from './policy';
import { PolicyService } from './policy.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './policy.component.html',
  styleUrls: [ './policy.component.css' ]
})
export class PolicyComponent implements OnInit {
  policies: Policy[];
  selectedPolicy: Policy;

  constructor(
    private router: Router,
    private policyService: PolicyService) { }

  getPolicies(): void {
    this.policyService.getPolicies().then(policies => this.policies = policies);
  }

  ngOnInit(): void {
    this.getPolicies();
  }

  onSelect(policy: Policy): void {
    this.selectedPolicy = policy;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPolicy.id]);
  }
}