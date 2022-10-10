import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps-service";
import {ActivatedRoute} from "@angular/router";
import {FaceSnap} from "../models/FaceSnap";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  canSnap!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(snapId);
    this.canSnap = true;
    this.snapButtonText = "Oh snap! 😁";
  }

  onSnap(faceSnapId: number) {
    if (this.canSnap) {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.snapButtonText = 'Oops, unSnap!';
          this.canSnap = false;
        })
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.snapButtonText = 'Oh Snap!';
          this.canSnap = true;
        })
      );
    }
  }

}
