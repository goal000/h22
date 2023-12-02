import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationform=new FormGroup(
    {
      username:new FormControl(''),
      password:new FormControl(''),
      cfnpassword:new FormControl('')
    }
);

loginrequest() {
  console.log(this.registrationform.value)
}
  title = 'a12';

}
