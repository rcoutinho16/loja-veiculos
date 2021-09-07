import { Component, OnInit } from '@angular/core';

import { Dealership } from 'src/app/models/dealership.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public dealership: Dealership = {
    "adressGoogleMapsUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5713407937596!2d-44.58052791679989!3d-20.068389846766642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7334eaf784437%3A0x112d321547a80b3a!2sRX%20Multimarcas!5e0!3m2!1spt-BR!2sbr!4v1624483226913!5m2!1spt-BR!2sbr",
    "telephone": "(37)3241-5001",
    "facebookUrl": "#",
    "instagramUrl": "https://www.instagram.com/multimarcasrx/",
    "whatsappUrl": "#",
    "youtubeUrl": "#",
    "twitterUrl": "#",
    "mondayToFridayOpening": "08:00",
    "mondayToFridayClosing": "18:00",
    "saturdayOpening": "09:00",
    "saturdayClosing": "12:00",
    "address": "Teste 3"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
