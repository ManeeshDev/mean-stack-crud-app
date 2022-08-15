import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private countryService:CountryService) { }

  ngOnInit() {
  }
  newCountry(event:any){
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/createUpdate']);

  }

}
