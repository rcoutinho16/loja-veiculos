import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dealership } from 'src/app/models/dealership.model';
import { DealershipService } from 'src/app/services/dealership.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public dealership: Dealership = {
    "_id": "",
    "address": "",
    "adressGoogleMapsUrl": "",
    "telephone": "",
    "facebookUrl": "",
    "instagramUrl": "",
    "whatsappUrl": "",
    "youtubeUrl": "",
    "twitterUrl": "",
    "mondayToFridayOpening": "",
    "mondayToFridayClosing": "",
    "saturdayOpening": "",
    "saturdayClosing": ""
  };

  public isReadOnly: boolean = true;

  constructor(private router: Router,
              private dealershipService: DealershipService) { }

  ngOnInit(): void {
    this.dealershipService.getDealership().subscribe(
      (response: Dealership) => {
        this.dealership = response;
      }
    );
  }

  public toggleEdit(){
    this.isReadOnly ? this.isReadOnly = false : this.isReadOnly = true;
  }

  public edit(form: any){
    this.dealershipService.updateDealership(this.dealership).subscribe(
      (response: any) => {
        window.location.reload();
      }
    );
  }

}
