import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/FaceSnap";
import {FaceSnapsService} from "../../../core/services/face-snaps-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  constructor(private faceSnapService: FaceSnapsService, private router: Router) {
  }

  @Input() faceSnap!: FaceSnap;

  canSnap!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.canSnap = true;
    this.snapButtonText = "Oh snap! 😁";
  }

  onSnap(faceSnapId: number): void {
    if (this.canSnap) {
      this.faceSnapService.snapFaceSnapById(faceSnapId, "snap");
      this.canSnap = false;
      this.snapButtonText = "Oops, not snap ☹";
    } else {
      this.faceSnapService.snapFaceSnapById(faceSnapId, "unsnap")
      this.canSnap = true;
      this.snapButtonText = "Oh snap! 😁";
    }
  }


  onViewFaceSnap(): void {
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}
