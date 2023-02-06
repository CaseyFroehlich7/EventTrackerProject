

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CarpentryProjects } from 'src/app/models/carpentry-projects';
import { environment } from './../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class CarpentryProjectsService {

  baseUrl = 'http://localhost:8084/'; // adjust port to match server
  url = environment.baseUrl + 'api/carpentryprojects';

  constructor(private http: HttpClient) {}

      index(): Observable<CarpentryProjects[]> {
        return this.http.get<CarpentryProjects[]>(this.url).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () =>
               new Error('CarpentryProjectsService.index(): error retrieving projects: ' + err)

            );
          })
        );
      }

      show(id: number): Observable<CarpentryProjects> {
        return this.http.get<CarpentryProjects>(this.url+ '/' +id,).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () => new Error('CarpentryProjectsService.index(): error retrieving project: ' + err)
            );
          })
        );
      }






      create(carpentryProjects: CarpentryProjects):Observable<CarpentryProjects> {
        console.log('************************');
        console.log(carpentryProjects);
        return this.http.post<CarpentryProjects>(this.url, carpentryProjects).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () =>
              new Error(
                'carpentryProjects.create(): error creating project: ' + err
                )
            );
          })
        );
        }

      generateId(): void{}




       update(carpentryProjects : CarpentryProjects):Observable<CarpentryProjects>  {
        return this.http.put<CarpentryProjects>(`${this.url}/${carpentryProjects.id}`, carpentryProjects).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () =>
              new Error(
                'CarpentryProjectsService.update(): error updating project: ' + err
                )
            );
          })
        )

         }

       delete(id : number):Observable<void>  {
        return this.http.delete<void>(`${this.url}/${id}`).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () =>
              new Error(
                'CarpentryProjectsService.delete(): error deleting project: ' + err
                )
            );
          })
        )}


    }



