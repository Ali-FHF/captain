import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location}  from '@angular/common';
import { Policy}         from './policy';
import { PolicyService }  from './policy.service';
@Component({
  selector: 'policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: [ './policy-detail.component.css' ]
})
export class PolicyDetailComponent implements OnInit {
  policy: Policy;

  constructor(
    private policyService: PolicyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.policyService.getPolicy(+params.get('id')))
      .subscribe(policy => this.policy = policy);
  }

  goBack(): void {
    this.location.back();
  }
}