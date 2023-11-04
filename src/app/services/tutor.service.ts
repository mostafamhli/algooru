import { Injectable } from '@angular/core';
import { Tutor } from '../models/tutor.model';
import { Observable, concatMap, filter, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  apiLink: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAllTutor(page: number, size: number): Observable<Tutor[]> {
    return this.http
      .get<Tutor[]>(`${this.apiLink}?_page=${page}&_limit=${size}`)
      .pipe(
        map((response: any[]) => {
          return response.map((item) => {
            let tutor = {
              description: item.title,
              name: this.transformTitle(item.title),
              numOfClass: item.id,
              tutorImg: item.thumbnailUrl,
            };

            return tutor;
          });
        })
      );
  }

  getTutorBySearch(searchValue: string): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.apiLink}`).pipe(
      map((response: any[]) => {
        return response.map((item) => {
          let tutor = {
            description: item.title,
            name: this.transformTitle(item.title),
            numOfClass: item.id,
            tutorImg: item.thumbnailUrl,
          };

          return tutor;
        });
      }),
      map((items: Tutor[]) => {
        return items.filter(item => item.name.includes(searchValue));
      })
    );
  }
  getTutorRandomly(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.apiLink}`).pipe(
      map((response: any[]) => {
        const randomIndices = this.getRandomIndices(response.length, 3); // Get three random indices

        return randomIndices.map((index) => {
          const item = response[index];
          const tutor = {
            description:
              item.title.length < 28
                ? item.title.padEnd(item.title.length + 20, ' ')
                : item.title,
            name: this.transformTitle(item.title),
            numOfClass: item.id,
            tutorImg: item.thumbnailUrl,
          };

          return tutor;
        });
      })
    );
  }

  getRandomIndices(max: number, count: number): number[] {
    const indices: any[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }

  getTutorById(id: number): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.apiLink}/${id}`).pipe(
      map((item: any) => {
        let tutor = {
          description:
            item.title.length < 28
              ? item.title.padEnd(item.title.length + 20, ' ')
              : item.title,
          name: this.transformTitle(item.title),
          numOfClass: item.id,
          tutorImg: item.thumbnailUrl,
        };

        return tutor;
      })
    );
  }
  getBestTutorRandomely(): Observable<Tutor[]> {
    const objects$: Observable<Tutor[]> = this.http.get<Tutor[]>(this.apiLink);

    return objects$.pipe(
      map((objects: Tutor[]) => {
        const indexes: number[] = [];
        while (indexes.length < 3) {
          const index = Math.floor(Math.random() * objects.length);
          if (!indexes.includes(index)) {
            indexes.push(index);
          }
        }
        return indexes;
      }),
      concatMap((indexes: number[]) => {
        return objects$.pipe(
          filter((object, index) => indexes.includes(index))
        );
      })
    );
  }

  transformTitle(title: string): string {
    const words = title.split(' ');
    const transformedTitle = words.map((word) => word[0]).join('');
    return transformedTitle;
  }
}
