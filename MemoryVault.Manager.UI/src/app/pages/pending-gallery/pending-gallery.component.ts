import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppAction from '../../store/app.actions';
import { AppState, MemoryVaultListItem } from '../../store/app.reducer';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { AppStateService } from '../../services/appState.service';

@Component({
  selector: 'app-pending-gallery',
  templateUrl: './pending-gallery.component.html',
  styleUrls: ['./pending-gallery.component.css']
})
export class PendingGalleryComponent implements OnInit {

  contentAsync: Observable<MemoryVaultListItem[]>;

  constructor(
    private store: Store<AppState>,
    private appActions: AppStateService) { }

  ngOnInit() {
    this.contentAsync = this.store.select("uploadFeature").pipe(map((m: AppState) => m.pendingList));

    this.appActions.fetchPendingList(0, 50);

    let items = this.store.select("uploadFeature").pipe(
      map((m: AppState) => m.pendingList),
      map((l: MemoryVaultListItem[]) => l.forEach(p => p.isSelected))
      );

      items.subscribe(s => console.log(s));
  }

  refresh() {
    //this.store.dispatch(new fromAppAction.FetchPendingList({ 'skip': 0, 'take': 50 }));
    this.appActions.fetchPendingList(0, 50);
  }
}
