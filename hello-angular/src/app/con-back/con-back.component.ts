import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './conback.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from './ConbackInterface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-con-back',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './con-back.component.html',
  styleUrl: './con-back.component.css'
})
export class ConBackComponent {
  // async send() {
  //   (await this.housingService.createUser(this.applyForm.getRawValue()))
  //     .subscribe(response => {
  //       console.log('Post successful', response);
  //     }, error => {
  //       console.error('Error in post', error);
  //     });
  // }

  userService: UserService | undefined;

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  constructor(private route: ActivatedRoute, private conbackService: UserService) {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    // this.conbackService.getHousingLocationById(id).then(housingLocation => {
    //   this.housingLocation = housingLocation;
    // });
  }

  values: Category[] | undefined;

  async getAll() {
    (await this.conbackService.getAllCategories()).subscribe(response => {
      console.log('get successful', response);
      this.values = response;
    }, error => {
      console.error('Error in get', error);
    });
  }

  async postUser() {
    // if (this.applyForm.invalid) {
    //   this.updateValueAndValidity()
    //   return;
    // }
    (await this.conbackService.createCategory(this.applyForm.getRawValue()))
      .subscribe(response => {
        console.log('Post successful', response);
        alert('Post successful');
      }, error => {
        console.error('Error in post', error);
        alert('Error in post');
      });


  }
  private updateValueAndValidity() {
    Object.values(this.applyForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}
