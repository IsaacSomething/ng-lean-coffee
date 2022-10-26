import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatProgressBar } from '@angular/material/progress-bar';
import { concatMap, delay, from, Observable, of, timer } from 'rxjs';
import { AddDiscussionPointComponent } from './add-discussion-point';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
})
export class ParticipantComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar!: MatProgressBar;
  started = false;
  countdown$!: Observable<number>;
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    timer(2000).subscribe(() => (this.started = true));

    // 100 minutes ===
    let arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(i);
    }
    this.countdown$ = from(arr).pipe(concatMap((v) => of(v).pipe(delay(100))));
  }

  add() {
    this._bottomSheet.open(AddDiscussionPointComponent);
  }
}
