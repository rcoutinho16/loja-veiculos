import { Component, OnInit } from '@angular/core';

import { faWhatsapp, faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Dealership } from 'src/app/models/dealership.model';
import { DealershipService } from 'src/app/services/dealership.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    //icons
    faWhatsapp = faWhatsapp;
    faFacebook = faFacebook;
    faYoutube = faYoutube;
    faInstagram = faInstagram;
    faTwitter = faTwitter;

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
