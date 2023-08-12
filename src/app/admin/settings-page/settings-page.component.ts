import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainInfoService } from 'src/app/shared/services/main-info.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

  settingsForm: FormGroup;
  constructor(private mainService: MainInfoService) {
    this.settingsForm = new FormGroup({
      "aboutMe": new FormControl('', Validators.required),
      "names": new FormArray([new FormControl('', Validators.required)]),
      "texts": new FormArray([new FormControl('', Validators.required)]),
    })
  }

  getNames(): FormArray {
    return this.settingsForm.controls["names"] as FormArray
  }
  getTexts(): FormArray {
    return this.settingsForm.controls["texts"] as FormArray
  }

  addInfo() {
    (<FormArray>this.settingsForm.controls["names"]).push(new FormControl('', Validators.required));
    (<FormArray>this.settingsForm.controls["texts"]).push(new FormControl('', Validators.required))
  }


  submitSettings() {
    this.mainService.post(this.settingsForm.value).subscribe({
      next: () => console.log('done'),
      error: er => console.log(er)
    })
    this.settingsForm.reset()
  }

}
