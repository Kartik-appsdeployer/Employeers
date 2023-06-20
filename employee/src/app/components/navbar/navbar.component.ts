import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private http: HttpClient) {}
  firstName: any = "";
  lastName: any = "";
  email: any = "";
  date: any = "";
  male: any = "";
  female: any = "";
  others: any = "";
  gender: any = "";
  edu: any = "";
  company: any = "";
  experience: any = "";
  package: any = "";
  
  myObject: any = {};

  onSubmit(){
    this.myObject["firstName"] = this.firstName
    this.myObject["lastName"] = this.lastName
    this.myObject["email"] = this.email
    this.myObject["date"] = this.date
    if(this.male !== ""){
      this.gender = this.male
      this.myObject["gender"] = this.gender
    }
    else if(this.female !== ""){
      this.gender = this.female
      this.myObject["gender"] = this.gender
    }
    else if(this.others !== ""){
      this.gender = this.others
      this.myObject["gender"] = this.gender
    }
    this.myObject["company"] = this.company
    this.myObject["education"] = this.edu
    this.myObject["experience"] = this.experience
    this.myObject["package"] = this.package;
    console.log(this.myObject, "This is Object")
    let url = "http://localhost:3000/api/addEmp"
    this.http.post(url, this.myObject).subscribe((res) => {
        console.log(res);
    });
  }
  education(type: any){
    this.edu = type;
  }
}
