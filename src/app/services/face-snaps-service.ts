import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  mySnaps: FaceSnap[] = [{
    id: 0,
    title: 'Ted',
    description: 'Mon meilleur ami depuis tout petit !',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate: new Date(),
    snaps: 74,
    location: 'Hollywood'
  },
    {
      id: 1,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 22
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 48
    }];


  getAllFaceSnaps(): FaceSnap[] {
    return this.mySnaps;
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap : FaceSnap | undefined = this.mySnaps.find(faceSnap => faceSnap.id === id);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }
}
