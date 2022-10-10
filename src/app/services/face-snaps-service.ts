import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {HttpClient} from "@angular/common/http";
import {filter, find, identity, Observable} from "rxjs";
import {switchMap, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }


  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return  this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
      ));
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }


  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a,b) => a.id - b.id)),
      map(sortedSnaps => sortedSnaps[sortedSnaps.length - 1]),
      map(previousSnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousSnap.id + 1
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
    );
  }
}
