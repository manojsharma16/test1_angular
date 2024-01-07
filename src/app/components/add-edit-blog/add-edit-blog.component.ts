import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrls: ['./add-edit-blog.component.css'],
})
export class AddEditBlogComponent {
  public forms = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    family: this.fb.group(
      {
        father: [''],
        mother: [''],
      },
      ['', Validators.required]
    ),
    sibling: this.fb.array([]),
  });
  public submitted!: boolean;
  constructor(public fb: FormBuilder, public router: Router) {
    this.addSibling();
  }

  get formCtrl() {
    return this.forms.get('sibling') as FormArray;
  }

  addSibling() {
    const data = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
    this.formCtrl.push(data);
  }

  get fCtrl() {
    return this.forms.controls;
  }

  get fCCtrl() {
    return this.forms.controls['family'];
  }

  get ffCtrl() {
    return this.forms.controls.sibling.controls;
  }

  submit() {
    this.submitted = true;
    console.log('submit::' + this.fCtrl);
    console.log(this.forms);
  }
}
