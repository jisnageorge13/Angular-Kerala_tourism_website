import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as jsonData from '../../data/users.json';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RouterLink, RouterOutlet, FooterComponent, NavbarComponent]
})
export class HomeComponent {

  home_images: any[] = (jsonData as any).home_images;
  popular_dest: any[] = (jsonData as any).popular_dest;
 popular: any;

}
