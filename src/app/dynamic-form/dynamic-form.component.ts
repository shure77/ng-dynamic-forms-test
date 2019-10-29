import { Component, OnInit } from '@angular/core';
import {DynamicFormLayout, DynamicFormModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { MY_FORM_LAYOUT} from './form.layout';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  formModel: DynamicFormModel;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = MY_FORM_LAYOUT;
  private formLabel = 'Lenkerdaten erfassen';

  constructor(private http: HttpClient, private formService: DynamicFormService) { }

  ngOnInit() {
    this.http.get<object[]>('http://localhost:3000/forms').subscribe(formModelJson => {
      this.formModel = this.formService.fromJSON(formModelJson);
      this.formGroup = this.formService.createFormGroup(this.formModel);
    });
  }

}
