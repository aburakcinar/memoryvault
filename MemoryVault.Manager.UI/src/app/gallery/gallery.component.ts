import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items : Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  refresh() {
    this.items = this.http.get("http://localhost:5000/api/gallery/20");
    console.log("refreshed");
  }

}
