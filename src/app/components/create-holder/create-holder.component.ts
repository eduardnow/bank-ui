import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HolderService } from '../../services/holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-holder',
  templateUrl: './create-holder.component.html',
  styleUrls: ['./create-holder.component.css']
})
export class CreateHolderComponent implements OnInit {

  models: string[] = [
    'Globo MTB Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];
  holderForm: FormGroup;
  naturalPersonalForm: FormGroup;
  legalPersonalForm: FormGroup;
  validMessage = '';

  public cuit = '';
  values = '';

  constructor(private holderService: HolderService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.naturalPersonalForm = new FormGroup({
      document: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });

    this.legalPersonalForm = new FormGroup({
      businessName: new FormControl('', Validators.required),
      foundationYear: new FormControl('', Validators.required),
    });

    this.holderForm = this.fb.group({
      cuit: new FormControl('', Validators.required),
      natural: this.naturalPersonalForm,
      legal: this.legalPersonalForm
    });
  }

  submitRegistration() {
    if (this.isNaturalPerson(this.holderForm.value.cuit) && this.naturalPersonalForm.valid) {
      this.validMessage = 'Your registration has been sent. Thank you!';

      const data = {
        'cuit': this.holderForm.value.cuit,
        'document': this.naturalPersonalForm.value.document,
        'first-name': this.naturalPersonalForm.value.firstName,
        'last-name': this.naturalPersonalForm.value.lastName
      };

      this.holderService.create(data).subscribe(
        () => {
          this.holderForm.reset();
          this.naturalPersonalForm.reset();
          this.legalPersonalForm.reset();

          this.router.navigate(['/']);

          return true;
        },
        err => {
          this.validMessage = 'We are sorry. This record is already registered.';
          return Observable.throw(err);
        }
      );
    }

    if (this.isLegalPerson(this.holderForm.value.cuit) && this.legalPersonalForm.valid) {
      const data = {
        'cuit': this.holderForm.value.cuit,
        'business-name': this.legalPersonalForm.value.businessName,
        'foundation-year': this.legalPersonalForm.value.foundationYear,
      };

      this.holderService.create(data).subscribe(
        () => {
          this.holderForm.reset();
          this.naturalPersonalForm.reset();
          this.legalPersonalForm.reset();

          this.router.navigate(['/']);

          return true;
        },
        err => {
          this.validMessage = 'We are sorry. This record is already registered.';
          return Observable.throw(err);
        }
      );
    }

    this.validMessage = 'Please fill out the form before submitting!';
  }

  isNaturalPerson(values) {
    /* 20, 23, 24 y 27 para Personas Físicas */
    return values.substring(0, 2) === '20'
      || values.substring(0, 2) === '23'
      || values.substring(0, 2) === '24'
      || values.substring(0, 2) === '27';
  }

  isLegalPerson(values) {
    /* 30, 33 y 34 para Empresas */
    return values.substring(0, 2) === '30'
      || values.substring(0, 2) === '33'
      || values.substring(0, 2) === '34';
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
}
