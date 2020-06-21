
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {
  constructor(private Http: HttpClient) { }

  getAllUsers(data) {
    return this.Http.get(`https://jsonplaceholder.typicode.com/users/${data}`);
  }

}
