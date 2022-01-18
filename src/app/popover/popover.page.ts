import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  public valide ;
  constructor(
    public mService: ServicesService
  ) { }

  ngOnInit() {
    this.valide=this.mService.valid;
  }

}
