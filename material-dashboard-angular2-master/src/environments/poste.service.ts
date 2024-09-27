import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poste } from 'app/model/Poste';


@Injectable({
  providedIn: 'root'
})
export class PosteService {

  private apiUrl = 'http://localhost:8087/api/postes'; // Utilisez le port 8087


  constructor(private http: HttpClient) { }

  getPostes(): Observable<Poste[]> {
    return this.http.get<Poste[]>(this.apiUrl);
  }

  getPosteById(id: number): Observable<Poste> {
    return this.http.get<Poste>(`${this.apiUrl}/${id}`);
  }

  createPoste(poste: Poste): Observable<Poste> {
    return this.http.post<Poste>(this.apiUrl, poste);
  }

  updatePoste(id: number, poste: Poste): Observable<Poste> {
    return this.http.put<Poste>(`${this.apiUrl}/${id}`, poste);
  }

  deletePoste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
