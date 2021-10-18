import { Component, OnInit } from '@angular/core';

import { Dealership } from 'src/app/models/dealership.model';
import { DealershipService } from 'src/app/services/dealership.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  constructor(private dealershipService: DealershipService) { }

  ngOnInit(): void {
    this.dealershipService.getDealership().subscribe(
      (response: Dealership) => {
        this.dealership = response;
      }
    );
  }

}
