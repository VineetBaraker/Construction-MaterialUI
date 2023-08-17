import { Injectable } from '@angular/core';
import { material } from '../models/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private url = 'material';

  constructor(private http: HttpClient) {}
  public getmaterial(): Observable<material[]> {
    return this.http.get<material[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updategrade(grade: material): Observable<material[]> {
    return this.http.put<material[]>(
      `${environment.apiUrl}/${this.url}`,
      grade
    );
  }
  public creategrade(grade: material): Observable<material[]> {
    return this.http.post<material[]>(
      `${environment.apiUrl}/${this.url}`,
      grade
    );
  }
  public deletegrade(grade: material): Observable<material[]> {
    return this.http.delete<material[]>(
      `${environment.apiUrl}/${this.url}/${grade.id}`
    );
  }
}
