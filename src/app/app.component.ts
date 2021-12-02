import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      name: null,
      address: this.formBuilder.array([]),
    });
  }

  private createAddressGroup(): FormGroup {
    return new FormGroup({
      AddressName: new FormControl(null),
    });
  }
  private AddressGroup() {
    const name = this.formGroup.get('address') as FormArray;
    name.push(this.createAddressGroup());
  }

  onclick() {
    this.AddressGroup();
  }
}
