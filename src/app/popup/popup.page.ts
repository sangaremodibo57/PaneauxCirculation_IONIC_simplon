import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
  panneauPopup: any;
  constructor(
    public service: ServicesService,
    public router: Router,
    private popoverC: PopoverController
  ) { }

  ngOnInit() {
    this.panneauPopup = this.service.getByPanneauPopup();
  }

  async detailPanneau(data: any){
    await this.popoverC.dismiss();
    this.service.setPanneau(data);
  }

  async retour(){
    await this.popoverC.dismiss();
  }
}
