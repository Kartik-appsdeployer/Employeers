import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getEmployees() {
    this.http.get<any[]>('http://localhost:3000/api/getAllEmp').subscribe((employees) => {
      this.employeesSubject.next(employees);
    });
  }

  addEmployee(empList: any) {
    let url = "http://localhost:3000/api/addEmp";
    return this.http.post(url, empList)
  }
}
