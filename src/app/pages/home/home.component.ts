import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    id: number = 1
    photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPe9pNfrShEJZd-9vbLg3pzW7wQuea_pLxg&s"
    cardTitle: string = "Novo homem de ferro anunciado"
    cardDescription: string = "Marvel anuncia novo fime do homem de ferro"

    constructor() { }

    ngOnInit(): void {
    }

}
