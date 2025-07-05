import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private API_BASE_URL = 'https://my-apis-3utq.onrender.com';
  // private API_BASE_URL = 'http://localhost:8080';

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

  getPickupLines() {
    const url = `${this.API_BASE_URL}/api/proposal/pickup_line`
    return this.http.get(url)
  }

  addPickupLines(data: any) {
    const url = `${this.API_BASE_URL}/api/proposal/add_pickup_line`
    return this.http.post(url, data)
  }

  pickupLine_res(data: any) {
    const url = `${this.API_BASE_URL}/api/proposal/pickup_line_response`
    return this.http.post(url, data)
  }
}
