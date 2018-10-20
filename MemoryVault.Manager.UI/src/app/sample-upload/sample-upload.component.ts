import { Component, OnInit } from '@angular/core';
import { 
  UploadFile, 
  UploadEvent, 
  FileSystemFileEntry, 
  FileSystemDirectoryEntry 
} from 'ngx-file-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sample-upload',
  templateUrl: './sample-upload.component.html',
  styleUrls: ['./sample-upload.component.css']
})
export class SampleUploadComponent implements OnInit {

  public files: UploadFile[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;

    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, droppedFile.relativePath)
 
          // // Headers
          // const headers = new HttpHeaders({
          //   'security-token': 'mytoken'
          // })
 
          this.http.post('http://localhost:5000/api/v1/upload', formData, { responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
            console.log("Upload result => ");
            console.log(data);
          })          

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
