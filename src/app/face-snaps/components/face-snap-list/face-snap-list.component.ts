import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import {FaceSnap} from "../../../core/models/FaceSnap";
import {FaceSnapsService} from "../../../core/services/face-snaps-service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService) { }

  faceSnaps$!: Observable<FaceSnap[]>;

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }

}
