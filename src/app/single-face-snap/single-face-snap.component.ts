import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps-service";
import {ActivatedRoute} from "@angular/router";
import {FaceSnap} from "../models/FaceSnap";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(private faceSnapservice: FaceSnapsService, private route: ActivatedRoute) { }

  canSnap!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapservice.getFaceSnapById(snapId);
    this.canSnap = true;
    this.snapButtonText = "Oh snap! 😁";
  }

  onSnap(): void {
    if (this.canSnap) {
      this.faceSnapservice.snapFaceSnapById(this.faceSnap.id, "snap");
      this.canSnap = false;
      this.snapButtonText = "Oops, not snap ☹";
    } else {
      this.faceSnapservice.snapFaceSnapById(this.faceSnap.id, "unsnap")
      this.canSnap = true;
      this.snapButtonText = "Oh snap! 😁";
    }
  }

}
