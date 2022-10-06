import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps-service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  constructor(private faceSnapService: FaceSnapsService) { }

  mySnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>;
    this.mySnaps = this.faceSnapService.mySnaps;
    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
