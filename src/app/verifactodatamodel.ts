export class VerifactoDataModel {

	constructor(
public loan_number: string,
public data_date: string,
public data_source: string,
public vin: string,
public customer_num: number,
public policy_status: string,
public policy_num:string,
public insured_first_name:string,
public insured_last_name:string,
public coverage_start_date: string,
public coverage_end_date: string,
public cancellation_date:string,
public agent_name: string,
public agent_phone: string,
public has_collision: string, 
public collision_ded: number,
public has_comprehensive: string,
public comprehensive_ded: number,
public issue_name_1: string,
public issue_date_1: string,
public issue_name_2: string,
public issue_date_2: string,
public issue_name_3: string,
public issue_date_3: string){}

}