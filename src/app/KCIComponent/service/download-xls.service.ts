import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadXlsService {
 
  constructor(private httpClient:HttpClient,private http: HttpClient) { }

  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}`, {
      responseType: 'blob'
    });
  }
  
  /*public downloadNewFile(){
    this.httpClient.get("http://localhost:8081/employee/export",
    {observe:'response',responseType:'blob'})
  } */
}
