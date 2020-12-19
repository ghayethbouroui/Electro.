import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
  }
  customerInfo = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: ['']
    })
  });
  onSubmitForm() {
    console.log(this.customerInfo.value);
    this.router.navigate(['/store/thankyou']);
  }
}
