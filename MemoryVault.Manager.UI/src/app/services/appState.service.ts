import { Injectable, ApplicationInitStatus } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../store/app.reducer";
import * as fromAppActions from "../store/app.actions";

@Injectable({ providedIn: 'root' })
export class AppStateService {


    constructor(private store: Store<AppState>) { }

    fetchApprovedList(skip: number, take: number){
        this.store.dispatch(
            new fromAppActions.FetchApprovedList({'skip':skip,'take':take}));
    }
    
    fetchPendingList(skip: number, take: number){
        this.store.dispatch(
            new fromAppActions.FetchPendingList({'skip':skip,'take':take}));
    }

    changeItemSelectedState(id: string){
        this.store.dispatch(
            new fromAppActions.ChangeItemSelectedState(id)
        );
    }
}