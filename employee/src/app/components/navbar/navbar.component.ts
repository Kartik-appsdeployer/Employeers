import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private http: HttpClient, public authService: AuthService, private employeeService: EmployeesService) { }
  firstName: any = "";
  lastName: any = "";
  email: any = "";
  date: any = "";
  male: any = "";
  female: any = "";
  others: any = "";
  gender: any = "";
  edu: any = "Education";
  company: any = "";
  experience: any = "";
  package: any = "";
  alertVis: any = ""
  message: any = "";
  Success: any = "";
  fileToUpload: File | null = null;
  localEmail:any = "";
  ngOnInit(){
    this.localEmail = localStorage.getItem('email')
    console.log(this.localEmail, "This is email")
  }
  myObject: any = {};
  onSubmit() {
    // if(this.fileToUpload){
    //     this.myObject["resume"] = this.fileToUpload
    // }
    this.myObject["firstName"] = this.firstName
    this.myObject["lastName"] = this.lastName
    this.myObject["email"] = this.email
    this.myObject["date"] = this.date
    if (this.male !== "") {
      this.gender = this.male
      this.myObject["gender"] = this.gender
    }
    else if (this.female !== "") {
      this.gender = this.female
      this.myObject["gender"] = this.gender
    }
    else if (this.others !== "") {
      this.gender = this.others
      this.myObject["gender"] = this.gender
    }
    this.myObject["company"] = this.company
    this.myObject["education"] = this.edu
    this.myObject["experience"] = this.experience
    this.myObject["package"] = this.package;
    console.log(this.myObject, "This is Object")
    this.employeeService.addEmployee(this.myObject).subscribe((res: any) => {
      this.employeeService.getEmployees()
      if (res.success === true) {
        this.alertVis = true
        this.message = res.message
        this.Success = res.success
        setTimeout(() => {
          this.alertVis = false
        }, 2000)
        this.firstName = ""
        this.lastName = ""
        this.email = ""
        this.date = ""
        this.male = ""
        this.female = ""
        this.others = ""
        this.edu = ""
        this.experience = ""
        this.company = ""
        this.package = ""
      }
      else {
        console.log(res)
        this.alertVis = false
        this.Success = res.success
        this.message = res.message
        setTimeout(() => {
          this.alertVis = true
        }, 2000)
      }
    })
  }
  education(type: any) {
    this.edu = type;
  }
  Auth(){
    this.authService.GoogleAuth().then((res:any) => {
      console.log(res.user._delegate.email)
    })
  }
}
