import { Policy } from './policy';
import { POLICIES } from './mock-policies';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyService {
  getPolicies(): Promise<Policy[]> {
    return Promise.resolve(POLICIES);
  }

  getPolicy(id: number): Promise<Policy> {
    return this.getPolicies()
               .then(policies => policies.find(policy => policy.id === id));
  }
}
