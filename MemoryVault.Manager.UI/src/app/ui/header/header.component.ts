import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  closeResult: string;
  toggleMenu = false;
  modalRef: NgbModalRef;

  showMessage: boolean;
  message: string;

  constructor(private router: Router,
    private modal: NgbModal) { }

  ngOnInit() {

  }

  onToggleMenu() {
    if (this.toggleMenu === true) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
    }
  }

  ngOnDestroy() {
  }

  navigate(link: string){
    this.router.navigate([link])
  }

}
