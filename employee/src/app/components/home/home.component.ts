import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient) {}
  Array: any;
  data: any;
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
  visiblePopup: any = false;
  empId: any = "";
  ArrayLen: any = 0;
  totalLength: any;
  p: any;
  
  myObject: any = {};
  getData(){
    let url = "http://localhost:3000/api/getAllEmp"
    return this.http.get(url);
  }

  handleEdit(ID: any, item: any){
    this.firstName = item.firstName
    this.empId = item._id
    this.lastName = item.lastName
    this.email = item.email
    this.date = item.date
    this.gender = item.gender
    this.edu = item.education
    this.company = item.company
    this.experience = item.experience
    this.package = item.package
    this.visiblePopup = true
  }

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
    let URL = `http://localhost:3000/api/editEmp/${this.empId}`
    this.http.put(URL, this.myObject).subscribe((Obj: any) => {
      if(Obj.success === true){
        this.alertVis = true
        this.message = Obj.message
        this.Success = Obj.success
        setTimeout(() => {
          this.alertVis = false
        }, 2000)
      }
      else{
        console.log(Obj)
        this.alertVis = false
        this.Success = Obj.success
        this.message = Obj.message
        setTimeout(() => {
          this.alertVis = true
        }, 2000)
      }
    })
  }

  education(type: any){

  }

  handleDelete(ID: any){
    let URL =  `http://localhost:3000/api/deleteEmp/${ID}`
    this.http.delete(URL).subscribe((res) => {
      console.log(res, "Deleted");
    })
  }

  ngOnInit(){
    this.getData().subscribe((obj:any) => {
      this.Array = obj.data;
      this.ArrayLen = this.Array.length;
      console.log(this.ArrayLen);
    })
  }
}
