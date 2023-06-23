import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  email: any = "";
  myObj: any = {};
  constructor(private _router: Router, private http: HttpClient, private employeeService: EmployeesService){}
  Logout(){
    this.email = localStorage.getItem('email');
    this.myObj["email"] = this.email;
    this.http.put("http://localhost:3000/api/userLogout", this.myObj).subscribe((res: any) => {
      this.employeeService.getEmployees();
      localStorage.clear();
      this._router.navigate([''])
    })
  }
}
