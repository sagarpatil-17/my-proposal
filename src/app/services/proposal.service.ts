import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  // private API_BASE_URL = 'https://my-apis-3utq.onrender.com';
  private API_BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // test api
  testApi(): Observable<any> {
    const url = `${this.API_BASE_URL}/api/test`
    return this.http.get(url)
  }

  getResponse(data: any) {
    const url = `${this.API_BASE_URL}/api/proposal/response`
    return this.http.post(url, data)
  }
}
