import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private countries:Country[];
  constructor(private _countryService:CountryService) { }

  ngOnInit() {
    this.readCountries();
  }
  readCountries(){
    this._countryService.readCountry().subscribe(
      data => {
        console.log(data);
        this.countries=data['msg'];
      } ,
      error =>{
        console.log(error);
      }
    )
  }

}
