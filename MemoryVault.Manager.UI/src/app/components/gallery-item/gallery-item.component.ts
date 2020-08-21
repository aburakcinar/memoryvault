import { Component, OnInit, Input } from '@angular/core';
import { MemoryVaultListItem } from 'src/app/store/app.reducer';
import { AppStateService } from 'src/app/services/appState.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  @Input()
  model: MemoryVaultListItem;

  constructor(
    private appActions: AppStateService) { }

  ngOnInit() {
  }

  public changeSelected(){
      
  }
}
