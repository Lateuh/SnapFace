import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps-service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService) { }

  mySnaps!: FaceSnap[];

  ngOnInit(): void {
    this.mySnaps = this.faceSnapService.mySnaps;
  }

}
