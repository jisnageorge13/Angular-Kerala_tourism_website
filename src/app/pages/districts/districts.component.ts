import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jsonData from '../../data/users.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
    selector: 'app-districts',
    standalone: true,
    templateUrl: './districts.component.html',
    styleUrl: './districts.component.scss',
    imports: [FormsModule, CommonModule, NavbarComponent, FooterComponent]
})
export class DistrictsComponent implements OnInit {
  districtName: any = '';
  districtDetails: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.districtName = params.get('districtName');
      this.getDistrictDetails(this.districtName);
    });
  }

  getDistrictDetails(districtName: string): void {
    const district = jsonData.popular_dest.find((dist: any) => dist.name.toLowerCase() === districtName.toLowerCase());
    if (district) {
      this.districtDetails = district;
    }
  }
}