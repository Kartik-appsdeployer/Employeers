import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService, private _router: Router, private http: HttpClient, private employeeService: EmployeesService){}
  myObj: any = {};
  Auth(){
    this.authService.GoogleAuth().then((res: any) => {
      this.myObj["email"] = res.user._delegate.email;
      this.http.put("http://localhost:3000/api/userLogin", this.myObj).subscribe((obj: any) => {
          localStorage.setItem('email', res.user._delegate.email);
          this.employeeService.getEmployees();
          this._router.navigate([''])
      })
    })
  }
}
