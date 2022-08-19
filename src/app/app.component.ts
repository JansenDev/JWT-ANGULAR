import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const URL_BASE = `http://localhost:3000`;
const TOKEN = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXN1YXJpbyIsInVzZXIiOiJjYXJsb3MiLCJjcmVhdGVBdCI6MTY2MDg2OTI5M30.rhePvUXN11aWULhdbPNbkarQa1qJvorkhAlL3bo2t20"
const TOKEN_JANSSEN = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXN1YXJpbyIsInVzZXIiOiJKYW5zc2VuIiwiY3JlYXRlQXQiOjE2NjA4NzM3NDF9.H6Qm7S5Tu4jJbBuxP1f9MuEUdCeVryyD7UdMbIxW6Pg"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'JWT-ANGULAR';
  token: any = ''
  headers_object = new HttpHeaders()
    .append("Authorization", TOKEN)
    .append("Content-Type", "application/json")

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // const URL = `${URL_BASE}/api`;
    // this.httpClient.get(URL, { responseType: 'text', headers:headers_object }).subscribe((data) => {
    //   console.log(data);
    // });
  }

  getData() {
    this.httpClient.get(`${URL_BASE}/api/otro`, { headers: this.headers_object }).subscribe((data) => {
      console.log("Data : ", data);
    });
  }


  createToken() {
    this.httpClient.post<any>(`${URL_BASE}/api`, {
      username: 'carlos',
      password: '12345',
    }).subscribe(tokenResult => {
      console.log(tokenResult);
      this.token = tokenResult.data;
    })
  }
}
