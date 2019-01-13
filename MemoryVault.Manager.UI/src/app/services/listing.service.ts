import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ListingService {

    public url: string = 'http://localhost:5000/api/v2/gallery';

    constructor(private http: HttpClient) { }

    public fetchPending(skip: number, take: number): Observable<any> {

        if (skip === undefined)
            skip = 0;

        if (take === undefined)
            take = 50;

        return this.http.get(`${this.url}/pending?skip=${skip}&take=${take}`);
    }
}